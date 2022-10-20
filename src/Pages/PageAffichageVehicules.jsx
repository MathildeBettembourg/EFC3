import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { serviceVehicules } from "../Service/ServiceVehicules";
import Button from 'react-bootstrap/Button';
import {CompAddVehicule} from "../Component/CompAddVehicule";
import {CompAffichageVehicule} from "../Component/CompAffichageVehicule";
import {Link, Outlet} from "react-router-dom";

export const PageAffichageVehicules= () => {

    const [vehiculesList, setVehiculesList] = useState([]);
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
/**GETVEHICULE
 * fonction qui permet, grâce au service, de récuperer les données du serveur json et de les setter 
 * 
 */
    const getVehicules = () => {
        serviceVehicules.seeVehicules().then((res) => setVehiculesList(res))
    }
/**DELETEVEHICULE
 * fonction qui permet grâce à l'id d'aller activer le service permettant de supprimer un element grâce a son id
 * @param {*} id 
 */

    const deleteVehicule=(id)=>{
        serviceVehicules.deleteByIdVehicule(id).then(getVehicules())
    }

    /**ADDVEHICULE
     * Fonction qui permet d'aller chercher le service afin d'ajouter un element au json
     * @param {*} Vehicules 
     */
    const addVehicules=(Vehicules)=>{
        serviceVehicules.addVehicules(Vehicules).then(getVehicules())
    }

/**USEEFFECT
 * quand le composant est créé on appele la fonction pour recupere et setter des données
 */
    useEffect(() => {
        getVehicules()
    },
        [])


    return (
        <> 
         <Button variant="secondary"><Link to={`/`} className="buttonText">Home</Link></Button>
        <h1 className="titlePage">Gestion des véhicules</h1>
        <div className="displayAddButton"> 
        <p>Ajouter un véhicule : </p>
        {isDisplayed?<> <CompAddVehicule addVehicules={addVehicules}/>  <Button variant="danger" onClick={handleClichShow}>-</Button></>: <Button variant="success" onClick={handleClichShow}>+</Button>}
        
         </div>


                {vehiculesList.map((vehicule) => 
                { return <CompAffichageVehicule vehicule={vehicule} deleteVehicule={deleteVehicule}/> })}

        </>
    )
}
export default PageAffichageVehicules;