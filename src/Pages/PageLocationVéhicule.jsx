import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { serviceVehicules } from "../Service/ServiceVehicules";
import Button from 'react-bootstrap/Button';
import {CompAddVehicule} from "../Component/CompAddVehicule";
import {CompAffichageVehicule} from "../Component/CompAffichageVehicule";
import {CompAffichageVehiculeLocation} from '../Component/CompAffichageVehiculeLocation';
import {Link, Outlet} from "react-router-dom";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import renault from "../assets/renault.jpg"
import peugeot from "../assets/peugeot-208.png"

export const PageLocationVehicule=()=>{
    //deux states, le premier contient les vehicules, le second permet un affichage alternatif
    const [vehiculesList, setVehiculesList] = useState([]);
    const[isDisplayed, setIsDisplayed] = useState(false);
//const filter pour faire un filtre sur la disponibilité
    const[filter, setFilter]=useState();

    //liste des elements du premier filtre qui permet de filtrer en fonction de la disponibilite
    const filterList={
        "Tous": null, 
        "Disponibles":"true", 
        "Loués" : "false"
    }


    /**
     * fonction pour filtrer on fonction du bouton cliqué, utilisé lors de l'affichage
     * @param {*} status 
     * @returns soit les elements filtrés, soir la liste non filtrée
     */
    const filteredbyStatus=(status)=>{
        if(!status){
            return vehiculesList
        }else{
           const filteredVehicule =  vehiculesList.filter((location=>(location.disponibilite.toString()===filter)))
           return filteredVehicule;
        }
    }

    /**
     * HANDLE CLICK permet de setter la valeur du filtre
     * @param {*} event 
     */
    const handleClick=(event)=>{
        setFilter(filterList[event.target.innerText])
    }


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

        //tentative d'affichage dynamique
const renault =require("../assets/renault.jpg")
const peugeot= require("../assets/peugeot-208.png")


//ici on affiche en premier un bouton de navigation
//ensuite on creer le filtre qui est sous forme de boutons
//affichage des elements en fonction du filtre
    return (
        <> 
          
         <Button variant="secondary"><Link to={`/`} className="buttonText">Home</Link></Button>
        <h1 className="titlePage">Location de Vehicules</h1>
        
        <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="me-2" aria-label="First group">
        {Object.keys(filterList).map((filter, index)=>{
            return<Button onClick={handleClick}key={index}>{filter}</Button>
        })}
        </ButtonGroup>
        </ButtonToolbar>
                {filteredbyStatus(filter).map((vehicules) => 
               // { return vehicules.disponibilite? <CompAffichageVehiculeLocation image= {renault} vehicule={vehicules} deleteVehicule={deleteVehicule}/> : <CompAffichageVehicule vehicule={vehicules} image= {renault}  deleteVehicule={deleteVehicule}/> })}
                 { return vehicules.disponibilite? <CompAffichageVehiculeLocation image= {vehicules.marque=== "Renault"? renault:"Peugeot"?peugeot:renault} vehicule={vehicules} deleteVehicule={deleteVehicule}/> : <CompAffichageVehicule vehicule={vehicules} image= {vehicules.marque=== "Renault"? renault:"Peugeot"?peugeot:renault}  deleteVehicule={deleteVehicule}/> })}
        </>
    )



}

export default PageLocationVehicule;