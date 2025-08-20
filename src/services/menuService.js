// src/services/menuService.js
import {unstable_noStore as noStore} from "next/cache";

const API_BASE_URL = process.env.API_BASE_URL;

export async function getMenus() {
    noStore();
    try {
        const response = await fetch(`${API_BASE_URL}/menus`);
        if (!response.ok) {
            throw new Error("Failed to fetch menus");
        }

        const result = await response.json();

        // Xử lý dữ liệu menu để chuyển đổi URL tuyệt đối thành tương đối
        const processMenu = (menuItem) => {
            let processedUrl = menuItem.url;
            try {
                const urlObj = new URL(menuItem.url);
                // Chỉ lấy pathname nếu hostname khớp với NEXT_PUBLIC_APP_URL hoặc domain của API
                // Điều này giúp loại bỏ các URL bên ngoài hoặc không liên quan
                if (urlObj.hostname === new URL(process.env.NEXT_PUBLIC_APP_URL).hostname || urlObj.hostname === new URL(API_BASE_URL).hostname) {
                    processedUrl = urlObj.pathname;
                }
            } catch (e) {
                // Nếu không phải là URL hợp lệ, giữ nguyên giá trị ban đầu hoặc đặt về '/'
                // Ví dụ: nếu url là "news" thay vì "https://..."
                if (!menuItem.url.startsWith('/')) {
                    processedUrl = `/${menuItem.url}`;
                }
                // Nếu đã là đường dẫn tương đối, không làm gì
            }


            const children = menuItem.children ? menuItem.children.map(processMenu) : [];

            return {
                ...menuItem,
                url: processedUrl,
                children: children
            };
        };

        return result.data.map(processMenu);
    } catch (error) {
        console.error("Error fetching menus:", error);
        return [];
    }
}