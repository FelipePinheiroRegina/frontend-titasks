import { FiArrowUp, FiPlus } from "react-icons/fi"
import { TiArrowDownThick, TiArrowRightThick  } from "react-icons/ti";

import { Container, Logo, Menu, Search, Content, NewTask, ButtonOptions} from "./styles"

import { HeaderTop } from "../../components/HeaderTop"

import { Input } from "../../components/Input"
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { TaskPreview } from "../../components/TaskPreview"

import { useState, useEffect } from "react"
import { useNavigate }  from "react-router-dom"
import { api } from "../../services/api"

export function Home() {
    const [ tasks, setTasks ] = useState([])

    const stateFilterStatus = sessionStorage.getItem('@filterStatusTitasks') == undefined ? 'Todas' : sessionStorage.getItem('@filterStatusTitasks')
    
    const [ optionSelected, setOptionSelected ] = useState(stateFilterStatus)

    const [ search, setSearch ] = useState([])
    const [ date, setDate ] = useState('')
    const [ countTasks, setCountTasks ] = useState([])
    const [ yourself, setYourself ] = useState(true)

// ABOUT MENU OPTIONS ------------------------------------------
    const [ isMyTasksVisible, setIsMyTasksVisible ] = useState(true)
    const [ isTasksVisible, setIsTasksVisible ] = useState(false);
    const [ isDocumentationsVisible, setIsDocumentationsVisible ] = useState(false)
    const [ isScheduleVisible, setIsScheduleVisible ] = useState(false)
    
    const toggleMyTasks = () => {
        setIsMyTasksVisible(!isMyTasksVisible)

        // Definindo a variavel yourself como true, pois se eu clicar na função toggleMyTasks, eu quero ver sómente as minhas tasks. e fechando a função toggleTasks
        setYourself(!yourself)  
        setIsTasksVisible(false)
    }

    const toggleTasks = () => {
        setIsTasksVisible(!isTasksVisible)
        
        // Definindo a variavel yourself como false, pois se eu clicar na função toggleTasks, eu quero ver as tasks de todos os usuários. e fechando a função toggleMyTasks

        if (yourself == true) {
            setYourself(!yourself)
            setIsMyTasksVisible(false)
        }
    }

    const toggleDocumentations = () => {
        setIsDocumentationsVisible(!isDocumentationsVisible)
    }

    const toggleSchedule = () => {
        setIsScheduleVisible(!isScheduleVisible)
    }

    // ABOUT NAVIGATION MENU
    function handleDocumentations() {
        navigate('documentations')
    }

    function handleSchedule() {
        navigate('/schedule')
    }
// -------------------------------------------------------------
    
    const navigate = useNavigate()

    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleOptionSelected(OptionName) {
        sessionStorage.setItem('@filterStatusTitasks', OptionName)
        setOptionSelected(OptionName)
    }

    function handleShowTask(id) {
        navigate(`/details/${id}`)
    }
    
    useEffect(() => {
        async function fetchTasksSelected() {
            const response = await api.get(`/tasks/${yourself}?title=${search}&status=${optionSelected}&date=${date}`)

            setTasks(response.data)
        } 
        
        fetchTasksSelected()
    }, [optionSelected, search, date, yourself])

    useEffect(() => {
        async function fetchTasks() {
            const response = await api.get(`/tasks/${yourself}?`)

            if(optionSelected !== "Todas") {
                const responseWithStatus = await api.get(`/tasks/${yourself}?status=${optionSelected}`)
                setTasks(responseWithStatus.data)

            } else {
                setTasks(response.data)
            }

            setCountTasks(response.data) 
        }

        fetchTasks()
    }, [yourself])

    // Funcionalidade de contar quantas tarefas existe em: Todo, Fazer, Fazendo, Feito
    const doo   = Array()
    const doing = Array()
    const done  = Array()
    const all   = Array()
   
    countTasks.forEach(task => {
        if (task.status == 'Fazer') {
            doo.push(task)
        } else if (task.status == 'Fazendo') {
            doing.push(task)
        } else {
            done.push(task)
        }

        all.push(task)
    })
    
    return (
        <Container>
        <Logo className="Logo">
            <h1>TI TASKS</h1>
        </Logo>

        <HeaderTop className="headertop"/>

        <Menu>
            <div className="menuOptions">
                <ButtonOptions 
                    onClick={toggleMyTasks}
                    className="buttonOpen"
                >
                    <span>
                        Minhas tarefas 
                    
                        {isMyTasksVisible ? 
                            <TiArrowDownThick/> : 
                            <TiArrowRightThick/>}
                    </span>

                </ButtonOptions>
                            
                <div 
                    className={`
                        myTasks ${isMyTasksVisible ? 'visible' : ''}`} 
                >

                    <input type="date" onChange={e => setDate(e.target.value)}/>
                    <ul>
                        <li>
                            <ButtonText
                                title={`Todas(${all.length})`}
                                onClick={() => handleOptionSelected('Todas')}
                                isactive={optionSelected == 'Todas'}
                            />
                        </li>
                        <li>
                            <ButtonText
                                title={`Fazer(${doo.length})`}
                                onClick={() => handleOptionSelected('Fazer')}
                                isactive={optionSelected == 'Fazer'}
                            />
                        </li>
                        <li>
                            <ButtonText
                                title={`Fazendo(${doing.length})`}
                                onClick={() => handleOptionSelected('Fazendo')}
                                isactive={optionSelected == 'Fazendo'}
                            />
                        </li>
                        <li>
                            <ButtonText
                                title={`Feito(${done.length})`}
                                onClick={() => handleOptionSelected('Feito')}
                                isactive={optionSelected == 'Feito'}
                            />
                        </li>
                    </ul>
                </div>

                <ButtonOptions 
                    onClick={toggleTasks}
                    className="buttonOpen"
                >
                    <span>
                        Todas tarefas 
                    
                        {isTasksVisible ? 
                            <TiArrowDownThick/> : 
                            <TiArrowRightThick/>}
                    </span>

                </ButtonOptions>
                            
                <div 
                    className={`
                        options ${isTasksVisible ? 'visible' : ''}`} 
                >

                    <input type="date" onChange={e => setDate(e.target.value)}/>
                    <ul>

                        <li>
                            <ButtonText
                                title={`Todas(${all.length})`}
                                onClick={() => handleOptionSelected('Todas')}
                                isactive={optionSelected == 'Todas'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Fazer(${doo.length})`}
                                onClick={() => handleOptionSelected('Fazer')}
                                isactive={optionSelected == 'Fazer'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Fazendo(${doing.length})`}
                                onClick={() => handleOptionSelected('Fazendo')}
                                isactive={optionSelected == 'Fazendo'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Feito(${done.length})`}
                                onClick={() => handleOptionSelected('Feito')}
                                isactive={optionSelected == 'Feito'}
                            />
                        </li>
                    </ul>
                </div>

                <ButtonOptions
                    onClick={toggleDocumentations}
                    className="buttonOpen hidden"
                >
                    <span>
                        Documentações
                    
                        {isDocumentationsVisible ? 
                            <TiArrowDownThick/> : 
                            <TiArrowRightThick/>}
                    </span>
                </ButtonOptions>

                <div
                    className={`
                        documentations ${isDocumentationsVisible ? 'visible' : ''}`}
                    >

                    <ul>
                        <li> 
                            <ButtonText 
                                title="Vizualizar documentações"
                                onClick={handleDocumentations}
                            />             
                        </li>
                    </ul>

                </div>

                <ButtonOptions 
                    onClick={toggleSchedule}
                    className="buttonOpen hidden"
                >
                    <span>
                        Agenda
                    
                        {isScheduleVisible ? 
                            <TiArrowDownThick/> : 
                            <TiArrowRightThick/>}
                    </span>
                </ButtonOptions>

                <div
                    className={`
                        schedule ${isScheduleVisible ? 'visible' : ''}`}
                    >

                    <ul>
                        <li> 
                            <ButtonText 
                                title="Vizualizar minha agenda"
                                onClick={handleSchedule}
                            />             
                        </li>
                    </ul>

                    </div>           
                </div>
         </Menu>

         <Search>
             <Input 
                 onChange={e => setSearch(e.target.value)}
                 placeholder="Pesquise pelo título"
                 />
         </Search>

         <Content>
            <h2>Tarefas</h2>

            {(isMyTasksVisible || isTasksVisible) && tasks.length > 0 && tasks.map(task => (
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
                        isTrue={task.status === "Feito"}
                        onClick={() => handleShowTask(task.id)}
                    />
            ))}
            
            <button
                className="scrollTop"
                onClick={handleScrollTop}
            >
                <FiArrowUp/>
            </button>
            
         </Content>

         <NewTask to="/create" className="NewTask">
             <FiPlus/>
             <span>
                Criar Tarefa
            </span>
         </NewTask>

         <Header/>
     </Container>
    )
}