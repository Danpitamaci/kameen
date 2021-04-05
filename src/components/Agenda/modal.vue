<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>{{ event.nom }}</md-dialog-title>
    <md-dialog-content>
      <div class="content">
        <div style="width: 50%">
          <img
            :src="event.media_url"
            alt="People"
            class=""
            style="width: fit-content; height: fit-content"
          />
        </div>
        <div class="details">
          <span v-if="event.adresse !==''"><strong>Adresse : </strong>{{ event.adresse }}</span>
          <span><strong>Quartier : </strong>{{ event.lieu_quartier }}</span>
         
          <span><strong>Date : </strong>{{ event.date }}</span>
          <span
            ><strong>Heure : </strong> de {{ event.heure_debut }}
           à  {{ event.fin }}</span
          >
                   <span><strong>Tarif : </strong>{{ event.precisions_tarifs }}</span>
          <span><strong>Rubrique : </strong>{{ event.rubrique }}</span>
        </div>
      </div>
      <div style="margin-top: 1%">
        <span><strong>Description : </strong>{{ event.description }}</span>
      </div>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-danger" @click="onClose"
        >Fermer</md-button
      >
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  name: "modal",
  props: {
    showDialog: Boolean,
    event: Object,
  },
  model:{
          event: 'change'
  },
  methods:{
      onClose($event){
      this.showDialog = false
      this.$emit('closed',this.showDialog)
      }
  }
};
</script>
<style scoped>
.content {
  display: inline-flex;
  margin-block: 5px;
}
.details {
  width: 50%;
  display: inline-grid;
  margin: 2%;
}
</style>