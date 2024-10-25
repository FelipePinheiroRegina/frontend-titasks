import { Container, Content, Filters, Section} from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { TaskCard } from '../../components/TaskCard'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { AxiosError } from 'axios'
import { useAuth } from '../../hooks/auth'
import { CaseNotTasks } from '../../components/CaseNotTasks'

export interface Task {
    id: number,
    title: string,
    description: string,
    status: boolean,
    image: string,
    created_at: string,
    updated_at?: string,
    user_id: number,
}

export function Home() {
    const { refresh } = useAuth()
    const [ tasks, setTasks     ] = useState<Task[]>([])
    const [ status, setStatus   ] = useState<boolean>(false)
    const [ search, setSearch   ] = useState<string>('')
    const navigate = useNavigate()

    function handleCreateTask() {
        navigate('/create')
    }

    function handleChangeStatus(option: boolean) {
        setStatus(option)
    }

    useEffect(() => {
        async function fetchTasks() {
            try {
                let respose: any;
                if(search) {
                    respose = await api.get(`/tasks?status=${status}&search=${search}`)
                } else {
                    respose = await api.get(`/tasks?status=${status}`)
                }

                setTasks(respose.data)

            } catch (error: AxiosError | unknown) {
                if (error instanceof AxiosError) {
                  if (error.response) {
                    toast.error(error.response.data.message)
                  } else {
                    toast.error('Erro ao buscar tarefas')
                  }
                } else {
                  toast.error('Erro ao buscar tarefas')
                }
            }
        }
        
        fetchTasks()
    }, [ status, search, refresh ])

    return (
        <Container>
            <ToastContainer position='top-center' theme='dark'/>
            <Header/>
            
            <Content>
                <Filters>
                    <div className='container-input'>
                        <Input
                            placeholder='Pesquisar'
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    
                    
                    <ButtonText
                        className='noneBorder'
                        title='Pendentes'
                        isActive={status === false}
                        onClick={() => handleChangeStatus(false)}
                    />

                    <ButtonText
                        className='noneBorder'
                        title='Finalizadas'
                        isActive={status === true}
                        onClick={() => handleChangeStatus(true)}
                    />

                    <ButtonText
                        title='Abrir nova tarefa'
                        onClick={() => handleCreateTask()}
                    />
                </Filters>

                <Section>
                    { 
                    tasks && tasks.map(task => (
                        <TaskCard 
                            key={String(task.id)}
                            task={task}
                        />
                    ))
                    }

                    { tasks.length === 0 &&
                        <CaseNotTasks/>
                    }
                </Section>
            </Content>
        </Container>
    )
}
