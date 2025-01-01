<template>
    <div class="page1">
        <h1 class="title">「简历宝」是什么</h1>
        <div class="tips">一款保效果的招聘服务产品</div>
        <div class="header">
            三大产品优势 开通即享
        </div>
        <div class="icon">
            <img src="../assets/imgs/icon.webp" alt="">
        </div>
        <div class="card">
            <div class="t-list">
                <div class="t-item">
                    <div class="t-h">
                        <img src="../assets/ico.png" alt="">
                        操作更简单
                    </div>
                    <div class="t-c">无需繁琐设置，填写职位信息一键上架，简单好懂易操作</div>
                </div>
                <div class="t-item">
                    <div class="t-h">
                        <img src="../assets/ico.png" alt="">
                        效果有保障
                    </div>
                    <div class="t-c">「简历宝」上架帖子后，30天内获得承诺的效果量，不足免费为您补足效果直至达到承诺量</div>
                </div>
                <div class="t-item">
                    <div class="t-h">
                        <img src="../assets/ico.png" alt="">
                        职位强曝光
                    </div>
                    <div class="t-c">「简历宝」产品具备高效、快速响应能力，迅速响应您的招聘需求，一键上架30天超级曝光</div>
                </div>
            </div>
            <div class="search">
                <div class="name">简历宝保量查询</div>
                <div class="select-box">
                    <div class="ffff">
                        <span>招聘城市:</span>
                        <el-select v-model="selectedCity" filterable allow-create default-first-option
                            placeholder="请输入">
                            <el-option v-for="city in citys" :key="city" :label="city" :value="city" />
                        </el-select>
                    </div>
                    <div class="ffff">
                        <span>招聘职位:</span>
                        <el-select v-model="selectedCategory" filterable allow-create remote reserve-keyword
                            placeholder="请输入" :remote-method="remoteMethod" :loading="loading">
                            <el-option v-for="category in categorys" :key="category" :label="category"
                                :value="category" />
                        </el-select>
                    </div>
                </div>
                <div class="search-btn">
                    <button @click="selectedCity = ''; selectedCategory = ''; data = []">重置</button>
                    <button @click="search">查询</button>
                </div>
                <ul>
                    <li>
                        <span>是否在简历宝范围</span>
                        <span>保量数</span>
                    </li>
                    <li v-for="(item, index) in data" :key="index">
                        <span>{{ item.是否在简历宝范围 }}</span>
                        <span>{{ item.保量数 }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import page1_data from '../data/page1.json';
const selectedCity = ref('');
const selectedCategory = ref('');
const data = ref([]);
const citys = ref([]);
const categorys = ref([]);

// 读取data/page1.json文件
onMounted(() => {
    console.log(page1_data);
    page1_data.forEach(element => {
        if (!citys.value.includes(element.招聘城市)) {
            citys.value.push(element.招聘城市);
        }
        if (!categorys.value.includes(element.招聘类目)) {
            categorys.value.push(element.招聘类目);
        }
    });
    console.log(citys.value);
    console.log(categorys.value);
});
const search = () => {
    data.value = [];
    setTimeout(() => {
        data.value = page1_data.filter(item => {
            return item.招聘城市 === selectedCity.value && item.招聘类目 === selectedCategory.value;
        });
        console.log(data.value);
        if (data.value.length === 0) {
            data.value.push({
                是否在简历宝范围: '-',
                保量数: '-'
            });
        }
    }, 100);

};

</script>

<style lang="scss" scoped>
.page1 {
    width: 100%;
    height: 100%;
    background-color: #0046d7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    gap: 1.2rem;

    .title {
        font-size: 5rem;
        color: #ebeef2;
    }

    .tips {
        border-image-source: url('../assets/imgs/tips_bg.png');
        border-image-slice: 30 275 10 275 fill;
        border-image-width: 1rem 24rem 0rem 14rem;
        border-image-repeat: repeat;
        border-style: solid;
        width: 50%;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: .5rem;
        color: rgb(70, 34, 21);
        font-size: 2rem;
        font-weight: 700;
        font-style: italic;
    }

    .icon {
        position: absolute;
        top: 14%;
        left: 3%;
        width: 13rem;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .header {
        width: 60%;
        height: 6rem;
        border-radius: 18px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #2876ff 0%, #9cd0ff 100%);
        font-size: 3rem;
        font-weight: 700;
        position: relative;
        z-index: 2;
    }

    .card {
        position: absolute;
        top: 23.5%;
        border-radius: 20px;
        z-index: 1;
        width: 80%;
        height: 70%;
        background-color: #e6ecfb;
        padding: 3rem 3rem;

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            border: 1px #000 solid;
            border-top: none;

            li {
                list-style: none;
                width: 100%;
                display: flex;
                height: 4rem;
                color: #000;
                font-size: 2.1rem;

                &:first-child {
                    font-weight: 700;
                    background-color: #b5ccf8;

                    span {
                        border: none !important;
                    }
                }

                &:last-child {
                    border-bottom: none;
                    background-color: #fff;
                }


                span {
                    padding: 7px 10px;
                    width: 50%;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px #b8b8b8 solid;

                    &:first-child {
                        border-right: 1px rgb(153, 153, 153)d1d1 solid;
                        width: 60%;
                    }
                }
            }
        }

        .t-list {
            width: 100%;
            color: #000;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding: 0 10px;

            .t-item {
                padding-bottom: 1.7rem;
                border-bottom: .2rem dashed #000;

                .t-h {
                    font-size: 3rem;
                    font-weight: 700;
                    margin-bottom: 10px;
                    color: #487bdf;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;

                    img {
                        width: 3.5rem;
                    }
                }

                .t-c {
                    font-size: 1.7rem;
                    font-weight: 700;
                    line-height: 1.5;
                    color: rgb(65, 65, 65);
                }
            }
        }

        .search {
            width: 100%;
            border-radius: 3px;
            margin-top: 3rem;
            border: 1px solid rgb(217, 219, 222);
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);
            padding: 2rem 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;

            .name {
                width: 46%;
                height: 4rem;
                background-color: #b3ddff;
                display: flex;
                align-items: center;
                border-radius: 30px;
                color: #000;
                font-weight: 700;
                font-size: 2.2rem;
                padding-left: 2rem;
            }

            .select-box {
                width: 100%;
                display: flex;
                gap: 1rem;
                color: #000;
                background-color: #f5f2f2;
                padding: 2rem;
                flex-direction: column;

                .ffff {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 2.1rem;

                    span {
                        white-space: nowrap;
                        font-weight: 700;
                    }
                }
            }

            .search-btn {
                display: flex;
                justify-content: center;
                gap: 2.5rem;

                button {
                    width: 10rem;
                    height: 4rem;
                    background-color: #2876ff;
                    color: #fff;
                    font-size: 2rem;
                    font-weight: 700;
                    cursor: pointer;
                    border: none;
                    outline: none;

                    &:first-child {
                        background-color: #ff6a0000;
                        border: 2px solid #2876ff;
                        color: #000;
                    }
                }
            }
        }
    }
}
</style>