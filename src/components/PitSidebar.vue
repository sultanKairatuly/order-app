<template>
    <div class="sidebar">
        <div class="item" v-for="item in props.items" :key="item.id">
        {{ item.title }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type {navItem} from '../vite-env'

const props = defineProps<
{
    items: Array<navItem>
}
>()

</script>

<style scoped lang="scss">
$primary: #00a082;
$secondary: #ffc244;

    .sidebar {
        position: fixed;
        height: 100vh;
        background-color: $primary;
        z-index: 100;
    }


</style>