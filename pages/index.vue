<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { login } from '~/helpers/api/auth'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .required('Required')
})
const { data, execute, pending } = useLazyAsyncData((data: any) => login(data))

type Schema = InferType<typeof schema>
const router = useRouter()
const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  // event.preventDefault()
  console.log(event.data)
  execute(event.data as any).then(()=>{
    router.push({path:'/manage'})
  })

}
</script>

<template>
  <div class="flex items-center justify-center h-screen bg-gradient w-full">
    <UForm :schema="schema" :state="state"
      class=" shadow-lg flex flex-col gap-4 bg-white border border-gray-200/80 h-2/3 rounded-lg p-10 w-1/2 max-w-[400px] m-auto"
      @submit="onSubmit">
      <NuxtImg src="/images/logo1.png" class="m-auto h-20 w-20" />
      <UFormGroup v-slot="{ error }" label="Email" :error="!state.email && 'You must enter an email'"
        help="This is a nice email!">
        <UInput v-model="state.email" type="email" placeholder="Enter email"
          :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
      </UFormGroup>
      <UFormGroup label="Password" :error="!state.password && 'You must enter an password'"
        help="This is a nice Password!">
        <template #default="{ error }">
          <UInput class="mb-0" v-model="state.password" type="password" placeholder="Enter password"
            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
        </template>
        <template #error="{ error }">
          <span :class="[error ? 'text-red-500 dark:text-red-400' : 'text-primary-500 dark:text-primary-400', 'text-xs']">
            {{ error ? error : 'Your password is valid' }}
          </span>
        </template>
      </UFormGroup>

      <UButton :loading="pending" type="submit" class="flex items-center justify-center h-12">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

