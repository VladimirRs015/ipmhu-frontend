import Vue from "vue";

import axios from "axios";
const origin = "http://localhost:4000"
const devInstance = createInstance(origin);
// const productionInstance = createInstance('http://localhost:undefined');

function createInstance(baseURL) {
  return new axios.create({
    baseURL,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": origin,
    "Access-Controll-Allow-Methods": "GET PUT UPDATE DELETE",
    Authorization: ``,
  });
}

export default {
  install() {
    Vue.prototype.$http = devInstance;
  },
};
