<template>
    <div class="flex flex-col relative h-full bg-[#F1F1F1] w-[420px] rounded-2xl py-[32px] px-[24px]">
        <div class="flex items-start">
            <img @click="$emit('show-home')" src="@/assets/shared/arrow_left.svg" />
            <p class="text-[#393939]  font-bold text-[16px] m-auto!">Messages</p>
        </div>

        <div class="mt-6!">
            <div v-for="i in 6" :key="i" class="flex justify-between items-center border-b-[0.5px] border-[#1C1C1C]/10">
                <div class="flex items-center gap-2" @click="$emit('show-chat')">
                    <img class="mx-auto block h-8! rounded-full"
                        src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289748/727e1ca544fe2435f797c34a264ba6ab_f1zmbm.jpg"
                        alt="" />
                    <div class="flex flex-col  pb-1.5 mt-[8px]! hover:cursor-pointer">
                        <p class="text-[14px] text-[#475467] font-semibold">Thank you for contacting Termii</p>
                        <p class="text-[12px] text-[##68768B] font-medium">Segun . 1 week ago</p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="#475467" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            </div>

        </div>
        <div class="absolute bottom-0 right-0 left-0">
            <PoweredBy />
        </div>
    </div>
</template>

<script setup lang="ts">
import PoweredBy from './PoweredBy.vue';


</script>

<style scoped></style>