import { LuImageOff, LuImagePlus } from "react-icons/lu"
import { FiArrowLeft } from "react-icons/fi"
import { toast, ToastContainer } from "react-toastify"

import { Container, Form, Title } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { Header } from "../../components/Header"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import background from '../../assets/background.svg'

import { ChangeEvent } from 'react'
import { AxiosError } from "axios"

export function Create() {
    const [ title, setTitle ] = useState<string>('')
    const [ description, setDescription ] = useState<string>('')

    const [ image, setImage ] = useState<string>('')
    const [ imageFile, setImageFile ] = useState<File | null>(null)
    
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    function handleAddImage(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageFile(file);
            const imagePreview = URL.createObjectURL(file);
            setImage(imagePreview);
        }
    }

    function handleRemoveImage() {
        setImageFile(null);
        setImage(background);
        const inputElement = document.getElementById("image") as HTMLInputElement
        inputElement.value = ''
    }

    async function handleCreateTask() {
        if(!title) {
            return toast.error('Preencha o título da tarefa!')
        }

        const formattedTitle = capitalizeFirstLetter(title)
       
        if(!description) {
            return toast.error('Preencha a descrição da tarefa!')
        }
    
        try {
            const form = new FormData()
            form.append("title", formattedTitle)
            form.append("description", description)
        
            if (imageFile) {
                form.append("image", imageFile)
            }
        
            await api.post('/tasks', form)
        
            toast.success('Tarefa criada com sucesso!')
            setTimeout(() => {
                navigate('/')
            }, 2000)

        } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              if (error.response) {
                toast.error(error.response.data.message)
              } else {
                toast.error('Erro ao criar tarefa, contate o adm')
              }
            } else {
              toast.error('Erro ao criar tarefa, contate o adm')
            }    
        }
    }

    return (
        <Container>
            <ToastContainer position="top-center" theme="dark" autoClose={2000}/>
            <Header/>
            <Form onSubmit={() => handleCreateTask()}>
                <Title>
                    <h1>Nova tarefa</h1>

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
                    maxLength={50}
                />

                <TextArea 
                    placeholder="Descrição"
                    onChange={e => setDescription(e.target.value)}
                />

                <div className="container-image">
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
                </div>

                <Button 
                    title="Salvar"
                    onClick={handleCreateTask}
                    disabled={title.length === 0 || description.length === 0}
                    />
            </Form>
        </Container>
    )
}