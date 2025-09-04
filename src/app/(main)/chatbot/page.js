// src/app/(main)/chatbot/page.js
import ChatbotPage from "@/views/Chatbot/ChatbotPage";

// Metadata for SEO and browser tab
export const metadata = {
    title: "Trợ lý AI - Evo Education",
    description: "Hỏi đáp nhanh mọi thông tin về các khóa học, chương trình và hoạt động tại Evo Education.",
};

// The default export for the page route, which renders the client component.
export default function Chatbot() {
    return <ChatbotPage/>;
}
