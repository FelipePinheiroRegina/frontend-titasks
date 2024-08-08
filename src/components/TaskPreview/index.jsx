import { FiClock, FiMessageSquare } from "react-icons/fi"
import { Container } from "./styles"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import { StatusTask } from "../StatusTask"

export function TaskPreview({data, isTrue=false, ...rest}) {
    const [ answer, setAnswer ] = useState([])
    const [ arrayAvatar, setArrayAvatar ] = useState([])
    const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder

    useEffect(() => {
        async function fetchAnswersAndAvatars(id) {
            const response = await api.get(`/answer/${id}`)
            setAnswer(response.data)

            // Extrai avatares e remove duplicados
            const avatars = response.data.map(answer => {
                console.log(answer)
                if(answer.avatar_user_answer) {
                    return {img: answer.avatar_user_answer, name: answer.name}
                } else {
                    return {img: 0, name: answer.name}
                }
            })
            const uniqueAvatars = Array.from(new Set(avatars))
            setArrayAvatar(uniqueAvatars)
        }

        fetchAnswersAndAvatars(data.id)
    }, [data.id])
    
    return (
        <Container
            $isTrue={isTrue} 
            {...rest }>
            
            <div className="status">
                Status da terefa: <StatusTask status={data.status}/>
            </div>

            <header>
                <h1>
                    {data.title}
                </h1>
            </header>
            
            <strong className="created-at">
                <img src={avatarUrl} alt={data.name} />
                Por {data.name}
            </strong>

            <span className="date-at">
                <FiClock/>
                {data.date}
            </span> 
           
            { 
                <div className="count-answers">
                    <h3>Interações</h3>

                    <div className="container-svg-and-answer">
                        <FiMessageSquare/>
                        {answer.length}
                    </div>
                </div>
            }

            {arrayAvatar.length > 0 && (
                <div className="answer-container">
                    {arrayAvatar.map((answer, index) => (
                        <div key={String(index)} >
                            <abbr title={answer.name}>
                                <img
                                    src={ 
                                        answer.img == 0 ? 
                                        avatarPlaceholder : 
                                        `${api.defaults.baseURL}/files/${answer.img}`
                                    }
                                    alt="avatar"
                                />
                            </abbr>
                        </div>
                    ))}
                </div>
            )}
        </Container> 
    )
}
