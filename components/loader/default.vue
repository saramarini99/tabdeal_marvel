<template>
    <div v-if="isLoading" class="fixed top-0 left-0 w-full h-full bg-[#2C2E30]  bg-opacity-50 z-50 flex items-center justify-center">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    isLoading: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  