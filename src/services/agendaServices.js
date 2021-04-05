import CommonService from './commonService'

export default class AgendaService{
     /**
     * The Constructor
     */
      constructor () {
        this.datasetID = "244400404_agenda-evenements-nantes-nantes-metropole"
        this.sort ="date"
        this.facet ="facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier"
        this.rows = 20
        this.requestsHeaders = {
          'Content-Type': 'Application/json'
        }
    
        
      }
      /**
       * retrieve the dataset "evenements-nantes-nantes-metropole"
       * @returns the list of first 20 items of the dataset
       */
       getAllEvents() {
        const commonService = new CommonService(this.datasetID,this.sort,this.facet,this.rows)
        return commonService.getData()
        
      }
  
}

