import { Container } from "./styles"
import { FiMoreHorizontal } from "react-icons/fi"
import { ButtonText } from "../ButtonText"
import { useState } from "react"
import { Image } from "../Image"
import { Task } from "../../pages/Home"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../Avatar"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { api } from "../../services/api"
import { RxOpenInNewWindow } from "react-icons/rx"
import { useAuth } from "../../hooks/auth"
import { format } from "date-fns"
import { ptBR }from 'date-fns/locale/pt-BR'
import { AxiosError } from "axios"

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
    task: Task
    itsDetailsPage?: boolean
}

export function TaskCard({ task, itsDetailsPage = false }: Props) {
    const { fetchUpdatesAfterHandleUser } = useAuth()
    const [ openModalTaskCard, setOpenModalTaskCard ] = useState<boolean>(false)
    const [ openImage, setOpenImage ] = useState<boolean>(false)
    const [ user, setUser ] = useState<UserProps>()


    const utcDate = new Date(task.created_at + "Z")
    utcDate.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })

    const dateFormat = format(utcDate, "dd 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })
    
    const navigate = useNavigate()
    
    function handleOpenModalTaskCard() {
        setOpenModalTaskCard(!openModalTaskCard)
    }

    function handleDetailsTask(id: number) {
        navigate(`/details/${id}`)
    }

    function handleOpenImage() {
        setOpenImage(!openImage)
    }

    async function handleFinishedTask(task_id: number) {
        try {  
            await api.patch(`/tasks/${task_id}`)

            toast.success('Tarefa finaliza com sucesso!')
            fetchUpdatesAfterHandleUser()

        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              if (error.response) {
                toast.error(error.response.data.message)
              } else {
                toast.error('Erro ao finalizar tarefa, contate o adm')
              }
            } else {
              toast.error('Erro ao finalizar tarefa, contate o adm')
            }    
        }
    }

    async function handleDeleteTask(task_id: number) {
        try {  
            await api.delete(`/tasks/${task_id}`)

            toast.success('Tarefa deletada com sucesso!!')
            fetchUpdatesAfterHandleUser()

        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              if (error.response) {
                toast.error(error.response.data.message)
              } else {
                toast.error('Erro ao deletar tarefa, contate o adm')
              }
            } else {
              toast.error('Erro ao deletar tarefa, contate o adm')
            }    
        }
    }

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

        fetchAvatar(task.user_id)
    }, [])
    
    return (
        <Container $isFinished={Boolean(task.status)}>
            <Image 
                url={task.image}
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
                        Aberto {dateFormat}
                    </small>

                    <small className="status">
                        {Boolean(task.status) === false ? 'Pendente' : 'Finalizada'}
                    </small>

                    <div className="modal-task-card" data-modal-task-card={openModalTaskCard}>
                        <FiMoreHorizontal onClick={() => handleOpenModalTaskCard()}/>

                        { Boolean(task.status) === true &&
                            <ul>
                                <li>
                                    <ButtonText 
                                        title="Visualizar"
                                        onClick={() => handleDetailsTask(task.id)}
                                    />
                                </li>
                            </ul>
                        }

                        { Boolean(task.status) === false &&
                            <ul>
                                <li>
                                    <ButtonText 
                                        title="Responder"
                                        onClick={() => handleDetailsTask(task.id)}
                                    />
                                </li>
                                
                                {/*<li><ButtonText title="Atualizar tarefa"/></li>*/}
                                <li>
                                    <ButtonText 
                                        title="Finalizar"
                                        onClick={() => handleFinishedTask(task.id)}
                                    />
                                </li>
                                
                                <li>
                                    <ButtonText 
                                        title="Excluir"
                                        onClick={() => handleDeleteTask(task.id)}
                                    />
                                </li>
                            </ul>
                        }
                        
                    </div>
                </div>
            </div>

            <h3>
                {task.title}
            </h3>

            <p>
                {task.description}
            </p>

            { task.image && itsDetailsPage === true &&
                <RxOpenInNewWindow 
                    className="openImage"
                    onClick={() => handleOpenImage()}
                />
            }
        </Container>
    )
}