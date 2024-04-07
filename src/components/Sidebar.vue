<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isLinksVisible = ref(false);
const toggleLinks = () => {
  isLinksVisible.value = !isLinksVisible.value;
};
const navigateToErrorPage = () => {
  router.push('/Error');
};

const links = [
  { text: "Margarita", query: { drink: "Margarita" } },
  { text: "Mojito", query: { drink: "Mojito" } },
  { text: "A1", query: { drink: "A1" } },
  { text: "Kir", query: { drink: "Kir" } },
];
</script>

<template>
  <div class="links">
    <div class="links__title">
      <router-link v-for="(link, index) in links" :key="index" :to="{ path: '/', query: link.query }">
        {{ link.text }}
      </router-link>
      <div class="error" @click="navigateToErrorPage">404</div>
    </div>
    <div class="links__burger" @click="toggleLinks">
      <button>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
  <div v-if="isLinksVisible" class="media">
    <div class="media__button">
      <button @click="toggleLinks">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
          />
        </svg>
      </button>
    </div>
    <div class="media__title">
      <router-link v-for="(link, index) in links" :key="index" :to="{ path: '/', query: link.query }">
        {{ link.text }}
      </router-link>
      <div class="error" @click="navigateToErrorPage">404</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error{
  cursor: pointer;
}
.links {
  display: flex;
  height: 100vh;
  border-right: 2px solid #fff;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #f00;
    }
  }
  &__title {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 15px;
    font-size: 20px;
  }
  &__burger {
    display: none;
  }
}
.media {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  a {
    color: #fff;
  }
  &__title {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 15px;
    font-size: 20px;
  }
  &__button {
    display: flex;
    justify-content: flex-end;
    padding: 15px;
    button {
      background-color: transparent;
      border: none;
      svg {
        fill: #fff;
      }
    }
  }
}
@media (max-width: 768px) {
  .links__title {
    display: none;
  }
  .links__burger {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    bottom: 0;
    svg {
      fill: #fff;
    }
  }
}
</style>
