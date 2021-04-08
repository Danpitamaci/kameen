<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="" @click="showBrowser">
              Code source
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="" @click="showBrowser" target="_blank"
          >BAH - NEJI</a
        >, Made for studies purpose
      </div>
         <div class="copyright text-center" v-if="loc">
         <p>Votre position est : *Latitude: <strong>{{loc.coords.latitude}}</strong>   *Longitude: <strong>{{loc.coords.longitude}}</strong></p>
      </div>
      <div>
</div>
    </div>
  </footer>
</template>
<script>
import { Plugins } from '@capacitor/core'
export default {
  data() {
    return {
      //****  current position***/
      loc: null,
    }
  },
  methods: {

    /***** position **** */
    async getCurrentPosition(){
      const { Geolocation } = Plugins;
      const loc = await Geolocation.getCurrentPosition()
      this.loc = loc
    },
    async showBrowser(){
      const { Browser } = Plugins;
      await Browser.open({ url: 'https://github.com/Danpitamaci/kameen' });
    }
  },
  created(){
   this.getCurrentPosition() 
  }
};
</script>
<style></style>
