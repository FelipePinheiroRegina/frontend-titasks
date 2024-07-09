import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

import { FiCamera, FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi"

import { Container, Head, Form, Avatar, Bar } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)
    
    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ newPassword, setNewPassword ] = useState("")
    const [ oldPassword, setOldPassword ] = useState("")

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
        alert('Atualização feita com sucesso!')
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
                    <img src={avatar} alt={user.name} />

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
                    icon={FiUser}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder='Email'
                    type='text'
                    icon={FiMail}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}
                    onChange={e => setOldPassword(e.target.value)}
                />

                <Input
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                    onChange={e => setNewPassword(e.target.value)}
                />

                <Button 
                    title='Salvar'
                    onClick={handleUpdate}
                />
            </Form>
                
            <Head>
                <Header/>
            </Head>
        </Container>
    )
}