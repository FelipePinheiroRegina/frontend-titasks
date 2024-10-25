import { Container } from './styles'
import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string,
    isActive?: boolean
}

export function ButtonText({ title, isActive = false, ...rest}: Props) {
    return (
        <Container
            type='button'
            $isactive={isActive}
            {...rest}
        >
            {title}
        </Container>
    )
}