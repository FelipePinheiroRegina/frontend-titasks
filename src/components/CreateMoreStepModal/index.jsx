import { LuImagePlus, LuImageOff } from "react-icons/lu"
import background from '../../assets/background.svg'

import React from 'react'
import Modal from 'react-modal'
import { Form, Foot } from "./styles"

import { TextArea } from "../TextArea"
import { Section } from '../Section';
import { useState } from "react";
import { api } from "../../services/api"

// Configurar o elemento raiz para o modal
Modal.setAppElement('#root')

export function CreateMoreStepModal({ isOpen, onRequestClose, idDocument }) {
    const [ media, setMedia ] = useState()
    const [ mediaFile, setMediaFile ] = useState(null)

    function handleAddMedia(event) {
        const file = event.target.files[0]

        if (file) {
            setMediaFile(file);
            const mediaPreview = URL.createObjectURL(file);
            setMedia(mediaPreview);
        }
    }

    function handleRemoveMedia() {
        setMediaFile(null);
        setMedia(background);
        document.getElementById("media").value = null; // Reset file input value
    }

    const [ description, setDescription ] = useState('')

    function isImage(file) {
        return file && file.type.startsWith('image');
    }

    function isVideo(file) {
        return file && file.type.startsWith('video');
    }

    async function handleAddStep() {
        if(!description) {
            return alert('Campo obrigatório')
        }
        
        try {
            const form = new FormData();
            form.append("description", description);
        
            if (mediaFile) {
                form.append("media", mediaFile);
            }
        
            await api.post(`/steps/${idDocument}`, form);
        
            alert('Passo criado com sucesso!');
            setMedia(background)
            setMediaFile(null)
            onRequestClose()

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                return alert('Não foi possível criar a nota');
            }
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
          backgroundColor: '#232129c7'
        }
    }
   
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Create More Step Modal"
        style={customStyles}
    >
        
        <Form>
            <h1> Descrição do passo </h1>

            <TextArea 
                onChange={e => setDescription(e.target.value)}
                placeholder="Desrição"
            />

            <Section title="Mídia">
                <p>Anexar Mídia (Opcional)</p>

                <label htmlFor="media">
                    <LuImagePlus/>

                    <input 
                        id="media" 
                        type="file" 
                        onChange={handleAddMedia}
                    />

                </label>

                <button 
                    className="remove"
                    onClick={handleRemoveMedia}
                >
                    <LuImageOff/>
                </button> 

                    {mediaFile && isImage(mediaFile) && (
                        <img src={media} alt="Preview da documentação" />
                    )}
                    {mediaFile && isVideo(mediaFile) && (
                        <video controls>
                            <source src={media} type={mediaFile.type} />
                            Seu navegador não suporta a tag de vídeo.
                        </video>
                    )}
                    {!mediaFile && (
                        <img src={background} alt="Background" />
                )}
            </Section>
        </Form>  

        <Foot>
            <button 
                onClick={onRequestClose}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#5AE4A8',
                    color: '#232129',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Fechar

            </button>

            <button 
                onClick={handleAddStep}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#5AE4A8',
                    color: '#232129',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Adicionar passo
            </button>
        </Foot>
    </Modal>
    );
};


