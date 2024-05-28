import { Container, Avatar, Logout } from "./styles"

import { FiLogOut } from "react-icons/fi"

import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { useNavigate } from "react-router-dom"

export function HeaderTop() {
    const { logOut, user, setOptionSelectedHeader } = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        logOut()
    }

    function handleChangeOptionSelect() {
        setOptionSelectedHeader('profile')
    }

    return (
        <Container>
            <Avatar>
                <Link to="/profile" onClick={handleChangeOptionSelect}>
                    <img src={avatarUrl} alt={user.name} />
                </Link>
            
                <div>
                    <p>Bem-vindo,</p>
                    <strong>{user.name}</strong>
                </div>
            </Avatar>

            <Logout>
                <FiLogOut onClick={handleLogOut}/>
            </Logout>
        </Container>
    )
}