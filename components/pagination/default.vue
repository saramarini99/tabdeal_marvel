<template>
    <div class="flex justify-center items-center mt-8">
      <button
        @click="goToFirstPage"
        :disabled="currentPage === 1"
        class="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;&lt;
      </button>
  
      <button
        @click="goToPreviousPage"
        :disabled="currentPage === 1"
        class="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt;
      </button>
  
      <button
        v-for="page in visiblePages"
        :key="page"
        @click="goToPage(page)"
        :class="{
          'bg-red-600 text-white': currentPage === page,
          'hover:bg-gray-700': currentPage !== page,
          'mx-1 flex items-center justify-center p-2 rounded-full h-6 w-6 cursor-pointer': true,
        }"
      >
        {{ page }}
      </button>
  
      <button
        @click="goToNextPage"
        :disabled="currentPage === totalPages"
        class="p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;
      </button>
  
      <button
        @click="goToLastPage"
        :disabled="currentPage === totalPages"
        class="p-3 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &gt;&gt;
      </button>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    visiblePages: {
      type: Array,
      required: true,
    },
  });
  
  const emit = defineEmits(["page-changed"]);
  
  const goToFirstPage = () => {
    emit("page-changed", 1);
  };
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      emit("page-changed", currentPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      emit("page-changed", currentPage + 1);
    }
  };
  
  const goToLastPage = () => {
    emit("page-changed", totalPages);
  };
  
  const goToPage = (page) => {
    emit("page-changed", page);
  };
  </script>
  