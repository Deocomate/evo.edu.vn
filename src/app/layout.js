// src/app/layout.js
import {Raleway} from 'next/font/google';
import "@/assets/css/globals.css";
import MainFooter from "@/components/layouts/MainFooter";
import MainHeader from "@/components/layouts/MainHeader";
import {Toaster} from "@/components/ui/sonner";
import {getMenus} from '@/services/menuService';
import {getContactInfo} from '@/services/contactService';
import FloatingSocials from '@/components/shared/FloatingSocials';

const raleway = Raleway({
    subsets: ['latin', 'vietnamese'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    display: 'swap',
    variable: '--font-raleway',
});

export const metadata = {
    title: "Evo Education", description: "Evo Education - Hoc tập và phát triển kỹ năng lập trình, robot cho trẻ em",
};

export default async function RootLayout({children}) {
    const [menuData, contactData] = await Promise.all([getMenus(), getContactInfo()]);

    return (<html lang="vi" className={raleway.variable}>
    <body>
    <MainHeader navigation={menuData}/>
    {children}
    <MainFooter contactInfo={contactData}/>
    <FloatingSocials contactInfo={contactData}/>
    <Toaster richColors position="top-center"/>
    </body>
    </html>);
}