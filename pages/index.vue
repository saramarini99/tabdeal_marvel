<template>
    <div class="min-h-screen text-white">
        <div :style="backgroundStyle" class="pt-18 pb-2 -mt-14">
            <div class="p-4 mb-4 max-w-5xl mx-auto space-x-2">
                <div class="flex items-center rounded-lg p-4 bg-[#2C2E30]">
                    <inputs-search v-model="searchQuery" @keydown.enter="searchCharacters" type="text"
                    placeholder="Search for characters..." class="w-[88%] mr-4" />
                    <buttons-primary buttonText="Search" @click="searchCharacters" class="w-12 sm:w-24">
                    </buttons-primary>
                </div>
            </div>

        </div>
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center px-4 pt-8 max-w-5xl mx-auto">
            <div v-for="character in characters" :key="character.id">
                <cards-default :category-type="character">
                    <h3 class="text-base text-left font-medium">{{ character.name }}</h3>
                </cards-default>
            </div>
        </div>

        <pagination-default v-if="totalCharacters > 0" :current-page="currentPage" :total-pages="totalPages"
            :visible-pages="visiblePages" @page-changed="handleDataFetch" />
    </div>
    <loader-default :is-loading="isLoading"></loader-default>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getCharacterData } from '@/services/index';

const characters = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(12);
const totalCharacters = ref(0);
const maxVisibleButtons = ref(5);
const isLoading = ref(false)
const backgroundStyle = {
    background: `linear-gradient(90deg, rgba(44,46,48,1) 0%, rgba(14,14,14,1) 100%)`,
};

const totalPages = computed(() => Math.ceil(totalCharacters.value / itemsPerPage.value));
const visiblePages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const maxVisible = maxVisibleButtons.value;

    if (total <= maxVisible) {
        return Array.from({ length: total }, (_, i) => i + 1);
    }

    let startPage = current - Math.floor(maxVisible / 2);
    let endPage = current + Math.floor(maxVisible / 2);

    if (startPage <= 0) {
        startPage = 1;
        endPage = maxVisible;
    }

    if (endPage > total) {
        endPage = total;
        startPage = Math.max(1, total - maxVisible + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
});

const handleDataFetch = async (page = 1, type = 'list') => {
    try {
        isLoading.value = true;
        const { results, total } = await getCharacterData({
            type,
            page,
            itemsPerPage: itemsPerPage.value,
            searchQuery: searchQuery.value
        });

        characters.value = results;
        totalCharacters.value = total;
        currentPage.value = page;

    } catch (error) {
        console.error(`Error fetching data:`);
    }
    finally {
        isLoading.value = false
    }
};

const fetchCharacters = async (page) => {
    currentPage.value = page || 1;
    await handleDataFetch(page);
};

const searchCharacters = async () => {
    if (!searchQuery.value) {
        await fetchCharacters(1);
        return;
    }
    await handleDataFetch(1, 'search');
};

onMounted(() => {
    handleDataFetch(1);
});
</script>