import { FiArrowLeft, FiClock, FiImage, FiPlus } from "react-icons/fi"

import { Container, Content, ButtonWhichType } from "./styles"
import { Header } from "../../components/Header"
import { HeaderTop } from "../../components/HeaderTop"
import { ButtonText } from "../../components/ButtonText"

import media from "../../assets/binary.png"

import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect} from 'react'
import { api } from "../../services/api"

import { MediaModal } from '../../components/MediaModal'
import { CreateMoreStepModal } from "../../components/CreateMoreStepModal"

export function SeeDocumentation() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ document, setDocument ] = useState()
    const [ steps, setSteps ] = useState()
    const [ refresh, setRefresh ] = useState(false)
    
// MODAL DAS MÍDIAS --------------------------------------------------
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [mediaType, setMediaType] = useState('') // 'image' or 'video'
    const [mediaSrc, setMediaSrc] = useState('')
  
    const openModal = (type, src) => {
      setMediaType(type);
      setMediaSrc(src);
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
      setMediaType('');
      setMediaSrc('');
    }

    const handleType = (src) => {
        const [, extension] = src.split('.')
    
        let type = 'unknown'
    
        // Definir listas de extensões de imagem e vídeo
        const imageExtensions = ['jpeg', 'pjpeg', 'png', 'gif']
        const videoExtensions = ['mp4', 'avi', 'mkv']
    
        // Verificar se a extensão pertence a imagem ou vídeo
        if (imageExtensions.includes(extension)) {
            type = 'image'
        } else if (videoExtensions.includes(extension)) {
            type = 'video'
        }
    
        openModal(type, src)
    }
// ----------------------------------------------------------------

// MODAL DAS CRIAÇÕES DOS PASSOS -----------------------------------
    const  [ modalStepIsOpen, setModalStepIsOpen ] = useState(false)

    const openModalStep = () => {
        setModalStepIsOpen(true)
    }

    const closeModalStep = () => {
        setModalStepIsOpen(false)
        setRefresh(!refresh)
    }

// -----------------------------------------------------------------


    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDocument() {
            try {
                const response = await api.get(`/documentations/${id}`);
                setDocument(response.data[0]);
            } catch (error) {
                console.error("Error fetching document:", error);
            } 
        }

        fetchDocument();
    }, [refresh]);

    useEffect(() => {
        async function fetchSteps() {
            try {
                const response = await api.get(`/steps/${id}`)

                setSteps(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        
        fetchSteps()
    }, [refresh])

    return (
        
        <Container>
            <HeaderTop/>

            { document &&
                <Content>
                    <ButtonText className="back" title={<FiArrowLeft/>} onClick={handleBack}/>

                    <h1>{document.title}</h1>
                    
                    <p className="create"> 
                        Por <strong>Felipe Pinheiro,</strong> 
                        <span><FiClock/></span> 
                        <span>{document.created_at}</span> 
                    </p> 

                    <p>{document.description}</p>

                    { document.media &&
                        <ButtonWhichType 
                            onClick={() => handleType(document.media)}
                        >

                            <span><FiImage/></span>
                            <span>Ver Mídia</span>
                        </ButtonWhichType>
                    }

                    <MediaModal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        mediaType={mediaType}
                        mediaSrc={mediaSrc}
                    /> 

                    { steps &&
                        steps.map((step, index) => (
                            <div className="step" key={String(step.id)}>
                                <p>Passo - {index + 2}</p>
                                <p>{step.description}</p>

                                { step.media &&
                                    <ButtonWhichType 
                                        onClick={() => handleType(step.media)}
                                    >

                                        <span><FiImage/></span>
                                        <span>Ver Mídia</span>
                                    </ButtonWhichType>
                                }

                                <MediaModal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    mediaType={mediaType}
                                    mediaSrc={mediaSrc}
                                /> 

                            </div>
                        ))
                    }
                    
                    <ButtonWhichType
                        onClick={openModalStep}
                    >
                        <span><FiPlus/></span>
                        <span>Adicionar mais um passo</span>
                    </ButtonWhichType>

                    <CreateMoreStepModal
                        isOpen={modalStepIsOpen}
                        onRequestClose={closeModalStep}
                        idDocument={id}
                    />
                </Content> 
            }
            
            
            <Header />
        </Container>
    )
}