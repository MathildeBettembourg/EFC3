import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import logo from "../assets/localib_small.png"
import { serviceVehicules } from "../Service/ServiceVehicules";

export const CompModifVehicule = (props) => {
    const params5= useParams();
    const [changedVehicule, setChangedVehicule] = useState({})

    
    /**
     * Le use effect ici permet, à la création du composant de,
     * recupere les données de l'id selectionné et de la stocker dans un objet
     */
    useEffect(()=>{
        serviceVehicules.seeVehiculesById(params5.id).then((res)=> setChangedVehicule(res))
}, [])


/******************************************************************************************
 * Fonctions handle change permettent de mettre à jours les données du locataire si l'utilisateur le souhaite.
 * elles fonctionnent toutes de la même fonction :
 * - spread sur l'objet, 
 * - mise à jour de la valeur si besoin
 * @param {*} event 
 */
const handleChangeMarque = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, marque:event.target.value})
}
const handleChangeModele = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, modele:event.target.value})
}
const handleChangeImmatriculation = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, immatriculation:event.target.value})
}
const handleChangeEtat = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, etat:event.target.value})
}
const handleChangePrix = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, prix:event.target.value})
}
const handleChangeDisponibilite = (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule, disponibilite:event.target.value})
}
const handleChangeType= (event) => {
    event.preventDefault();
    setChangedVehicule({...changedVehicule,  type:event.target.value})
}

/***************************************
 * Fonction handle click
 * ici on va aller chercher le service put qui permet de modifier les données d'un element ciblé grâce à son id
 * @param {*} event 
 */
const handleClick = (event) => {
    serviceVehicules.modifierVehicules(changedVehicule, params5.id)
}
     
    return (
        <>
            <div>
                <form>
                <label>Marque </label>
                    <input type="text" onChange={handleChangeMarque} defaultValue={changedVehicule.marque}/>
                    <label>Modèle </label>
                    <input type="text" onChange={handleChangeModele} defaultValue={changedVehicule.modele}/>
                    <label>Immatriculation</label>
                    <input type="text" onChange={handleChangeImmatriculation} defaultValue={changedVehicule.immatriculation}/>
                    <label>Etat </label>
                    <input type="text" onChange={handleChangeEtat} defaultValue={changedVehicule.etat}/>
                    <label>Prix </label>
                    <input type="number" onChange={handleChangePrix} defaultValue={changedVehicule.prix} />
                    <label>Disponibilite</label>
                    <input type="text" onChange={handleChangeDisponibilite} defaultValue={changedVehicule.disponibilite}/>
                    <label>Type</label>
                    <input type="text" onChange={handleChangeType} defaultValue={changedVehicule.type}/>
                </form>
                <Button variant="success" onClick={handleClick} className="buttonText">Modifier</Button>
            </div>
        </>
    )
}
export default CompModifVehicule;

