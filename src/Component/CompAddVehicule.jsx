import React from "react";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from "../assets/localib_small.png"

export const CompAddVehicule= (props) => {


    const [newVehicule, setNewVehicule] = useState(

    
        {
            marque: "",
            modele: "",
            immatriculation: "",
            etat : "A",
            prix : 20,
            disponibilite : "",
            type: "",
        }
    )
/**
 * handleChangeMarque
 * fonction pour change le state de la marque dans le nouvel objet
 * @param {*} event 
 */
    const handleChangeMarque = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, marque:event.target.value})
    }

    /**
     * handleChangeMarque
 * fonction pour change le state du model dans le nouvel objet
     * @param {*} event 
     */
    const handleChangeModele = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, modele:event.target.value})
    }
    /**
     * HandleChangeImmatriculation
     * fonction pour changer le state de l'immatriculation
     * @param {*} event 
     */
    const handleChangeImmatriculation = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, immatriculation:event.target.value})
    }
    /**
     * handleChangeEtat 
     * fonction pour changer le state de l'etat dans le nouvel objet
     * @param {*} event 
     */
    const handleChangeEtat = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, etat:event.target.value})
    }
    /**
     * handleChangePrix 
     * fonction pour changer le prix dans le nouvel objet
     * @param {*} event 
     */
    const handleChangePrix = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, prix:event.target.value})
    }
    /**
     * handleChangeDisponibilite
     * fonction pour changer l'etat de la disponibilité dans le nouvel objet
     * @param {*} event 
     */
    const handleChangeDisponibilite = (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule, disponibilite:event.target.value})
    }
    /**
     * handleChangeType
     * fonction pour changer la valeur dans le nouvel objet
     * @param {*} event 
     */
    const handleChangeType= (event) => {
        event.preventDefault();
        setNewVehicule({...newVehicule,  type:event.target.value})
    }

/**
 * Handle click
 * fonction pour envoyer l'objet dans la couche parent
 * @param {*} event 
 */
    const handleClick = (event) => {
        props.addVehicules(newVehicule)
    }
    
    return (
        <>
            <div className="blocForm">
                <form className="formDisplay">
                    <div>
                    <label>Marque </label>
                    <input type="text" onChange={handleChangeMarque} />
                    </div>
                    <div>
                    <label>Modèle </label>
                    <input type="text" onChange={handleChangeModele} />
                    </div>
                    <div>
                    <label>Immatriculation</label>
                    <input type="text" onChange={handleChangeImmatriculation} />
                    </div>
                    <div>
                    <label>Etat </label>
                    <input type="text" onChange={handleChangeEtat} />
                    </div>
                    <div>
                    <label>Prix </label>
                    <input type="number" onChange={handleChangePrix} />
                    </div>
                    <div>
                    <label>Disponibilite</label>
                    <input type="text" onChange={handleChangeDisponibilite} />
                    </div>
                    <div>
                    <label>Type</label>
                    <input type="text" onChange={handleChangeType} />
                    </div>
                </form>
                <Button variant="success" onClick={handleClick} className="buttonText">Ajouter</Button>

            </div>
        </>
    )
}
export default CompAddVehicule;

