<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-3">Algunos de nuestros maestros</h1>
      </div>
    </div>
    <div class="container">
      <ul>
        <div class="container">
          <div class="columns is-multiline is-narrow is-gapless">
            <li  class="column is-3" v-for="product in Products" :key="product.id">
                <productCard
                  :offer="product.offer"
                  :rating="product.rating"
                  :image="product.image"
                  :title="product.title"
                />
            </li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import productCard from "../presentation/teacherCard";
export default {
  data() {
    return {
      test: 0,
      ProductCards: [
        {
          title: "Slide 1",
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
          rating: 4.4,
          offer: true,
          id: 1
        },
        {
          title: "Slide 2",
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
          rating: 3.5,
          offer: true,
          id: 2
        },
        {
          title: "Slide 3",
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
          rating: 5,
          offer: false,
          id: 3
        },
        {
          title: "Slide 3",
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
          rating: 5,
          offer: true,
          id: 4
        },
        {
          title: "Slide 3",
          image: "https://buefy.org/static/img/placeholder-1280x960.png",
          rating: 5,
          offer: false,
          id: 5
        }
      ],
      Products: this.$store.state.Products
    };
  },
  methods: {
    info(value) {
      this.test = value;
    }
  },
  components: {
    productCard
  }
};
</script>


<style lang="scss" scoped>
.samplelist {
}
</style>
