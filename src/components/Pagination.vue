<script setup lang="ts">
const props = defineProps<{
  quantity: number
}>()

const emit = defineEmits<{
  (e: 'page-number', value: number): void
}>()
</script>

<template>
  <div class="pagination">
    <RouterLink
      :to="'page=' + num"
      @click.prevent="emit('page-number', num)"
      class="pagination__num"
      v-for="num in Math.ceil(props.quantity / 20)"
      :key="num"
    >
      {{ num }}
    </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.pagination {
  background-color: rgb(60, 60, 60);
  display: flex;
  max-width: 900px;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  gap: 5px;

  &__num {
    width: 50px;
    height: 50px;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid white;
    border-radius: 5px;
    background-color: black;
    font-size: 20px;
  }
}
</style>
