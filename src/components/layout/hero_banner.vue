<template>
  <section class="hero is-medium is-midnight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline is-tablet">
          <div class="container">
            <div class="column is-12">
              <SearchAutoComplete />
            </div>
          </div>
          <div class="column is-12">
            <h1 class="title is-1 has-text-white">Large title</h1>
            <h2
              class="subtitle has-text-white"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut obcaecati modi velit sint doloremque iusto, debitis fuga corporis maxime excepturi. Ad minus quibusdam provident deserunt odit cumque, atque placeat reiciendis!</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchAutoComplete from "@/components/presentation/searchAutoComplete";
export default {
  name: "HeroBanner",
  components: {
    SearchAutoComplete
  }
};
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  margin-bottom: 2.5em;
}
.hero-body {
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  // @media screen(min-width: 500px) {
  //   .hero-body{
  //     background-size : c;
  //   }
  // }
}

</style>
