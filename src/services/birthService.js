/**
 * Class that allow to retrive data from "Nombre annuel de naissance" API
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
     * @returns the list of first 10 items of the dataset
     */
    getBirths() {
      const commonService = new CommonService(this.datasetID,this.sort,this.facet,this.rows)
      this.births = commonService.getData()
      return this.births
    }

    /**
     * Getting global birth evolution
     */
     getGlobalBirthsEvolution(years,births) {
      let globalBirthEvolution = years.map(
      item => {
        return this.getGlobalBirthByYear(item,births)
      } 
    )

      return globalBirthEvolution
    }

    /**
     * Getting birth evolution by sexe 
     * @param {Number} years 
     * @param {Array} births 
     * @param {String} sexe 
     * @returns array of births numbers by sexe
     */
     getBirthsEvolutionBySexe(years,births,sexe) {
      let birthEvolutionBySexe = years.map(
      item => {
        return this.getBirthByYearAndSexe(item,births,sexe)
      } 
    )

      return birthEvolutionBySexe
    }

  
  /**
   * Gettting the number of births by a specified year
   * @param {Number} year 
   * @param {Number} births 
   * @returns number of birth for "year"
   */
  getGlobalBirthByYear(year,births) {
    let birthByYear = 0
    births.forEach(element => {
      if (element.fields.annee == year) {
        birthByYear = birthByYear + element.fields.nb_naissances
        
      }
    });
     return birthByYear
  }

  /**
   * Gettting the number births by sexe for specified year
   * @param {Number} year 
   * @param {Number} births 
   * @returns number of birth for "year"
   */
   getBirthByYearAndSexe(year,births,sexe) {
    let birthByYear = 0
    births.forEach(element => {
      if (element.fields.annee == year && sexe == element.fields.sexe ) {
        birthByYear = birthByYear + element.fields.nb_naissances
        
      }
    });
     return birthByYear
  }
  /**
   * The getter for year array, by removing duplicate values
   */
  getYears(births) {
    let years = []
   births.forEach(element => {
        if (!years.includes(element.fields.annee)) {
           years.push(element.fields.annee)
        }
      })

      return years.sort((a, b) => a - b)
  }

  /**
   * The total of births
   */
   getTotalOfBirths(births) {
    let total = 0
   births.forEach(element => {
      total = total + element.fields.nb_naissances
   })
      return total
  }

   /**
   * The total of births by sexe
   */
    getTotalOfBirthsBySexe(births,sexe) {
      let total = 0
     births.forEach(element => {
      if (sexe == element.fields.sexe ) {
        total = total + element.fields.nb_naissances
      }
        
     })
        return total
    }

    
}

  