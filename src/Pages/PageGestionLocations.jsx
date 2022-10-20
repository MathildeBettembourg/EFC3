import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { serviceContrats } from "../Service/ServiceContrats";
import { CompAffichageContrat } from "../Component/CompAffichageContrat";
import {CompAddLocataire} from "../Component/CompAddLocataire";
import Button from 'react-bootstrap/Button';
import {Link, Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const PageGestionLocations=()=>{


        const [contratsList, setContratsList] = useState([]);
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
        const getContrats= () => {
            serviceContrats.seeContrats().then((res) => setContratsList(res))
        }
    /**DELETELOCATAIRE
     * fonction qui permet grâce à l'id d'aller activer le service permettant de supprimer un element grâce a son id
     * 
     * @param {*} id 
     */
    
        const deleteByIdContrat=(id)=>{
            serviceContrats.deleteByIdContrats(id).then(getContrats())
        }
    
        /**ADDLOCATAIRE
         * Fonction qui permet d'aller chercher le service afin d'ajouter un element au json
         * @param {*} Vehicules 
         */

         let navigate2 = useNavigate()
         const routeChangeLocation=()=>{
             let path2 = `/ContratLocation`;
             navigate2(path2)
         }
    /**USEEFFECT
     * quand le composant est créé on appele la fonction pour recupere et setter des données
     */
        useEffect(() => {
            getContrats()
        },
            [])
    
    
        return (
            <> 
       <Button variant="secondary"><Link to={`/`} className="buttonText">Home</Link></Button>
            <h1 className="titlePage">Gestion des contrats</h1>
            <div className="buttonDisplayOrientationText">
            <Button variant="success" onClick={routeChangeLocation}>+</Button>
            <p>Ajouter Manuellement une location</p>
            </div>

                <div className="displayCardLocataires">
                    {contratsList.map((contrat, key) => { return <CompAffichageContrat contrat={contrat}  key={contrat.id} getContrats={getContrats} deleteByIdContrat={deleteByIdContrat} /> })}
                </div>
            </>
        )
 
}

export default PageGestionLocations;