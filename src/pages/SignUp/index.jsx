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

    function handleSignUp() {
        if(!name || !email || !password) {
            alert('Preencha todos os campos')
        }

        api.post('/user', {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!")
            navigate('/')
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
            <Form>
                <h1>TI TASKS</h1>
                
                <p>Aplicativo para salvar e gerenciar as terefas dos colaboradores de T.I da Patral Peças.</p>
               
                <p>Crie sua conta</p>

                <Input 
                    placeholder='Name' 
                    type='text'
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder='Email' 
                    type='text'
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder='Password' 
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
            
                <Button title='Registrar' onClick={handleSignUp}/>

                <Link to="/">
                    <ButtonText title='Já possui uma conta? Entrar'/>
                </Link>
            </Form>

            <Background/>
        </Container>
    )
}