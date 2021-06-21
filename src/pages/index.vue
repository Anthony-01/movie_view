<template>
    <div class="container">
        <!--头部-->
        <div>
            <movie-index-header></movie-index-header>
        </div>
        <!-- 其他 -->
        <div class="userMessage">
            <user-message></user-message>
        </div>
        <div class="contentPic">
            <index-header-pic></index-header-pic>
        </div>
        <div class="contentMain">
            <div>
                <div class="contentLeft">
                    <ul class="cont-ul">
                        <movie-list></movie-list>
                    </ul>
                </div>
            </div>
            <div>
                <div class="contentRight">
                    <ul class="cont-ul">
                        <new-list></new-list>
                    </ul>
                </div>
            </div>
        </div>
        <common-footer></common-footer>
    </div>
</template>
<script>
import CommonFooter from '@/components/CommonFooter'
import IndexHeaderPic from '@/components/IndexHeaderPic'
import MovieIndexHeader from '@/components/MovieIndexHeader'
import MovieList from '@/components/MovieList'
import NewList from '@/components/NewList'
import UserMessage from '@/components/UserMessage'
import {xhr} from '../api/xhr';
export default {
    data () {
        return {

        }
    },
    components: {
        CommonFooter,
        IndexHeaderPic,
        MovieIndexHeader,
        MovieList,
        NewList,
        UserMessage
    },
    mounted() {
        xhr({
            method: 'get',
            url: '/api/data'
        }).then((res) => {
            console.log(res);
        })
    }
}
</script>
<style lang="css" scoped>
    .container {
        width: 100%;
        margin: 0 auto;
    }
    .contentMain {
        height: 50px;
    }
    .userMessage {
        padding-top: 60px;
        margin-top: -10px;
        margin-left: -10px;
    }
    .contentPic {
        padding-top: 5px;
    }
    .contentLeft {
        width: 60%;
        float: left;
        margin-top: 5px;
        border-top: 1px solid #000;
    }
    .contentRight {
        width: 38%;
        margin-left: 1%;
        float: left;
        margin-top: 5px;
        border-top: 1px solid #000;
    }
    .cont-ul {
        padding-top: 0.5rem;
        background-color: #fff
    }

    .cont-ul::after {
        content: '';
        display: block;
        clear: both
    }


</style>


