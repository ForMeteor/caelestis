<!--  -->
<template>
  <div class="lau">
    <!-- <sideNav></sideNav> -->
    <div>{{msg|formdate}}</div>
    <div>{{msg2|decimalTwo}}</div>
  </div>
</template>

<script>
import sideNav from './../../components/sideNav'
export default {
  name: 'lau',
  data () {
    return {
      msg: '342342342342422',
      msg2: 222,
      value: true
    }
  },

  components: {
  },

  computed: {},

  mounted () {
  },
  methods: {
  }
}

</script>
<style scoped>
.lau{
    width: 100%;
    height: 2000px;
    box-sizing: border-box;
    padding: 100px;
    background: linear-gradient(red 0%,blue 50%,yellow 100%);
}
</style>
