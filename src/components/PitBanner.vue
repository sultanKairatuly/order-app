<template>
    <h1 class="title">
        <slot name="title"></slot>
    </h1>
</template>

<style lang="scss" scoped>
$primary: #00a082;
$secondary: #ffc244;

.title {
    background-color: #fff;
    color: $primary;
    font-size: 50px;
    padding: 30px 0;
    text-align: center;
    box-shadow: 1px 1px 8px 0px rgba(34, 60, 80, 0.2);
    border-bottom: 1px solid #f5f5f5;
}
</style>