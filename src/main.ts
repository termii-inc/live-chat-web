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
    console.log("Initializing Live Chat Widget...");

    // 🔹 Ensure the mount element exists
    let appDiv = document.getElementById("live-chat-widget");
    if (!appDiv) {
        appDiv = document.createElement("div");
        appDiv.id = "live-chat-widget";
        document.body.appendChild(appDiv);
    }

    // 🔹 Create Vue app and mount
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#live-chat-widget"); // ✅ Mounting to the dynamically created element

    console.log("Live Chat Widget Initialized!");
}

// ✅ Attach the function to `window` so it can be accessed globally
window.LiveChatWidget = {
    init: initLiveChatWidget,
};

// 🔹 Auto-init when the script loads
window.addEventListener("load", () => {
    console.log("Script loaded, initializing LiveChatWidget...");
    window.LiveChatWidget?.init();
});
