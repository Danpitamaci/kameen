<template>
  <form>
    <md-card>
      <md-card-header data-background-color="green">
        <h4 class="title">Créer votre nouveau évenement</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Titre</label>
              <md-input
                v-model="myEvent.nom"
                @change="checkForm"
                type="text"
                required
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Date</label>
              <md-input
                v-model="myEvent.date"
                @change="checkForm"
                type="date"
                required
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Heure de début</label>
              <md-input
                v-model="myEvent.heure_debut"
                @change="checkForm"
                type="string"
                required
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Heure de fin</label>
              <md-input
                v-model="myEvent.heure_fin"
                @change="checkForm"
                type="string"
                required
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adresse</label>
              <md-input
                v-model="myEvent.adresse"
                type="text"
                required
                @change="checkForm"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Quartier</label>
              <md-input
                v-model="myEvent.lieu_quartier"
                type="text"
                required
                @change="checkForm"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
            <md-field>
              <label>Tarifs</label>
              <md-input
                v-model="myEvent.precisions_tarifs"
                type="text"
                required
                @change="checkForm"
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Description</label>
              <md-textarea
                v-model="myEvent.description"
                required
                @change="checkForm"
              ></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <label>Image</label><br />
            <input
              type="file"
              accept="image/*"
              @change="uploadImage($event)"
              id="file-input"
              required
            />
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button
              :disabled="!isValidForm"
              type="submit"
              @click="addEventToStorage"
              class="md-raised md-success"
              >Ajouter</md-button
            >
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
export default {
  name: "edit-profile-form",
  data() {
    return {
      myEvent: {
        //unique id
        id: Date.now(),
        nom: null,
        adresse: null,
        lieu_quartier: null,
        date: null,
        heure_debut: null,
        heure_fin: null,
        description: null,
        media_url: null,
        precisions_tarifs: null,
        onglet: "myEvent",
      },
      isValidForm: false,
    };
  },
  methods: {
    addEventToStorage(value) {
      Storage.set({
        key: this.myEvent.id,
        value: JSON.stringify(this.myEvent),
      }).then(()=>{
        this.$router.push({path:'myEvents'})
      });
    },
    uploadImage(event) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        console.log(reader.result);
        this.myEvent.media_url = reader.result;
        this.checkForm();
      });
    },
    checkForm() {
      this.isValidForm =
        this.myEvent.nom &&
        this.myEvent.adresse &&
        this.myEvent.date &&
        this.myEvent.description &&
        this.myEvent.precisions_tarifs &&
        this.myEvent.media_url &&
        this.myEvent.lieu_quartier &&
        this.myEvent.heure_debut;
    },
  },
};
</script>
<style></style>