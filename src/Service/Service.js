export class Service{
/**
 * METHODE recuperation locataires sur le serveur
 * @returns locataires
 */
    async seeLocataires(){
        return await fetch('http://localhost:3000/locataires')
        .then((res)=>(res.json()))
    }

    /**
     * Methode Ajout locataire sur serveur 
     * @param {*} locataireNew type locataire
     * @returns le json
     */
    async addLocataires(locataireNew){
        return await fetch('http://localhost:3000/locataires', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(locataireNew)})
                .then((res)=>(res.json()))
    }
/**
 * Methode delete by id locataires
 * @param {*} id 
 * @returns le json
 */
    async deleteById(id){
        return await fetch(`http://localhost:3000/locataires/${id}`, 
        { method: 'DELETE' })
        .then((res) => ((res.json())));
    }
/**
 * METHODE recuperation locataires sur le serveur
 * @returns locataires par idgit checkout
 */
    async seeLocatairesById(id){
        return await fetch(`http://localhost:3000/locataires/${id}`)
        .then((res)=>(res.json()))
    }

    /**Methode pour modifier les locataires PUT 
     * 
     */
     async modifierLocataires(locataire, id){
        return await fetch(`http://localhost:3000/locataires/${id}`, 
        {method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(locataire)
    }).then((res)=>(res.json()))
}
}
export const service = Object (new Service());