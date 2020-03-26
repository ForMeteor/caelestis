<!--  -->
<template>
  <div class="normal_back">
  </div>
</template>

<script>
import Dice from '@/components/Dice.vue'
export default {
  name: 'count',
  data () {
    return {

    }
  },
  components: {},
  computed: {},
  mounted () {
  },
  methods: {
    sendG () {
      this.$axios.get('http://47.97.73.43:3006/linkData').then((res) => {
        console.log(res)
      }).catch()
    }
  }
}

</script>
<style  scoped>
</style>
