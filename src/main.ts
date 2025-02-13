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

function initLiveChatWidget() {
    console.log("Initializing Live Chat Widget...");

    // 🔹 Create the mount point dynamically if it doesn't exist
    let appDiv = document.getElementById("live-chat-widget");
    if (!appDiv) {
        appDiv = document.createElement("div");
        appDiv.id = "live-chat-widget";
        document.body.appendChild(appDiv);
    }

    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#live-chat-widget"); // 🔹 Mounting to the correct element
}

// initLiveChatWidget();

window.LiveChatWidget = { init: initLiveChatWidget };


document.addEventListener("DOMContentLoaded", () => {
    if (window.LiveChatWidget) {
        window.LiveChatWidget.init();
    }
});




