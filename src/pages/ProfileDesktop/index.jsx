import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Container, Bar, Form, Avatar } from "./styles"

import { ButtonBack } from "../../components/ButtonBack"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

import { Link } from "react-router-dom"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom"

export function ProfileDesktop() {
    const { user, updateProfile}  = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)

    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)   
    const [ oldPassword, setOldPassword ] = useState('')   
    const [ newPassword, setNewPassword ] = useState('') 

    const navigate = new useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdate() {
        const updated = {
            name,
            email,
            oldPassword,
            newPassword
        }

        const userUpdated = Object.assign(user, updated)

        await updateProfile({user: userUpdated, avatarFile})
    }

    async function handleChangeAvatar(event) {
        const File = event.target.files[0]
        setAvatarFile(File)

        const imagePreview = URL.createObjectURL(File)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <Bar>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </Bar>
            
            <Form>
                <Avatar>
                    <img src={avatar} alt={user.name}/>


                    <label htmlFor="avatar"> 
                        <FiCamera/>
                        
                        <input
                            id="avatar"  
                            type="file" 
                            onChange={event => handleChangeAvatar(event)}
                        />
                    </label>
                    
                   
                </Avatar>
                
                <Input
                    type="text" 
                    placeholder="Nome" 
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="text" 
                    placeholder="Email" 
                    icon={FiMail}
                    value={email}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    type="password" 
                    placeholder="Senha atual" 
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    type="password" 
                    placeholder="Nova Senha" 
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button 
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>
        </Container>
    )
}