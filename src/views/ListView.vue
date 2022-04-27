<template>
    <ListViewHeader/>
</template>

<script>
    import {getPlayListDetail} from "@/api"
    import ListViewHeader from "@/components/list-view/ListViewHeader";

    export default {
        name: "ListView",
        components:{ListViewHeader},
        data(){
            return{
                aaa:[]
            }

        },
        created() {
            console.log(this.$route.query.id)
            //像后端要数据
            //要到数据后，更新自己的data
            this.getPlayListMusic()
        },
        methods:{
            async getPlayListMusic(){
                //2.使用this.$route.query来接受前组件传来的参数
                //3.根据参数id向后台找到对应的歌单里的歌曲等数据
                const res=await getPlayListDetail(this.$route.query.id)
            console.log(res.data)
                // 要到数据后，更新自己的data
            }
        }
    }
</script>

<style scoped>

</style>