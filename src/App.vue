<template>
  <div id="app">
    <div class="nav" >
      <navbar />
    </div>
    <router-view />
    <mainFooter />
  </div>
</template>
<script>
import navbar from "@/components/layout/main_navbar";
import mainFooter from "@/components/layout/main_footer";
export default {
  name: "app",
  data() {
    return {};
  },
  created(){
    },
  methods :{
  },
  components: {
    navbar,
    mainFooter
  }
};
</script>
<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
// Float 
// $flat1 : #34495e ; 
$clouds : #ecf0f1; 
$concrete : #95a5a6; 
$midnight: #2c3e50 ; 
$midnight-invert: findColorInvert($midnight);
$primary: #34495e;
$primary-invert: findColorInvert($primary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$warning: #e65c51;
$danger: #d91e1e;
// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $clouds,
    $light-invert
  ),
  "concrete": (
    $concrete,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "redalert": (
    $danger,
    $danger-invert
  ),
  "midnight": (
    $midnight,
    $midnight-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

</style>
