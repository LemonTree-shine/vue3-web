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
    <div class="main-center">
      <div class="title-wrap">
        <div>
          <span class="f_25">Product Center</span> <span style="font-size:'14px';font-weight: 200;">| Ingenuity, a healthy world</span>
        </div>
        <div class="pointer">See More ></div>
      </div>
      <div class="product-list">
        <div class="item">
          <div class="img-wrap">
            <img :src="require('@/assets/product/1.png')" alt="">
          </div>
          <div class="p_info_wrap">
            <div class="p_name">product name</div>
            <div class="p_more">See details +</div>
          </div>
        </div>
        <div class="item">
          <div class="img-wrap">
            <img :src="require('@/assets/product/2.jpeg')" alt="">
          </div>
          <div class="p_info_wrap">
            <div class="p_name">product name</div>
            <div class="p_more">See details +</div>
          </div>
        </div>
        <div class="item">
          <div class="img-wrap">
            <img :src="require('@/assets/product/3.jpg')" alt="">
          </div>
          <div class="p_info_wrap">
            <div class="p_name">product name</div>
            <div class="p_more">See details +</div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-center">
      <div class="about-us-content">
        <div class="video-wrap">
          <video 
            :src="require('@/assets/about-us.mp4')"
            controls="controls"
            :poster="require('@/assets/banner/1.jpeg')"
          ></video>
        </div>
        <div class="a_b_b">
          <div>
            <div class="a">About us</div>
            <div class="b">See details +</div>
          </div>
          
        </div>
      </div>
    </div>
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
.main-center{
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 40px;
  .title-wrap{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .product-list{
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    .item{
      width: 33%;
      background: #f7f7f7;
      .img-wrap{
        width: 100;
        height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img{
          display: block;
          width: 100%;
          cursor: pointer;
          transition: all 0.8s;
          &:hover{
            width: 130%;
          }
        }
      }
      .p_info_wrap{
        padding-top: 60px;
        padding-bottom: 20px;
        .p_name{
          color: #333;
          font-size: 18px;
          text-align: center;
          font-weight: 200;
        }
        .p_more{
          cursor: pointer;
          padding: 10px 0;
          border: 1px solid #000000;
          width: 110px;
          margin: 0 auto;
          margin-top: 20px;
          color: #333;
          font-size: 14px;
          text-align: center;
          font-weight: 200;
          transition: all .15s;
          &:hover{
            color: #ffffff;
            background-color: #bb0327;
          }
        }
      }
    }
  }


  /////////
  .about-us-content{
    display: flex;
    .video-wrap{
      width: 50%;
      video{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .a_b_b{
      width: 50%;
      background: #c1b89e;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      .a{
        color: #ffffff;
        font-size: 30px;
        color: #ffffff;
      }
      .b{
          cursor: pointer;
          padding: 10px 0;
          border: 1px solid #fff;
          width: 110px;
          margin: 0 auto;
          margin-top: 20px;
          color: #fff;
          font-size: 14px;
          text-align: center;
          font-weight: 200;
          transition: all .15s;
          &:hover{
            color: #ffffff;
            background-color: #d7c695;
          }
      }
    }
  }
}
</style>