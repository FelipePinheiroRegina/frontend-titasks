import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { toast,  ToastContainer } from 'react-toastify'
import { FormEvent } from "react"
import { Container, Form } from "./styles"

import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Link } from "react-router-dom"

export function SignIn() {
    const [ email, setEmail ]       = useState<string>('')
    const [ password, setPassword ] = useState<string>('')
    const { signIn } = useAuth()

    function handleSignIn(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        signIn(email, password, toast)
    }
    
    return (
        <Container>
            <ToastContainer position="top-center" theme="dark"/>
            <Form onSubmit={(event) => handleSignIn(event)}>
                
                <h1>Ti Tasks</h1>
                
                <p>Faça seu login</p>
               
                <div className="inputs">
                    <Input 
                        type='text'
                        placeholder='Email' 
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Input 
                        type='password'
                        placeholder='Password' 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                
                <Button 
                    title='Entrar' 
                    type="submit"
                />

                <Link to="/register">
                    <ButtonText 
                        title="Não tem uma conta? Registrar-se" 
                    />
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