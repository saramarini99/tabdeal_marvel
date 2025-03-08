<template>
    <button
        class="flex items-center justify-center bg-[#DC2626] hover:bg-red-700 h-12 cursor-pointer text-sm text-white font-medium py-3 px-4 rounded"
        @click="$emit('click')">
        <img src="/icons/searchIcon.svg" class="inline-block mr-1" />
        <span class="hidden sm:inline-block">{{ buttonText }}</span>
    </button>
</template>

<script setup>
defineProps({
    buttonText: {
        type: String
    }
})
defineEmits(['click'])
</script>