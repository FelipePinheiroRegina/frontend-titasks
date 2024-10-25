import { useState } from "react";
import { api } from "../../services/api"
import { toast,  ToastContainer } from 'react-toastify'
import { FormEvent } from "react"

import { Container, Form} from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link, useNavigate } from "react-router-dom"


export function SignUp() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const navigate = useNavigate()

    function handleSignUp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if(!name || !email || !password) {
            toast.error('Preencha todos os campos')
        }
        
        api.post('/users', {name, email, password})
        .then(() => {
            toast.loading('Cadastrando seus dados...')
            
            setTimeout(() => {
                navigate('/')  
            }, 3000)
        })
        .catch(error => {
            if(error.response) {
                toast.error(error.response.data.message)
            } else {
                toast.error('Não foi possivel cadastrar')
            }
        })
    }
    
    return (
        <Container>
            <ToastContainer theme="dark" position="top-center"/> 
            <Form onSubmit={(event) => handleSignUp(event)}>
                <h1>Ti Tasks</h1>
                <p>Registre-se</p>
                <div className="inputs">
                    <Input
                        id="nome"
                        placeholder='Seu nome'
                        type='text'
                        onChange={e => setName(e.target.value)}
                        required
                        minLength={6}
                    />
                    
                    <Input
                        id="email"
                        placeholder='Seu e-mail'
                        type='email'
                        onChange={e => setEmail(e.target.value)}
                        required
                        minLength={6}
                    />
                    <Input
                        id="senha"
                        placeholder='Sua senha'
                        type='password'
                        onChange={e => setPassword(e.target.value)}
                        minLength={6}
                        required
                    />
                </div>
                    
                <Button title='Registrar' type="submit"/>

                <Link to='/'>
                    <ButtonText title="Já possui uma conta? entrar"/>
                </Link>
                

                <footer>
                    <a 
                        href="https://github.com/FelipePinheiroRegina" 
                        target="_blank">
                            Desenvolvido por Felipe Pinheiro
                    </a>
                </footer>
            </Form>
        </Container>
    )
}