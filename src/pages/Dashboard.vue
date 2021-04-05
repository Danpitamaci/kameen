<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="globalBirthsEvolutionChart.data"
          :chart-options="globalBirthsEvolutionChart.options"
          :chart-responsive-options="
            globalBirthsEvolutionChart.responsiveOptions
          "
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Evolution des naissances</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> Pic
              </span>
              des naissances en 2019
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="boysBirthsEvolutionChart.data"
          :chart-options="boysBirthsEvolutionChart.options"
           :chart-responsive-options="boysBirthsEvolutionChart.responsiveOptions"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Evolution des naissances de garçons</h4>
            <p class="category">
              Evolution différente de la globale
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="girlsBirthsEvolutionChart.data"
          :chart-options="girlsBirthsEvolutionChart.options"
           :chart-responsive-options="girlsBirthsEvolutionChart.responsiveOptions"
          :chart-type="'Line'"
          data-background-color="purple"
        >
          <template slot="content">
            <h4 class="title">Evolution des naissances de filles</h4>
            <p class="category">
              Tendance similaire à la globale
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>pregnant_woman</md-icon>
          </template>

          <template slot="content">
            <p class="category">Naissances</p>
            <h3 class="title">{{ totalBirths }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Nés depuis 2016
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>male</md-icon>
          </template>

          <template slot="content">
            <p class="category">Garçons</p>
            <h3 class="title">
              {{ totalBirthsBoys }}
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Nés depuis 2016
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="purple">
          <template slot="header">
            <md-icon>female</md-icon>
          </template>

          <template slot="content">
            <p class="category">Filles</p>
            <h3 class="title">{{ totalBirthsGirls }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Nées depuis 2016
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">Decès</p>
            <h3 class="title">{{ totalDeaths }}</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Depuis 2016
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="globalDeathsEvolutionChart.data"
          :chart-options="globalDeathsEvolutionChart.options"
           :chart-responsive-options="globalDeathsEvolutionChart.responsiveOptions"
          :chart-type="'Line'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title">Evolution global des decès</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> Pic
              </span>
              des decès en 2019
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="boysDeathsEvolutionChart.data"
          :chart-options="boysDeathsEvolutionChart.options"
          :chart-responsive-options="boysDeathsEvolutionChart.responsiveOptions"
          :chart-type="'Line'"
          data-background-color="orange"
        >
          <template slot="content">
            <h4 class="title">Evolution des decès d'homme</h4>
            <p class="category">
              Evolution différente de la tendance globale
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="girlsDeathsEvolutionChart.data"
          :chart-options="girlsDeathsEvolutionChart.options"
           :chart-responsive-options="girlsDeathsEvolutionChart.responsiveOptions"
          :chart-type="'Line'"
          data-background-color="grey"
        >
          <template slot="content">
            <h4 class="title">Evolution des decès de femmes</h4>
            <p class="category">
              Tendance similaire à la globale
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              Mise à jour quotidien
            </div>
          </template>
        </chart-card>
      </div>
    </div>
  </div>
</template>

<script>
import { StatsCard, ChartCard } from "@/components";
import BirthService from "../services/birthService";
import DeathService from "../services/deathService";
export default {
  components: {
    StatsCard,
    ChartCard,
  },
  data() {
    return {
      //*****************Births******************//
      births: [],
      years: [],
      totalBirths: 0,
      totalBirthsBoys: 0,
      totalBirthsGirls: 0,
      globalBirthEvolution: [],
      boysBirthEvolution: [],
      girlsBirthEvolution: [],
      //global
      globalBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 1,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },

      //boys
      boysBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),

          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      //girls
      girlsBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 10,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      //*****************Deaths******************//
      deaths: [],
      deathsYears: [],
      totalDeaths: 0,
      globalDeathEvolution: [],
      boysDeathEvolution: [],
      girlsDeathEvolution: [],
      //global
      globalDeathsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },

      //boys
      boysDeathsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),

          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
      //girls
      girlsDeathsEvolutionChart: {
        data: {
          labels: [],
          series: [[]],
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0,
          }),
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10,
          },
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                },
              },
            },
          ],
        ],
      },
    };
  },
  methods: {
    //***********Births*******************//

    async getBirthsStuffs() {
      const birthService = new BirthService();
      this.births = await birthService.getBirths();
      this.births = this.births.data.records;
      console.log(this.births);

      this.years = await birthService.getYears(this.births);
      console.log(this.years);

      //global
      this.totalBirths = await birthService.getTotalOfBirths(this.births);
      console.log(this.totalBirths);

      this.globalBirthEvolution = await birthService.getGlobalBirthsEvolution(
        this.years,
        this.births
      );
      console.log(this.globalBirthEvolution);
      //boys
      this.totalBirthsBoys = await birthService.getTotalOfBirthsBySexe(
        this.births,
        "GARCON"
      );
      console.log(this.totalBirthsBoys);

      this.boysBirthEvolution = await birthService.getBirthsEvolutionBySexe(
        this.years,
        this.births,
        "GARCON"
      );
      console.log(this.boysBirthEvolution);
      //girls
      this.totalBirthsGirls = await birthService.getTotalOfBirthsBySexe(
        this.births,
        "FILLE"
      );
      console.log(this.totalBirthsGirls);

      this.girlsBirthEvolution = await birthService.getBirthsEvolutionBySexe(
        this.years,
        this.births,
        "FILLE"
      );
      console.log(this.girlsBirthEvolution);
    },

    setGlobalBirthEvolutionChart() {
      this.globalBirthsEvolutionChart.data.labels = this.years;
      this.globalBirthsEvolutionChart.data.series = [this.globalBirthEvolution];
    },
    setBoysBirthEvolutionChart() {
      this.boysBirthsEvolutionChart.data.labels = this.years;
      this.boysBirthsEvolutionChart.data.series = [this.boysBirthEvolution];
    },
    setGirlsBirthEvolutionChart() {
      this.girlsBirthsEvolutionChart.data.labels = this.years;
      this.girlsBirthsEvolutionChart.data.series = [this.girlsBirthEvolution];
    },

    //***********Deaths*******************/
    async getDeathsStuffs() {
      const deathService = new DeathService();
    this.deaths = await deathService.getDeaths();
    this.deaths = this.deaths.data.records;
    console.log(this.deaths);

    this.deathsYears = await deathService.getYears(this.deaths);
    console.log(this.deathsYears);
    //global
    this.totalDeaths = await deathService.getTotalOfDeaths(this.deaths);
    console.log(this.totalDeaths);

    this.globalDeathEvolution = await deathService.getGlobalDeathsEvolution(
      this.deathsYears,
      this.deaths
    );
    console.log(this.globalDeathEvolution);
    //boys
    this.boysDeathEvolution = await deathService.getDeathsEvolutionBySexe(
      this.deathsYears,
      this.deaths,
      "Homme"
    );
    console.log(this.boysDeathEvolution);
    //girls
    this.girlsDeathEvolution = await deathService.getDeathsEvolutionBySexe(
      this.deathsYears,
      this.deaths,
      "Femme"
    );
    console.log(this.girlsDeathEvolution);

    },
    setGlobalDeathEvolutionChart() {
      this.globalDeathsEvolutionChart.data.labels = this.deathsYears;
      this.globalDeathsEvolutionChart.data.series = [this.globalDeathEvolution];
    },
    setBoysDeathEvolutionChart() {
      this.boysDeathsEvolutionChart.data.labels = this.deathsYears;
      this.boysDeathsEvolutionChart.data.series = [this.boysDeathEvolution];
    },
    setGirlsDeathEvolutionChart() {
      this.girlsDeathsEvolutionChart.data.labels = this.deathsYears;
      this.girlsDeathsEvolutionChart.data.series = [this.girlsDeathEvolution];
    },
  },
   mounted() {
    /**
     * Births API managements
     */
     this.getBirthsStuffs()

    this.setGlobalBirthEvolutionChart();
    this.setBoysBirthEvolutionChart();
    this.setGirlsBirthEvolutionChart();

    /**
     * Deaths API managements
     */
    this.getDeathsStuffs()
    

    this.setGlobalDeathEvolutionChart();
    this.setBoysDeathEvolutionChart();
    this.setGirlsDeathEvolutionChart();
  },

  watch : {
    globalBirthsEvolutionChart : {
      handler : "setGlobalBirthEvolutionChart",
      deep : true
    }
  }
};
</script>
