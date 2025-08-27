"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import {Button} from '@/components/ui/button';
import {Menu as MenuIcon, X} from 'lucide-react';
import {usePathname} from 'next/navigation';
import {
    Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger
} from "@/components/ui/dialog";
import RegistrationForm from '@/components/shared/RegistrationForm';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import BrandLogo from "@/components/shared/BrandLogo";

const ListItem = React.forwardRef(({className, title, href, ...props}, ref) => {
    return (<li>
        <NavigationMenuLink asChild>
            <Link
                href={href || '#'}
                ref={ref}
                className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none", "transition-colors bg-white hover:bg-sky-50 focus:bg-sky-50", "text-slate-700 hover:text-sky-700 focus:text-sky-700", className)}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
            </Link>
        </NavigationMenuLink>
    </li>);
});
ListItem.displayName = "ListItem"

function MainHeader({newsCategories = [], trainingCourses = []}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const menuItems = [{id: 'home', name: 'Trang chủ', url: '/'}, {
        id: 'training', name: 'Khóa học', url: '/training', children: trainingCourses.map(course => ({
            id: `course-${course.id}`, name: course.title, url: `/training/${course.slug}`
        }))
    }, {
        id: 'news', name: 'Tin tức', url: '/news', children: newsCategories.map(category => ({
            id: `category-${category.id}`, name: category.name, url: `/category/${category.slug}`
        }))
    }, {id: 'teachers', name: 'Giảng viên', url: '/teachers'}, {
        id: 'parents-corner',
        name: 'Góc Phụ Huynh',
        url: '/parents-corner'
    }, {id: 'chatbot', name: 'Trợ Lý AI', url: '/chatbot'}, {id: 'contact', name: 'Liên hệ', url: '/contact'},];

    return (<Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
        <header
            className="fixed top-0 left-0 w-full z-30 bg-white/90 backdrop-blur-sm shadow-md transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center gap-2"
                          aria-label="Học viện Sáng tạo Công nghệ Trẻ Evo.edu.vn">
                        <BrandLogo imageSize={125}/>
                    </Link>

                    <div className="hidden xl:flex items-center flex-1 justify-end">
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList className="gap-1">
                                {menuItems.map((item) => (<NavigationMenuItem key={item.id}>
                                    {item.children && item.children.length > 0 ? (<>
                                        <NavigationMenuTrigger
                                            className={cn("bg-transparent font-semibold", {
                                                "text-sky-600": pathname.startsWith(item.url),
                                                "text-slate-800 hover:text-sky-600": !pathname.startsWith(item.url)
                                            })}
                                        >
                                            <Link href={item.url} className="focus:outline-none">
                                                {item.name}
                                            </Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent
                                            className="z-50 rounded-md border border-slate-200 bg-white shadow-lg min-w-[200px] lg:min-w-[240px] p-0"
                                        >
                                            <ul className="grid gap-0 py-2">
                                                {item.children.map((child) => (
                                                    <ListItem key={child.id} title={child.name}
                                                              href={child.url}/>))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>) : (<NavigationMenuLink asChild>
                                        <Link
                                            href={item.url}
                                            className={cn(navigationMenuTriggerStyle(), "bg-transparent font-semibold", {
                                                "text-sky-600": pathname === item.url,
                                                "text-slate-800 hover:text-sky-600": pathname !== item.url
                                            })}
                                        >
                                            {item.name}
                                        </Link>
                                    </NavigationMenuLink>)}
                                </NavigationMenuItem>))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <div className="ml-2 xl:ml-4">
                            <DialogTrigger asChild>
                                <Button
                                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-3 lg:px-4 text-sm xl:text-base">
                                    Đăng ký ngay
                                </Button>
                            </DialogTrigger>
                        </div>
                    </div>

                    <button onClick={toggleMobileMenu} className="lg:hidden text-slate-800">
                        {isMobileMenuOpen ? <X className="h-7 w-7"/> : <MenuIcon className="h-7 w-7"/>}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (<div className="xl:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                <nav className="flex flex-col items-center space-y-4 py-6 px-4">
                    {menuItems.map(item => (<Link
                        key={item.id}
                        href={item.url}
                        className={`text-lg font-semibold transition-colors duration-200 ${pathname === item.url ? 'text-sky-600' : 'text-slate-800 hover:text-sky-600'}`}
                        onClick={toggleMobileMenu}
                    >
                        {item.name}
                    </Link>))}
                    <div className="mt-6 w-full pt-4 border-t">
                        <DialogTrigger asChild>
                            <Button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-sky-500 hover:bg-sky-600 w-full text-white font-bold"
                            >
                                Đăng ký ngay
                            </Button>
                        </DialogTrigger>
                    </div>
                </nav>
            </div>)}
        </header>

        <DialogContent className="sm:max-w-2xl bg-white p-8">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">Đăng ký tư vấn khóa học</DialogTitle>
                <DialogDescription>
                    Vui lòng điền đầy đủ thông tin bên dưới. Evo Education sẽ liên hệ với bạn để tư vấn chi tiết.
                </DialogDescription>
            </DialogHeader>
            <RegistrationForm onFormSubmitSuccess={() => setIsRegisterDialogOpen(false)}/>
        </DialogContent>
    </Dialog>);
}

export default MainHeader;