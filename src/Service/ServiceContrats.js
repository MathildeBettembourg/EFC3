export class ServiceContrats{
    /**
     * METHODE recuperation contrats sur le serveur
     * @returns contrats
     */
        async seeContrats(){
            return await fetch('http://localhost:3000/contrats')
            .then((res)=>(res.json()))
        }
    
        /**
         * Methode Ajout contrats sur serveur 
         * @param {*} contratNew type contrats
         * @returns le json
         */
        async addContrats(contratNew){
            return await fetch('http://localhost:3000/contrats', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(contratNew)})
                    .then((res)=>(res.json()))
        }
    /**
     * Methode delete by id contrats
     * @param {*} id 
     * @returns le json
     */
        async deleteByIdContrats(id){
            return await fetch(`http://localhost:3000/contrats/${id}`, 
            { method: 'DELETE' })
            .then((res) => ((res.json())));
        }
    /**
     * METHODE recuperation contrats sur le serveur
     * @returns contrats par id
     */
        async seeContratsById(id){
            return await fetch(`http://localhost:3000/contrats/${id}`)
            .then((res)=>(res.json()))
        }
    
        /**Methode pour modifier les contrats PUT 
         * 
         */
         async modifierContrats(contrat, id){
            return await fetch(`http://localhost:3000/contrats/${id}`, 
            {method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contrat)
        }).then((res)=>(res.json()))
    }
    }
    export const serviceContrats = Object (new ServiceContrats());