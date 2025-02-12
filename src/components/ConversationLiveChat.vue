<template>
    <div class="bg-amber-700 h-screen">
        <div class="flex justify-around items-start w-full h-[780px]">
            <LiveChatHome v-if="isDisplayingHomePage" @new-chat="displayChatPage"
                @show-Knowledge-base="displayKnowledgeBase" @see-all-messages="displayChatMessages"
                @show-chat="displayChatPage" />

            <ChatPage v-if="isDisplayingChatPage" @show-home="displayHomePage" />

            <KnowledgeBase v-if="isDisplayingKnowledgeBase" @show-home="displayHomePage"
                @show-Knowledge-base-details="displayKnowledgeBaseDetails" />

            <ChatMessages v-if="isDisplayingChatMessages" @show-home="displayHomePage" @show-chat="displayChatPage" />

            <KnowledgeBaseDetails v-if="isDisplayingKnowledgeBaseDetails" @show-Knowledge-base="displayKnowledgeBase" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ChatMessages from './ChatMessages.vue'
import ChatPage from './ChatPage.vue'
import KnowledgeBase from './KnowledgeBase.vue'

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
