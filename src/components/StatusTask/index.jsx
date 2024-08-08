import { Container } from "./styles"
import { FiCircle, FiCheckCircle, FiLoader } from "react-icons/fi"

export function StatusTask({ status }) {
    let Icone;
    let color

    if (status === 'Fazer') {
        Icone = FiCircle
    } else if (status === 'Fazendo') {
        Icone = FiLoader
        color = 0
    } else {
        Icone = FiCheckCircle
        color = 1
    }

    return (
        <Container $color={color}>
            <Icone />
            <sup>{status}</sup>
        </Container>
    )
}
