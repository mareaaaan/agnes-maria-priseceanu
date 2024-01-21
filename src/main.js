import { createApp } from "vue";
import "./styles/style.css";
import "./styles/reset.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.mount("#app");