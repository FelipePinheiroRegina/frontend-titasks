import React from 'react';
import Modal from 'react-modal';

// Configurar o elemento raiz para o modal
Modal.setAppElement('#root');

import { api } from '../../services/api';

export function MediaModal({ isOpen, onRequestClose, mediaType, mediaSrc }) {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '45rem',      
          maxWidth: '50rem',
          padding: '1.25rem',
          backgroundColor: '#3E3B47',
          borderRadius: '.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.616)'
        }
    };

    let media = mediaSrc ? `${api.defaults.baseURL}/files/${mediaSrc}` : null
   
    return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Media Modal"
        style={customStyles}
    >
        {mediaType === 'image' && <img src={media} alt="Full" style={{ width: '100%', height: '100%' }} />}
        {mediaType === 'video' && <video src={media} style={{ width: '100%', height: '100%' }} controls />}
        
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
    </Modal>
    );
};


