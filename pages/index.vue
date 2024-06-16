<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { login } from '~/api/auth'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .required('Required')
})

type Schema = InferType<typeof schema>
const router = useRouter()
const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  // event.preventDefault()
  login(event.data).then((data) => {
    console.log(data)
    router.push('/manage')
  })
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <UForm :schema="schema" :state="state" class="space-y-2  w-1/2 max-w-[400px] m-auto h-1/2" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormGroup>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>

