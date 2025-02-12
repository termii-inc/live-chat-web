<template>
    <div class="flex flex-col relative h-full bg-[#F1F1F1] w-[420px] rounded-2xl py-[32px] px-[24px]">
        <div class="flex items-start">
            <img src="@/assets/shared/arrow_left.svg" @click="$emit('show-home')" />
            <p class="text-[#393939]  font-bold text-[16px] m-auto!">Knowledge Base</p>
        </div>

        <div class="mt-4! py-2.5 px-3 flex gap-2 border-1 rounded-lg border-[#D0D5DD]">
            <img src="@/assets/shared/search.svg" />
            <input class="w-full outline-0 border-none placeholder:text-[14px] placeholder:text-[#667085] opacity-30"
                placeholder="Search for help" />
        </div>
        <div class="mt-6!">
            <div @click="$emit('show-Knowledge-base-details')" class="flex justify-between py-3 border-b-[#D0D5DD] border-b-1">
                <p class="text-[#475467] text-[14px] font-medium">About Termii</p>
                <img src="@/assets/shared/caret_black_right.svg" />
            </div>
            <div @click="$emit('show-Knowledge-base-details')" class="flex justify-between py-3 border-b-[#D0D5DD] border-b-1">
                <p class="text-[#475467] text-[14px] font-medium">What is Termii about?</p>
                <img src="@/assets/shared/caret_black_right.svg" />
            </div>
            <div @click="$emit('show-Knowledge-base-details')" class="flex justify-between py-3 border-b-[#D0D5DD] border-b-1">
                <p class="text-[#475467] text-[14px] font-medium">I didn't get an OTP</p>
                <img src="@/assets/shared/caret_black_right.svg" />
            </div>
            <div @click="$emit('show-Knowledge-base-details')" class="flex justify-between py-3 border-b-[#D0D5DD] border-b-1">
                <p class="text-[#475467] text-[14px] font-medium">Authorization was abandoned. Please try again</p>
                <img src="@/assets/shared/caret_black_right.svg" />
            </div>
            <div @click="$emit('show-Knowledge-base-details')" class="flex justify-between py-3 border-b-[#D0D5DD] border-b-1">
                <p class="text-[#475467] text-[14px] font-medium">Issuer or Switch Inoperative</p>
                <img src="@/assets/shared/caret_black_right.svg" />
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