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
    const [ myTasks, setMyTasks ] = useState(false)

    const stateFilterStatus = sessionStorage.getItem('@filterStatusTitasks') == undefined ? 'Todas' : sessionStorage.getItem('@filterStatusTitasks')
    
    const [ optionSelected, setOptionSelected ] = useState(stateFilterStatus)

    const [ search, setSearch ] = useState([])
    const [ date, setDate ] = useState('')
    const [ countTasks, setCountTasks ] = useState([])
 
    function handleMyTasks(state) {
        setMyTasks(!state)
    }

// ABOUT MENU OPTIONS ------------------------------------------
    const [ isTasksVisible, setIsTasksVisible ] = useState(true)
    const [ isDocumentationsVisible, setIsDocumentationsVisible ] = useState(false)
    const [ isScheduleVisible, setIsScheduleVisible ] = useState(false)
    
    const toggleTasks = () => {
        setIsTasksVisible(!isTasksVisible)
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
            const response = await api.get(`/tasks?title=${search}&status=${optionSelected}&date=${date}&mytasks=${myTasks}`)
            setTasks(response.data.formattedResponse)
        } 
        
        fetchTasksSelected()
    }, [optionSelected, search, date, myTasks])

    useEffect(() => {
        async function fetchTasks() {
            const response = await api.get(`/tasks`) 
            setTasks(response.data.formattedResponse)
        }
        
        fetchTasks()
    }, [])

    // Funcionalidade de contar quantas tarefas existe em: Todo, Fazer, Fazendo, Feito

    // Variaveis para saber a contagem de tarefas de todo mundo
    const [ all, setAll ] = useState(0)
    const [ doo, setDoo ] = useState(0)
    const [ doing, setDoing ] = useState(0)
    const [ done, setDone ] = useState(0)

    // Variaveis para saber a contagem de tarefas do usuario de acordo com o id
    const [ allUser_id, setAllUser_id ] = useState(0)
    const [ dooUser_id, setDooUser_id ] = useState(0)
    const [ doingUser_id, setDoingUser_id ] = useState(0)
    const [ doneUser_id, setDoneUser_id ] = useState(0)

    useEffect(() => {
        async function fetchTasksForCount() {
            const response = await api.get(`/tasks`) 
            setAll(response.data.countAllTasks.total)
            setDoo(response.data.countAllTasksDo.fazer)
            setDoing(response.data.countAllTasksDoing.fazendo)
            setDone(response.data.countAllTasksDone.feito)
            
            setAllUser_id(response.data.countAllTasks_user_id.total)
            setDooUser_id(response.data.countAllTasksDo_user_id.fazer)
            setDoingUser_id(response.data.countAllTasksDoing_user_id.fazendo)
            setDoneUser_id(response.data.countAllTasksDone_user_id.feito)
        }
        
        fetchTasksForCount()
    }, [])
   
    return (
        <Container>
        <Logo className="Logo">
            <h1>TI TASKS</h1>
        </Logo>

        <HeaderTop className="headertop"/>

        <Menu>
            <div className="menuOptions">
                <ButtonOptions 
                    onClick={toggleTasks}
                    className="buttonOpen"
                >
                    <span>
                        Tarefas
                    
                        {isTasksVisible ? 
                            <TiArrowDownThick/> : 
                            <TiArrowRightThick/>}
                    </span>

                </ButtonOptions>
                            
                <div 
                    className={`
                        options ${isTasksVisible ? 'visible' : ''}`} 
                >
                    
                    <div className="date-mytasks">
                        <input type="date" onChange={e => setDate(e.target.value)}/>
                        
                        <ButtonText className="my-tasks"
                            title="Minhas tarefas" 
                            isactive={myTasks === true}
                            onClick={() => handleMyTasks(myTasks)}  
                        /> 
                    </div>
                    
                    <ul>

                        <li>
                            <ButtonText
                                title={`Todas(${myTasks ? allUser_id : all})`}
                                onClick={() => handleOptionSelected('Todas')}
                                isactive={optionSelected == 'Todas'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Fazer(${myTasks ? dooUser_id : doo})`}
                                onClick={() => handleOptionSelected('Fazer')}
                                isactive={optionSelected == 'Fazer'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Fazendo(${myTasks ? doingUser_id : doing})`}
                                onClick={() => handleOptionSelected('Fazendo')}
                                isactive={optionSelected == 'Fazendo'}
                            />
                        </li>

                        <li>
                            <ButtonText
                                title={`Feito(${myTasks ? doneUser_id : done})`}
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

            {(isTasksVisible) && tasks.length > 0 && tasks.map(task => (
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