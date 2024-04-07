<script setup>
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCocktailInfo } from "@/stores/index";
const cocktailInfoStore = useCocktailInfo();
const { cocktailInfo } = storeToRefs(cocktailInfoStore);
const { getCocktailInfo } = cocktailInfoStore;
import { useRoute } from "vue-router";

const route = useRoute();
const drinkName = ref("");

onMounted(() => {
  drinkName.value = route.query.drink || "Default Drink";
});

onMounted(async () => {
  await getCocktailInfo(drinkName.value);
});
watch(
  () => route.query.drink,
  async (newDrink, oldDrink) => {
    if (newDrink !== oldDrink) {
      drinkName.value = newDrink || "Default Drink";
      await getCocktailInfo(drinkName.value);
    }
  }
);
</script>

<template>
  <div class="main">
    <div
      v-for="drink in cocktailInfo?.drinks"
      :key="drink.idDrink"
      class="main__article"
    >
      <div class="main__info">
        <h3 class="main__title">{{ drink.strDrink }}</h3>
        <p>Category: {{ drink.strCategory }}</p>
        <p>Alcoholic: {{ drink.strAlcoholic }}</p>
        <p>Glass: {{ drink.strGlass }}</p>
        <p>Ingredients: 
          <span v-for="i in 15" :key="i">
            <span v-if="drink['strIngredient' + i]">
              {{ drink['strIngredient' + i] }}
            </span>
            <span v-if="i !== 15 && drink['strIngredient' + (i + 1)]">,</span>
          </span>
        </p>
        <p>Measures: 
          <span v-for="i in 15" :key="i">
            <span v-if="drink['strMeasure' + i]">
              {{ drink['strMeasure' + i] }}
            </span>
            <span v-if="i !== 15 && drink['strIngredient' + (i + 1)]">,</span>
          </span>
        </p>
      </div>
      <div class="main__img">
        <img
          loading="lazy"
          :key="drink.idDrink"
          :src="drink.strDrinkThumb"
          alt=""
          style="height: 200px"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.main {
  margin: 0 15px;
  display: flex;
  text-align: start;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  &__article {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-bottom: 2px solid #fff;
    img {
      border-radius: 10px;
    }
  }
  &__title {
    text-align: start;
  }
  &__info {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
  }
  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
}
@media (max-width: 768px) {
  .main {
    &__article {
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
