<template>

    <section>
      <div class="container">
        <div class="columns is-tablet">
          <div class="column is-4 is-offset-4">
            <h1 class="title is-3 has-text-centered">Ingresar</h1>
            <b-field>
              <b-input
                placeholder="Email"
                v-model="form.email"
                type="email"
                icon="email"
                icon-right="close-circle"
              ></b-input>
            </b-field>

            <b-field>
              <b-input
                type="password"
                v-model="form.password"
                placeholder="Password"
                password-reveal
              ></b-input>
            </b-field>
            <b-field>
              <b-button
                @click="sendForm"
                class="form-submit-button"
                tag="input"
                native-type="submit"
                type="is-primary"
                value="Enviar"
              />
            </b-field>
          </div>
        </div>
      </div>
    </section>

</template>

<script>
export default {
  data() {
    return {
      form: {
        // email: null,
        // password: null,
        email: "camprexx.rd@gmail.com",
        password: "Bestking015015"
      }
    };
  },
  methods: {
    async sendForm() {
      try {
        const res = await this.$http.post("/signin", this.form);

        this.$store.commit("login", res.data);
        //User View
        this.$router.push({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.form-submit-button {
  width: 100%;
}
</style>