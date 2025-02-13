import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Function to create and append the root div dynamically
function createAppContainer() {
    if (!document.getElementById("live-chat-root")) {
        const appDiv = document.createElement("div");
        appDiv.id = "live-chat-root"; // Unique ID for the Vue app
        document.body.appendChild(appDiv);
    }
}

// Initialize the app
function initLiveChat() {
    createAppContainer(); // Ensure the root div exists

    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#live-chat-root"); // Mount on the dynamically created div
}

// Ensure LiveChatWidget is globally available
declare global {
    interface Window {
        LiveChatWidget: {
            init: () => void;
        };
    }
}

// Expose it globally so it can be initialized via the script
window.LiveChatWidget = {
    init: initLiveChat,
};

// Auto-init when the script loads
initLiveChat();
