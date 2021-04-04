/**
 * Class that allow to retrive data from "Evenement" API
 */

import CommonService from './commonService'

  export default class BirthRate {
    /**
     * The Constructor
     */
    constructor () {
      this.datasetID = "244400404_nombre-annuel-naissances-nantes"
      this.sort ="-annee"
      this.facet ="facet=annee&facet=sexe"
      this.rows = 10
      this.requestsHeaders = {
        'Content-Type': 'Application/json'
      }
      this.births=[]
      
    }
    /**
     * retrieve the dataset "nombre-annuel-naissances-nantes"
     * @returns the list of first 30 items of the dataset
     */
    getBirths() {
      const commonService = new CommonService(this.datasetID,this.sort,this.facet,this.rows)
      this.births = commonService.getData()
      return this.births
    }

    /**
     * Getting global birth evolution
     */
    getGlobalBirthsEvolution() {
      //setting the years
       this.setYears()
        const globalBirthEvolution = this.years.forEach(
        item => {
          return this.getGlobalBirthByYear(item)
        } 
      )

      return globalBirthEvolution
    }
    /**
     * Gettting the number of births by a specified year
     * @param {Number} year 
     * @returns number of birth for "year"
     */
    getGlobalBirthByYear(year) {
      let birthByYear = 0
      this.births.records.forEach(element => {
        if (element.fields.annee == year) {
          birthByYear = birthByYear + element.fields.nb_naissance
        }
      });
       return {year,birthByYear}
    }

    /**
     * The getter for year array, by removing duplicate values
     */
    getYears() {
     let years = []
     const commonService = new CommonService(this.datasetID,this.facet,this.rows)
     let births = commonService.getData().then(
       response => births = response.data
     ).finally(
      births.records.forEach(element => {
          if (!years.includes(element)) {
          years.push(element.fields.annee)
          }
        })
      )
      return years
    }
  }

  