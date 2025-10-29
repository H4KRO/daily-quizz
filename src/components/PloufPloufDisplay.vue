<script setup lang="ts">
interface DisplayItem {
  text: string
  isActive: boolean
  isDisabled: boolean
}

defineProps<{
  items: DisplayItem[]
}>()
</script>

<template>
  <UCard>
    <div class="flex gap-5 md:flex-row flex-col">
      <TransitionGroup name="fade">
        <UButton v-for="item in items" :key="item.text" :disabled="!item.isActive"
          :color="item.isDisabled ? 'error' : 'primary'" :variant="item.isActive ? 'solid' : 'outline'" block
          class="flex-1">
          {{ item.text }}
        </UButton>
      </TransitionGroup>
    </div>
  </UCard>
</template>
