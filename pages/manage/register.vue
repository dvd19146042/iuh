<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import VHeader from '~/components/organisms/VHeader.vue';
import { getTempHardWareById, resetTempHardWare } from '~/helpers/api/temp';
import { addUser, deleteUser, updateUser } from '~/helpers/api/user';

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


const user = reactive({
    name: undefined,
    gender: undefined,
    email: undefined,
    mobile: undefined,
    code: undefined,
})
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

const init = {
    name: undefined,
    id: undefined,
    gender: undefined,
    email: undefined,
    mobile: undefined,
    code: undefined,
}
const toast = useToast()

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with event.data
    // event.preventDefault()
    addUser(event.data).then((data) => {
        console.log(data)
        Object.assign(user, init)
        toast.add({ title: 'Created!' })
    }).catch(() => {
        toast.add({ title: 'Not created!', color: "red" })
    }).finally(() => {
        resetTempHardWare()

    })
}
onMounted(() => {
    setInterval(async () => {
        {
            const bin = await getTempHardWareById()
            console.log(bin)
            // user.code = bin.code
        }

    }, 2000)
})

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
        <VHeader/>
        <UCard class="w-1/3 mx-auto">
            <h3 class="text-lg text-center font-semibold leading-6 text-gray-900 dark:text-white">
              Đăng ký tải khoản
            </h3>
            <UForm :state="user" class="space-y-2  w-full max-w-[800px] m-auto h-1/2" @submit="onSubmit">

                <UFormGroup label="Mã thẻ" name="code">
                    <UInput v-model="user.code" disabled class="bg-gray-200" />
                </UFormGroup>

                <UFormGroup label="Họ và tên" name="name">
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

                <UButton type="submit" class="w-full h-10 flex items-center justify-center">
                    Submit
                </UButton>
            </UForm>
        </UCard>

    </div>
</template>

