import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Function to initialize the LiveChat widget
function initLiveChatWidget() {
    // Prevent duplicate instances
    if (!document.getElementById("live-chat-widget")) {
        const appDiv = document.createElement("div");
        appDiv.id = "live-chat-widget";
        document.body.appendChild(appDiv);
        
        const app = createApp(App);
        app.use(createPinia());
        app.use(router);
        app.mount("#live-chat-widget");
    }
}

initLiveChatWidget();




