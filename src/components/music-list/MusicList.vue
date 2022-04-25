<template>
    <h2>
        发现好歌
        <button>查看更多</button>
    </h2>
    <div class="swiper-container swiper-music-list">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in musicList">
                <img :src="item.picUrl" alt="">
                <span>{{item.playCount}}</span>
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {getMusicList} from "@/api";
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'

    export default {
        name: "MusicList",
        data() {
            return {
                musicList: []
            }
        },
        mounted() {
            const mySwiper = new Swiper('.swiper-music-list', {
                slidesPerView: 3,
                spaceBetween: 20,
            })
            this.getMusicListData()
        },
        methods: {
            async getMusicListData() {
                const res = await getMusicList()//使用封装好的api方法去后台获取歌单列表数据
                this.musicList = res.data.result
                console.log((this.musicList))
            }
        }
    }
</script>

<style scoped lang="less">
    button {
        float: right;
        width: 80px;
        height: 30px;
        background: #ffffff;
        border-radius: 15px;
        border: 1px solid #000000;
    }

    .swiper-slide {
        width: 30vw;
        /*height: 30vw;*/
        /*text-align: center;*/
        font-size: 12px;

        img {
            width: 100%;
        }

        span {
            position: absolute;
            top: 0;
            right: 10px;
            color: #ffffff;
        }

        p {
            margin: 0;
        }
    }

</style>