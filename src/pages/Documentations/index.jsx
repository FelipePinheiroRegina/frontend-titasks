import { FiFilePlus, FiFile, FiArrowLeft } from "react-icons/fi"

import { Container, Content } from "./styles"
import { HeaderTop } from '../../components/HeaderTop'
import { Header } from '../../components/Header'
import { DocumentationsPreview } from "../../components/DocumentationsPreview"
import { useNavigate } from "react-router-dom"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api"
import { useEffect, useState } from "react"

export function Documentations() {
// PART OF FETCH DATA'S ---------------------------
    const [ title, setTitle ] = useState()
    const [ documentations, setDocumentations ] = useState()

    useEffect(() => {
        async function fetchDocumentations() {
            let response

            if(!title) {
                response = await api.get('/documentations')

            } else {
                response = await api.get(`/documentations?title=${title}`)
            }

            setDocumentations(response.data)
        }

        fetchDocumentations()
    }, [title])

//------------------------------------------------
    
    const navigate = useNavigate()

    function handleCreate() {
        navigate('/documentationscreate')
    }

    function handleView(id) {
        navigate(`/seedocumentation/${id}`)
    }

    function handleBack() {
        navigate('/home')
    }

    return (
        <Container>
            < HeaderTop />

            <Content>
                <ButtonText 
                    onClick={handleBack}
                    className="backDesk" 
                    title="Voltar"
                    icon={FiArrowLeft}
                />

                <div className="header">
                    <h1>Documentações</h1>

                    <button
                        onClick={handleCreate}
                    > 
                        <FiFilePlus/>
                    </button>

                    <input
                        onChange={e => setTitle(e.target.value)} 
                        type="text" 
                        placeholder="Pesquise pelo título"
                    />
                </div>

                <div className="documentations">
                    {documentations && documentations.map(document => (
                        <DocumentationsPreview 
                            key={String(document.id)}
                            icon={FiFile} 
                            title={document.title}
                            onClick={() => handleView(document.id)}
                        />
                    ))}
                </div>
            </Content>

            < Header className="headerbot"/>
        </Container>
    )
}