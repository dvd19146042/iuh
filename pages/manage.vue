<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import { deleteUser, updateUser } from '~/api/user';

const columns = [{
  key: 'name',
  label: 'Name',
  sortable: true
},
{
  key: 'gender',
  label: 'Gender',
  sortable: true
},
{
  key: 'mobile',
  label: 'Mobile',
  sortable: true
},
{
  key: 'code',
  label: 'Code',
  sortable: true
},
{
  key: 'time',
  label: 'Time',
  sortable: true
},
{
  key: 'email',
  label: 'Email',
  sortable: true,
  direction: 'desc' as const
}, {

  key: 'actions',
  label: 'Actions'
}]

const { pending, data: users, refresh } = await useLazyFetch('/api/users')
const user = reactive({
  name: undefined,
  gender: undefined,
  email: undefined,
  mobile: undefined,
  code: undefined,
})
const open = ref(false)
const isEdit = ref(false)

// type Schema = InferType<typeof schema>
const router = useRouter()

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with event.
  // event.preventDefault()
  updateUser(event.data).then(()=>{
    refresh()
    isEdit.value=false
  })
  

}
</script>

<template>
  <div>

    <UTable :loading="pending" :rows="(users as any)" :columns="columns">
      <template #actions-data="{ row }">
        <div class="flex gap-4">


          <UPopover :open="open">
            <UButton color="red">Delete</UButton>

            <template #panel>
              <div class="flex gap-4 p-6">
                <UButton color="gray">Cancel</UButton>
                <UButton @click="() => deleteUser(row._id).then(() => {
                  refresh()
                  open = false
                })" color="green">OK</UButton>
              </div>
            </template>
          </UPopover>
          <UButton color="gray" @click="() => {
            isEdit = true
            Object.assign(user, row)
          }">Update</UButton>

        </div>
      </template>
    </UTable>
    <UModal v-model="isEdit">
      <div class="p-4">
        <UForm  :state="user" class="space-y-2  w-full max-w-[800px] m-auto h-1/2" @submit="onSubmit">
          <UFormGroup label="NAME" name="name">
            <UInput v-model="user.name" />
          </UFormGroup>

          <UFormGroup label="MOBILE" name="mobile">
            <UInput v-model="user.mobile" />
          </UFormGroup>

          <UFormGroup label="GENDER" name="gender">
            <UInput v-model="user.gender" />
          </UFormGroup>

          <UFormGroup label="CODE" name="code">
            <UInput v-model="user.code" />
          </UFormGroup>

          <UFormGroup label="EMAIL" name="email">
            <UInput v-model="user.email" />
          </UFormGroup>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </div>
    </UModal>
  </div>
</template>

