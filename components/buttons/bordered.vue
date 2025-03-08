<template>
  <div>
    <button
      class="hover:bg-gray-600 text-white py-2 px-4 rounded cursor-pointer text-sm text-medium border border-[#E5E6E6] text-center h-10 flex items-center">

      <img  src="/icons/linkIcon.svg"  class="inline-block mr-1" />
      {{ buttonText }}
    </button>
  </div>


</template>

<script setup>
defineProps({
  buttonText: {
    type: String
  }
})
</script>