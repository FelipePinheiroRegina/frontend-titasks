import { Container } from './styles'
import { Header } from '../../components/Header'
import { toast, ToastContainer } from 'react-toastify'
import { TaskCard } from '../../components/TaskCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Task } from '../Home'
import { AxiosError } from 'axios'
import { Comment } from '../../components/Comment'
import { ButtonText } from '../../components/ButtonText'
import { Answer } from '../../components/Answer'
import { useAuth } from '../../hooks/auth'

export interface AnswerProps {
    id: string,
    description: string,
    image: string,
    created_at: string,
    updated_at: string,
    
    user_id: number,
    task_id: number
}

export function DetailsTask() {
    const { refresh } = useAuth()
    const { id } = useParams()
    const [ task, setTask ] = useState<Task>()
    const [ answers, setAnswers ] = useState<AnswerProps[]>([])
    const navigate = useNavigate()

    function handleNavigateBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchTaskAndAnswers(id: string): Promise<void> {
            try {
                const responseTask = await api.get(`/tasks/${id}`)
                setTask(responseTask.data)

                const responseAnswers = await api.get(`/answers/${id}`)
                setAnswers(responseAnswers.data)

            } catch (error: AxiosError | unknown) {
                if (error instanceof AxiosError) {
                  if (error.response) {
                    toast.error(error.response.data.message)
                  } else {
                    toast.error('Erro ao buscar tarefa, contate o adm')
                  }
                } else {
                  toast.error('Erro ao buscar tarefa, contate o adm')
                }    
            }
        }

        if(!id) {
            toast.error('id da tarefa não informado, contate o adiministrador do sistema')
            return
        } 

        fetchTaskAndAnswers(id)
    }, [ id, refresh ])

    return (
        <Container>
            <ToastContainer position='top-center' theme='dark'/>
            <Header/>
            <section className='section'>
                <ButtonText
                    className='back'
                    title='Voltar'
                    onClick={() => handleNavigateBack()}
                />
                { task &&
                    <TaskCard 
                     key={task.id}
                     task={task}
                     itsDetailsPage={true}
                    />
                }
            </section>
            
            { answers.length > 0 &&
                answers.map(answer => (
                    <Answer
                        key={answer.id}
                        answer={answer}
                        itsDetailsPage={true}
                    />
                ))
            }

            <Comment
                task_id={Number(id)}
                status={Boolean(task?.status)}
            />
        </Container>
    )
}