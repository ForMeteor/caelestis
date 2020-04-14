<!-- three.js test -->
<template>
  <div class="toy_wrap" id="container">
  </div>
</template>

<script>
import Data from '@/common/constant'
export default {
  name: 'charts',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      controls: null,
      mesh: null,
      mesh2: null,
      line: null,
      data: Data
    }
  },
  components: {
    // Dice
  },
  computed: {},
  mounted () {
  },
  methods: {
  }
}

</script>
<style  scoped>
.toy_wrap{
  position: absolute;
  top: 0;bottom: 0;left: 0;right: 0;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around
}
</style>
