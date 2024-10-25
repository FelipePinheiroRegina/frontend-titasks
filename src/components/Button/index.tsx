import { ButtonHTMLAttributes } from "react"
import { Container } from "./styles"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
}

export function Button({title, ...rest}: Props ){
    return (
      <Container
        type="button"
        {...rest}
      >
          {title}
      </Container>
    )
}