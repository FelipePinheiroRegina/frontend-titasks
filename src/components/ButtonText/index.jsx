import { Container } from './styles'

export function ButtonText({ title, icon: Icon, isactive= false, ...rest}) {
    return (
        <Container
            type='button'
            $isactive={isactive}
            {...rest}
        >
            {title}{Icon && <Icon/>}
        </Container>
    )
}