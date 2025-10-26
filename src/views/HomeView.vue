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
  <UContainer class="mt-5">
    <UTabs :items="items" :ui="{ trigger: 'cursor-pointer' }">
      <template #themes>
        <PloufPloufDisplayContainer :items="themeItems" />
      </template>

      <template #points>
        <PloufPloufDisplayContainer :items="pointItems" />
      </template>
    </UTabs>
  </UContainer>
</template>
