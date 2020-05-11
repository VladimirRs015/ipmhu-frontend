<template>
  <div class="container"  v-click-outside="closeDropdown">
    <div class="dropdown is-active is-right">
      <div class="dropdown-trigger" @click="showBox">
        <slot></slot>
      </div>
      <div class="dropdown-menu" v-show="boxVisible">
        <div class="dropdown-content">
          <div class="dropdown-item has-text-centered">
            <a class="subtitle">Vladimir</a>
          </div>
          <div class="dropdown-item">
            <a>Configuracion</a>
          </div>
          <div class="dropdown-item">
            <a>Calificaciones</a>
          </div>
          <div class="dropdown-item">
            <a>Asignaciones</a>
          </div>
          <div class="dropdown-item" @click="logout">
            <div class="button is-outlined">Salir</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import  clickOutside from 'buefy/src/directives/clickOutside'
export default {
  data() {
    return {
      boxVisible: false,
      dropdownItems : [
          {

          }
      ]
    };
  },
  directives:{
    clickOutside
  },
  methods: {
    showBox() {
      return (this.boxVisible = !this.boxVisible);

    },
    closeDropdown(){
      return this.boxVisible = false
    },
    logout(){
      this.$store.commit('logout')
      return this.$router.push({name : 'signin'})
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  margin-top: 0.4em;
}
.dropdown-menu::before {
  box-sizing: border-box;
  content: "";
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-bottom: 20px;
  border-top: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid white;
  border-left: 15px solid transparent;
  position: absolute;
}
@media screen and(max-width : 1025px) {
  .dropdown-menu {
    position: absolute;
    left: 0 !important;
  }
  .dropdown-menu::before {
    top: -20px;
    left: 10px;

  }
}

@media screen and(min-width : 1025px) {
  .dropdown-menu::before {
    top: -20px;
    right: 10px;
  }
}
</style>