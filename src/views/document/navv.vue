<!--  -->
<template>
  <div>
    <div @click="showMenu">侧栏</div>
    <div class="wrapbox" v-show="showNav">
      <Menutree :data="data"></Menutree>
    </div>
  </div>
</template>

<script>
import Menutree from '@/components/Menutree.vue'
export default {
  name: 'navv',
  data () {
    return {
      showNav: false,
      data: [
        {
          title: '1.1',
          level: 1,
          ifOpen: false,
          children: [ {
            title: '1.1.1',
            ifOpen: false,
            level: 2,
            children: [
              {
                title: '1.1.1.1',
                level: 3,
                ifOpen: false,
                children: []
              },
              {
                title: '1.1.1.2',
                level: 3,
                ifOpen: false,
                children: []
              }
            ]
          },
          {
            title: '1.1.2',
            ifOpen: false,
            level: 2,
            children: []
          },
          {
            title: '1.1.3',
            ifOpen: false,
            level: 2,
            children: []
          },
          {
            title: '1.1.4',
            level: 2,
            ifOpen: false,
            children: []
          },
          {
            title: '1.1.5',
            level: 2,
            ifOpen: false,
            children: []
          }]
        },
        {
          title:"1.2",
          ifOpen:false,
          level:1,
          children:[
            {
              title:"1.2.1",
              level:2,
              ifOpen:false,
              children:[]
            },
            {
              title:"1.2.2",
              level:2,
              ifOpen:false,
              children:[]
            }
          ]
        },
        {
          title:"1.3",
          level:1,
          ifOpen:false,
          children:[]
        },
        {
          title:"1.4",
          level: 1,
          ifOpen: false,
          children: []
        }, {
          title: "1.5",
          level: 1,
          ifOpen: false,
          children: []
        }, {
          title: '1.6',
          level: 1,
          ifOpen: false,
          children: []
        }]
    }
  },
  components: {
    Menutree
  },

  computed: {},

  mounted () {},

  methods: {
    showMenu () {
      this.showNav = !this.showNav
      // 子系延展置否？
    }
  }
}

</script>
<style  scoped>
.wrapbox{
    position: fixed;
    left: 0;
    width: 120px;
    top: 0;bottom: 0;
    background: rgba(225,230,238,0.5);
}
</style>