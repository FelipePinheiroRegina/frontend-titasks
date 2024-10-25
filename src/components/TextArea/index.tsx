import { Container } from "./styles"
import { TextareaHTMLAttributes } from 'react'

type TextProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea({...rest}: TextProps) {
    return (
        <Container {...rest}>
            
        </Container>
    )
}