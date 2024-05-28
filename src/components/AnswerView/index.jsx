import { Container } from "./styles"
import { api } from "../../services/api"
import { FiClock, FiSearch } from "react-icons/fi"
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
                    {index + 1} 
                </div>

                <span className="img-por-name">
                    <img src={
                        data.avatar == null ?  
                        avatarPlaceholder : 
                        `${api.defaults.baseURL}/files/${data.avatar}`} alt={data.name} 
                    /> 
                    <span>Por </span>
                    {data.name}
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
                        <FiSearch size={25}/>
                    </button>
                
                </Section>
            )}
            
            
        </Container>
    )
}