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
