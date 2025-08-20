/* ===== src/components/layouts/MainFooter.jsx ===== */
import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook } from 'lucide-react';
import BrandLogo from '@/components/shared/BrandLogo';

const quickLinks = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Tin tức', href: '/news' },
    { label: 'Các khóa học', href: '/training' },
    { label: 'Giảng viên', href: '/teachers' },
    { label: 'Góc Phụ Huynh', href: '/parents-corner' },
    { label: 'Liên hệ', href: '/contact' },
];

function MainFooter({ contactInfo = {} }) {
    const { address = [], phone = '', email = '', facebook = '' } = contactInfo;
    const socialLinks = [
        { icon: <Facebook className="h-5 w-5" />, href: facebook || 'https://facebook.com/evo.edu.vn' },
    ];

    return (
        <footer className="bg-sky-50/70 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <Link href="/" className="mb-4 inline-flex" aria-label="Học viện Sáng tạo Công nghệ Trẻ Evo.edu.vn">
                            <BrandLogo imageSize={125} />
                        </Link>
                        <p className="text-slate-600 text-sm font-medium">
                            Kiến tạo thế hệ trẻ Việt Nam sẵn sàng cho kỷ nguyên số, phát triển toàn diện tư duy logic, sáng tạo và kỹ năng công nghệ.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-sky-900 mb-3">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-700 text-sm font-medium hover:text-sky-600 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-sky-900 mb-3">Thông tin liên hệ</h3>
                        {address[0]?.address && (
                            <p className="text-slate-700 text-sm font-medium flex items-start mb-2">
                                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-sky-600" /> {address[0].address}
                            </p>
                        )}
                        {phone && (
                            <p className="text-slate-700 text-sm font-medium flex items-center mb-2">
                                <Phone className="h-4 w-4 mr-2 text-sky-600" /> {phone}
                            </p>
                        )}
                        {email && (
                            <p className="text-slate-700 text-sm font-medium flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-sky-600" /> {email}
                            </p>
                        )}
                    </div>

                    <div>
                        <h3 className="font-bold text-sky-900 mb-3">Mạng xã hội</h3>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <Link key={index} href={social.href}
                                      className="text-slate-600 hover:text-sky-600 transition-colors duration-200"
                                      target="_blank" rel="noopener noreferrer">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-sky-200 pt-4 text-center text-slate-500 text-xs font-medium">
                    © {new Date().getFullYear()} Evo Education. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;