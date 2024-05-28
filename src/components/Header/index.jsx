import { Container } from "./styles"


import {FiHome, FiMenu, FiPlus, FiUser} from "react-icons/fi"
import { ButtonHeader } from "../ButtonHeader"

import { Link, useNavigate } from "react-router-dom"

import { useState } from "react"
import { useAuth } from "../../hooks/auth"

export function Header() {
    const { optionSelectedHeader, setOptionSelectedHeader } = useAuth()
    const navigate = useNavigate()

    function handleOptionSelected(optionName) {
        setOptionSelectedHeader(optionName)

        if(optionName == 'home'){
            navigate('/')
        }

        if(optionName == 'create') {
            navigate('/create')
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
                icon={FiUser}
                onClick={() => handleOptionSelected('profile')} 
                isactive={optionSelectedHeader == 'profile'}
            /> 
        </Container>
    )
}