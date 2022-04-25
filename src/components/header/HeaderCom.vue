<template>
    <nav>
        <router-link to="/login">
            <svg t="1650612924833" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2003" width="20" height="20">
                <path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z"
                      p-id="2004"></path>
                <path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z"
                      p-id="2005"></path>
                <path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z"
                      p-id="2006"></path>
            </svg>

        </router-link>
        <div>
        <router-link to="/profile">我的</router-link>
        <router-link to="/">发现</router-link>
        <router-link to="/yun-cun">云村</router-link>
        <router-link to="/video">视频</router-link>
        </div>
        <router-link to="/search">
            <svg t="1650613088046" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2035" width="20" height="20">
                <path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"
                      fill="#444444" p-id="2036"></path>
            </svg>
        </router-link>

    </nav>
</template>

<script>
    export default {
        name: "HeaderCom"
    }
</script>

<style scoped lang="less">
nav{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    div{
        width: 200px;
        display: flex;
        justify-content: space-between;
        a{
            color: #000;
            text-decoration: none;
        }
        .router-link-active{
             font-weight: bold;
         }
    }
}

</style>