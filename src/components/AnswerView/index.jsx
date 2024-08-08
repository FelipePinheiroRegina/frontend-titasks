import { Container } from "./styles"
import { api } from "../../services/api"
import { FiClock } from "react-icons/fi"
import { IoOpen } from "react-icons/io5";
import { Section } from "../Section"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useEffect } from "react"

export function AnswerView({index, data, ...rest}){

    const prints = data.prints ? `${api.defaults.baseURL}/files/${data.prints}` : null

    function handleOpenPrints() {
        window.open(prints, '_blank');  
    }

    return (
        <Container {...rest}>
            <div className="details">
                <div className="count">
                    <strong>{index + 1} </strong>
                </div>

                <span className="img-por-name">
                    <img src={
                        data.avatar == null ?  
                        avatarPlaceholder : 
                        `${api.defaults.baseURL}/files/${data.avatar}`} alt={data.name} 
                    /> 
                    <span>Por </span>
                    <strong>
                        {data.name}
                    </strong>
                </span>

                <span className="created-at">
                    <FiClock/> 
                    {data.created_at} - Criado
                </span>
            </div>

            <Section title="Respondeu:">
               <p>{data.answer}</p> 
            </Section>
            
            {data.prints && (
                <Section title="Imagem">
                    <button
                        onClick={handleOpenPrints}
                        className="print"
                    >
                        <img src={prints} alt="imagem do print" /> 
                        <IoOpen  size={25}/>
                    </button>
                
                </Section>
            )}
            
            
        </Container>
    )
}