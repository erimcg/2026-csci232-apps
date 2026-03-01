import { createRouter, createWebHistory } from 'vue-router'

import HomeSideBar from '@/views/home/HomeSideBar.vue'
import HomeMain from '@/views/home/HomeMain.vue'

import YellowBox from '@/components/boxes/YellowBox.vue'
import RedBox from '@/components/boxes/RedBox.vue'
import GreenBox from '@/components/boxes/GreenBox.vue'
import BlueBox from '@/components/boxes/BlueBox.vue'

const router = createRouter({
  //linkActiveClass: 'my-active-class',
  //linkExactActiveClass: 'my-exact-active-class',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/home",
      alias: '/3x2',
      components: {
        sidebar: HomeSideBar,
        main: HomeMain
      },
      children: [
        {
          path: "",
          components: {
            'sidebar-top': YellowBox,
            'sidebar-center': GreenBox,
            'sidebar-bottom': RedBox,

            'main-left': BlueBox,
            'main-right': GreenBox,
          }
        },
        {
          path: '1x1',
          components: {
            'sidebar-center': GreenBox,
            'main-left': RedBox
          },
        }
      ]
    },
    {
      path: "/props",
      components: {
        main: HomeMain
      },
      props: {
        main: { direction: 'column' }
      },
      children: [
        {
          path: "",
          components: {
            'main-left': YellowBox,
            'main-right': BlueBox,
          },
          props: {
            'main-left': { box: 'red-box' }
          },
        },
        {
          path: "param-as-prop/:text",
          components: {
            'main-left': RedBox,
            'main-right': BlueBox,
          },
          props: {
            'main-right': true
          }
        },
        {
          path: "prop-via-function",
          components: {
            'main-left': RedBox,
            'main-right': BlueBox,
          },
          props: {
            'main-left': route => {
              return { text: route.query.name }
            }
          }
        }
      ]
    }
  ]
})

export default router
