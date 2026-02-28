import { createRouter, createWebHistory } from 'vue-router'

import HomeSideBar from '@/views/home/HomeSideBar.vue'
import HomeMain from '@/views/home/HomeMain.vue'

import YellowBox from '@/components/boxes/YellowBox.vue'
import RedBox from '@/components/boxes/RedBox.vue'
import GreenBox from '@/components/boxes/GreenBox.vue'
import BlueBox from '@/components/boxes/BlueBox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      alias: '/',      // path to / loads same as going to /home
      components: {
        sidebar: HomeSideBar,
        main: HomeMain
      },
      props: {
        main: { orientation: 'horizontal' }
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
          },
          props: {
            'sidebar-center': { box: 'blue-box' }
          },
        }
      ]
    }
  ],
})

export default router
