import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set) => ({
            id: null,
            token: null,
            isAuthenticated: false,
            login: (token) => set({ token, isAuthenticated: true }),
            logout: () => set({ id: null, token: null, isAuthenticated: false }),
            publicRoutes: ['/login', '/register', '/'],
        }),
        {
            name: 'auth-storage',
            getStorage: () => (typeof window !== 'undefined' ? localStorage : null),
        }
    )
)

export default useAuthStore