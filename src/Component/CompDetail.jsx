import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { service } from "../Service/Service";
import Card from 'react-bootstrap/Card';
import { Link, Outlet } from "react-router-dom";

export const CompDetail = (props) => {
    /**
     * le useParams permet de recuperer l'id qui est l'adresse de la page et de ce fait on peut l'utiliser
     */
    const params2 = useParams();
    const [detailLocataires, setDetailLocataires] = useState({});
 /**
     * le useEffect ici va, à l'initialisation du composant, 
     * recuperer les information d'un locataire grâce à son id.
     * en return il va setter le state de detail locataire qui sera utilisé pour l'affichage.
     */

    useEffect(() => {
        service.seeLocatairesById(params2.id).then((res) => setDetailLocataires((res)))
    }, [])

    return (
        <>
            <Card>
                <Card.Header>{detailLocataires.nom}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <Card.Title>Locataire</Card.Title>
                        <Card.Text> Nom : {detailLocataires.nom}</Card.Text>
                        <Card.Text>Prenom : {detailLocataires.prenom}</Card.Text>
                        <Card.Text> Date de Naissance : {detailLocataires.dateDeNaissance}</Card.Text>
                        <Card.Text>Email : {detailLocataires.email}</Card.Text>
                        <Card.Text>Telephone :{detailLocataires.telephone}</Card.Text>
                    </blockquote>
                </Card.Body>
            </Card>
        </>
        
    )





}
export default CompDetail;

