import { Container } from "./styles"

export function ButtonHeader({icon: Icon, isactive = false, ...rest}) {
    return (
        <Container 
            type="button" 
            $isactive={isactive} 
            {...rest}
        >
            {Icon && <Icon />}
        </Container>
    )
}