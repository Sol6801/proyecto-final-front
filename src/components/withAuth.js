import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '../store/useAuthStore.js'

const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const [isLoading, setIsLoading] = useState(true)
        const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
        const userToken = useAuthStore((state) => state.token)

        const router = useRouter()

        useEffect(() => {
            const storedToken = localStorage.getItem('auth-storage');
            if (!storedToken && !isAuthenticated) {
                // Redirigir al login si no hay token y no está autenticado
                router.replace('/login');
            } else {
                setIsLoading(false)
            }
        }, [isAuthenticated])

        if (isLoading) {
            return <div>Cargando...</div> // O tu componente de carga preferido
        }

        if (!isAuthenticated) {
            return <div>no estas autenticado eyyyy</div>
        }

        return <WrappedComponent {...props} userToken={userToken} />
    }

    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    WithAuth.displayName = `WithAuth(${displayName})`

    return WithAuth
}

export default withAuth