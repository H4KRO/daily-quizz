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
  <UCard class="plouf-plouf-display">
    <div class="items-container">
      <TransitionGroup name="fade">
        <UButton v-for="item in items" :key="item.text" :disabled="!item.isActive"
          :color="item.isDisabled ? 'error' : 'primary'" :variant="item.isActive ? 'solid' : 'outline'">
          {{ item.text }}
        </UButton>
      </TransitionGroup>
    </div>
  </UCard>
</template>

<style scoped>
.plouf-plouf-display {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.items-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item {
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-gray-100);
  transition: all 0.3s ease;
}

.item.is-active {
  background-color: var(--color-primary-500);
  transform: scale(1.02);
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-leave-active {
  position: absolute;
}
</style>
