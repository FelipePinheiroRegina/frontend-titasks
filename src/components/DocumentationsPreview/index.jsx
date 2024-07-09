import { Container } from "./styles"

export function DocumentationsPreview({icon: Icon, title, ...props}) {
    return (
        <Container {...props}>
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}