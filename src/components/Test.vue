<template>
    <main>
        <section ref="screenRef" id="screen">
            <slot></slot>TEST
        </section>
    </main>

</template>
<script setup>
import { ref, onMounted } from 'vue'
const screenRef = ref(null)

const resizeScreen = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const screenRatio = screenWidth / screenHeight;
    const contentWidth = 1080;  // 宽度调整为适应9:16比例
    const contentHeight = 1920; // 高度调整为适应9:16比例
    const contentRatio = contentWidth / contentHeight;
    const scale = screenRatio > contentRatio ? screenHeight / contentHeight : screenWidth / contentWidth;
    screenRef.value.style.transform = `scale(${scale}) translate(-50%, -50%)`;
}

const listenerWindowResize = () => {
    window.addEventListener('resize', resizeScreen);
}

onMounted(() => {
    resizeScreen();
    listenerWindowResize();
});
</script>

<style lang="scss" scoped>
main {
    width: 100vw;
    height: 100vh;
    background-color: #08223d;
    position: relative;
    overflow: hidden;

    section {
        display: inline-block;
        width: 1080px; // 宽度调整为适应9:16比例
        height: 1920px; // 高度调整为适应9:16比例
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: 0 0;
        transform: scale(0.862) translate(-50%, -50%);
        background-color: red;
    }
}
</style>