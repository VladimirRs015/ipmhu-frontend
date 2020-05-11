<template>
  <div class="home">
    <heroBanner/>
    <sampleTeachers/>
    <academicOfferList/>
  </div>
</template>

<script>
// @ is an alias to /src
import heroBanner from '@/components/layout/hero_banner'
import sampleTeachers from '@/components/presentation/some_teachers'
import academicOfferList from '@/components/layout/academic_offer_list'

export default {
  name: 'Home',
  components: {
    heroBanner,
    sampleTeachers,
    academicOfferList
  },
  methods:{
    getData(){
      //  this.$http.get('todos').then(console.log)
    }
  },
  created(){
    this.getData()
  }
}
</script>
