import { FiArrowLeft, FiClock, FiMessageSquare, FiX, FiRefreshCw, FiArrowUp  } from "react-icons/fi"
import { LuImageOff, LuImagePlus } from "react-icons/lu";
import { IoOpen } from "react-icons/io5";

import { Container, Content, Modal, ModalStatus } from "./styles"

import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { HeaderTop } from "../../components/HeaderTop"
import { ButtonText } from "../../components/ButtonText"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { AnswerView } from "../../components/AnswerView"
import { StatusTask } from "../../components/StatusTask"

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import background from '../../assets/background.svg'


export function DetailsTask() {
    const [ status, setStatus ] = useState('')
    const [ task, setTask ] = useState([])
    const { id } = useParams()
    const [ isModalOpenStatus, setIsModalOpenStatus ] = useState(false)
    const [ updatedStatus, setUpdatedStatus ] = useState(false)
    const [ updatedAnswer, setUpdatedAnswer ] = useState(false)
    const navigate = useNavigate()
    
    const avatarUrl = task.avatar ? `${api.defaults.baseURL}/files/${task.avatar}` : avatarPlaceholder
    
    const image = task.image ? `${api.defaults.baseURL}/files/${task.image}` : null

    const openModalStatus = () => setIsModalOpenStatus(true)
    const closeModalStatus = () => setIsModalOpenStatus(false)

// ------------------------------------------------------------
    // Constantes do modal 
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [ prints, setPrints ] = useState()
    const [ printsFile, setPrintsFile ] = useState(null)
    const [ answers, setAnswers ] = useState([])
    const [ textArea, setTextArea ] = useState('')
    
    // Funções e eventos do modal
    const openModal = () => setIsModalOpen(true)
    function closeModal() {
        setIsModalOpen(false)
        handleRemovePrints()
    }

    function handleAddPrints(event) {
        const file = event.target.files[0];
        if (file) {
            setPrintsFile(file);
            const printsPreview = URL.createObjectURL(file);
            setPrints(printsPreview);
        }
    }

    function handleRemovePrints() {
        event.preventDefault()
        setPrintsFile(null);
        setPrints(background);
        document.getElementById("prints").value = null
    }

    async function handleCreateAnswer() {
        event.preventDefault()

        if(!textArea) {
            return alert('A resposta é obrigatória')
        }
     
        try {
            if(printsFile) {
                const form = new FormData()
                form.append("answer", textArea)
                form.append("prints", printsFile)
                
                await api.post(`/answer/prints/${id}`, form)
            } else {
                const form = new FormData()
                form.append("answer", textArea)

                await api.post(`/answer/prints/${id}`, form)
            }
           
            alert('Resposta enviada com sucesso!')
            setUpdatedAnswer(prevUpdatedAnswer => !prevUpdatedAnswer)
            
            closeModal()
        } catch (error) {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert ('Não foi enviar sua resposta')
            } 
        }    
    }

// ------------------------------------------------------------
    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    function handleBack() {
        navigate(-1)
    }

    function handleOpenImage() {
        if (image) {
            window.open(image, '_blank');
        }
    }

    async function handleChangeStatus() {
        if(!status) {
            return alert('Selecione um status')
        }

        await api.put(`/tasks/${id}`, {status})

        alert('Status alterado com sucesso!')
        setUpdatedStatus(prevUpdated => !prevUpdated)
        setIsModalOpenStatus(false)
    }
    
    useEffect(() => {
        async function fetchDetailsTask() {
            const response = await api.get(`/tasks/${id}`)

            setTask(response.data[0])
        }

        fetchDetailsTask()
    }, [updatedStatus])

    useEffect(() => {
        async function fetchAnswers() {
            const response = await api.get(`/answer/${id}`)

            setAnswers(response.data)
        }

        fetchAnswers()
    }, [updatedAnswer])
    
    return (
        <Container>
            <HeaderTop/>
            
            <Content>
                <div className="buttons-top">
                    <ButtonText 
                        className="back"
                        title={<FiArrowLeft/>} 
                        onClick={handleBack}
                    />

                    <label htmlFor="status">
                        Alterar status
                        <button
                            id="status"
                            className="button-open-status"
                            onClick={openModalStatus}
                        >
                            
                            <FiRefreshCw/>
                        </button>
                    </label>
                </div>

                {
                isModalOpenStatus &&
                    <ModalStatus>
                            <button
                            onClick={closeModalStatus}
                            >
                            <FiX size={18}/>
                        </button>

                        <Section title="Status da tarefa">
                            <select onChange={e => setStatus(e.target.value)}>
                                <option value={task.status}>{task.status}</option>
                                <option value="Fazer">Fazer</option>
                                <option value="Fazendo">Fazendo</option>
                                <option value="Feito">Feito</option>
                            </select>
                        </Section>

                        <Button title="Alterar" onClick={handleChangeStatus}/>
                    </ModalStatus>
                }

                <div className="task">
                    <div className="status">
                        <strong>Status da tarefa:</strong><StatusTask status={task.status}/>
                    </div>
                     
                    <div className="information">
                        <div className="criado-por">
                            <img src={avatarUrl} alt={task.name}/>
                            Por<strong>{task.name}</strong>
                        </div>
    
                        <div className="created-at">
                            <FiClock size={24}/>
                            {task.created_at} - Criado
                        </div>
    
                        <div className="deadline">
                            <FiClock size={24}/>
                            {task.deadline} - Prazo
                        </div>
                    </div>

                    <Section title="Tarefa:">
                        <h1>{task.title}</h1>
                        <p>
                            {task.description}
                        </p>
                    </Section>
                    
                    {image && (
                        <Section title="Imagem">
                             <button
                            onClick={handleOpenImage}
                            className="image"
                            >
                            <img src={image} alt="Task related"/>
                            <IoOpen size={25}/>
                            </button>
                        </Section>
                    )}
                </div>

                {answers.length > 0 && (
                    <Section title='Respostas'>
                        {answers.map((answer, index) => (
                            <AnswerView
                                index={index}
                                key={String(answer.id)} 
                                data={answer}
                            />
                        ))}
                    </Section>
                )}

                <button
                    className="openModal"  
                    onClick={openModal}
                >
                        
                        <FiMessageSquare/>
                </button>

                <button
                    className="scrollTop"
                    onClick={handleScrollTop}
                >
                    <FiArrowUp/>
                </button>

                {isModalOpen && (
                    <Modal>
                        <div className="container-modal">
                            <button
                                onClick={closeModal}
                            >
                                <FiX size={24}/>
                            </button>

                            <Section title="Resposta"/>
                            
                            <form>
                                <TextArea
                                    placeholder="Insira a resposta aqui"
                                    onChange={e => setTextArea(e.target.value)}
                                />
                            
                                <Section title="Imagem">
                                    <p>Anexar imagem (Opcional)</p>
                                    <label htmlFor="prints">
                                    <LuImagePlus size={20}/>
                                    <button
                                        className="remove"
                                        onClick={handleRemovePrints}
                                    >
                                    <LuImageOff size={20}/>
                                    </button>
                                    <input
                                        id="prints"
                                        type="file"
                                        onChange={handleAddPrints}
                                    />
                                    </label>
                                    <img src={prints ? prints : background} alt="Prints" />
                                </Section>
                            
                                <Button
                                    onClick={handleCreateAnswer}
                                    title="Enviar"
                                />
                            </form>
                        </div>
                    </Modal>
                )}
            </Content>
            
            <Header/>
        </Container>
    )
}