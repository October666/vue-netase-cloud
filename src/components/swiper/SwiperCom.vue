<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="item in imgs" :key="item.id">
                <img :src="item.pic"
                     alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'
    import {getBanner} from "@/api";



    export default {
        name: "SwiperCom",
        data() {
            return {
                // imgs: [
                //     {pic: require('../../assets/img/swiper1.jpg'), id: 0},
                //     {pic: require('../../assets/img/swiper2.jpg'), id: 1},
                //     {pic: require('../../assets/img/swiper3.png'), id: 2}
                // ]
                imgs:[]
            }
        },
        created() {
            this.getBannerImgs()
        },
       updated() {
            // var mySwiper=new Swiper('.swiper-container',{
            //     loop:true,
            //     autoplay:true
            // })
            const mySwiper = new Swiper('.swiper-home', {
                // loop: true,
                autoplay: true
            })
            // this.getBannerImgs()
        },
        methods:{
          async  getBannerImgs(){
              const res=await getBanner(1)//和后台要图片数据
              this.imgs=res.data.banners//要到的数据赋值给data

            }
        }
    }
</script>

<style scoped>
    .swiper-slide > img {
        width: 100%
    }
</style>