<template>
  <header>
    <b-navbar>
      <template slot="brand">
        <b-navbar-item class="is-3by3" tag="router-link" :to="{ path: '/' }">
          <img src="../../assets/imgs/logo.png" alt="logo del instituto" />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item
          tag="router-link"
          v-for="item in navbarItems"
          :to="{'name':item.link,hash : item.hash}"
          :key="item.title"
        >{{item.title}}</b-navbar-item>
        <b-navbar-item tag="a" href="/#academicOffers">Oferta academica</b-navbar-item>
        <b-navbar-dropdown boxed hoverable label="Informaciones">
          <b-navbar-item to="/" tag="router-link" href="#">Sobre</b-navbar-item>
          <b-navbar-item to="/" tag="router-link" href="#">Contact</b-navbar-item>
        </b-navbar-dropdown>
      </template>
      <template slot="end" v-if="!isLogged">
        <b-navbar-item
          v-for="authbutton in auth"
          :key="authbutton.title"
          tag="router-link"
          :to="{name:authbutton.link}"
        >
          <strong :class="authbutton.class">{{authbutton.title}}</strong>
        </b-navbar-item>
      </template>
      <template slot="end" v-else>
          <UserAvatar/>
      </template>
    </b-navbar>
  </header>
</template>

<script>
import UserAvatar from './user_avatar_menu'
export default {
  name: "MainNavbar",
  data() {
    return {
      navbarItems: [
        {
          title: "Inicio",
          link: "#"
        },
        {
          title: "Maestros",
          link: "#"
        },
        {
          title: "Noticias",
          link: "#"
        },
        {
          title: "Promociones",
          link: "#"
        }
      ],
      auth: [
        {
          link: "signup",
          title: "Registrarse",
          class: "button is-primary"
        },
        {
          link: "signin",
          title: "Ingresar",
          class: "button is-primary is-outlined"
        }
      ],
      categoryDropDown: []
    };
  },
  computed: {
    isLogged() {
      return this.$store.getters.isLogged;
    }
  },
  created() {}
  ,components : {
  UserAvatar,
}
};
</script>

<style lang="scss" scoped>
    
</style>