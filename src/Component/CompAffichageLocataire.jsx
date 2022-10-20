import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png" 
import {Link, Outlet} from "react-router-dom";

export const CompAffichageLocataire = (props) => {

    const [locataire, setLocataire] = useState({})
    /**
     * deleteLocataire
     * au clic sur le bouton on va appeler la fonction parent qui permet de supprimer un locataire
     * @param {*} event 
     */
const deleteLocataire=(event)=>{
    event.preventDefault()
    props.deleteLocataire(props.locataire.id)
}
/**
 * Le useEffect ici permet à l'init du composant de setter la valeur de l'objet 
 * locataire qui sera utilisé pour l'affichage
 */
    useEffect(() => {
        setLocataire(props)
    }, [])

    return (
        <>
 <Card>
      <Card.Header>{props.locataire.nom}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Card.Title>Locataire</Card.Title>
                        <Card.Text> Nom : {props.locataire.nom}</Card.Text>
                        <Card.Text>Prenom : {props.locataire.prenom}</Card.Text>
                        <Card.Text> Date de Naissance : {props.locataire.dateDeNaissance}</Card.Text>
                        <Card.Text>Email : {props.locataire.email}</Card.Text>
                        <Card.Text>Telephone :{props.locataire.telephone}</Card.Text>
                        <div className="buttonOnCards">
                        <Button variant="primary"><Link to={`/CompModifLocataire/${props.locataire.id}`}> Modifier</Link></Button>
                        <Button variant="success"><Link to={`/CompDetail/${props.locataire.id}`}>Details</Link></Button>
                        <Button variant="danger" onClick={deleteLocataire} className="buttonText">Supprimer</Button>
                        </div>
        </blockquote>
      </Card.Body>
    </Card>
    <Outlet/>
        </>
    )

}
export default CompAffichageLocataire;

