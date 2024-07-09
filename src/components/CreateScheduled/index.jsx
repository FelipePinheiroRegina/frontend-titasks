import { FiX } from 'react-icons/fi'
import React from 'react'
import Modal from 'react-modal'
import { Form, Close} from "./styles"

import { Input } from '../Input'
import { useState } from "react";
import { api } from "../../services/api"
import { InputPrice } from '../InputPrice'

// Configurar o elemento raiz para o modal
Modal.setAppElement('#root')

export function CreateScheduled({ isOpen, onRequestClose }) {
    const [ title, setTitle ]             = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ]             = useState('')
    const [ scheduled, setScheduled ]     = useState('')
    const [ timesReschedule, setTimesReschedule ] = useState(0)
    
    async function handleAddScheduled() { 
        if(!title && !scheduled) {
            return alert('Campos obrigatórios')
        }

        if(timesReschedule > 12) {
            return alert('Não é possível agendar mais que 12 meses!')
        }

        try {
            const response = await api.post('/schedules', {title, description, price, scheduled, timesReschedule})
            
            setTitle('')
            setDescription('')
            setPrice('')
            setScheduled('')
            setTimesReschedule(0)
            onRequestClose()
            return alert(response.data.msg)

        } catch (error) {
            return alert(error)
        }
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '50rem',
          padding: '1.25rem',
          border: '.1rem solid #ccc',
          backgroundColor: '#312E38',
          borderRadius: '.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        },
        overlay: {
          backgroundColor: '#232129c7',
          zIndex: '1'
        }
    }
    
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Create Schedule"
        style={customStyles}
    >
         
         <Close>
            <button 
                className='close'
                onClick={onRequestClose}
            >
                <FiX/>
            </button>
         </Close>
        

        <Form>
            <h1> Agendar </h1>

            <div className='date'>
                <Input 
                    type="date"
                    onChange={e => setScheduled(e.target.value)}
                />
                
                <label htmlFor="repeat">
                    <small>Se repete mensalmente? Sim: vezes | Não: 0 </small>
                    <Input 
                        type="number" 
                        id="repeat" 
                        placeholder="0"
                        onChange={e => setTimesReschedule(e.target.value)}
                    />
                </label>
            </div>
            
            <label htmlFor="name">
                <small>Obrigatório</small>
               <Input 
                type="text" 
                placeholder="Nome" 
                onChange={e => setTitle(e.target.value)}
                />

            </label>
            
            <label htmlFor="details">
                <small>Opcional</small>

                <Input 
                    type="text" 
                    placeholder="Detalhes" 
                    onChange={e => setDescription(e.target.value)}
                />

            </label>

            <label htmlFor="">
                <small>Opcional</small>
                <div className='price'>
                    <span>R$</span>
                    <InputPrice value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
            </label>
            
            
            <button 
                className='add'
                onClick={ handleAddScheduled }
            >
                Confirmar
            </button>
        </Form>  

        
        
    </Modal>
    );
};


