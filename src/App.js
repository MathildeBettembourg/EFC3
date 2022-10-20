import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import PageAffichageLocataire from './Pages/PageAffichageLocataires';
import CompModifLocataire from "../src/Component/CompModifLocataire";
import CompDetail from "../src/Component/CompDetail";
import logoVelo from "../src/assets/localib_small.png";
import PageAffichageVehicules from './Pages/PageAffichageVehicules';
import {CompDetailVehicule} from "../src/Component/ComDetailVehicule";
import {CompModifVehicule} from "../src/Component/CompModifVehicule";
import {PageLocationVehicule} from '../src/Pages/PageLocationVéhicule';
import {CompAffichageVehiculeLocation} from '../src/Component/CompAffichageVehiculeLocation';
import {PageContratLocation} from '../src/Pages/PageContratLocation';
import 'react-calendar/dist/Calendar.css';
import {ContratLocation} from "../src/Component/ContratLocation"
import {PageGestionLocations} from "../src/Pages/PageGestionLocations"
import {CompDetailContrat} from "../src/Component/CompDetailContrat";


function App() {
  return (
    <>
    <header className='mainTitle'>
    <img src={logoVelo}/>
      <h1 className='h1Text'>Localib - Louer un véhicule en toute liberté</h1>
    </header>
      <Router>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand Link to="/PageAffichageLocataire">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/PageAffichageLocataire" className='liens'>Gestion des Locataires</Link></Nav.Link>
            <Nav.Link><Link to="/PageAffichageVehicules" className='liens'>Gestion des véhicules</Link></Nav.Link>
            <Nav.Link><Link to='/PageLocationVehicule' className='liens'>Location des Vehicules</Link></Nav.Link>
            <Nav.Link><Link to='/PageGestionLocations' className='liens'>Gestion des Locations</Link> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<PageAffichageLocataire/>}/>
        <Route path='/PageAffichageLocataire' element={<PageAffichageLocataire/>}/>;
        <Route path='/CompModifLocataire/:id' element={<CompModifLocataire/>}/>;
        <Route path='/PageAffichageVehicules' element={<PageAffichageVehicules/>}/>;
        <Route path='/CompDetail/:id' element={<CompDetail/>}/>;
        <Route path='/CompModifVehicule/:id' element={<CompModifVehicule/>}/>;
        <Route path='/CompDetailVehicule/:id' element={<CompDetailVehicule/>}/>;
        <Route path='/PageLocationVehicule' element={<PageLocationVehicule/>}/>;
        <Route path={'/CompAffichageVehiculeLocation'} element={<CompAffichageVehiculeLocation/>}/>;
        <Route path={'/PageContratLocation/:id'} element={<PageContratLocation/>}/>;
        <Route path={'/ContratLocation'} element={<ContratLocation/>}/>;
        <Route path={'/PageGestionLocations'} element ={<PageGestionLocations/>}/>;
        <Route path={'/CompDetailContrat/:id'} element={<CompDetailContrat/>}/>;

        

      </Routes>
      </Router>
    </>

  );
}

export default App;
