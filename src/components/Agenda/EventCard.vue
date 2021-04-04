<template>
  <md-card>
    <md-card-media>
      <img
        :src="event.media_url"
        alt="People"
        style="width: fit-content; height: fit-content"
      />
    </md-card-media>
    <md-card-content>
      <strong>{{ event.nom }}</strong
      ><br />
      <div class="with-icon">
        <span class="material-icons"> event</span>
        <span> Le {{ event.date }} à partir de {{ event.heure_debut }}</span>
      </div>
      <br />
      <span>{{ event.adresse }}</span
      ><br />
      <span>{{ event.lieu_quartier }}</span
      ><br />
    </md-card-content>

    <md-card-actions>
      <md-button class="md-round md-success" v-on:click="showDialog = true">
        <md-icon>remove_red_eye</md-icon>
        Détails</md-button
      >
    </md-card-actions>
    <modal :event="event" :showDialog="showDialog" @closed="closed" />
  </md-card>
</template>
<script>
import modal from "./modal.vue";
export default {
  components: { modal },
  name: "event-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
    event: {
      accueil_enfant: String,
      adresse: String,
      annule: String,
      carte_blanche: String,
      code_postal: String,
      complet: String,
      date: String,
      description: String,
      emetteur: String,
      gratuit: String,
      h_auditif: String,
      h_hyperacousie: String,
      h_intellectuel: String,
      h_lsf: String,
      h_moteur: String,
      h_psychique: String,
      h_visuel: String,
      heure_debut: String,
      heure_fin: String,
      id_manif: String,
      lien_agenda: String,
      lieu_quartier: String,
      location: String,
      media_url: String,
      nom: String,
      precisions_tarifs: String,
      reporte: String,
      rubrique: String,
      type: String,
      ville: String,
    },
  },
  data() {
    return {
      showDialog: false,
    };
  },
   methods: {
    closed (value) {
      this.showDialog = false 
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  max-width: 320px;
  margin: 1%;
  display: inline-block;
  vertical-align: top;
}
.slot {
  display: block;
}
.with-icon {
  display: flex;
  align-items: center;
}
</style>