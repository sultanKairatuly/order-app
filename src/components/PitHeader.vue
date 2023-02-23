<template>
  <header class="header">
    <h1 class="logo">PIT</h1>
    <div class="search__container">
      <input
        type="text"
        class="search__container-item"
        v-model="searchModel"
        @focus="searchFocus"
        @blur="searchBlur"
      />
      <img
        src="../assets/search-close-new.svg"
        alt="close icon"
        class="close"
        @click="cleanSearch"
        v-if="searchModel.length > 0"
      />
      <span
        class="placeholder"
        :style="{
          transform: `translate(${placeholderOffsetX}, -50%)`,
        }"
      >
        <img
          class="placeholder__icon"
          alt="search icon"
          src="../assets/search-new.svg"
        />
        <div
          class="placeholder__text"
          :class="{
            invisible: isFocus,
          }"
        >
          Искать
        </div>
      </span>
    </div>
    <div class="start_btn">Начать!</div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchModel = ref<string>("");
const placeholderOffsetX = ref<string>("-50%");
const isFocus = ref<boolean>(false);

function searchFocus() {
  placeholderOffsetX.value = "-215%";
  isFocus.value = true;
}

function searchBlur() {
  if (searchModel.value.length === 0) {
    placeholderOffsetX.value = "-50%";
    isFocus.value = false;
  }
}

function cleanSearch() {
  searchModel.value = "";
  searchBlur();
}
</script>

<style scoped lang="scss">
$primary: #00a082;
$secondary: #ffc244;

.invisible {
  opacity: 0;
  visibility: hidden;
}
.header {
  padding: 32px 104px;
  display: flex;
  align-items: center;
  background-color: $secondary;
  justify-content: space-between;

  .logo {
    font-size: 50px;
    color: $primary;
    font-weight: bold;
  }

  .search__container {
    position: relative;
    z-index: 3;
    .search__container-item {
      width: 485px;
      padding: 18px 48px;
      border-radius: 50px;
      border: none;
      outline: none;
      background-color: #f5f5f5;
      font-size: 18px;
      line-height: 1.4;
      font-weight: 300;
    }

    .close {
      position: absolute;
      left: 90%;
      width: 24px;
      cursor: pointer;
      height: 24px;
      object-fit: cover;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .placeholder {
    display: flex;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    align-items: center;
    transition: 0.3s ease-in-out;

    .placeholder__icon {
      object-fit: contain;
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .placeholder__text {
      font-size: 23px;
      cursor: default;
      z-index: 2;
      color: #6e6e6e;
      line-height: 1.4;
      transition: 0.3s ease-in-out;
      font-weight: 300;
      white-space: nowrap;
    }
  }

  .start_btn {
    background-color: $primary;
    padding: 18px 52px;
    font-weight: bold;
    color: #fff;
    font-size: 20px;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }

  .start_btn:hover {
    background-color: #047560;
  }
}
</style>
