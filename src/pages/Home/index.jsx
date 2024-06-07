import { FiArrowUp } from "react-icons/fi"

import { Container, Menu, Content } from "./styles"

import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { TaskPreview } from "../../components/TaskPreview"
import { HeaderTop } from "../../components/HeaderTop"

import { useState, useEffect } from "react"
import { useNavigate }  from "react-router-dom"
import { api } from "../../services/api"

export function Home() {
    const [ tasks, setTasks ] = useState([])
    const [ optionSelected, setOptionSelected ] = useState([])
    const [ search, setSearch ] = useState([])
    const [ date, setDate ] = useState('')
    
    const navigate = useNavigate()

    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleOptionSelected(OptionName) {
        if(OptionName == 'Todos') {
            return setOptionSelected([])
        }

        setOptionSelected(OptionName)
    }

    function handleShowTask(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        
        async function fetchTasksSelected() {
            const response = await api.get(`/tasks?title=${search}&status=${optionSelected}&date=${date}`)

            setTasks(response.data)
        } 
        
        fetchTasksSelected()
    }, [optionSelected, search, date])

    useEffect(() => {
        async function fetchTasks() {
            const response = await api.get('/tasks')

            setTasks(response.data)
        }

        fetchTasks()
    }, [])

    return (
        <Container>
            <HeaderTop/>

            <Content>
                <Menu>
                    <input type="date" onChange={e => setDate(e.target.value)}/>

                    <ul>
                        <li>
                            <ButtonText 

                                title="Todos"
                                onClick={() => handleOptionSelected("Todos")}
                                isactive={optionSelected.length === 0}
                            />
                        </li>

                        <li>
                            <ButtonText 
                                title="Fazer"
                                onClick={() => handleOptionSelected(["Fazer"])}
                                isactive={optionSelected.includes("Fazer")}
                            />
                        </li>

                        <li>
                            <ButtonText 
                                title="Fazendo"
                                onClick={() => handleOptionSelected(["Fazendo"])}
                                isactive={optionSelected.includes("Fazendo")}
                            />
                        </li>

                        <li>
                            <ButtonText 
                                title="Feito" 
                                onClick={() => handleOptionSelected(["Feito"])}
                                isactive={optionSelected.includes("Feito")}
                            />
                        </li>
                    </ul>
                </Menu>
            
                <Input 
                    placeholder = "Pesquisar pelo título"
                    onChange={e => setSearch(e.target.value)}
                />

                {
                    tasks.map(task => (
                        <TaskPreview key={String(task.id)}
                            data={{
                                id: task.id,
                                title: task.title,
                                avatar: task.avatar,
                                name: task.name,
                                date: task.created_at,
                                status: task.status,
                                updated_at: task.updated_at
                            }}
                            onClick={() => handleShowTask(task.id)}
                        />
                           
                    ))
                }

                <button
                    className="scrollTop"
                    onClick={handleScrollTop}
                >
                    <FiArrowUp/>
                </button>
                
            </Content>

            <Header/>
        </Container>
    )
}