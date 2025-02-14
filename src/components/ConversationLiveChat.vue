<template>
    <div class="bg-transparent fixed bottom-5 right-5 z-999999999!">
        <div class="flex items-start w-[400px] h-[704px]"
            v-if="isDisplayingLiveChatWidget">
            <LiveChatHome v-if="isDisplayingHomePage" @new-chat="displayChatPage"
                @show-Knowledge-base="displayKnowledgeBase" @see-all-messages="displayChatMessages"
                @show-chat="displayChatPage" />

            <ChatPage v-if="isDisplayingChatPage" @show-home="displayHomePage" />

            <KnowledgeBase v-if="isDisplayingKnowledgeBase" @show-home="displayHomePage"
                @show-Knowledge-base-details="displayKnowledgeBaseDetails" />

            <ChatMessages v-if="isDisplayingChatMessages" @show-home="displayHomePage" @show-chat="displayChatPage" />

            <KnowledgeBaseDetails v-if="isDisplayingKnowledgeBaseDetails" @show-Knowledge-base="displayKnowledgeBase" />

        </div>
        <div @click="isDisplayingLiveChatWidget = !isDisplayingLiveChatWidget"
            class="bg-[#3E599F] inline-flex justify-center items-center mr-0 float-right mt-2! size-12 cursor-pointer rounded-2xl">
            <img src="@/assets/shared/caret_white_down.svg" class="size-6" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from './ChatMessages.vue'
import ChatPage from './ChatPage.vue'
import KnowledgeBase from './KnowledgeBase.vue'

const isDisplayingLiveChatWidget = ref(false);
const isDisplayingHomePage = ref(true)
const isDisplayingChatPage = ref(false)
const isDisplayingKnowledgeBase = ref(false)
const isDisplayingChatMessages = ref(false)
const isDisplayingKnowledgeBaseDetails = ref(false)

const displayChatPage = () => {
    isDisplayingHomePage.value = false
    isDisplayingChatPage.value = true
    isDisplayingChatMessages.value = false
    isDisplayingKnowledgeBase.value = false
    isDisplayingKnowledgeBaseDetails.value = false
}

const displayHomePage = () => {
    isDisplayingHomePage.value = true
    isDisplayingChatPage.value = false
    isDisplayingChatMessages.value = false
    isDisplayingKnowledgeBase.value = false
    isDisplayingKnowledgeBaseDetails.value = false
}

const displayKnowledgeBase = () => {
    isDisplayingHomePage.value = false
    isDisplayingChatPage.value = false
    isDisplayingChatMessages.value = false
    isDisplayingKnowledgeBase.value = true
    isDisplayingKnowledgeBaseDetails.value = false
}

const displayKnowledgeBaseDetails = () => {
    isDisplayingHomePage.value = false
    isDisplayingChatPage.value = false
    isDisplayingChatMessages.value = false
    isDisplayingKnowledgeBase.value = false
    isDisplayingKnowledgeBaseDetails.value = true
}

const displayChatMessages = () => {
    isDisplayingHomePage.value = false
    isDisplayingChatPage.value = false
    isDisplayingChatMessages.value = true
    isDisplayingKnowledgeBase.value = false
    isDisplayingKnowledgeBaseDetails.value = false
}
</script>

<style scoped></style>
