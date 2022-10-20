import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png"

export const CompAddLocataire = (props) => {

    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [dateDeNaissance, setDateDeNaissance] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [newLocataire, setNewLocataire] = useState(
        {
            nom: "",
            prenom: "",
            dateDeNaissance: "",
            email: "",
            telephone: ""
        }
    )
/**ENSEMBLE de FONCTION HANDLE-CHANGE-:SOMETHING
 * Ces fonction ont pour but, grâce au spread, de updater l'objet locataire qui sera ensuite envoyé dans la couche parent par la suite 
 * @param {*} event 
 */
    const handleChangeNom = (event) => {
        event.preventDefault();
        setNewLocataire({...newLocataire, nom:event.target.value})
    }
    /**
     * FONCTION HANDLE-CHANGE-:SOMETHING
     * @param {*} event 
     */
    const handleChangePrenom = (event) => {
        event.preventDefault();
        setNewLocataire({...newLocataire, prenom:event.target.value})
    }
    /**
     * FONCTION HANDLE-CHANGE-:SOMETHING
     * @param {*} event 
     */
    const handleChangeDate = (event) => {
        event.preventDefault();
        setNewLocataire({...newLocataire, dateDeNaissance:event.target.value})
    }
    /**
     * FONCTION HANDLE-CHANGE-:SOMETHING
     * @param {*} event 
     */
    const handleChangeEmail = (event) => {
        event.preventDefault();
        setNewLocataire({...newLocataire, email:event.target.value})
    }
    /**
     * FONCTION HANDLE-CHANGE-:SOMETHING
     * @param {*} event 
     */
    const handleChangeTelephone = (event) => {
        event.preventDefault();
        setNewLocataire({...newLocataire, telephone:event.target.value})
    }

/**
 * Fonction handle click qui a pour but d'envoyer l'objet dans la couche parent
 * @param {*} event 
 */
    const handleClick = (event) => {
        props.addLocataires(newLocataire)
    }
    
    return (
        <>
            <div className="blocForm">
                <form className="formDisplay">
                    <div>
                    <label>Nom </label>
                    <input type="text" onChange={handleChangeNom} />
                    </div>
                    <div>
                    <label>Prénom </label>
                    <input type="text" onChange={handleChangePrenom} />
                    </div>
                    <div>
                    <label>Date de naissance </label>
                    <input type="text" onChange={handleChangeDate} />
                    </div>
                    <div>
                    <label>email </label>
                    <input type="text" onChange={handleChangeEmail} />
                    </div>
                    <div>
                    <label>téléphone </label>
                    <input type="text" onChange={handleChangeTelephone} />
                    </div>
                </form>
                <Button variant="success" onClick={handleClick} className="buttonText">Ajouter</Button>

            </div>
        </>
    )
}
export default CompAddLocataire;

