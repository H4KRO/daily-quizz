<script lang="ts" setup>
import usePloufPlouf from '@/composables/usePloufPlouf'

const props = defineProps<{
  items: string[]
}>()

const {
  items: _items,
  displayItems,
  isReady,
  currentIndex,
  run,
  runWithoutLast,
  reset,
} = usePloufPlouf()

_items.value = props.items
</script>

<template>
  <UContainer class="flex flex-col gap-5 mt-5">
    <UContainer class="w-full flex gap-5 justify-center">
      <UButton class="cursor-pointer" :disabled="!isReady" @click="run()">Run</UButton>
      <UButton class="cursor-pointer" :disabled="!isReady || currentIndex == undefined" @click="runWithoutLast()">Run
        without</UButton>
      <UButton class="cursor-pointer" :disabled="currentIndex == undefined" @click="reset()">Reset
      </UButton>
    </UContainer>
    <PloufPloufDisplay :items="displayItems" />
  </UContainer>
</template>
