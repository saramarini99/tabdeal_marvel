<template>
    <div class="pb-6 mb-6">
        <div class="flex flex-col lg:flex-row items-start lg:items-center ">
            <div
                class="w-full lg:w-60 h-60 rounded-md mb-4 relative lg:mb-0 lg:mr-6 overflow-hidden flex-shrink-0 mx-auto lg:mx-0 before:content-[''] before:absolute before:bg-radial-gradient(circle, rgba(220,38,38,1) 0%, rgba(14,14,14,0) 30%)">
                <nuxt-img v-if="characterDetail.thumbnail"
                    :src="characterDetail.thumbnail.path + '/portrait_uncanny.' + characterDetail.thumbnail.extension"
                    alt="Character Thumbnail" class="w-full h-full object-cover rounded-lg"
                    style="width: 240px; height: 240px;" />
                <p v-else class="flex items-center justify-center h-full text-gray-400">No image available
                </p>
            </div>

            <div class="lg:text-left">
                <h1 class="text-2xl mb-4 font-medium">{{ characterDetail.name }}</h1>
                <p class="text-white mb-4 font-normal text-sm">
                    {{ characterDetail.description || "No description available." }}
                </p>
                <div class="flex justify-center lg:justify-start">
                    <buttons-bordered buttonText="Details" class="mr-4"></buttons-bordered>
                    <buttons-bordered buttonText="Wiki" class="mr-4"></buttons-bordered>
                    <buttons-bordered buttonText="Comiclink"></buttons-bordered>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
defineProps({
    characterDetail: Object,
});
</script>