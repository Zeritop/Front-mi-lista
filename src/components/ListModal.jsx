import React, { useState, useEffect } from 'react'
import {ModalConatainer,
    ModalCard,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ContainerModalHeader,
    ModalBodyContainer
} from '../elements/ListsElements';
import axios from 'axios';
import { Loading } from '../elements/Loading';
import { NoResults } from '../elements/ResultElements';

const ListModal = ({description, setModal}) => {
    const [desc, setDesc] = useState('');
    const [cargar, setCargar] = useState(false);
    const typelist = description.typelist;
    const iD = description.id
    
    const getDescriptionById = async (typelist, iD) => {
        const res = await axios.get(`https://kitsu.io/api/edge/${typelist}?filter[id]=${iD}`)
        setDesc(res.data.data.map( desc => desc.attributes.description ))  

    }
    useEffect(() => {
        let tiempo;
        tiempo = setTimeout(async () => {
            await getDescriptionById(typelist, iD)
            setCargar(true);
        }, 100)

        return(() => clearTimeout(tiempo));
    }, [typelist, iD])

    const closeModal = () => {
        setModal(false);
    }

    return (
        <ModalConatainer>
            <ModalCard>
                <ContainerModalHeader>
                    <ModalHeader>{ description.title }</ModalHeader>
                </ContainerModalHeader>
                <ModalBody>
                    <ModalBodyContainer>
                        {
                            cargar ? (
                                <>
                                    <h2>{ description.title }</h2>
                                    <img src={description.urlImg} alt={description.title} />
                                    <p>{ desc[0] }</p>
                                </>
                            )
                            :
                            (<NoResults>
                                <Loading>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </Loading>
                            </NoResults>)
                        }

                    </ModalBodyContainer>
                </ModalBody>
                <ModalFooter> 
                    <button 
                        onClick={() => closeModal()}
                    >
                        CERRAR
                    </button>    
                 </ModalFooter>
            </ModalCard>
        </ModalConatainer>
    )
}

export default ListModal
