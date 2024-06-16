<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import VHeader from '~/components/organisms/VHeader.vue';
import { deleteUser, updateUser } from '~/helpers/api/user';

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
const { path } = useRoute()
const router = useRouter()
const tabs = [
  {
    label: 'Trang chủ',
    route: '/manage'
  },
  {
    label: 'Quản lý thông tin',
    route: '/manage/info'
  },
  {
    label: 'Đăng ký tài khoản',
    route: '/manage/register'
  }
]

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with event.
  // event.preventDefault()
  updateUser(event.data).then(() => {
    refresh()
    isEdit.value = false
  })
}

const genders = [{
  name: 'Nam',
  value: 'Nam'
}, {
  name: 'Nữ',
  value: 'Nữ',
}]


</script>

<template>
  <div class="bg-gradient h-screen w-screen flex flex-col items-center   gap-6 p-4">
    <NuxtImg src="/images/logo1.png" class="h-20 rounded-full object-contain w-20" />
    <VHeader />
    <UCard class="w-2/3 mx-auto flex-1">

      <UTable class="h-full" :loading="pending" :rows="(users as any)" :columns="columns">
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
                  })
                    " color="green">OK</UButton>
                </div>
              </template>
            </UPopover>
            <UButton color="gray" @click="() => {
              isEdit = true
              Object.assign(user, row)
            }
              ">Update</UButton>

          </div>
        </template>
      </UTable>
    </UCard>
    <UModal v-model="isEdit" prevent-close>
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Cập nhật
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isEdit = false" />
          </div>
        </template>

        <UForm :state="user" class="space-y-2  w-full max-w-[800px] m-auto h-1/2" @submit="onSubmit">

          <UFormGroup label="Mã thẻ" name="code">
            <UInput v-model="user.code" />
          </UFormGroup>
          <UFormGroup label="Tên" name="name">
            <UInput v-model="user.name" />
          </UFormGroup>

          <UFormGroup label="Số điện thoại" name="mobile">
            <UInput v-model="user.mobile" />
          </UFormGroup>

          <UFormGroup label="Giới tính" name="gender">
            <USelect v-model="user.gender" :options="genders" />
          </UFormGroup>


          <UFormGroup label="Email" name="email">
            <UInput v-model="user.email" />
          </UFormGroup>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </UCard>




    </UModal>
  </div>
</template>

