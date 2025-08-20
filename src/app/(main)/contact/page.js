import ContactPage from '@/pages_jsx/Contact/ContactPage';
import { getContactInfo } from '@/services/contactService';

export const metadata = {
  title: "Liên hệ - Hệ thống Anh ngữ A&U",
  description: "Thông tin liên hệ các cơ sở của Hệ thống Anh ngữ A&U. Tìm địa chỉ, số điện thoại và bản đồ đường đi chi tiết.",
};

export default async function Contact() {
  const contactData = await getContactInfo();

  if (!contactData) {
    return (
        <main className="flex items-center justify-center h-screen">
            <p>Không thể tải thông tin liên hệ. Vui lòng thử lại sau.</p>
        </main>
    );
  }

  return <ContactPage contactData={contactData} />;
}