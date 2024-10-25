import { Container, AuthorInfo} from "./styles"
import Logo from '../../assets/logo.png'
import { FiLogOut } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"
import { Avatar } from "../Avatar"
import { useNavigate } from "react-router-dom"
import { PiPencil } from "react-icons/pi"
import { useState } from "react"

export function Header() {
    const { logOut, user } = useAuth()
    const [ openModal, setOpenModal ] = useState<boolean>(false)

    
    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/')
        logOut()
    }

    function handleProfile() {
        navigate('/profile')
    }

    function handleOpenModal() {
        setOpenModal(!openModal)
    }

    return (
        <Container>
             <img src={ Logo } alt="Logo tipo titasks" />

            <AuthorInfo data-modal={openModal}>
                <div className="info">
                    <Avatar
                        url={user?.avatar}
                        onClick={() => handleOpenModal()}
                    />
                    
                    <div>
                        <p>Bem-vindo,</p>
                        <strong>{user?.name}</strong>
                        <small>
                            {user?.role}
                        </small>
                    </div>
                </div>

                <div className="modal">
                    <ul>
                        <li onClick={() => handleProfile()}>
                            <PiPencil/> 
                            Alterar informaçõs
                        </li>
                        
                        <li onClick={() => handleLogOut()}>
                            <FiLogOut/> 
                            Sair
                        </li>
                    </ul>
                </div>
            </AuthorInfo>
        </Container>
    )
}