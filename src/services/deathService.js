/**
 * Class that allow to retrive data from "Nombre annuel de decès" API
 */

import CommonService from './commonService'

  export default class DeathRate {
    /**
     * The Constructor
     */
    constructor () {
      this.datasetID = "244400404_nombre-annuel-deces-nantes"
      this.sort ="-annee"
      this.facet ="facet=annee&facet=sexe"
      this.rows = 10
      this.requestsHeaders = {
        'Content-Type': 'Application/json'
      }
      this.deaths=[]
      
    }
    /**
     * retrieve the dataset "nombre-annuel-deces-nantes"
     * @returns the list of first 10 items of the dataset
     */
    getDeaths() {
      const commonService = new CommonService(this.datasetID,this.sort,this.facet,this.rows)
      this.deaths = commonService.getData()
      return this.deaths
    }

    /**
     * Getting global death evolution
     */
     getGlobalDeathsEvolution(years,deaths) {
      let globalDeathEvolution = years.map(
      item => {
        return this.getGlobalDeathByYear(item,deaths)
      } 
    )

      return globalDeathEvolution
    }

    /**
     * Getting death evolution by sexe 
     * @param {Number} years 
     * @param {Array} deaths 
     * @param {String} sexe 
     * @returns array of deaths numbers by sexe
     */
     getDeathsEvolutionBySexe(years,deaths,sexe) {
      let deathEvolutionBySexe = years.map(
      item => {
        return this.getDeathByYearAndSexe(item,deaths,sexe)
      } 
    )

      return deathEvolutionBySexe
    }

  
  /**
   * Gettting the number of deaths by a specified year
   * @param {Number} year 
   * @param {Number} deaths 
   * @returns number of death for "year"
   */
  getGlobalDeathByYear(year,deaths) {
    let deathByYear = 0
    deaths.forEach(element => {
      if (element.fields.annee == year) {
        deathByYear = deathByYear + element.fields.deces
        
      }
    });
     return deathByYear
  }

  /**
   * Gettting the number deaths by sexe for specified year
   * @param {Number} year 
   * @param {Number} deaths 
   * @returns number of death for "year"
   */
   getDeathByYearAndSexe(year,deaths,sexe) {
    let deathByYear = 0
    deaths.forEach(element => {
      if (element.fields.annee == year && sexe == element.fields.sexe ) {
        deathByYear = deathByYear + element.fields.deces
        
      }
    });
     return deathByYear
  }
  /**
   * The getter for year array, by removing duplicate values
   */
  getYears(deaths) {
    let years = []
   deaths.forEach(element => {
        if (!years.includes(element.fields.annee)) {
           years.push(element.fields.annee)
        }
      })

      return years.sort((a, b) => a - b)
  }

  /**
   * The total of deaths
   */
   getTotalOfDeaths(deaths) {
    let total = 0
    deaths.forEach(element => {
      total = total + element.fields.deces
   })
      return total
  }
}

  