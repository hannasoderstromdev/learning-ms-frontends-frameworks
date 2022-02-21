import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Use browserHistory for development environment
// Otherwise, share memoryHistory between micro frontend clients
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const devRootEl = document.querySelector("#_dashboard-dev-root");

  if (devRootEl) {
    mount(devRootEl);
  }
}

export { mount };
