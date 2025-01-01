<template>
    <div class="page2">
        <div class="icon">
            <img src="../assets/imgs/page2_icon.webp" alt="">
        </div>
        <div class="header">
            <p>简历宝客户效果</p>
            <div class="tips">效果好不好 客户说了算</div>
        </div>
        <div class="map">
            <div id="map-container"></div>
        </div>

    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader'
import page2_data from '../data/page2.json'


let map = null;
window._AMapSecurityConfig = {
    securityJsCode: '25304e4dd58635d7b98eaafe0f58e786'//申请好的秘钥
}
var copyList = []
onMounted(() => {
    AMapLoader.load({
        key: "	99508a6ed793f9c623ba7a607dc682ef", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Geocoder'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
        .then((AMap) => {
            // result中对应详细地理坐标信息
            map = new AMap.Map("map-container", {
                // 设置地图容器id
                viewMode: "3D", // 是否为3D地图模式
                zoom: 11, // 初始化地图级别
                center: page2_data.center, // 初始化地图中心点
            });

            page2_data.datas.forEach(element => {
                console.log(element);
                var marker = new AMap.Marker({
                    position: [element.经度, element.纬度], // 位置
                    icon: new AMap.Icon({
                        size: new AMap.Size(60, 60), // 图标尺寸
                        image: "https://pic.imgdb.cn/item/6768ee60d0e0a243d4e849f9.webp", // Icon的图像
                        // 缩放
                        imageSize: new AMap.Size(60, 60), // 根据所设置的大小拉伸或压缩图片
                    }),
                    data: element,
                });
                map.add(marker);

                var nameMarker = new AMap.Marker({
                    position: [element.经度, element.纬度],
                    content: `
                            <p class="name-window">${element.name}</p>
                        `,
                    offset: new AMap.Pixel(60, 5),
                });
                // nameMarker点击事件
                nameMarker.on('click', function (e) {
                    var infoWindow = new AMap.InfoWindow({
                        isCustom: true, // 使用自定义窗体
                        content: `
                        <div class="info-window" id="info_window">
                            <ul>
                                    <li>
                                        <span>开通时间</span>
                                        <span>上架时长</span>
                                        <span>效果量</span>
                                        <span>入职情况</span>
                                    </li>
                                    <li>
                                        <span>${element.开通时间}</span>
                                        <span>${element.上架时长}</span>
                                        <span>${element.效果量}</span>
                                        <span>${element.XX情况}</span>
                                    </li>
                            </ul>
                        </div>
                        `,
                        offset: new AMap.Pixel(0, -10),
                    });
                    infoWindow.open(map, e.target.getPosition());
                });
                nameMarker.setMap(map);
            });
            map.on('click', function (e) {
                map.clearInfoWindow();
                // 输出经纬度
                // console.log(e.lnglat.getLng(), e.lnglat.getLat());
                // copyList.push({
                    // 经度: e.lnglat.getLng(),
                    // 纬度: e.lnglat.getLat()
                // })
                // console.log(copyList);
                
            });

            page2_data.vdata.forEach(element => {
                console.log(element);
                var marker = new AMap.Marker({
                    position: [element.经度, element.纬度], // 位置
                    icon: new AMap.Icon({
                        size: new AMap.Size(60, 60), // 图标尺寸
                        image: "https://pic.imgdb.cn/item/6768ee60d0e0a243d4e849f9.webp", // Icon的图像
                        // 缩放
                        imageSize: new AMap.Size(60, 60), // 根据所设置的大小拉伸或压缩图片
                    }),
                    data: element,
                });
                map.add(marker);
            });
        })
        .catch((e) => {
            console.log(e);
        }).finally(() => {

        });
});

onUnmounted(() => {
    map?.destroy();
});
</script>

<style lang="scss" scoped>
.page2 {
    width: 100%;
    height: 100%;
    background-color: #0046d7;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10%;
    position: relative;
    gap: 5rem;

    .icon {
        position: absolute;
        width: 10rem;
        left: 0;
        top: 12.5%;

        img {
            width: 100%;
        }
    }

    .header {
        color: #fff;
        font-size: 5rem;
        width: 76%;
        margin-left: 6%;
        background-color: #fff;
        color: #000;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        align-items: center;
        justify-content: center;
        padding: 2.5rem 1.5rem;
        border-radius: 0px 30px 0px 30px;

        p {
            font-size: 4.5rem;
            font-weight: 700;
            line-height: 45px;
        }

        .tips {
            background-color: #fc631f;
            color: #fff;
            font-weight: 700;
            font-size: 2.5rem;
            padding: 1.5rem 3rem;
            border-radius: 0px 0px 0px 20px;
        }
    }

    .map {
        height: 73%;
        background-color: #e6edfc;
        width: 100%;
        margin: 0 auto;
        width: 90%;
        border-radius: 40px;
        color: #000;
        padding: 2rem 1.8rem;
        display: flex;

        #map-container {
            width: 100%;
            height: 100%;
        }
    }
}

:deep(.info-window) {
    width: 45rem;
    // height: 120px;
    background-color: #2254f4;

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
            font-size: 2rem;
            height: 4rem;

            &:first-child {
                font-size: 2rem;
                font-weight: 700;
                background-color: #7bb0fc;

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
            }
        }
    }
}

:deep(.name-window) {
    width: fit-content;
    background-color: #2254f4;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    padding: 5px 10px;
    white-space: nowrap;
}
</style>