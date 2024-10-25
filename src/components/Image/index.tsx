import { Container } from './styles'
import { api } from '../../services/api'
import { FiX } from 'react-icons/fi'

interface Props {
    url: string
    modalIsOpen: boolean
    setOpenImage: any
}

export function Image({url, modalIsOpen, setOpenImage}: Props) {
    const image = `${api.defaults.baseURL}/files/${url}`

    function handleCloseImage() {
        setOpenImage(false)
    }

    return (
        <Container $modalIsOpen={modalIsOpen}>
            <div className='close'>
                <FiX onClick={() => handleCloseImage()}/>
            </div>
            
            <div className='img'>
                <img src={image}/>
            </div>
        </Container>
    )
}