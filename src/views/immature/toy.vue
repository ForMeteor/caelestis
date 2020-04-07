<!-- three.js test -->
<template>
  <div class="toy_wrap" id="container">
  </div>
</template>

<script>
import * as Three from 'three'
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
    console.log(this.data)
    this.init()
    this.animate()
  },
  methods: {
    // objLoader.load('https://cywarr.github.io/small-shop/Kirche3D.obj'...
    init: function () {
      let container = document.getElementById('container')
      // this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      // this.camera.position.z = 0.6
      // 70 物体距离视野的位置
      this.camera = new Three.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 500)
      this.camera.position.set(0, 0, 100)
      this.camera.lookAt(0, 0, 0)
      // this.controls = new Three.OrbitControls(this.camera)
      this.scene = new Three.Scene()
      // let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let box = new Three.BoxGeometry(1, 1, 50)
      // let geometry = new Three.Geometry()
      // var vertices = [
      //   new Three.Vector3(10, 10, 10), // v0
      //   new Three.Vector3(-10, 10, 10), // v1
      //   new Three.Vector3(-10, -10, 10), // v2
      //   new Three.Vector3(10, -10, 10), // v3
      //   new Three.Vector3(10, -10, -10), // v4
      //   new Three.Vector3(10, 10, -10), // v5
      //   new Three.Vector3(-10, 10, -10), // v6
      //   new Three.Vector3(-10, -10, -10) // v7
      // ]
      // var faces = [
      //   new Three.Face3(0, 1, 2),
      //   new Three.Face3(0, 2, 3),
      //   new Three.Face3(0, 3, 4),
      //   new Three.Face3(0, 4, 5),
      //   new Three.Face3(1, 6, 7),
      //   new Three.Face3(1, 7, 2),
      //   new Three.Face3(6, 5, 4),
      //   new Three.Face3(6, 4, 7),
      //   new Three.Face3(5, 6, 1),
      //   new Three.Face3(5, 1, 0),
      //   new Three.Face3(3, 2, 7),
      //   new Three.Face3(3, 7, 4)
      // ]
      // geometry.vertices = vertices
      // geometry.faces = faces
      let material = new Three.MeshBasicMaterial({ color: 0xffa500 })
      // let material = new Three.LineBasicMaterial({ color: 0x0000ff })
      // this.line = new Three.Line(geometry, material)
      this.mesh = new Three.Mesh(box, material)
      this.scene.add(this.mesh)
      var dir = new Three.Vector3(0, 30, 0)
      var origin = new Three.Vector3(0, 0, 0)
      var length = 40
      var hex = 0xffff00
      var arrowHelper = new Three.ArrowHelper(dir, origin, length, hex)
      this.scene.add(arrowHelper)
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
