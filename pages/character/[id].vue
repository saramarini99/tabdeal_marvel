<template>
    <div class="min-h-screen -mt-14 text-white">
        <div :style="backgroundStyle" class="pt-32">
            <div class="max-w-5xl mx-auto p-4 pt-0">
                <header-component :characterDetail="character"></header-component>
            </div>
        </div>

        <section class="pt-8 sm:pt-16 max-w-5xl p-4 mx-auto">
            <h2 class="text-lg mb-4 sm:mb-6 font-medium">Comics</h2>
            <div
                class="grid grid-c<!--  -->ols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center px-0 pt-8 max-w-5xl mx-auto">
                <div v-for="comic in comics" :key="comic.id">
                    <cards-default :category-type="comic" :is-disable-nuxt-link="true">
                        <div class="text-left font-medium text-white text-base">{{ comic.title }}</div>
                    </cards-default>

                </div>
            </div>
        </section>

        <section class="pt-8 sm:pt-16 max-w-5xl p-4 mx-auto">
            <h2 class="text-lg mb-4 sm:mb-6 font-medium">Series</h2>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center px-0 pt-8 max-w-5xl mx-auto">
                <div v-for="series in seriesList" :key="series.id">
                    <cards-default :category-type="series" :is-disable-nuxt-link="true">
                        <div class="text-left font-medium text-white text-base">{{ series.title }}</div>
                    </cards-default>
                </div>
            </div>
        </section>
    </div>
    <loader-default :is-loading="isLoading"></loader-default>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getCharacterDetails, getCharacterComics, getCharacterSeries } from '../../services/characterInfoApis';
import headerComponent from './components/header.vue';
const route = useRoute();
const characterId = route.params.id;

const character = ref({});
const comics = ref([]);
const seriesList = ref([]);
const isLoading = ref(false);
const backgroundStyle = {
    background: `linear-gradient(90deg, rgba(44,46,48,1) 0%, rgba(14,14,14,1) 100%)`,
};


const fetchCharacterData = async () => {
    try {
        isLoading.value = true;
        character.value = await getCharacterDetails(characterId);
        comics.value = await getCharacterComics(characterId);
        seriesList.value = await getCharacterSeries(characterId);
    } catch (error) {
        console.error("Error fetching character data:", error);
    } finally {
        isLoading.value = false;
    }
};


onMounted(() => {
    fetchCharacterData();
});
</script>
