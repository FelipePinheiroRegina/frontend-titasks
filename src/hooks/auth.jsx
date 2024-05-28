import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [ data, setData ] = useState({})
    const [ optionSelectedHeader, setOptionSelectedHeader ] = useState('home')
    
    async function signIn({email, password}) {
        try {
            const res = await api.post('/session', {email, password})
            const { user, token } = res.data

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({user, token})

            localStorage.setItem('@titasks:user', JSON.stringify(user))
            localStorage.setItem('@titasks:token', token)
          
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Impossível autenticar')
            }
        }
    }

    async function updateProfile({user, avatarFile}) {
        try {
            if(avatarFile) {
                const fileUploadForm = new FormData()
                fileUploadForm.append('avatar', avatarFile)
                const response = await api.patch('/user/avatar', fileUploadForm)
                user.avatar = response.data.avatar
            } 

            await api.put('/user', user) 
            localStorage.setItem("@titasks:user", JSON.stringify(user))
            
            setData({user, token: data.token})
            alert('Perfil atualizado com sucesso!')
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert ('Não foi possível atualizar seu perfil')
            } 
        }
    }

    function logOut() {
        localStorage.removeItem("@titasks:user")
        localStorage.removeItem("@titasks:token")
        
        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem('@titasks:user')
        const token = localStorage.getItem('@titasks:token')
        
        if(user && token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            logOut,
            updateProfile,
            optionSelectedHeader,
            setOptionSelectedHeader,
            user: data.user
        }}>

            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }