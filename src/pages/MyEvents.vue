<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Mes évenements favoris</h4>
            <p class="category">Nantes métropôle</p>
          </md-card-header>
          <md-card-content style="margin-left: 7%">
            <event-card
              :event="event"
              v-for="event in events"
              :key="event.id"
              :favoris="false"
              @deleted="deleteEvent"
            ></event-card>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import AgendaService from "../services/agendaServices";
import EventCard from "../components/Agenda/EventCard.vue";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
export default {
  components: { EventCard },
  data() {
    return {
      events: [],
    };
  },
  methods: {
    async getAllEvents() {
      await Storage.keys().then((response) => {
        if (response.keys.length > 0) {
          response.keys.forEach((element) => {
              Storage.get({ key: element }).then((result) => {
              const event = JSON.parse(result.value)
                if (result.value && event.onglet ==="myEvent") {
                  this.events.push(event);
                }
              });
          });
        }
      });
    },

    async deleteEvent(value) {
      await Storage.remove({ key: value }).then((response) => {
        this.events.splice(
          this.events.findIndex(function (i) {
            return i.id === value;
          }),
          1
        );
      });
    },
  },
  mounted() {
    this.getAllEvents();
  },
};
</script>
