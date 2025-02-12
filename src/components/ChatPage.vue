<template>

    <div class="flex flex-col h-full bg-[#F1F1F1]  w-[420px] rounded-2xl  ">
        <div class="bg-[#3E599F] pb-4 pt-6 px-6 rounded-tl-2xl rounded-tr-2xl flex gap-8  items-center">
            <img src="@/assets/shared/arrow_white.svg" @click="$emit('show-home')" />

            <div class="flex gap-3 items-center">
                <img class="mx-auto block h-8! rounded-full"
                    src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                    alt="" />

                <p class="text-[15px] text-white font-bold">Adeola <span class="font-normal">from Termii</span></p>
            </div>
        </div>

        <div class="pt-10 px-6 w-full h-full  relative overflow-y-auto">

            <div class="flex gap-2 mb-5!">
                <img class="mx-auto block h-8! rounded-full"
                    src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                    alt="" />
                <div class="gap-1">
                    <div class="bg-[#F6F8FF] p-3 max-w-60  rounded-[6px]">
                        <p class="text-[#686868] text-[13px] leading-4">Hi there 👋 Welcome to Termii, how can we
                            assist
                            you
                            today?</p>
                    </div>
                    <p class="text-[12px] opacity-50 font-medium">10 mins ago</p>
                </div>

            </div>

            <div class="gap-1 w-full flex flex-col items-end">
                <div class="bg-[#3E599F] p-3 max-w-60 rounded-[6px] mb-5">
                    <p class="text-[13px] leading-4 text-white">I have an issue with onboarding my company to your
                        platform</p>

                </div>
                <p class="text-[12px] opacity-50 font-medium">5 mins ago</p>
            </div>
            <div class="flex gap-2 mb-5!">
                <img class="mx-auto block h-8! rounded-full"
                    src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                    alt="" />
                <div class="gap-1">
                    <div class="bg-[#F6F8FF] p-3 max-w-60  rounded-[6px]">
                        <p class="text-[#686868] text-[13px] leading-4">Hi there 👋 Welcome to Termii, how can we
                            assist
                            you
                            today?</p>
                    </div>
                    <p class="text-[12px] opacity-50 font-medium">2 mins ago</p>
                </div>

            </div>
            <div class="gap-1 w-full flex flex-col items-end">
                <div class="bg-[#3E599F] p-3 max-w-60 rounded-[6px] mb-5">
                    <p class="text-[13px] leading-4 text-white">I have an issue with onboarding my company to your
                        platform</p>

                </div>
                <p class="text-[12px] opacity-50 font-medium">5 mins ago</p>
            </div>
            <div class="flex gap-2 mb-5!">
                <img class="mx-auto block h-8! rounded-full"
                    src="https://res.cloudinary.com/dmzdz7kq2/image/upload/v1739289749/691af02d3a7ca8be2811716f82d9212b_vmzziq.jpg"
                    alt="" />
                <div class="gap-1">
                    <div class="bg-[#F6F8FF] p-3 max-w-60  rounded-[6px]">
                        <p class="text-[#686868] text-[13px] leading-4">No problem. We will connect you to the right
                            person shortly</p>
                    </div>
                    <p class="text-[12px] opacity-50 font-medium">5 mins ago</p>
                </div>

            </div>

            <div
                class="py-2.5 px-3 flex gap-2 bg-[#F1F1F1] absolute bottom-0 right-6 left-6  border-[#D0D5DD] border-1 rounded-lg">
                <img src="@/assets/shared/emoji.svg" class="size-6" />
                <input class="w-full border-none outline-0 placeholder:text-[14px] placeholder:text-[#667085]"
                    placeholder="Write a message..." />
                <img src="@/assets/shared/attachment.svg" />
                <img src="@/assets/shared/send.svg" />
            </div>


        </div>
        <PoweredBy />
    </div>


</template>

<script setup lang="ts">

</script>

<style scoped></style>