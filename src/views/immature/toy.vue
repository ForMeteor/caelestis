<!-- 前后台传值测试 -->
<template>
  <div class="toy_wrap" id="container">
  </div>
</template>

<script>
import * as Three from 'three'
export default {
  name: 'charts',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  components: {
    // Dice
  },
  computed: {},
  mounted () {
    this.init()
    this.animate()
  },
  methods: {
    init: function () {
      let container = document.getElementById('container')
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 0.6
      this.scene = new Three.Scene()
      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()
      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    }
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
