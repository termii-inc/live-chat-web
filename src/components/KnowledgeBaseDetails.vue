<template>
    <div class="flex flex-col relative h-full bg-[#F1F1F1] w-[420px] rounded-2xl py-[32px] px-[24px]">
        <img @click="$emit('show-Knowledge-base')" src="@/assets/shared/arrow_left.svg" class="size-6" />
        <p class="mt-6! text-[#393939] font-bold text-2xl">We're enabling communication globally</p>

        <div class="mt-6! flex gap-2 items-center">
            <img class="mx-auto block h-8! rounded-full"
                src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                alt="" />
            <div class="flex flex-col">
                <p class="text-[14px] text-[#475467] font-medium">Written by James</p>
                <p class="text-[12px] text-[#68768B] font-light">Updated 1 week ago</p>
            </div>
        </div>
        <div class="mt-6!">
            <p class="text-[#54647C] font-semibold text-[16px] mb-2!">The communication landscape in Nigeria</p>
            <p class="text-[14px] font-light text-[#475467] leading-4">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
                sed do eiusmod
                tempor
                incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>
            <p class="text-[#54647C] font-semibold text-[16px] mb-2! mt-4!">Finibus Bonorum et Malorum</p>
            <p class="text-[14px] font-light text-[#475467] leading-4">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit,
                sed do eiusmod
                tempor
                incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.</p>


        </div>

        <div class="absolute bottom-0 right-0 left-0">
            <PoweredBy />
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>