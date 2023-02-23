<template>
    <div class="receipts">
        <PitBanner>
            <template #title>Receipts</template>
        </PitBanner>
    </div>
    
    <PitSidebar :items="navItems" />
</template>

<script lang="ts" setup>
import PitBanner from '../components/PitBanner.vue'
import type { navItem } from '../vite-env';
import { v4 as uuidv4 } from 'uuid'
import PitSidebar from '../components/PitSidebar.vue';

const navItems: Array<navItem> = [
    {
        title: "Искать рецепты",
        id: uuidv4(),
        route: '/receipts/search'
    },
    {
        title: "Искать рецепты по пит. веществам",
        id: uuidv4(),
        route: '/receipts/search-by-nutrients'
    },
    {
        title: "Искать рецепты по ингредиентам",
        id: uuidv4(),
        route: '/receipts/search-by-ingredients'
    },
]
</script>