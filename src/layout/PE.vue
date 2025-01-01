<template>
    <div class="pe-layout">
        <div class="pe-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.pe-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}

.pe-content {
    width: 56.25vh;
    height: 100vh;
    max-width: 100vw;
    background-color: red;
    position: relative;
}

@media (max-aspect-ratio: 9/16) {
    // .pe-content {
    //     width: 100vw;
    //     height: calc(100vw * 16 / 9);
    // }
}
</style>
