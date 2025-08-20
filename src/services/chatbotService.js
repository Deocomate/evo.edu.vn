// src/services/chatbotService.js
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * Gửi một câu hỏi đến chatbot API và nhận câu trả lời.
 * @param {string} question - Câu hỏi của người dùng.
 * @returns {Promise<object>} Một promise trả về phản hồi của chatbot.
 */
export async function sendMessage(question) {
    try {
        const response = await fetch(`${API_BASE_URL}/chatbot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ question: question }), // Gửi đúng định dạng { "question": "..." }
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Ném lỗi với thông điệp từ API để gỡ lỗi tốt hơn.
            throw new Error(errorData.message || "Lỗi khi gửi tin nhắn đến chatbot.");
        }

        return await response.json();
    } catch (error) {
        // Ghi lại lỗi và ném lại để component gọi nó có thể xử lý.
        console.error("Lỗi khi tương tác với chatbot:", error);
        throw error;
    }
}
