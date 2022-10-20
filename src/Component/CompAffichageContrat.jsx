import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png" 
import {Link, Outlet} from "react-router-dom";
import {CompDetailContrat} from "../Component/CompDetailContrat"

export const CompAffichageContrat = (props)=>{

  
        const [contrat, setContrat] = useState({})
        /**
         * deleteLocataire
         * au clic sur le bouton on va appeler la fonction parent qui permet de supprimer un locataire
         * @param {*} event 
         */
    const deleteByIdContrat=(event)=>{
        event.preventDefault()
        props.deleteByIdContrat(props.contrat.id)
        props.getContrats()
    }
    /**
     * Le useEffect ici permet à l'init du composant de setter la valeur de l'objet 
     * locataire qui sera utilisé pour l'affichage
     */
        useEffect(() => {
            setContrat(props)
        }, [])
    
        return (
            <>
     <Card>
          <Card.Header>{props.contrat.nom}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <Card.Title>Contrat</Card.Title>
                            <Card.Text> Nom : {props.contrat.nom}</Card.Text>
                            <Card.Text>Prenom : {props.contrat.prenom}</Card.Text>
                            <Card.Text> Voiture : {props.contrat.modele}</Card.Text>
                            <Card.Text>Type de vehicule : {props.contrat.type}</Card.Text>
                            <Card.Text>Debut : {props.contrat.start}</Card.Text>
                            <Card.Text>Fin : {props.contrat.end}</Card.Text>
                            {/* envoyer en btn */}
                            {/* <Card.Text>Telephone :{props.contrat.telephone}</Card.Text> */}
                            <div className="buttonOnCards">
                            {/* <Button variant="primary"><Link to={`/CompModifLocataire/${props.contrat.id}`}> Modifier</Link></Button> */}
                            <Button variant="success"><Link to={`/CompDetailContrat/${props.contrat.id}`}>Details</Link></Button>
                            <Button variant="danger" onClick={deleteByIdContrat} className="buttonText">Supprimer</Button>
                            </div>
            </blockquote>
          </Card.Body>
        </Card>
        <Outlet/>
            </>
        )
    
    
}
export default CompAffichageContrat;