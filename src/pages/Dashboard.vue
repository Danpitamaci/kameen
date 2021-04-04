<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="globalBirthsEvolutionChart.data"
          :chart-options="globalBirthsEvolutionChart.options"
          :chart-responsive-options="globalBirthsEvolutionChart.responsiveOptions"
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
          data-background-color="red"
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
          :chart-type="'Line'"
          data-background-color="green"
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
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">Revenue</p>
            <h3 class="title">$34,245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>date_range</md-icon>
              Last 24 Hours
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">Used Space</p>
            <h3 class="title">
              49/50
              <small>GB</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">Get More Space...</a>
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
            <p class="category">Fixed Issues</p>
            <h3 class="title">75</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>local_offer</md-icon>
              Tracked from Github
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fab fa-twitter"></i>
          </template>

          <template slot="content">
            <p class="category">Folowers</p>
            <h3 class="title">+245</h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>
          </template>
        </stats-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">Employees Stats</h4>
            <p class="category">New employees on 15th September, 2016</p>
          </md-card-header>
          <md-card-content>
            <ordered-table table-header-color="orange"></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable
} from "@/components";
import BirthService from '../services/birthService'
export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable
  },
  data() {
    return {
      births : [],
      years : [],
      globalBirthEvolution : [],
      boysBirthEvolution : [],
      girlsBirthEvolution : [],
      //global
      globalBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 10
          }
        }
      },
      
      //boys
      boysBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
         
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 8
          }
        }
      },
      //girls
      girlsBirthsEvolutionChart: {
        data: {
          labels: [],
          series: [[]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 10
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },
  methods: {
     setGlobalBirthEvolutionChart(){
       this.globalBirthsEvolutionChart.data.labels = this.years
       this.globalBirthsEvolutionChart.data.series = [this.globalBirthEvolution]
     },
     setBoysBirthEvolutionChart(){
       this.boysBirthsEvolutionChart.data.labels = this.years
       this.boysBirthsEvolutionChart.data.series = [this.boysBirthEvolution]
     },
     setGirlsBirthEvolutionChart(){
       this.girlsBirthsEvolutionChart.data.labels = this.years
       this.girlsBirthsEvolutionChart.data.series = [this.girlsBirthEvolution]
     }
  },
   async mounted () {

   const  birthService = new BirthService()
      this.births = await  birthService.getBirths()
      this.births = this.births.data.records
    console.log(this.births)

    this.years = await birthService.getYears(this.births)
    console.log(this.years)
    
    //global
    this.globalBirthEvolution =  await birthService.getGlobalBirthsEvolution(this.years,this.births)
    console.log(this.globalBirthEvolution)
    //boys
    this.boysBirthEvolution =  await birthService.getBirthsEvolutionBySexe(this.years,this.births,"GARCON")
    console.log(this.boysBirthEvolution)
    //girls
    this.girlsBirthEvolution =  await birthService.getBirthsEvolutionBySexe(this.years,this.births,"FILLE")
    console.log(this.girlsBirthEvolution)


    this.setGlobalBirthEvolutionChart()
    this.setBoysBirthEvolutionChart()
    this.setGirlsBirthEvolutionChart()
   
     
  }
};
</script>
