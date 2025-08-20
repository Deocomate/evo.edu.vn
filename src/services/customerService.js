// src/services/customerService.js

// SỬA: Thay đổi biến môi trường để client có thể truy cập
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function registerCustomer(customerData) {
    try {
        const response = await fetch(`${API_BASE_URL}/customers`, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(customerData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            // Ném ra lỗi với thông điệp từ API để component có thể bắt và hiển thị
            throw new Error(errorData.message || "Gửi thông tin đăng ký thất bại.");
        }

        return await response.json();
    } catch (error) {
        // Log lỗi và ném lại để hàm gọi nó có thể xử lý
        console.error("Lỗi khi đăng ký khách hàng:", error);
        throw error;
    }
}