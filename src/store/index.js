import Vue from "vue";
import Vuex from "vuex";
import auth from './auth_state.js/auth'
import createdPersistedState from 'vuex-persistedstate'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    Products: [
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-pair-of-white-sneakers-isolated-on-white-background-sport-shoes-712448377.jpg",
        title: "Sport Shoes",
        price: 110,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-vintage-red-shoes-on-white-background-92008067.jpg",
        title: "Red SNEAKER",
        price: 91,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-pink-and-black-sport-woman-shoes-isolated-on-white-background-709418083.jpg",
        title: "Sport Shoes Women",
        price: 94,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-children-s-autumn-or-winter-fashion-boots-isolated-on-white-background-708900334.jpg",
        title: "Winter boots children",
        price: 143,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-bangkok-thailand-january-onitsuka-tiger-asics-gel-lyte-iii-on-january-in-bangkok-292088969.jpg",
        title: "Sports shoes Red-White",
        price: 150,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-leather-shoes-isolated-on-white-background-including-clipping-path-216565609.jpg",
        title: "Black leather shoes",
        price: 250,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-casual-shoes-on-white-background-included-clipping-path-667459072.jpg",
        title: "Shoes Canvas",
        price: 50,
        rating: 4,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-white-sneakers-on-white-background-including-clipping-path-1100736923.jpg",
        title: "Shoes White",
        price: 85,
        rating : 4 ,
        offer : true 
      },
      {
        image:
          "https://image.shutterstock.com/z/stock-photo-yellow-sneakers-15066415.jpg",
        title: "Sneakers Yellow",
        price: 125,
        rating: 4,
        offer : true 
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {
    'auth': auth,
  },
  plugins : [createdPersistedState()]
});
