<script setup lang="ts">
import User from '@/components/User.vue'
import Pagination from '@/components/Pagination.vue'
import { getUsers } from '@/api/getUsers'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import type { User as UserType } from '@/type/User'
import Loader from '@/components/Loader.vue'

const users = await getUsers()
const router = useRouter()

function changePage(page: number) {
  router.push(`page=${page}`)
  currentPage.value = page
}

const currentPage = ref(0)
const paginationPage = computed(() => currentPage.value * 20)
const paginationQuantity = ref(users.length)
const usersArr = ref<UserType[]>([])
const searchInput = ref('')
const status = ref(false)

const paginatedUsers = computed(() =>
  searchInput.value
    ? usersArr.value.slice(paginationPage.value, paginationPage.value + 20)
    : users.slice(paginationPage.value, paginationPage.value + 20)
)

function searchHandler(searchFieldData: any) {
  return users.filter((el) => {
    const tmp = []

    tmp.push(
      String(el.dob.age),
      el.dob.date,
      el.email,
      el.gender,
      el.location.city,
      el.location.country,
      el.name.title,
      el.name.first,
      el.name.last,
      String(el.phone)
    )
    return tmp.some((el) => el.includes(searchFieldData.value))
  })
}

watch(
  () => searchInput.value,
  (value) => {
    status.value = true
    const timeout = setTimeout(() => {
      if (value.length) {
        usersArr.value = searchHandler(searchInput)
        paginationQuantity.value = usersArr.value.length
      } else {
        usersArr.value = paginatedUsers.value
        paginationQuantity.value = users.length
      }

      status.value = false
      clearTimeout(timeout)
    }, 1000)
  }
)
</script>

<template>
  <main class="main">
    <input v-model="searchInput" type="text" class="main__search" />
    <Loader v-if="status === true" />
    <div v-else class="main__users">
      <User v-for="(user, idx) in paginatedUsers" :key="idx" :user-data="user" />
    </div>
    <Pagination :quantity="paginationQuantity" @page-number="changePage" />
  </main>
</template>

<style lang="postcss" scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin: 50px auto;

  &__search {
    max-width: 1000px;
    width: 100%;
    border: 1px solid gray;
    outline: none;
    border-radius: 10px;
    padding: 20px;
  }

  &__users {
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }
}
</style>
