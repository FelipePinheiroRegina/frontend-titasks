import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

// Tipagem do componente Input
type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
    return (
        <Container {...rest} />
    )
}