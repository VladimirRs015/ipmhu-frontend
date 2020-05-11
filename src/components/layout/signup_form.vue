<template>
  <section>
      <h1 class="title is-2 has-text-centered"> Registrarse</h1>
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <b-field label="Nombre">
          <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email" type="is-sucess" message="This email is invalid">
          <b-input type="email" value="john@" maxlength="30"></b-input>
        </b-field>

        <b-field label="Nombre de usuario" message="This username is available">
          <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" value="iwantmytreasure" ></b-input>
        </b-field>
        <b-field label="Confirma el Password">
          <b-input type="password" value="iwantmytreasure" password-reveal></b-input>
        </b-field>
        <b-field > 
            <b-button class="form-submit-button" tag="input"
                native-type="submit"
                type="is-primary"
                value="Enviar"  />
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  }
};
</script>
<style lang="scss" scoped>
    .form-submit-button{
        width: 100%;
    }
</style>