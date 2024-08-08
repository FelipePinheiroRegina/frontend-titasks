import { useState } from "react";
import { api } from "../../services/api"

import { FiUser, FiMail, FiLock } from "react-icons/fi";

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Link, useNavigate } from "react-router-dom"


export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(event) {
        event.preventDefault()

        if(!name || !email || !password) {
            alert('Preencha todos os campos')
        }

        api.post('/user', {name, email, password})
        .then(() => {
            const isOk = confirm('Usuário cadastrado com sucesso, clique em OK para ser redirecionado para o login!')

            if(isOk) {
                navigate('/')
            }
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert('Não foi possivel cadastrar')
            }
        })
    }
    
    return (
        <Container>
            <Form onSubmit={handleSignUp}>
                <h1>TI TASKS</h1>
                
                <p>Aplicativo para salvar e gerenciar as terefas dos colaboradores de T.I da Patral Peças.</p>
               
                <p>Crie sua conta</p>

                <Input 
                    placeholder='Name' 
                    type='text'
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                    required
                    minLength={6}
                />

                <Input 
                    placeholder='Email' 
                    type='email'
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                    required
                    minLength={6}
                />

                <Input 
                    placeholder='Password' 
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength={6}
                />
            
                <Button title='Registrar' type="submit"/>

                <Link to="/">
                    <ButtonText title='Já possui uma conta? Entrar'/>
                </Link>

                <footer>Ti Tasks v1.2 - Desenvolvedor Felipe Pinheiro Regina</footer>
            </Form>

            <Background/>
        </Container>
    )
}