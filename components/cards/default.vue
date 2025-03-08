<template>
    <div>
        <nuxt-link 
            :to="`/character/${categoryType.id}`"
            class="block mx-auto w-auto sm:aspect-[3/4] border border-solid border-[#404244] p-4 rounded-2xl cursor-pointer hover:bg-gray-700" 
            :class="nuxtLinkClassList"
        >
            <nuxt-img 
                :src="categoryType.thumbnail.path + '/standard_fantastic.' + categoryType.thumbnail.extension"
                alt="" 
                :width="300" 
                :height="400"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                class="inline-block rounded-lg mb-2 object-cover h-auto" 
            />
            <slot /> 
        </nuxt-link>
    </div>
</template>

<script setup>
const props = defineProps({
    categoryType: Object,
    isDisableNuxtLink: Boolean,
});

const nuxtLinkClassList = computed(() => ({
  'disabled': props.isDisableNuxtLink,
}));
</script>

<style scoped>
.disabled {
    pointer-events: none; 
}
</style>
