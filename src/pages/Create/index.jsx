import { LuImageOff, LuImagePlus } from "react-icons/lu";
import { FiArrowLeft } from "react-icons/fi"

import { Container, Form, Head, Title } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonText} from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { TextArea } from "../../components/TextArea"
import { HeaderTop } from "../../components/HeaderTop"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import background from '../../assets/background.svg'

export function Create() {
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ date, setDate ] = useState('')
    const [ time, setTime ] = useState('')
    const [ status, setStatus ] = useState('')

    const [ image, setImage ] = useState()
    const [ imageFile, setImageFile ] = useState(null)
    
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleAddImage(event) {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            const imagePreview = URL.createObjectURL(file);
            setImage(imagePreview);
        }
    }

    function handleRemoveImage() {
        setImageFile(null);
        setImage(background);
        document.getElementById("image").value = null; // Reset file input value
    }

    async function handleCreateTask() {
        if(!title) {
            return alert('Preencha o título da tarefa!')
        }

        if(!description) {
            return alert('Preencha a descrição da tarefa!')
        }

        if(!date || !time) {
            return alert('Preencha o prazo da tarefa!')
        }
        
        if(!status) {
            return alert('Preencha o status da tarefa!')
        }
  
        const deadline = `${date} ${time}`
      
        try {
            const form = new FormData();
            form.append("title", title);
            form.append("description", description);
            form.append("deadline", deadline);
            form.append("status", status);
        
            if (imageFile) {
                form.append("image", imageFile);
            }
        
            await api.post('/tasks/image', form);
        
            alert('Tarefa criada com sucesso!');
            sessionStorage.setItem('@optionMenuTitasks', 'home')
            navigate(-1)

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível criar a nota');
            }
        }
        
    }

    return (
        <Container>
            <HeaderTop/>
            <Form>
                <Title>
                    <h1>Criar tarefa</h1>

                    <button
                        onClick={handleBack}
                    >
                        <FiArrowLeft/>
                    </button>
                </Title>
                
                <Input 
                    type="text"
                    placeholder="Título"
                    onChange={e => setTitle(e.target.value)}
                />

                <TextArea 
                    placeholder="Descrição"
                    onChange={e => setDescription(e.target.value)}
                />

                
                <Section title="Prazo">
                    <p>Tempo estimado para a conclusão da tarefa</p>
                    <div className="deadline">
                        <Input  
                            type = "date"
                            onChange={e => setDate(e.target.value)} 
                        />

                        <Input  
                            type = "time"
                            onChange={e => setTime(e.target.value)} 
                        />
                    </div>
                </Section>
                
                <Section title="Imagem">
                    <p>Anexar imagem (Opcional)</p>

                    <label htmlFor="image">
                        <LuImagePlus size={20}/>

                        <input 
                            id="image" 
                            type="file" 
                            onChange={handleAddImage}
                        />
                    </label>

                    <button 
                        className="remove"
                        onClick={handleRemoveImage}
                    >
                        <LuImageOff size={20}/>
                    </button> 

                    <img src={image ? image : background} alt="Imagem do problema" />
                  
                </Section>

                <Section title="Status">
                    <select id="status" onChange={e => setStatus(e.target.value)}>
                        <option value="#">Selecione o status</option>
                        <option value="Fazer">Fazer</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Feito">Feito</option>
                    </select>
                </Section>
                

                <Button 
                    title="Salvar"
                    onClick={handleCreateTask}
                    />
            </Form>

            <Head>
                 <Header/>
            </Head>
        </Container>
    )
}