<template>

    <div class="flex flex-col h-full bg-[#F1F1F1] w-[420px] rounded-2xl pt-8 px-[24px] ">
        <div class="overflow-y-auto">
            <div class="flex flex-col py-[24px] px-[16px] rounded-2xl bg-[#F6F8FF] ">
                <div class="flex items-center gap-4 ">
                    <div class="w-[60px] h-[60px] flex justify-center items-center bg-white rounded-full">
                        <img src="@/assets/termii_logo.svg" width="35" />
                    </div>
                    <div class="flex -space-x-4!">
                        <img class="w-12 h-12 rounded-full border-2 border-white"
                            src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                            alt="Avatar 1">
                        <img class="w-12 h-12 rounded-full border-2 border-white"
                            src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289748/727e1ca544fe2435f797c34a264ba6ab_f1zmbm.jpg"
                            alt="Avatar 2">
                        <img class="w-12 h-12 rounded-full border-2 border-white"
                            src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/47807835bc25e779478bbdaad2751b4e_lzim5o.jpg"
                            alt="Avatar 3">
                    </div>
                </div>


                <p class="text-[#101010] text-[30px] font-bold  font-karla mt-4! leading-[36px]">How can we help you
                    today?</p>
                <div class="flex  justify-between items-center bg-[#3E599F] mt-6! py-2.5 px-2.5 rounded-2xl">
                    <div class="flex gap-2 hover:cursor-pointer">
                        <img src="@/assets/shared/messenger.svg" width="24" />
                        <p class="text-[#FFFF]!">Start a new chat</p>
                    </div>
                    <button @click="$emit('new-chat')"
                        class="w-[32px] aspect-square hover:cursor-pointer flex items-center justify-center bg-[#fff]  text-gray-700 rounded-full ">
                        <img src="@/assets/shared/caret_black_right.svg" width="16" />
                    </button>

                </div>
            </div>
            <p class="text-[#393939] text-[20px] mt-[20px]! mb-[16px]! font-bold font-karla">Still need help?</p>
            <div
                class="flex justify-between items-center hover:cursor-pointer py-[12px] px-[16px] mb-[8px]!  bg-white rounded-2xl border-[0.8px] border-[#1C1C1C]/10">
                <div class="flex w-full ">
                    <img class="pr-[8px]" src="@/assets/home/question.svg" width="24" />
                    <p class="text-[16px] font-karla text-[#393939] font-bold ">Knowledge Base</p>
                </div>

                <button @click="$emit('show-Knowledge-base')"
                    class="w-[32px] aspect-square flex items-center justify-center bg-[#3E599F] hover:cursor-pointer  text-gray-700 rounded-full ">
                    <img src="@/assets/shared/caret_white_right.svg" width="16" />
                </button>

            </div>
            <div class="flex flex-col p-[16px] bg-white rounded-2xl border-[0.8px] border-[#1C1C1C]/10">
                <div class="flex justify-between mb-[16px]! ">
                    <div class="flex gap-2 items-center">
                        <img src="@/assets/shared/speech_bubble.svg" width="24" />
                        <p class="text-[#393939] font-karla text-[16px] font-bold">Previous Messages</p>
                    </div>

                    <p class="font-karla text-[#3E599F] text-[12px] underline font-medium cursor-pointer"
                        @click="$emit('see-all-messages')">See all</p>
                </div>

                <div v-for="i in 3" :key="i"
                    class="flex justify-between items-center border-b-[0.5px] border-[#1C1C1C]/10 hover:cursor-pointer"
                    @click="$emit('show-chat')">
                    <div class="flex flex-col  pb-1.5 mt-[8px]! ">
                        <p class="text-xs text-[#475467] font-medium">Thank you for contacting Termii</p>
                        <p class="text-[10px] text-[##68768B] font-normal">Segun .1 week ago</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" stroke="#475467" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>

        <PoweredBy />

    </div>


</template>

<script setup lang="ts">
import PoweredBy from './PoweredBy.vue';


</script>

<style scoped></style>
