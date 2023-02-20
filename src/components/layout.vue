<template>
    <div class="layout-header">
      <div class="contain">
        <div class="logo">
          <img :src="require('@/assets/logo.png')" alt="">
        </div>
        <div class="menu">
          <div class="item active">Home</div>
          <div class="item">Product</div>
          <div class="item">About us</div>
          <div class="item">Contact us</div>
        </div>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    
</template>

<script setup>


</script>
<style lang="less">
  .layout-header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: auto;
    padding: 0 30px;
    background: #fff;
    .contain{
        padding: 10px 5px;
        margin-right: auto;
        margin-left: auto;
        width: 1200px;
        display: flex;
        align-items: center;
        .logo{
          width: 120px;
          height: 40px;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .menu{
          display: flex;
          margin-left: 50px;
          .item{
            padding: 20px 20px;
            margin: 0 20px;
            cursor: pointer;
            &:hover{
              color: #bb0327 !important;
              border-bottom: 4px solid #bb0327;
            }
            &.active{
              color: #bb0327 !important;
              border-bottom: 4px solid #bb0327;
            }
          }
        }
    }
  }
</style>
