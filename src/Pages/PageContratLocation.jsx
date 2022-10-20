import React, { useDebugValue } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { serviceVehicules } from "../Service/ServiceVehicules";
import { service } from '../Service/Service';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { createDocumentRegistry } from "typescript";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { serviceContrats } from "../Service/ServiceContrats";
import { useNavigate } from "react-router-dom";
import { routeChangeLocation } from "../Component/ContratLocation"


export const PageContratLocation = () => {
    //use param permet de recuperer l'id
    const params = useParams();

    //recuperation du vehicule choisis en state
    const [detailVehicule, setDetailVehicule] = useState({});
    //recuperation de la liste de locataires pour permettre un choix
    const [listLocataires, setListLocataires] = useState();
    //recuperation du locataire choisis en state
    const [selectedLocataire, setSelectedLocataire] = useState();
    //recuperation de la durée de location et des daye des locations
    const [duree, setDuree] = useState();
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [prix, setPrix] = useState()
    const [prixDuree, setPrixDuree] = useState();
    const [contrat, setContrat] = useState();

    //gestion du contrat
    const handleClickCreationContrat = () => {
        setContrat({ ...contrat, fullstart: start, fullend: end, start: start.toLocaleDateString("fr"), end: end.toLocaleDateString("fr") })
        setSendDisable(true)
        handleShow()
    }

    /**
     * ROUTECHANGELOCATION********************************************************************************************************************
     * fonction pour le redirect si le user veut louer un véhicule différent il sera renvoyé sur la page classique de création de contrat
     * asociée à navigate
     */
    let navigate2 = useNavigate()
    const routeChangeLocation = () => {
        let path2 = `/ContratLocation`;
        navigate2(path2)
    }

    /**
   * ROUTECHANGE***************************************************************************************************************************************
   * fonction pour le redirect quand location validée, accompagne de navigate qui appel le useNavigate natif de react.
   */
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/PageGestionLocations`;
        navigate(path);
    }
    //state qui va permettre de cliquer ou non sur le bouton louer
    const [sendDisable, setSendDisable] = useState(false);

    //gestion du calendrier
    const [date, setDate] = useState(new Date());


    /**
     * USEEFFECT***************************************************************************************************************
     * recuperation des informations de la voiture disponible du véhicule venant de la base de donnée grâce au service
     * set le prix à la journée du véhicule dans un state
     */
    useEffect(() => {
        serviceVehicules.seeVehiculesById(params.id)
            .then((res) => setPrix((res.prix)))

    }, []);

    /**
 * USEEFFECT***************************************************************************************************************
 * recuperation des informations de la voiture disponible du véhicule venant de la base de donnée grâce au service
 * set l'objet contrat à l'init du composant
 */
    useEffect(() => {
        serviceVehicules.seeVehiculesById(params.id)
            .then((res) => setContrat({
                ...contrat, marque: (res.marque),
                modele: (res.modele),
                immatriculation: (res.immatriculation),
                etat: (res.etat),
                prixJournee: (res.prix),
                disponibilite: (res.disponibilite),
                type: (res.type),
                idVehicule: (res.id)

            }))
    }, []);
    /**
  * USEEFFECT***************************************************************************************************************
  * recuperation des informations de la voiture disponible du véhicule venant de la base de donnée grâce au service
  * set le vehicule selectionné à l'init du composant
  */
    useEffect(() => {
        serviceVehicules.seeVehiculesById(params.id)
            .then((res) => setDetailVehicule((res)))
    }, []);

    /**
     * USEEFFECT*********************************************************************************************************************************************
     * Appel le service des locataire(...) et permet de setter la liste des locataires à l'init du composant
     */
    useEffect(() => {
        service.seeLocataires().then((res) => setListLocataires(res))
    }, []);

    /**HANDLECHANGE*****************************************************************************************************************************************
     * Permet de setter les informations du locataires selectionné dans une setter
     * @param {*} event 
     */
    const handleChange = (event) => {
        setSelectedLocataire(event.target.value)
    }

    /**
     * USEEFFECT**********************************************************************************************************************
     * permet, entre autre, de calculer la durée de location une fois l'objet date setté grâce au calendrier en lacant la fonction calculDuree()
     */
    useEffect(() => {
        calculDuree()
    }, [date])

    /**USEEFFECT*********************************************************************************************************************
 * permet de lancer la fonction calculPrixDuree() une fois que la duree de location à été enregistré.
 *  */
    useEffect(() => {
        calculPrixDuree()
    }, [duree])

    /**
 * CALCULPRIXDUREE************************************************************************************************************************
 * lancée par un useeffect une fois la duree setter, 
 * cette fonction permet de calculer le prix de la location, de l'enregistrer dans une state, et de setter ce prix dans l'objet contrat.
 */
    const calculPrixDuree = () => {
        setPrixDuree(duree * prix)
        setContrat({ ...contrat, prix: (duree * prix) })
    }
    /**
     * CALCULDUREE*************************************************************************************************************************
     * fonction lancé par le useeffect suite à la validation de la date, 
     * elle permet de :
     * - setter la duree de location en jours, 
     * - setter les states (start, end)
     * - setter l'objet contrat avec la durée de location
     */

    const calculDuree = () => {
        setDuree(((date[1] - date[0]) + 1) / 86400000);
        setStart(date[0])
        setEnd(date[1])
        setContrat({ ...contrat, duree: (((date[1] - date[0]) + 1) / 86400000) })
    }
    // const pour setter le display du select locataire et vehicule
    const [display, setDisplay] = useState(true)

    /**
     * HANDLESELECTION******************************************************************************************************************************************************************
     * fonction qui est activé au clic sur un bouton, ce bouton est sous le select des locataires
     * Au clic il sette l'objet contrat avec toutes les informations disponibles et set le display a faux rendant de ce fait le composant disables
     */
    const handleSelection = () => {
        setDisplay(false)
        setContrat({
            ...contrat, nom: selectedLocataire.nom,
            prenom: selectedLocataire.prenom,
            dateDeNaissance: selectedLocataire.dateDeNaissance,
            email: selectedLocataire.email,
            telephone: selectedLocataire.telephone,
            idLocataire: selectedLocataire.id
        })
    }

    //modale*******************************************************
    const [show, setShow] = useState(false);

    /**
 * HANDLECLOSEOK**********************************************************************
 * fonction activée si le user valide la location, elle envoie en base de données les infomations du contrat, 
 * ferme la modale, et renvoie vers la page d'accueil de l'application (le rechargement permet de vider tous les states)
 */
    const handleCloseOk = () => {
        setShow(false)
        setSendDisable(false)
        serviceContrats.addContrats(contrat).then(routeChange())
    };

    /**
     * HANDLECLOSE******************************************************************
     * si le user clique a cote ou sur le boutons retours, la modale se referme, rien ne se passe.
     */

    const handleClose = () => {
        setShow(false)
        setSendDisable(false)
    };

    /**
     * HANDLESHOW *****************************************************************
     * affichage de la modale
     */
    const handleShow = () => {
        setShow(true)

    };

    return (
        <>
            <div className="recaplocation">
                <div className="leftPage">
                    <Box sx={{ minWidth: 120 }}>
                        {display ?
                            <>
                                <div className="setlocataireContrat">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Locataires</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={selectedLocataire}
                                            label="Locataires"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {listLocataires ? listLocataires.map((locataire, index) => {
                                                return <MenuItem value={locataire}>{locataire.nom}</MenuItem>
                                            }) : <p>Aucun Locataires</p>}
                                        </Select>
                                    </FormControl>
                                    <Button variant="success" onClick={handleSelection}>Selectionner</Button>
                                </div>
                            </>
                            : <FormControl fullWidth sx={{ m: 1, minWidth: 120 }} disabled>
                                <InputLabel id="demo-simple-select-label">Locataires</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedLocataire}
                                    label="Locataires"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {listLocataires ? listLocataires.map((locataire, index) => {
                                        return <MenuItem value={locataire}>{locataire.nom}</MenuItem>
                                    }) : <p>Aucun Locataires</p>}
                                </Select>
                            </FormControl>
                        }
                    </Box>

                    <div className='app'>
                        <div className="centerCalendar">
                            <h1 className='text-center'>Choisissez une période de location</h1>
                            <div className='calendar-container'>
                                <Calendar
                                    onChange={setDate}
                                    value={date}
                                    selectRange={true}
                                />
                            </div>
                            {date.length > 0 ? (
                                <p className='text-center'>
                                    <span className='bold'>Début de location:</span>{' '}
                                    {date[0].toDateString()}
                                    &nbsp;|&nbsp;
                                    <span className='bold'>Fin de Location:</span> {date[1].toDateString()}
                                </p>
                            ) : (
                                <p className='text-center'>
                                    <span className='bold'>date du jours:</span>{' '}
                                    {date.toDateString()}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="rightPage">
                    <p>Recapitulatif des informations :</p>
                    {selectedLocataire ? <>
                        <div className="displayLocataireTitle">
                            <h2>Locataire</h2>
                        </div>
                        <div className="displayLocataireData">
                            <p>Nom : {selectedLocataire.nom}</p>
                            <p>Prenom : {selectedLocataire.prenom}</p>
                            <p>Email: {selectedLocataire.email}</p>
                            <p>telephone : {selectedLocataire.telephone}</p>
                            <p>Identifiant: {selectedLocataire.id}</p>
                            <h2>Vehicule choisis</h2>
                            <p>Type de véhicule : {detailVehicule.type}</p>
                            <p>Prix à la journée : {detailVehicule.prix}</p>
                            <p>Marque du véhicule : {detailVehicule.marque}</p>
                            <h2>Prix de la location : {prixDuree} €</h2>
                            <h2>Durée de la location : {duree} jours</h2>
                        </div>
                        {!sendDisable ?
                            <Button variant="success" onClick={handleClickCreationContrat}>Louer !</Button> : <>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Valider la location</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>valider la location du client M./Mme/Autre {selectedLocataire.nom}</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Retours
                                        </Button>
                                        <Button variant="success" onClick={handleCloseOk}>
                                            Valider
                                        </Button>
                                    </Modal.Footer>
                                </Modal></>


                        }
                        <Button variant="warning" onClick={(() => setDisplay(true))}>Choisir un autre locataire</Button>
                        <Button variant="danger" onClick={(() => routeChangeLocation())}>Choisir un autre vehicule</Button>
                    </>
                        : <h2>Veuillez choisir un locataire</h2>}
                </div>
            </div>


        </>
    )

}

export default PageContratLocation;