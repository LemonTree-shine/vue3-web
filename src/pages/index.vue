<template>
  <div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false}"
      :navigation="true"
      :modules="modules"
      class="banner-contain-wrap"
    >
      <swiper-slide 
        v-for="item in bannerList"
        :key="item.url"
      >
        <img :src="item.url" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import {defineProps,onMounted,ref} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper'
const modules = [Autoplay, Pagination, Navigation, A11y]

const bannerList = ref([
  {
    url:require('@/assets/banner/1.jpeg')
  },
  {
    url:require('@/assets/banner/2.jpeg')
  },
  {
    url:require('@/assets/banner/3.jpeg')
  },
  {
    url:require('@/assets/banner/4.jpeg')
  },
  {
    url:require('@/assets/banner/5.jpeg')
  }
])

onMounted(()=>{

})

</script>
<style lang="less" scoped>
.banner-contain-wrap{
  img{
    display: block;
    width: 100%;
  }
}
</style>