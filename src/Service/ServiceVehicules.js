export class ServiceVehicules{
    /**
     * METHODE recuperation vehicules sur le serveur
     * @returns vehicules
     */
        async seeVehicules(){
            return await fetch('http://localhost:3000/vehicules')
            .then((res)=>(res.json()))
        }
    
        /**
         * Methode Ajout Vehicules sur serveur 
         * @param {*} vehiculesNew type Vehicules
         * @returns le json
         */
        async addVehicules(vehiculesNew){
            return await fetch('http://localhost:3000/vehicules', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(vehiculesNew)})
                    .then((res)=>(res.json()))
        }
    /**
     * Methode delete by id vehicules
     * @param {*} id 
     * @returns le json
     */
        async deleteByIdVehicule(id){
            return await fetch(`http://localhost:3000/vehicules/${id}`, 
            { method: 'DELETE' })
            .then((res) => ((res.json())));
        }
    /**
     * METHODE recuperation vehicules sur le serveur
     * @returns vehicules par id
     */
        async seeVehiculesById(id){
            return await fetch(`http://localhost:3000/vehicules/${id}`)
            .then((res)=>(res.json()))
        }
    
        /**Methode pour modifier les vehicules PUT 
         * 
         */
         async modifierVehicules(Vehicules, id){
            return await fetch(`http://localhost:3000/vehicules/${id}`, 
            {method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Vehicules)
        }).then((res)=>(res.json()))
    }
    }
    export const serviceVehicules = Object (new ServiceVehicules());