import { atom } from 'nanostores';

export type UserRole = 'guest' | 'user' | 'admin';

export interface User {
    email: string;
    name: string;
    role: UserRole;
}

// Initial state from localStorage if available
const savedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('user') : null;
const initialUser: User | null = savedUser ? JSON.parse(savedUser) : null;

export const $user = atom<User | null>(initialUser);

export function login(email: string, role: UserRole = 'user') {
    const newUser: User = {
        email,
        name: email.split('@')[0],
        role,
    };
    $user.set(newUser);
    if (typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(newUser));
    }
}

export function logout() {
    $user.set(null);
    if (typeof localStorage !== 'undefined') {
        localStorage.removeItem('user');
    }
}
