import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { AxiosError } from "axios"

import { api } from "../services/api"

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProvider {
    children: ReactNode
}

interface User {
    id: number,
    name: string,
    email: string,
    avatar: string | null,
    role: 'ti' | 'customer'
}

interface PropsUpdate {
    name?: string,
    email?: string,
    oldPassword?: string,
    newPassword?: string,
    avatar?: string,
}

interface Data {
    user?: User
    token?: string 
}

// Definição da interface de dados do contexto de autenticação
interface AuthContextData {
    signIn: (email: string, password: string, toast: any) => Promise<void>;
    logOut: () => void;
    updateProfile: (data: { userUpdate: PropsUpdate; avatarFile?: File, toast: any }) => Promise<void>;
    user?: User
    fetchUpdatesAfterHandleUser: () => void
    refresh: boolean
}

function AuthProvider({ children }: AuthProvider) {
    const [ data, setData ] = useState<Data | {token?: string}>({})
    const [ user, setUser ] = useState<User>()
    const [ refresh, setRefresh ] = useState<boolean>(false)

    async function signIn(email: string, password: string, toast: any): Promise<void>  {
        try {
            const res = await api.post('/sessions', {email, password})
            const { user, token }: Data = res.data
            
            toast.loading('Checando no banco...')
            setTimeout(() => {
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setData({user, token})
                setUser(user)

                sessionStorage.setItem('@titasks:user', JSON.stringify(user))
                sessionStorage.setItem('@titasks:token', String(token))
            }, 3000)
            
        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              if (error.response) {
                toast.error(error.response.data.message)
              } else {
                toast.error('Impossível autenticar')
              }
            } else {
              toast.error('Ocorreu um erro inesperado')
            }
        }
    }

    async function updateProfile({userUpdate, avatarFile, toast}: {userUpdate: PropsUpdate, avatarFile?: File, toast: any}): Promise<void> {
        try {
            if(!user) return

            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append('avatar', avatarFile)
                const response = await api.patch('/users/avatar', fileUploadForm)
                userUpdate.avatar = response.data.avatar
            } 

            await api.put('/users', userUpdate) 
            toast.success('Atualização bem sucedida')
            
            user.name   = userUpdate.name   ?? user.name
            user.email  = userUpdate.email  ?? user.email
            user.avatar = userUpdate.avatar ?? user.avatar
            
            sessionStorage.setItem("@titasks:user", JSON.stringify(user))
            setData({user, token: data.token})
           
        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              if (error.response) {
                toast.error(error.response.data.message)
              } else {
                toast.error('Impossível autenticar')
              }
            } else {
              toast.error('Ocorreu um erro inesperado')
            }
        }
    }

    function logOut() {
        sessionStorage.removeItem("@titasks:user")
        sessionStorage.removeItem("@titasks:token")
    
        setData({})
        setUser(undefined)
    }

    function fetchUpdatesAfterHandleUser() {
        setRefresh(!refresh)
    }

    useEffect(() => {
        const user: string  | null = sessionStorage.getItem('@titasks:user')
        const token: string | null = sessionStorage.getItem('@titasks:token')
        
        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })

            setUser(JSON.parse(user))
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            logOut,
            updateProfile,
            user,
            fetchUpdatesAfterHandleUser,
            refresh
        }}>

            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context
}

export { AuthProvider, useAuth }