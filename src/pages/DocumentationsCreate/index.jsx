import { FiArrowLeft, FiFilePlus } from "react-icons/fi"
import { LuImagePlus, LuImageOff  } from "react-icons/lu"
import background from '../../assets/background.svg'

import { Container, Form, Head } from "./styles"
import { HeaderTop } from "../../components/HeaderTop"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Section } from "../../components/Section"
import { useState } from "react"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function DocumentationsCreate() {
// PART OF CREATION DOCUMENT ----------------------------------
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    function isImage(file) {
        return file && file.type.startsWith('image');
    }

    function isVideo(file) {
        return file && file.type.startsWith('video');
    }

    async function handleCreateDocumentation() {
        if(!title || !description) {
            return alert('Campos obrigatórios')
        }

        try {
            const form = new FormData();
            form.append("title", title);
            form.append("description", description);
        
            if (mediaFile) {
                form.append("media", mediaFile);
            }
        
            await api.post('/documentations', form);
        
            alert('Documentação criada com sucesso!');
            navigate('/documentations')

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                return alert('Não foi possível criar a nota');
            }
        }
    }


// ---------------------------------------------------

    const navigate = useNavigate()

    const [ media, setMedia ] = useState()
    const [ mediaFile, setMediaFile ] = useState(null)

    function handleAddMedia(event) {
        const file = event.target.files[0];
        if (file) {
            setMediaFile(file);
            const mediaPreview = URL.createObjectURL(file);
            setMedia(mediaPreview);
        }
    }

    function handleRemoveMedia() {
        setMediaFile(null);
        setMedia(background);
        document.getElementById("media").value = null; // Reset file input value
    }

    function handleBack() {
        navigate(-1)
    }
    
    return (
        <Container>
            <HeaderTop/>
            
            <Head>
                <button onClick={handleBack}>
                    <FiArrowLeft/>
                </button>

                <h1>
                    Nova Documentação
                </h1>
            </Head>
        
            <Form>
                < Input
                    onChange={e => setTitle(e.target.value)} 
                    placeholder="Título"
                />

                < TextArea 
                    onChange={e => setDescription(e.target.value)} 
                    placeholder="Descrição"
                />

                <Section title="Mídia">
                    <p>Anexar Mídia (Opcional)</p>

                    <label htmlFor="media">
                        <LuImagePlus/>

                        <input 
                            id="media" 
                            type="file" 
                            onChange={handleAddMedia}
                        />
                    </label>

                    <button 
                        className="remove"
                        onClick={handleRemoveMedia}
                    >
                        <LuImageOff/>
                    </button> 

                    {mediaFile && isImage(mediaFile) && (
                        <img src={media} alt="Preview da documentação" />
                    )}
                    {mediaFile && isVideo(mediaFile) && (
                        <video controls>
                            <source src={media} type={mediaFile.type} />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    )}
                    {!mediaFile && (
                        <img src={background} alt="Background" />
                    )}
                    
                </Section>

                <Button 
                    onClick={handleCreateDocumentation}
                    icon={FiFilePlus} 
                    title="Adicionar documentação" 
                />
            </Form>

            <Header/>
        </Container>
    )
}