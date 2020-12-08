import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

import { FontAwesomeIcon } from '@/plugins/font-awesome'

import BasePaper from "@/components/BasePaper.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseInput from "@/components/BaseInput.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .component("base-paper", BasePaper)
  .component("base-button", BaseButton)
  .component("base-input", BaseInput)
  .mount("#app");
