import { Container } from './styles'
import { TextArea } from '../TextArea'
import { Button } from '../Button'
import { useState, ChangeEvent, FormEvent } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useAuth } from '../../hooks/auth'

interface PropsComment {
    task_id: number,
    status: boolean 
}

export function Comment({ task_id, status }: PropsComment) {
    const { fetchUpdatesAfterHandleUser } = useAuth()
    const [ description, setDescription ] = useState<string>('')
    const [ imageFile, setImageFile ] = useState<File>()

    function handleAddImage(event: ChangeEvent<HTMLInputElement>) {
        if(event.target.files && event.target.files[0]) {
            const file = event.target.files[0]
            setImageFile(file)   
        }
    }

    function handleWriteDescription(event: ChangeEvent<HTMLTextAreaElement>) {
        setDescription(event.target.value)
    }

    async function handleCreateAnswer(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        try {
            const form = new FormData()
            form.append("description", description)
        
            if (imageFile) {
                form.append("image", imageFile)
            }
        
            await api.post(`/answers/${task_id}`, form)
        
            toast.success('Resposta criada com sucesso!')
            fetchUpdatesAfterHandleUser()
            setDescription('')

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
        <Container onSubmit={(event) => handleCreateAnswer(event)}>
            <TextArea
                placeholder='Enviar uma resposta'
                value={description}
                onChange={handleWriteDescription}
                required
            />
            
            <div className='wrapper'>
                <input 
                    type="file" 
                    name="image" 
                    id="image"
                    onChange={handleAddImage}
                />
        
                <Button
                    title='Responder'
                    type='submit'
                    disabled={description.length === 0 || status === true}
                />
            </div>
        </Container>
    )
}