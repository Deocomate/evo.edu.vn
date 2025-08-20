// src/lib/news-data.js

export const NEWS_ARTICLES = Array.from({ length: 25 }, (_, i) => {
  const title =
    i % 2 === 0
      ? `A&U & PTIT JOB FAIR 2025: Sôi Nổi – Nhiệt Huyết – Truyền Cảm Hứng! #${
          i + 1
        }`
      : `A&U TẠI EPU’S JOB FAIR 2025 – GẮN KẾT CƠ HỘI, MỞ RỘNG TƯƠNG LAI #${
          i + 1
        }`;
  // Tạo slug đơn giản từ title
  const slug =
    title
      .toLowerCase()
      .replace(/#\d+/g, "") // Bỏ số hiệu
      .replace(/đ/g, "d") // Thay thế 'đ' thành 'd'
      .replace(/[^\w\s-]/g, "") // Bỏ ký tự đặc biệt (giữ lại chữ, số, khoảng trắng, gạch nối)
      .trim()
      .replace(/\s+/g, "-") + `-${i + 1}`;

  return {
    id: i + 1,
    slug: slug,
    title: title,
    imageSrc:
      i % 2 === 0
        ? "/assets/images/R5AT3894.jpg"
        : "/assets/images/R5AT4140.jpg",
    author: "ADMIN",
    date: `12/05/2025`,
    comments: 0,
    category: i % 3 === 0 ? "Sự kiện" : i % 3 === 1 ? "Tin tức" : "Tuyển dụng",
    excerpt:
      "Tại gian hàng của A&U, hàng trăm sinh viên đã đến trải nghiệm các hoạt động tư vấn định hướng nghề nghiệp, kiểm tra trình độ tiếng Anh miễn phí và nhận những phần quà hấp dẫn...",
    content: `
            <p>Đây là nội dung chi tiết của bài viết. Tại A&U, chúng tôi không chỉ mang đến những giờ học tiếng Anh chất lượng mà còn tạo ra những cơ hội để sinh viên tiếp cận với các nhà tuyển dụng hàng đầu. Ngày hội việc làm là một minh chứng rõ nét cho cam kết đó.</p>
            <img src="${
              i % 2 === 0
                ? "/assets/images/R5AT3894.jpg"
                : "/assets/images/R5AT4140.jpg"
            }" alt="Nội dung bài viết" style="width:100%; border-radius: 8px; margin-top: 1rem; margin-bottom: 1rem;" />
            <p>Sự kiện đã thu hút hàng trăm sinh viên tham gia, không chỉ để tìm kiếm cơ hội việc làm mà còn để lắng nghe những chia sẻ quý báu từ các chuyên gia, định hướng cho con đường sự nghiệp tương lai.</p>
            <h3>Những hoạt động chính:</h3>
            <ul>
                <li>Tư vấn và định hướng nghề nghiệp 1:1.</li>
                <li>Kiểm tra trình độ tiếng Anh miễn phí.</li>
                <li>Phỏng vấn thử với các nhà tuyển dụng.</li>
                <li>Giao lưu và nhận quà từ A&U.</li>
            </ul>
            <p>Chúng tôi tự hào là cầu nối vững chắc giữa sinh viên và doanh nghiệp, góp phần vào sự phát triển chung của cộng đồng.</p>
        `,
  };
});

export const NEWS_CATEGORIES = [
  { name: "Sự kiện", count: 41 },
  { name: "Tin tức", count: 85 },
  { name: "Tuyển dụng", count: 30 },
];
