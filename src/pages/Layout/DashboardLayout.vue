<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/eventsList">
        <md-icon>event</md-icon>
        <p>Evenements de Nantes</p>
      </sidebar-link>
     <sidebar-link to="/favoris">
        <md-icon>favorite</md-icon>
        <p>Favoris</p>
      </sidebar-link>
        <sidebar-link to="/myEvents">
        <md-icon>event_note</md-icon>
        <p>Mes évenements</p>
      </sidebar-link>
    </side-bar>
    

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  }
};
</script>
