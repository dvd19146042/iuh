<script setup lang="ts">
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
    },
    {
        label: 'Đăng ký tài khoản',
        route: '/manage/history'
    }
]

</script>
<template>
    <div class="h-10 w-1/2 mx-auto rounded-full bg-white overflow-hidden flex">
        <div @click="() => router.push({ path: tab.route })" class="flex-1 cursor-pointer flex items-center justify-center"
            :class="{ 'bg-emerald-500 text-white': path === tab.route }" v-for="(tab, index) in  tabs" :key="index">{{
                tab.label }}</div>
    </div>
</template>