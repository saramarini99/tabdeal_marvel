<template>
  <div>
    <input :type="type" :placeholder="placeholder" :value="modelValue" @input="handleInput"
      class="bg-[#3B3D3F]  text-white text-sm h-12 font-normal w-full rounded py-3 px-4 flex-grow focus:outline-none" />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  }
});

const emit = defineEmits(['update:modelValue']);

function handleInput(event) {
  emit('update:modelValue', event.target.value);
}
</script>
