<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: boolean
  modelValue?: boolean
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
  <input 
    type="checkbox" 
    v-model="modelValue" 
    :class="cn(
      'rounded-md border-2 w-5 h-5 transition-all duration-300 ease-in-out',
      'bg-background hover:bg-gradient-to-r hover:from-pink-200 hover:to-purple-200',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-400',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'checked:bg-gradient-to-r checked:from-[#D247BF] checked:to-primary checked:border-transparent',
      'border-input hover:border-primary/50',
      'cursor-pointer',
      props.class
    )"
  >
</template>

<style>
input[type="checkbox"]:checked {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='white'%3E%3Cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3E%3C/svg%3E");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
