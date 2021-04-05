import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import EventsList from "@/pages/EventsList.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "table",
        name: "Table List",
        component: TableList
      },
      {
        path: "eventsList",
        name: "EventsList",
        component: EventsList
      },
    ]
  }
];

export default routes;
