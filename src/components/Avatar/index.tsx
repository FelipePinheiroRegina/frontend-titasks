import { Container } from './styles'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'
import { MouseEventHandler } from 'react'

interface AvatarProps {
  url: string | null | undefined
  onClick?: MouseEventHandler<HTMLImageElement>
}

export function Avatar({ url, onClick }: AvatarProps) {
  const avatarUrl: string = url ? `${api.defaults.baseURL}/files/${url}` : avatarPlaceholder;

  return (
    <Container
      onClick={onClick}
      src={avatarUrl}
      alt="User Avatar"
    >

    </Container>
  );
}
