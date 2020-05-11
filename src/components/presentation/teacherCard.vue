
<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-5by4 ">
        <a>
          <img :src="image" />
        </a>
      </figure>
      <b-tag type="is-redalert" v-if="offer" rounded style="position: absolute; top: 0;">
        <b>Mas popular</b>
      </b-tag>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-6">{{ title }}</p>
        <div class="field is-grouped">
          <p class="control" v-if="rating">
            <b-rate icon="heart" :value="rating" show-score disabled />
          </p>
          <p class="control" style="margin-left: auto">
            <span class="button  is-redalert is-outlined">
              <b-icon size="is-small" icon="heart" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        title : {
            required : true ,
            type : String 
        },
        image : {
            required : true ,
            type : String 
        },
        offer : {
            required : true ,
            type : Boolean 
        },
        rating : {
            required : true ,
            String : String 
        }
    }
};
</script>

<style>
.cart {
    border : none ; 
}
</style>
    