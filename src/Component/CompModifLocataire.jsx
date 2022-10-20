import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import logo from "../assets/localib_small.png"
import { service } from "../Service/Service";

export const CompModifLocataire = (props) => {
    const params= useParams();
    const [changedLocataire, setChangedLocataire] = useState({})


    /**
     * Le use effect ici permet, à la création du composant de,
     * recupere les données de l'id selectionné et de la stocker dans un objet
     */
    useEffect(()=>{
        service.seeLocatairesById(params.id).then((res)=> setChangedLocataire(res))
}, [])


/******************************************************************************************
 * Fonctions handle change permettent de mettre à jours les données du locataire si l'utilisateur le souhaite.
 * elles fonctionnent toutes de la même fonction :
 * - spread sur l'objet, 
 * - mise à jour de la valeur si besoin
 * @param {*} event 
 */
    const handleChangeNom = (event) => {
        setChangedLocataire({...changedLocataire, nom:event.target.value})
    }
    const handleChangePrenom = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, prenom:event.target.value})
    }
    const handleChangeDate = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, dateDeNaissance:event.target.value})
    }
    const handleChangeEmail = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, email:event.target.value})
    }
    const handleChangeTelephone = (event) => {
        event.preventDefault();
        setChangedLocataire({...changedLocataire, telephone:event.target.value})
    }

/***************************************
 * Fonction handle click
 * ici on va aller chercher le service put qui permet de modifier les données d'un element ciblé grâce à son id
 * @param {*} event 
 */
    const handleClick = (event) => {
        service.modifierLocataires(changedLocataire, params.id)
     }
     
    return (
        <>
            <div>
                <form>
                    <label>Nom </label>
                    <input type="text" onChange={handleChangeNom} defaultValue={changedLocataire.nom} />
                    <label>Prénom </label>
                    <input type="text" onChange={handleChangePrenom}  defaultValue={changedLocataire.prenom}  />
                    <label>Date de naissance </label>
                    <input type="text" onChange={handleChangeDate} defaultValue={changedLocataire.dateDeNaissance} />
                    <label>email </label>
                    <input type="text" onChange={handleChangeEmail}  defaultValue={changedLocataire.email} />
                    <label>téléphone </label>
                    <input type="text" onChange={handleChangeTelephone}  defaultValue={changedLocataire.telephone} />
                </form>
                <Button variant="success" onClick={handleClick} className="buttonText">Modifier</Button>

            </div>
        </>
    )
}
export default CompModifLocataire;

