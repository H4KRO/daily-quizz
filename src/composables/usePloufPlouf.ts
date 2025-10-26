import { computed, ref } from 'vue'

interface PloufPloufOptions {
  initialSpeed?: number
  minSpeed?: number
  duration?: number
  finalIndex?: number
}

export default function usePloufPlouf() {
  const items = ref<string[]>([])
  const disabledIndices = ref<number[]>([])
  const speed = ref<number>(100)
  const currentIndex = ref<number>()
  const isRunning = ref(false)

  const displayItems = computed(() =>
    items.value.map((item, index) => ({
      text: item,
      isActive: index === currentIndex.value,
      isDisabled: disabledIndices.value.includes(index),
    })),
  )

  const isReady = computed(
    () =>
      items.value.length > 0 &&
      !isRunning.value &&
      displayItems.value.filter((item) => !item.isDisabled).length > 1,
  )
  const isResettable = computed(() => disabledIndices.value.length > 0 && !isRunning.value)

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

  const tick = () => {
    if (items.value.length) {
      currentIndex.value = ((currentIndex.value ?? -1) + 1) % items.value.length
    }
  }

  const run = async ({
    initialSpeed = 100,
    minSpeed = 400,
    duration = 3000,
    finalIndex,
  }: PloufPloufOptions = {}) => {
    if (!isReady.value) {
      if (displayItems.value.filter((item) => !item.isDisabled).length == 1) {
        displayItems.value.forEach((item, index) => {
          if (!item.isDisabled) {
            currentIndex.value = index
          }
        })
      }
      return
    }

    isRunning.value = true
    speed.value = initialSpeed
    const startTime = Date.now()

    let targetIndex = finalIndex ?? Math.floor(Math.random() * items.value.length)
    while (disabledIndices.value.includes(targetIndex)) {
      targetIndex = finalIndex ?? Math.floor(Math.random() * items.value.length)
    }

    const totalRotations = 3
    const itemsLength = items.value.length
    const totalTicks =
      totalRotations * itemsLength +
      ((targetIndex - (currentIndex.value ?? 0) + itemsLength) % itemsLength)

    let tickCount = 0

    while (tickCount < totalTicks && Date.now() - startTime < duration) {
      do {
        tick()
      } while (disabledIndices.value.includes(currentIndex.value!))

      tickCount++

      const progress = Math.min(1, tickCount / totalTicks)

      speed.value = initialSpeed + (minSpeed - initialSpeed) * Math.pow(progress, 2)

      await sleep(speed.value)
    }

    currentIndex.value = targetIndex

    isRunning.value = false
  }

  const runWithoutLast = () => {
    disabledIndices.value.push(currentIndex.value!)
    return run()
  }

  const reset = () => {
    currentIndex.value = undefined
    isRunning.value = false
    disabledIndices.value = []
  }

  return {
    items,
    speed,
    displayItems,
    isRunning,
    isReady,
    isResettable,
    currentIndex,
    run,
    runWithoutLast,
    reset,
  }
}
