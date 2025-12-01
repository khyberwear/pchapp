import { map } from 'nanostores';

export interface CartItem {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
}

export const $cart = map<Record<string, CartItem>>({});

// Load cart from localStorage
if (typeof localStorage !== 'undefined') {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        $cart.set(JSON.parse(savedCart));
    }
}

// Subscribe to changes and save to localStorage
$cart.subscribe((cart) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});

export function addToCart(item: Omit<CartItem, 'quantity'>) {
    const cart = $cart.get();
    const existingItem = cart[item.id];

    if (existingItem) {
        $cart.setKey(item.id, {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        });
    } else {
        $cart.setKey(item.id, {
            ...item,
            quantity: 1,
        });
    }
}

export function removeFromCart(itemId: string) {
    const cart = $cart.get();
    const { [itemId]: _, ...rest } = cart;
    $cart.set(rest);
}

export function clearCart() {
    $cart.set({});
}

export function updateQuantity(itemId: string, quantity: number) {
    const cart = $cart.get();
    const existingItem = cart[itemId];

    if (existingItem) {
        if (quantity <= 0) {
            removeFromCart(itemId);
        } else {
            $cart.setKey(itemId, {
                ...existingItem,
                quantity: quantity,
            });
        }
    }
}

export function increaseQuantity(itemId: string) {
    const cart = $cart.get();
    const existingItem = cart[itemId];

    if (existingItem) {
        $cart.setKey(itemId, {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        });
    }
}

export function decreaseQuantity(itemId: string) {
    const cart = $cart.get();
    const existingItem = cart[itemId];

    if (existingItem) {
        if (existingItem.quantity > 1) {
            $cart.setKey(itemId, {
                ...existingItem,
                quantity: existingItem.quantity - 1,
            });
        } else {
            removeFromCart(itemId);
        }
    }
}
