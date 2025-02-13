import './assets/main.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";


declare global {
    interface Window {
        LiveChatWidget?: {
            init: () => void;
        };
    }
}

// Function to initialize the LiveChat widget
function initLiveChatWidget() {
    // Prevent duplicate instances
    if (!document.getElementById("live-chat-widget")) {
        console.log('about to create')
        const appDiv = document.createElement("div");
        appDiv.id = "live-chat-widget";
        document.body.appendChild(appDiv);
        console.log('about to create', appDiv)
        const app = createApp(App);
        app.use(createPinia());
        app.use(router);
        // app.mount('#app')
        app.mount("#live-chat-widget");
    }
}

// initLiveChatWidget();

window.LiveChatWidget = {
    init: initLiveChatWidget,
};

document.addEventListener("DOMContentLoaded", () => {
    if (window.LiveChatWidget) {
        window.LiveChatWidget.init();
    }
});




