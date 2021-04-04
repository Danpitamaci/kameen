<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Evenements</h4>
            <p class="category">Nantes métropôle</p>
          </md-card-header>
          <md-card-content style="margin-left:7%">
           <event-card :event="event" v-for="event in events" :key="event.id_manif" ></event-card>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import agendaServices from '@/services/agendaServices'
import EventCard from '../components/Agenda/EventCard.vue';
export default {
  components: { EventCard },
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
 data () {
            return {
                events:[]
            }
 },
   methods: {
            async getAllEvents () {
                const response = await agendaServices.getAllEvents()
                this.events = response.data.records.map( record => record.fields)
            }
        },
 created() {
   this.getAllEvents();
  }
};
</script>
