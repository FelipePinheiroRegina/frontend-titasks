import { Container } from "./styles"
import { useState } from "react"
import { Image } from "../Image"
import { Avatar } from "../Avatar"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { RxOpenInNewWindow } from "react-icons/rx"
import { AnswerProps } from "../../pages/DetailsTask"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale/pt-BR"

interface UserProps {
    id: number,
    name: string,
    email: string,
    password: string,
    avatar: string,
    role: string,
    created_at: string,
    updated_at: string
}

interface Props {
    answer: AnswerProps
    itsDetailsPage?: boolean
}

export function Answer({answer, itsDetailsPage = false}: Props) {
    const [ openImage, setOpenImage ] = useState<boolean>(false)
    const [ user, setUser ] = useState<UserProps>()
     
    function handleOpenImage() {
        setOpenImage(!openImage)
    }

    const utcDate = new Date(answer.created_at + "Z")
    utcDate.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })

    const dateFormat = format(utcDate, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    useEffect(() => {
        async function fetchAvatar(user_id: number): Promise<void> {
            try {  
                const response = await api.get(`/users/${user_id}`)
                setUser(response.data)

            } catch (err) {
                console.error(err)
                toast.error('erro ao buscar avatar, contate o adm do sistema')
            }
        }

        fetchAvatar(answer.user_id)
    }, [])
    
    return (
        <Container>
            <Image 
                url={answer.image}
                modalIsOpen={openImage}
                setOpenImage={setOpenImage}
            />

            <div className="container-header">
                <div className="image-name">
                    <Avatar
                        url={user?.avatar}
                    />

                    <div>
                        <strong>{user?.name}</strong >
                        <small>{user?.role}</small>
                    </div>
                </div>
                
                <div className="details">
                    <small>
                        Respondido {dateFormat}
                    </small>
                </div>
            </div>

            <p>
                {answer.description}
            </p>

            { answer.image && itsDetailsPage === true &&
                <RxOpenInNewWindow 
                    className="openImage"
                    onClick={() => handleOpenImage()}
                />
            }
        </Container>
    )
}