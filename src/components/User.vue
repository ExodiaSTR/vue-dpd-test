<script setup lang="ts">
import { computed } from 'vue'
import type { User } from '@/type/User'

const birthday = computed(() => new Date(props.userData.dob?.date).toUTCString())

const props = defineProps<{
  userData: User
}>()
</script>

<template>
  <div class="user">
    <img
      :src="userData.picture.medium"
      :srcset="`${userData.picture.medium} 1x,${userData.picture.large} 2x,${userData.picture.thumbnail} 3x, `"
      alt="user image"
      class="user-img"
    />

    <div class="user__info">
      <h4 class="user__info-name">
        Name: {{ userData.name.title + ' ' + userData.name.first + ' ' + userData.name.last }}
      </h4>
      <p class="user__info-gender">Gender: {{ userData.gender }}</p>
      <p class="user__info-gender">
        Location: {{ userData.location.country + ', ' + userData.location.city }}
      </p>
      <p class="user__info-age">Age: {{ userData.dob.age }}</p>
      <p class="user__info-birthday">Birthday: {{ birthday }}</p>
      <p class="user__info-email">Email: {{ userData.email }}</p>
      <p class="user__info-phone">Phone: +{{ userData.phone }}</p>
    </div>
  </div>
</template>
s

<style lang="postcss" scoped>
.user {
  width: 340px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;

  &-img {
    width: 80px;
    height: 80px;
  }

  &__info {
    color: white;
    font-size: 13px;
  }
}
</style>
