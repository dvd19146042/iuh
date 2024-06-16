<script setup lang="ts">
import VHeader from '~/components/organisms/VHeader.vue';

const time = ref('')
const date = ref('')

const updateClock = () => {
  const d = new Date()
  time.value = d.toLocaleTimeString()

  const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7']
  const dayName = days[d.getDay()]
  const day = String(d.getDate()).padStart(2, '0')
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const year = d.getFullYear()

  date.value = `${dayName}, ${day}/${month}/${year}`
}

onMounted(() => {
  updateClock()
  setInterval(updateClock, 1000)
})

</script>

<template>
  <div class="bg-gradient h-screen w-screen flex flex-col items-center   gap-6 p-4">
    <NuxtImg src="/images/logo1.png" class="h-20 rounded-full object-contain w-20" />
    <VHeader />
    <UCard class="w-2/3 mx-auto">
      <h3 class="font-bold uppercase text-center text-2xl py-4">Tủ Thông Minh</h3>
      <div class="flex">
        <NuxtImg src="/images/home_page.png" class="h-40 rounded-full object-contain w-full flex-[2]" />
        <div class="flex-1 flex">
          <div class="clock-container">
            <span id="time" class="text-lg font-semibold text-center">{{ time }}</span>
            <br />
            <span id="date" class="text-lg font-semibold text-center">{{ date }}</span>
            <!-- <p>Thấy đề tài này hay thì vote ủng hộ mình với mọi người ui 😝 Cám ơn nhìu!!</p> -->
          </div>

        </div>

      </div>
    </UCard>
  </div>
</template>

