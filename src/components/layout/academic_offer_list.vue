<template>
  <div class="container" >
    <h1 class="title is-3 " id="academicOffers"> Conoce nuestra oferta academica</h1>
    <div class="columns is-multiline is-tablet">
      <div class="column is-4" v-for="offer in offers" :key="offer.id">
        <academicOfferCard/>
      </div>
    </div>
  </div>
</template>

<script>
import academicOfferCard from '../presentation/academic_offer_card' 
export default {
  name: "academicOfferList",
  data() {
    return {
      offers: [
        {
          id: 1,
          module: "Informatica",
          function: ""
        },
        {
          id: 2,
          module: "Electronica",
          function: ""
        },
        {
          id: 3,
          module: "Logistica",
          function: ""
        },
        {
          id: 4,
          module: "Electricidad",
          function: ""
        },
        {
          id: 5,
          module: "Contabilidad",
          function: ""
        },
        {
          id: 11,
          module: "Contabilidad",
          function: ""
        },
        {
          id: 10,
          module: "Contabilidad",
          function: ""
        },{
          id: 9,
          module: "Contabilidad",
          function: ""
        }
      ]
    };
  },
  components : {
    academicOfferCard,
  },
  methods: {
    send(offer) {
      //stored in the state
      this.$store.state.offer = offer;
      console.log(this.$store.state);
    },
    ModuleInfo(id) {
      this.$router.push({
        name: "academicDatails",
        params: { id: id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>