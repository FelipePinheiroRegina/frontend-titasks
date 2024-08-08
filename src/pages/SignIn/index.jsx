import { useState } from "react"
import { useAuth } from "../../hooks/auth"

import { FiMail, FiLock} from "react-icons/fi"

import { Container, Form, Background} from "./styles";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom"

export function SignIn(){
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const { signIn } = useAuth()

    function handleSignIn(event) {
        event.preventDefault()
        
        signIn({email, password})
    }
    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                <h1>TI TASKS</h1>

                <p>Aplicativo para salvar e gerenciar as terefas dos colaboradores de T.I da Patral Peças.</p>

                <p>Faça seu login</p>
                
                <Input 
                    type='text'
                    placeholder='Email' 
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type='password'
                    placeholder='Password' 
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />
        
                <Button 
                    title='Entrar' 
                    type="submit"
                />

                <Link to="/register">
                    <ButtonText 
                        title="Não tem uma conta? Registrar-se" 
                    />
                </Link>

                <footer>Ti Tasks v1.2 - Desenvolvedor Felipe Pinheiro Regina</footer>
            </Form>
            <Background/>
        </Container>
    )
}