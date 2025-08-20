// src/lib/course-data.js

export const COURSE_DATA = {
  "mau-giao": {
    slug: "mau-giao",
    title: "Tiếng Anh Mẫu giáo (Pre-Starters)",
    imageSrc: "/assets/images/R5AT4202.jpg",
    shortDescription:
      "Tạo nền tảng Anh ngữ vững chắc cho bé qua các hoạt động vui nhộn, bài hát và trò chơi tương tác.",
    overview: {
      age: "3 - 6 tuổi",
      duration: "3 tháng / cấp độ",
      outcome:
        "Phát âm chuẩn, nhận biết từ vựng cơ bản, tự tin và yêu thích tiếng Anh.",
      method:
        "Học qua chơi (Play-based learning), TPR (Total Physical Response).",
    },
    skills: {
      speaking:
        "Làm quen với cấu trúc cơ bản, từ vựng về chủ đề gần gũi như classroom, family, greetings. Sử dụng TPR để học ngôn ngữ. Học cách nói câu xin lỗi, yêu cầu ai đó làm gì.",
      listening:
        "Nghe và nhận biết các từ mới về: At school (notebook, pen, table), Family (members), Playtime (boat, car, bike), My house (lamp, desk), My body (body parts, face parts), Time to eat (bread, chicken), On the farm (cow, duck, goat), The weather (hot, sunny).",
      reading:
        "Làm quen với mặt chữ và hình ảnh. Xem và nghe kể truyện sử dụng hình ảnh. Học sinh có thể đọc truyện dài bằng tiếng Anh với những từ đơn giản.",
      writing:
        "Tô màu, nối chữ và các hoạt động làm quen với bút. Phát triển kỹ năng tinh và làm quen với việc viết các ký tự cơ bản.",
    },
    curriculum: [
      {
        module: "Module 1: Welcome to my world!",
        content:
          '<ul><li>Chào hỏi và giới thiệu bản thân.</li><li>Học về màu sắc, hình dạng và số đếm.</li><li>Bài hát: "Hello Song", "Colors Song".</li></ul>',
      },
      {
        module: "Module 2: My Family & Friends",
        content:
          '<ul><li>Từ vựng về các thành viên trong gia đình.</li><li>Trò chơi đóng vai, thực hành giao tiếp đơn giản.</li><li>Kể chuyện: "Goldilocks and the Three Bears".</li></ul>',
      },
      {
        module: "Module 3: Fun with Animals",
        content:
          "<ul><li>Nhận biết các con vật trong nông trại và sở thú.</li><li>Hoạt động thể chất (TPR) theo chủ đề động vật.</li><li>Sản phẩm cuối khóa: Vẽ và giới thiệu con vật yêu thích.</li></ul>",
      },
    ],
  },
  "tieu-hoc": {
    slug: "tieu-hoc",
    title: "Tiếng Anh Tiểu học (Starters)",
    imageSrc: "/assets/images/R5AT3961.jpg",
    shortDescription:
      "Phát triển toàn diện 4 kỹ năng theo chuẩn Cambridge, giúp học sinh tự tin giao tiếp và đạt kết quả cao.",
    overview: {
      age: "6 - 11 tuổi",
      duration: "4 tháng / cấp độ",
      outcome:
        "Tương đương trình độ Starters của Cambridge. Giao tiếp cơ bản, đọc hiểu truyện ngắn, viết đoạn văn đơn giản.",
      method:
        "Học theo dự án (Project-based learning), Giao tiếp tương tác (Communicative approach).",
    },
    skills: {
      speaking:
        "Học sinh có thể tương tác một cách đơn giản bằng tiếng Anh với tốc độ nói chậm. Học sinh có thể hỏi và trả lời những câu hỏi đơn giản về các chủ đề rất quen thuộc. Học sinh có thể sử dụng các câu và từ đơn giản để mô tả về nơi họ sống và những người học sinh biết.",
      listening:
        "Học sinh có thể nhận ra những từ quen thuộc và những cụm từ rất cơ bản liên quan đến bản thân, gia đình tôi và môi trường xung quanh cụ thể ngay lập tức khi mọi người nói chậm và rõ ràng.",
      reading:
        "Học sinh có thể hiểu những cái tên quen thuộc, những từ và những câu rất đơn giản, chẳng hạn như trên các thông báo, áp phích hoặc quảng cáo.",
      writing:
        "Học sinh có thể viết một đoạn ngắn gọn, đơn giản, như bưu thiếp. Học sinh có thể điền vào các mẫu đơn với chi tiết cá nhân, ví dụ nhập tên, tuổi, quốc tịch và địa chỉ trên mẫu đăng ký khách sạn.",
    },
    curriculum: [
      {
        module: "Module 1: All About Me",
        content:
          '<ul><li>Giới thiệu chi tiết về bản thân, sở thích, trường lớp.</li><li>Thực hành thì hiện tại đơn.</li><li>Dự án: Tạo một "Portfolio" cá nhân.</li></ul>',
      },
      {
        module: "Module 2: My Town",
        content:
          "<ul><li>Từ vựng về các địa điểm trong thành phố.</li><li>Học cách hỏi đường và chỉ đường.</li><li>Dự án: Vẽ bản đồ khu phố và giới thiệu.</li></ul>",
      },
      {
        module: "Module 3: Amazing Animals",
        content:
          "<ul><li>So sánh các loài động vật.</li><li>Thực hành cấu trúc so sánh hơn và so sánh nhất.</li><li>Dự án: Làm một bài thuyết trình về động vật hoang dã.</li></ul>",
      },
    ],
  },
  // Thêm dữ liệu cho các khóa học khác tương tự (Movers, Flyers, IELTS...)
  thcs: {
    slug: "thcs",
    title: "Tiếng Anh THCS (Movers & Flyers)",
    imageSrc: "/assets/images/R5AT3931.jpg",
    shortDescription:
      "Nâng cao ngữ pháp, từ vựng và kỹ năng học thuật, chuẩn bị cho các kỳ thi chuyển cấp và định hướng quốc tế.",
    overview: {
      age: "11 - 15 tuổi",
      duration: "4 tháng / cấp độ",
      outcome:
        "Tương đương trình độ Movers/Flyers của Cambridge. Viết luận, thuyết trình, tranh biện về các chủ đề phức tạp hơn.",
      method:
        "Tranh biện (Debate), Tư duy phản biện (Critical Thinking), Học thuật (Academic English).",
    },
    skills: {
      speaking:
        "Học sinh có thể giao tiếp trong các hội thoại đơn giản và trao đổi thông tin trực tiếp về các chủ đề và hoạt động quen thuộc. Học sinh có thể xử lý các cuộc hội thoại rất ngắn, ngay cả khi họ thường không thể hiểu đủ để tự mình tiếp tục cuộc trò chuyện.",
      listening:
        "Học sinh có thể đọc được những đoạn văn rất ngắn, đơn giản. Học sinh có thể tìm thông tin cụ thể, có thể dự đoán được trong các tài liệu đơn giản hàng ngày như quảng cáo, bản cáo bạch, menu và thời gian biểu và họ có thể hiểu các bức thư cá nhân ngắn gọn đơn giản.",
      reading:
        "Học sinh có thể viết các ghi chú và tin nhắn ngắn gọn, đơn giản liên quan đến các vấn đề trong các lĩnh vực cần thiết ngay lập tức. Học sinh có thể viết một lá thư cá nhân rất đơn giản, ví dụ như cảm ơn ai đó.",
      writing:
        "Học sinh có thể viết các cụm từ và từ vựng phổ biến và gần gũi nhất với bản thân (ví dụ: thông tin rất cơ bản về cá nhân và gia đình, mua sắm, việc làm). Học sinh có thể nắm bắt được điểm chính trong các tin nhắn và thông báo báo ngắn gọn, rõ ràng, đơn giản.",
    },
    curriculum: [
      {
        module: "Module 1: Technology",
        content:
          "<ul><li>Thảo luận về ưu và nhược điểm của công nghệ.</li><li>Học thì tương lai và câu điều kiện.</li><li>Dự án: Thiết kế một sản phẩm công nghệ tương lai.</li></ul>",
      },
      {
        module: "Module 2: Environment",
        content:
          "<ul><li>Tranh biện về các vấn đề môi trường.</li><li>Học cách viết bài luận nêu quan điểm.</li><li>Dự án: Tổ chức một chiến dịch bảo vệ môi trường nhỏ.</li></ul>",
      },
    ],
  },
  ielts: {
    slug: "ielts",
    title: "Luyện thi IELTS",
    imageSrc: "/assets/images/R5AT4255.jpg",
    shortDescription:
      "Lộ trình cá nhân hóa với chiến thuật làm bài hiệu quả, tối đa hóa điểm số cho cả 4 kỹ năng.",
    overview: {
      age: "13 tuổi trở lên",
      duration: "Linh hoạt theo mục tiêu",
      outcome:
        "Đạt band điểm IELTS mục tiêu, sẵn sàng cho du học và sự nghiệp toàn cầu.",
      method: "Luyện đề chuyên sâu, Phân tích lỗi sai, Mock test định kỳ.",
    },
    skills: {
      speaking:
        "Học sinh có thể mô tả những trải nghiệm và hoài bão. Học sinh có thể đưa ra lý do và giải thích ngắn gọn cho các ý kiến và kế hoạch. Học sinh có thể thuật lại một câu chuyện hoặc kể lại cốt truyện của một cuốn sách hoặc bộ phim và mô tả phản ứng của mình.",
      listening:
        "Học sinh có thể hiểu ý chính của các bài phát biểu, các vấn đề quen thuộc thường gặp trong công việc, trường học, giải trí, v.v. Học sinh có thể hiểu nhiều chương trình phát thanh hoặc truyền hình về các vấn đề, chủ đề hoặc nghệ thuật quan tâm khi đối thoại tương đối chậm và rõ ràng.",
      reading:
        "Học sinh có thể hiểu các văn bản bao gồm ngôn ngữ có tần suất sử dụng cao trong ngày hoặc liên quan đến công việc. Học sinh có thể hiểu được mô tả về các sự kiện, cảm xúc và mong muốn trong các bức thư cá nhân.",
      writing:
        "Học sinh có thể viết văn bản liên kết đơn giản về các chủ đề quen thuộc hoặc sở thích cá nhân. Học sinh có thể mô tả kinh nghiệm và ấn tượng.",
    },
    curriculum: [
      {
        module: "Module 1: Foundation (Band 4.0 - 5.0)",
        content:
          "<ul><li>Xây dựng nền tảng ngữ pháp và từ vựng cốt lõi.</li><li>Làm quen với cấu trúc đề thi IELTS.</li></ul>",
      },
      {
        module: "Module 2: Developing (Band 5.0 - 6.5)",
        content:
          "<ul><li>Phát triển chiến thuật cho từng dạng bài.</li><li>Luyện tập chuyên sâu từng kỹ năng.</li></ul>",
      },
      {
        module: "Module 3: Advanced (Band 6.5+)",
        content:
          "<ul><li>Tối ưu hóa điểm số với các kỹ thuật nâng cao.</li><li>Luyện tập với đề thi thật và mock test bấm giờ.</li></ul>",
      },
    ],
  },
};
