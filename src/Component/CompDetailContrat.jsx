import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { service } from "../Service/Service";
import Card from 'react-bootstrap/Card';
import { Link, Outlet } from "react-router-dom";
import { serviceVehicules } from "../Service/ServiceVehicules";
import { serviceContrats } from "../Service/ServiceContrats";
import ListGroup from 'react-bootstrap/ListGroup';

export const CompDetailContrat = (props) => {
    /**
     * le useParams permet de recuperer l'id qui est l'adresse de la page et de ce fait on peut l'utiliser
     */
    const params = useParams();

    const [detailContrat, setDetailContrat] = useState({});

    /**
     * le useEffect ici va, à l'initialisation du composant, 
     * recuperer les information d'un véhicule grâce à son id.
     * en return il va setter le state de detail vehicule qui sera utilisé pour l'affichage.
     */
    useEffect(() => {
        serviceContrats.seeContratsById(params.id).then((res) => setDetailContrat((res)))
    }, [])

    return (
        <>
            <Card>
                <Card.Header>{detailContrat.type}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <Card.Title>Locataire</Card.Title>
                        <Card.Text> Identifiant du contrat: {detailContrat.id}</Card.Text>
                        <hr/>
                        <Card.Title>Renseignements</Card.Title>
                        <Card.Text> Prenom : {detailContrat.prenom}</Card.Text>
                        <Card.Text> Prenom : {detailContrat.nom}</Card.Text>
                        <Card.Text> Email: {detailContrat.email}</Card.Text>
                        <Card.Text> telephone : {detailContrat.telephone}</Card.Text>
                       <hr/>
                       <Card.Title>Vehicule Choisis</Card.Title>
                        <Card.Text> Type de véhicule : {detailContrat.type}</Card.Text>
                        <Card.Text> Prix à la journée : {detailContrat.prix}</Card.Text>
                        <Card.Text> Marque du véhicule : {detailContrat.marque}</Card.Text>
                        <Card.Text> Prix de la location : {detailContrat.prix} €</Card.Text>
                        <Card.Text> Durée de la location : {detailContrat.duree} jours</Card.Text>

                    </blockquote>
                </Card.Body>
            </Card>
        </>
    )
}
export default CompDetailContrat;