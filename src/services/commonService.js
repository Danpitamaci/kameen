/**
 * Class that allow to retrive data from Specified API
 */

  import axios from 'axios';
  export default class CommonService {
    /**
     * The Constructor
     */
    constructor (datasetID,sort,facet,rows) {
      this.baseURL = "https://data.nantesmetropole.fr/"
      this.datasetID = datasetID
      this.sort =sort
      this.facet =facet
      this.rows =rows
      this.requestsHeaders = {
        'Content-Type': 'Application/json'
      } 
    }
    /**
     * retrieve the dataset events
     * @returns the list of first 50 events of the dataset
     */
    getData() {
      const url = `${this.baseURL}api/records/1.0/search/?dataset=${this.datasetID}&q=&rows=${this.rows}&sort=${this.sort}`
      return axios.get(url)
    }

   
   
  }

  