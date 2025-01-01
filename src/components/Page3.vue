<template>
    <div class="page3">
        <div class="header">
            <h1>简历宝</h1>
            <h1>会员套餐介绍</h1>
        </div>
        <div class="card">
            <div class="card-content">
                <div class="title">全方位提升招聘体验</div>
                <div class="title-2">客户探需</div>
                <div class="search-box">
                    <div class="search-form">
                        <div class="ffff">
                            <span>请输入客户需求:</span>
                            <!-- allow-create -->
                            <el-select v-model="xvqiusele" filterable default-first-option placeholder="请输入">
                                <el-option v-for="xvqiu in xvqiuList" :key="index" :label="xvqiu.name"
                                    :value="xvqiu.name" />
                            </el-select>
                            <button @click="search">查询</button>
                            <button @click="reset">重置</button>
                        </div>
                        <div class="ffff">
                            <span>套餐推荐:</span>
                            <input type="text" name="" id="" disabled v-model="tuijian" placeholder="">
                        </div>
                    </div>
                    <duv class="search-res">
                        <ul>
                            <li>
                                <span v-for="item in data_h">{{ item }}</span>
                            </li>
                            <li>
                                <span v-for="item in data_d">{{ item }}</span>
                            </li>
                        </ul>
                    </duv>
                </div>
                <div class="title-2">产品适用场景</div>
                <div class="changjing">
                    <ul>
                        <li>
                            <span>需求场景</span>
                            <span>适配产品</span>
                        </li>
                        <li>
                            <span>急招，短期上人</span>
                            <span>7天超级置顶</span>
                        </li>
                        <li>
                            <span style="text-align: center;">大量快速补位/招聘旺季/主招岗位</span>
                            <span>简历宝+极速聊</span>
                        </li>
                        <li>
                            <span>日常储备/招聘淡季</span>
                            <span>伯小乐</span>
                        </li>
                        <li>
                            <span>其他非主招岗位/有筛选要求</span>
                            <span>人才雷达</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import page3_data from '../data/page3.json'
const xvqiuList = ref([])
const xvqiusele = ref('')
const tuijian = ref('')
const data_h = ref([])
const data_d = ref([])


const search = () => {
    data_h.value = []
    data_d.value = []
    setTimeout(() => {


        xvqiuList.value.forEach(element => {
            if (element.name === xvqiusele.value) {
                tuijian.value = element.taocan
            }
        });
        let data = []
        page3_data.taocan.forEach(element => {
            if (element.name === tuijian.value) {
                data = element.data
            }
        });

        data.forEach(element => {
            data_h.value.push(element.name)
            data_d.value.push(element.value)
        });
    }, 200);
}

const reset = () => {
    xvqiusele.value = ''
    tuijian.value = ''
    data_h.value = []
    data_d.value = []
}


onMounted(() => {
    xvqiuList.value = page3_data.xvqiulist
})

</script>

<style lang="scss" scoped>
.page3 {
    width: 100%;
    height: 100%;
    background-color: #0046d7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7rem;
    position: relative;
    gap: 3rem;
    background-image: url('../assets/imgs/page3_bg.webp');
    background-repeat: no-repeat;
    background-position: -150% 99%;
    background-size: 90%;

    .header {
        width: 90%;
        padding-left: 30px;
        font-size: 4rem;

        h1 {
            line-height: 7rem;
        }
    }

    .card {
        width: 90%;
        height: 78%;
        background-color: #ffffffcc;
        border-radius: 3rem;
        padding-left: 2.5rem;
        border-top: 5px #fff solid;
        border-left: 3px #fff solid;
        border-right: 5px #599cfd solid;
        overflow: hidden;

        .card-content {
            width: 100%;
            height: 100%;
            background-color: #ffffff5e;
            color: #000;
            padding: 2rem 3rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .title {
                margin: 0 auto;
                font-size: 3rem;
                color: #fff;
                font-weight: 700;
                border-radius: 50px;
                background-color: #0368f9;
                padding: 5px 30px;
            }

            .title-2 {
                font-size: 2.2rem;
                color: #fff;
                font-weight: 700;
                line-height: 2rem;
                background-color: #3693ff;
                width: fit-content;
                padding: 1.2rem 2.2rem;
                border-radius: 0px 1rem 0px 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .search-box {
                display: flex;
                flex-direction: column;
                gap: 3rem;
                background-color: #9abffa;

                .search-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1rem;


                    .ffff {
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        font-size: 2rem;
                        font-weight: 700;

                        span {
                            // 不可换行
                            white-space: nowrap;
                        }

                        input {
                            outline: none;
                            border: 2px #fff solid;
                            background-color: transparent;
                            padding: .5rem;
                            width: auto;
                            font-size: 2rem;
                        }

                        button {
                            background-color: #105ef5;
                            color: #fff;
                            border: none;
                            padding: .6rem 2rem;
                            font-size: 2rem;
                            font-weight: 700;
                            // 不可换行
                            white-space: nowrap;
                        }
                    }
                }

                .search-res {
                    width: 100%;
                    height: 250px;

                    ul {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        border: 1px #b8b8b8 solid;
                        border-top: none;

                        li {
                            list-style: none;
                            width: 100%;
                            display: flex;
                            //font-size: 2rem;
                            height: 3.5rem;

                            &:first-child {
                                font-size: 14px;
                                font-weight: 700;
                                background-color: #7bb0fc;

                                span {
                                    border: none !important;
                                    font-size: 1.3rem;
                                }
                            }

                            &:last-child {
                                border-bottom: none;
                                background-color: #b1d0fd;
                            }

                            span {
                                padding: 7px 10px;
                                width: 50%;
                                overflow: hidden;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                border-right: 1px #b8b8b8 solid;
                                font-size: 1.3rem;

                                // 不可换行
                                white-space: nowrap;
                            }
                        }
                    }
                }
            }

            .changjing {
                width: 100%;
                background-color: #fff;

                ul {
                    display: flex;
                    flex-direction: column;
                    border: 1px #d1d1d1 solid;

                    li {
                        list-style: none;
                        width: 100%;
                        display: flex;
                        border-bottom: 1px #d1d1d1 solid;
                        font-size: 2rem;

                        &:first-child {
                            height: 6.5rem;
                            font-size: 2.2rem;
                            font-weight: 700;
                            background-color: #7bb0fc;

                            span {
                                border: none !important;
                            }
                        }

                        &:last-child {
                            border-bottom: none;
                        }

                        height: 6rem;

                        span {
                            padding: 7px 10px;
                            width: 50%;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;

                            &:first-child {
                                border-right: 1px #d1d1d1 solid;
                                width: 60%;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>