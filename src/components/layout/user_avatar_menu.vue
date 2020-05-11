<template>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow is-flex">
        <figure class="image is-48x48">
          <userInfoBox>
            <img 
              class="is-rounded has-hover"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </userInfoBox>
        </figure>
      </div>
    </div>
  </div>
</template>
<script>
import userInfoBox from "../presentation/user_box_info";
export default {
  name: "UserAvatar",
  data() {
    return {
      show: true
    };
  },
  computed: {},
  components: {
    userInfoBox
  }
};
</script>
<style lang="scss" scoped >
@import "~bulma/sass/utilities/_all";
.myflex {
  flex-direction: column;
  align-items: center;
}
.has-hover:hover {
  border: 2px solid #10254b;
  cursor: pointer;
}
</style>
