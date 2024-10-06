<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { getTempHardWareById,resetTempHardWare } from '~/api/temp';
import { addUser } from '~/api/user';


const init = {
  name: undefined,
  id: undefined,
  gender: undefined,
  email: undefined,
  mobile: undefined,
  code: undefined,
}
const toast = useToast()
const router = useRouter()
const user = reactive(init)

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with event.data
  // event.preventDefault()
  addUser(event.data).then((data) => {
    console.log(data)
    Object.assign(user, init)
    toast.add({ title: 'Created!' })
  }).catch(()=>{
    toast.add({ title: 'Not created!' ,color:"red"})
  }).finally(()=>{
    resetTempHardWare()

  })
}
onMounted(() => {
  setInterval(async () => {
  {
      const bin = await getTempHardWareById()
      user.code = bin.data.code
    }

  },2000)
})
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <UForm :state="user" class="space-y-2  w-full max-w-[800px] m-auto h-1/2" @submit="onSubmit">
   
      <UFormGroup label="CODE" name="code">
        <UInput v-model="user.code" disabled class="bg-gray-200" />
      </UFormGroup>

      <UFormGroup label="NAME" name="name">
        <UInput v-model="user.name" />
      </UFormGroup>

      <UFormGroup label="MOBILE" name="mobile">
        <UInput v-model="user.mobile" />
      </UFormGroup>

      <UFormGroup label="GENDER" name="gender">
        <UInput v-model="user.gender" />
      </UFormGroup>


      <UFormGroup label="EMAIL" name="email">
        <UInput v-model="user.email" />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

