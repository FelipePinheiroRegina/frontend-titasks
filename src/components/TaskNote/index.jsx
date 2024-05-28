import { Container } from "./styles"

export function Note({data}) {
    return (
        <Container>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <h4>{data.name}</h4>

            <div>
                <div className="created">
                    <p>Criado:</p>
                    <span>{data.created_at}</span>
                </div>

                <div className="deadline">
                    <p>Prazo:</p>
                    <span>{data.deadline}</span>
                </div>

                <div className="status">
                    <p>Status:</p>
                    <span>{data.status}</span>
                </div>
            </div>
        </Container>
    )
}