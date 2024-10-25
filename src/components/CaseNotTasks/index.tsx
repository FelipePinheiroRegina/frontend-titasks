import { Container } from "./styles"
import { TfiFaceSad } from "react-icons/tfi";

export function CaseNotTasks() {
    return (
        <Container>
            <p>Não existem tarefas ainda...</p>
            <TfiFaceSad/>
        </Container>
    )
}