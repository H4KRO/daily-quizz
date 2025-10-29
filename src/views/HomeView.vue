<script setup lang="ts">

const items = [
  {
    label: 'Themes',
    slot: 'themes',
  },
  {
    label: 'Points',
    slot: 'points',
  },
]

const themeItems = ['Mature', 'Improbable', 'Plaisir', 'Scolaire']

const pointItems = [...Array(Math.max(0, 10))].map((_, i) => String(i + 1))
</script>

<template>
  <UContainer class="mt-5 flex gap-10 flex-col items-center">
    <h1 class="font-bold text-3xl text-primary italic">Daily Quizz</h1>
    <UTabs :items="items" :unmount-on-hide="false" :ui="{ trigger: 'cursor-pointer' }">
      <template #themes>
        <PloufPloufDisplayContainer :items="themeItems" />
      </template>

      <template #points>
        <PloufPloufDisplayContainer :items="pointItems" />
      </template>
    </UTabs>
  </UContainer>
  <div class="fixed bottom-4 right-4 z-50">
    <UColorModeButton color="primary" />
  </div>
</template>
