import { FiClock, FiMessageSquare } from "react-icons/fi"
import { Container, StatusCircle } from "./styles"
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from "../../services/api"
import { useState, useEffect } from "react"

export function TaskPreview({data, ...rest}) {
    const [ answer, setAnswer ] = useState([])
    const [ arrayAvatar, setArrayAvatar ] = useState([])
    const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : avatarPlaceholder

    useEffect(() => {
        async function fetchAnswersAndAvatars(id) {
            const response = await api.get(`/answer/${id}`)
            setAnswer(response.data)

            // Extrai avatares e remove duplicados
            const avatars = response.data.map(answer => {
                if(answer.avatar_user_answer) {
                    return answer.avatar_user_answer
                } else {
                    return 0
                }
            })
            const uniqueAvatars = Array.from(new Set(avatars))
            setArrayAvatar(uniqueAvatars)
        }

        fetchAnswersAndAvatars(data.id)
    }, [data.id])
  
    return (
        <Container {...rest}>
            <div className="title-status">
                <h1>{data.title}</h1>
                
                <div className="date">
                    <span>
                        {data.status}
                        <StatusCircle status={data.status}/>
                    </span>
                    
                    {data.updated_at && 
                        <div>
                            
                            <p>
                                Atualizado  
                            </p>

                            {data.updated_at}
                        </div>
                    }  
                </div>
            </div>
            
            <strong>
                <img src={avatarUrl} alt={data.name} />
                Por {data.name}
            </strong>

            <span>
                <FiClock/>
                {data.date}
            </span> 
           
            { 
                <div className="count-answers">
                    <FiMessageSquare/>
                    {answer.length}
                </div>
            }

            {arrayAvatar.length > 0 && (
                <div className="answer-container">
                    {arrayAvatar.map((answer, index) => (
                        <div key={String(index)}>
                            <img
                                src={ 
                                    answer == 0 ? 
                                    avatarPlaceholder : 
                                    `${api.defaults.baseURL}/files/${answer}`
                                }
                                alt="avatar"
                            />
                        </div>
                    ))}
                </div>
            )}
        </Container> 
    )
}
