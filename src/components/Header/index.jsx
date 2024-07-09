import { Container } from "./styles"

import { FiHome, FiPlus, FiUser, FiFolder, FiCalendar } from "react-icons/fi"
import { ButtonHeader } from "../ButtonHeader"

import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Header() {

    const optionName = sessionStorage.getItem('@optionMenuTitasks') == undefined ? 'home' : sessionStorage.getItem('@optionMenuTitasks')

    const [ optionSelectedHeader, setOptionSelectedHeader ] = useState(optionName)
    const navigate = useNavigate()

    function handleOptionSelected(optionName) {
        sessionStorage.setItem('@optionMenuTitasks', optionName)
        setOptionSelectedHeader(optionName)
       
        if(optionName == 'home'){
            navigate('/')
        }

        if(optionName == 'create') {
            navigate('/create')
        }

        if(optionName == 'documentations') {
            navigate('/documentations')
        }

        if(optionName == 'schedule') {
            navigate('/schedule')
        } 

        if(optionName == 'profile') {
            navigate('/profile')
        }
    }

    return (
        <Container>
            <ButtonHeader 
                icon={FiHome}
                onClick={() => handleOptionSelected('home')} 
                isactive={optionSelectedHeader == 'home'}
            />
        
            <ButtonHeader 
                icon={FiPlus}
                onClick={() => handleOptionSelected('create')} 
                isactive={optionSelectedHeader == 'create'}
            /> 

            <ButtonHeader 
                icon={FiFolder}
                onClick={() => handleOptionSelected('documentations')} 
                isactive={optionSelectedHeader == 'documentations'}
            />

            <ButtonHeader 
                icon={FiCalendar}
                onClick={() => handleOptionSelected('schedule')} 
                isactive={optionSelectedHeader == 'schedule'}
            />
        
            <ButtonHeader 
                icon={FiUser}
                onClick={() => handleOptionSelected('profile')} 
                isactive={optionSelectedHeader == 'profile'}
            /> 
        </Container>
    )
}