import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { ChangeEvent, FormEvent } from "react"
import { FiCamera, FiArrowLeft } from "react-icons/fi"
import { toast, ToastContainer } from "react-toastify"

import { Container, Form, Avatar, Bar } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const avatarUrl: string = user?.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar ] = useState<string>(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState<File | undefined>(undefined)
    
    const [ name, setName ] = useState<string | undefined>(user?.name)
    const [ email, setEmail ] = useState<string | undefined>(user?.email)
    const [ newPassword, setNewPassword ] = useState<string>("")
    const [ oldPassword, setOldPassword ] = useState<string>("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdate(event: FormEvent) {
        event.preventDefault()

        const userUpdate = {
            name,
            email,
            oldPassword,
            newPassword
        }
       

        await updateProfile({userUpdate, avatarFile, toast})
    }

    async function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            setAvatarFile(file)
    
            const imagePreview = URL.createObjectURL(file)
            setAvatar(imagePreview);
        }
    }

    return (
        <Container>
            <ToastContainer position="top-center" theme="dark"/>
            <Bar>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                </button>
            </Bar>

            <Form onSubmit={(event) => handleUpdate(event)}>
                <Avatar>
                    <img src={avatar} alt={user?.name} />

                    <label htmlFor="avatar">
                        <FiCamera/>

                        <input
                            id="avatar" 
                            type="file" 
                            onChange={e => handleChangeAvatar(e)}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder='Nome'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder='Email'
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder='Nova Senha'
                    type='password'
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button 
                    title='Salvar'
                    type="submit"
                />
            </Form>
        </Container>
    )
}