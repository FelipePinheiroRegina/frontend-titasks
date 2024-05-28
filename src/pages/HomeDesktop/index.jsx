import { FiPlus } from "react-icons/fi"

import { Container, Logo, Search, Menu, Content, NewTask } from "./styles"

import { HeaderTop } from "../../components/HeaderTop"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { TaskPreview } from "../../components/TaskPreview"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function HomeDesktop() {
    const [ title, setTitle ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ tasks, setTasks ] = useState([])
    
    const navigate = useNavigate()

    function handleChangeStatus(value) {
        if(value == 'Todos'){
          return setStatus('')  
        }
        
        setStatus(value)
    }

    function handleShowTask(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTasks() {
            const response = await api.get(`/tasks?title=${title}&status=${status}`)

            setTasks(response.data)
        }

        fetchTasks()
    }, [title, status])
    
    return (
        <Container>
           <Logo>
                <h1>TI TASKS</h1>
           </Logo>

            <HeaderTop/>

            <Menu>
                <li>
                    <ButtonText 
                        title="Todos" 
                        onClick={() => handleChangeStatus('Todos')}
                        isactive={status == ''}
                    />
                </li>

                <li>
                    <ButtonText 
                        title="Fazer"
                        onClick={() => handleChangeStatus('Fazer')}
                        isactive={status == 'Fazer'}
                    />
                </li>

                <li>
                    <ButtonText 
                        title="Fazendo"
                        onClick={() => handleChangeStatus('Fazendo')}
                        isactive={status == 'Fazendo'}
                    />
                </li>

                <li>
                    <ButtonText 
                        title="Feito"
                        onClick={() => handleChangeStatus('Feito')}
                        isactive={status == 'Feito'}
                    />
                </li>
            </Menu>

            <Search>
                <Input 
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Pesquise pelo título"
                    />
            </Search>

            <Content>
                <h2>Tarefas</h2>

                { tasks &&
                    tasks.map(task => (
                        <TaskPreview
                            key={String(task.id)}
                            data={{
                                id: task.id,
                                title: task.title,
                                status: task.status,
                                updated_at: task.updated_at,
                                avatar: task.avatar,
                                name: task.name,
                                date: task.created_at   
                            }}
                            onClick={() => handleShowTask(task.id)}
                        />
                    ))

                }
               
            </Content>

            <NewTask to="/create">
                <FiPlus/>
                Criar Tarefa
            </NewTask>
        </Container>
    )
}