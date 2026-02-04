import { map } from 'nanostores';

export interface CartItem {
    id: string;
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    color?: string;
    size?: string;
}

export const $cart = map<Record<string, CartItem>>({});

// Load cart from localStorage
if (typeof localStorage !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        try {
            const parsed = JSON.parse(savedCart);
            if (Array.isArray(parsed)) {
                // Migrate array to object format
                const migrated: Record<string, CartItem> = {};
                parsed.forEach((item: any) => {
                    const id = item.id || `migrated-${Math.random()}`;
                    migrated[id] = {
                        id: id,
                        productId: item.productId || item.id,
                        title: item.title || item.name || "Product",
                        price: item.price || 0,
                        quantity: item.quantity || 1,
                        image: item.image || "",
                        color: item.color,
                        size: item.size,
                    };
                });
                $cart.set(migrated);
            } else {
                $cart.set(parsed);
            }
        } catch (e) {
            console.error("Failed to parse cart", e);
        }
    }
}

// Subscribe to changes and save to localStorage
$cart.subscribe((cart) => {
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});

export function addToCart(item: Omit<CartItem, 'quantity' | 'id'> & { id: string }) {
    const cart = $cart.get();
    // Create a unique ID for the cart item based on product ID and variants
    const cartItemId = `${item.id}-${item.color || 'default'}-${item.size || 'default'}`;
    const existingItem = cart[cartItemId];

    if (existingItem) {
        $cart.setKey(cartItemId, {
            ...existingItem,
            quantity: existingItem.quantity + 1,
        });
    } else {
        $cart.setKey(cartItemId, {
            ...item,
            productId: item.id, // Store original product ID
            id: cartItemId, // Use composite ID for the cart item
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
