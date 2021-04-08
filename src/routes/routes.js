import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Favoris from "@/pages/Favoris.vue";
import NouveauEvent from "@/pages/NouveauEvent.vue";
import EventsList from "@/pages/EventsList.vue";
import MyEvents from "@/pages/MyEvents.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/eventsList",
    children: [
      {
        path: "eventsList",
        name: "Evenements",
        component: EventsList
      },
      {
        path: "nouveauEvent",
        name: "Nouveau évenement",
        component: NouveauEvent
      },
      {
        path: "favoris",
        name: "Favoris",
        component: Favoris
      },
      {
        path: "myEvents",
        name: "Mes evenements",
        component: MyEvents
      },
    ]
  }
];

export default routes;
