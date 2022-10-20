import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { service } from "../Service/Service";
import { CompAffichageLocataire } from "../Component/CompAffichageLocataire";
import {CompAddLocataire} from "../Component/CompAddLocataire";
import Button from 'react-bootstrap/Button';
import {Link, Outlet} from "react-router-dom";

export const PageAffichageLocataire = () => {

    const [locatairesList, setLocatairesList] = useState([]);
    const[isDisplayed, setIsDisplayed] = useState(false);

    /**
     * handleClichShow*******************
     * Fonction changeant le state de isDisplayed qui permet d'afficher ou non le formulaire d'ajout
     * @param {*} event 
     */
    const handleClichShow=(event)=>{
        if(isDisplayed){
        setIsDisplayed(false)}
        else{
            setIsDisplayed(true)
        }
    }
/**getLocataires
 * fonction qui permet, grâce au service, de récuperer les données du serveur json et de les setter 
 */
    const getLocataires = () => {
        service.seeLocataires().then((res) => setLocatairesList(res))
    }
/**DELETELOCATAIRE
 * fonction qui permet grâce à l'id d'aller activer le service permettant de supprimer un element grâce a son id
 * 
 * @param {*} id 
 */

    const deleteLocataire=(id)=>{
        service.deleteById(id).then(getLocataires())
    }

    /**ADDLOCATAIRE
     * Fonction qui permet d'aller chercher le service afin d'ajouter un element au json
     * @param {*} Vehicules 
     */
    const addLocataires=(locataire)=>{
        service.addLocataires(locataire).then(getLocataires())
    }

/**USEEFFECT
 * quand le composant est créé on appele la fonction pour recupere et setter des données
 */
    useEffect(() => {
        getLocataires()
    },
        [])


    return (
        <> 
         <Button variant="secondary"><Link to={`/`} className="buttonText">Home</Link></Button>
        <h1 className="titlePage">Gestion des locataires</h1>
        <div className="displayAddButton"> 
        <p>Ajouter un locataire : </p>
        {isDisplayed?<> <CompAddLocataire addLocataires={addLocataires}/>  <Button variant="danger" onClick={handleClichShow}>-</Button></>: <Button variant="success" onClick={handleClichShow}>+</Button>}
         </div>
            <div className="displayCardLocataires">
                {locatairesList.map((locataire, key) => { return <CompAffichageLocataire locataire={locataire}  key={locataire.id} deleteLocataire={deleteLocataire} /> })}
            </div>
        </>
    )
}
export default PageAffichageLocataire;