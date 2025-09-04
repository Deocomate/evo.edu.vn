"use client";

import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {toast} from "sonner";
import {registerCustomer} from '@/services/customerService';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';
import {Loader2} from 'lucide-react';

// CHANGED: Cập nhật Zod schema để khớp với backend
const formSchema = z.object({
    hoTenPhuHuynh: z.string().min(2, {message: "Vui lòng nhập tên phụ huynh."}),
    soDienThoai: z.string().regex(/^(0[3|5|7|8|9])+([0-9]{8})$/, {message: "Số điện thoại không hợp lệ."}), // Email giờ là tùy chọn, nhưng nếu nhập phải đúng định dạng
    email: z.string().email({message: "Địa chỉ email không hợp lệ."}).optional().or(z.literal('')),
    hoTenHocVien: z.string().min(2, {message: "Vui lòng nhập tên học viên."}), // Thay thế ngaySinhHocVien bằng tuoiHocVien
    tuoiHocVien: z.coerce.number({invalid_type_error: "Tuổi phải là một số."})
        .int({message: "Tuổi phải là số nguyên."})
        .min(1, {message: "Vui lòng nhập tuổi hợp lệ."}),
    diaChi: z.string().min(5, {message: "Vui lòng nhập địa chỉ."}),
    ghiChu: z.string().optional(),
});

function RegistrationForm({courseId, onFormSubmitSuccess}) {
    const form = useForm({
        resolver: zodResolver(formSchema), // CHANGED: Cập nhật giá trị mặc định
        defaultValues: {
            hoTenPhuHuynh: "", soDienThoai: "", email: "", hoTenHocVien: "", tuoiHocVien: "", // Sử dụng chuỗi rỗng cho input number
            diaChi: "", ghiChu: "",
        },
    });

    async function onSubmit(values) {
        try {
            // CHANGED: Cập nhật cấu trúc dữ liệu gửi đến API
            const apiData = {
                training_id: courseId,
                full_name_parent: values.hoTenPhuHuynh,
                phone: values.soDienThoai,
                email: values.email || null, // Gửi null nếu email rỗng
                full_name_children: values.hoTenHocVien,
                age: values.tuoiHocVien, // Gửi `age` thay vì `date_of_birth`
                address: values.diaChi,
                note: values.ghiChu || "",
            };

            await registerCustomer(apiData);
            toast.success("Gửi thông tin thành công!", {
                description: "Cảm ơn bạn đã quan tâm. Evo Education sẽ liên hệ với bạn sớm nhất.",
            });
            form.reset();
            if (onFormSubmitSuccess) {
                onFormSubmitSuccess();
            }
        } catch (error) {
            console.error(error);
            toast.error("Gửi thông tin thất bại", {
                description: error.message || "Đã có lỗi xảy ra. Vui lòng thử lại.",
            });
        }
    }

    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="hoTenPhuHuynh"
                    render={({field}) => (<FormItem>
                        <FormLabel>Họ và tên phụ huynh</FormLabel>
                        <FormControl><Input placeholder="Nguyễn Văn A" {...field} /></FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
                <FormField
                    control={form.control}
                    name="soDienThoai"
                    render={({field}) => (<FormItem>
                        <FormLabel>Số điện thoại</FormLabel>
                        <FormControl><Input type="tel" placeholder="09xxxxxxxx" {...field} /></FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
            </div>

            {/* CHANGED: Thêm "(tùy chọn)" vào label của Email */}
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormLabel>Email (tùy chọn)</FormLabel>
                    <FormControl><Input type="email" placeholder="example@email.com" {...field} /></FormControl>
                    <FormMessage/>
                </FormItem>)}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                    control={form.control}
                    name="hoTenHocVien"
                    render={({field}) => (<FormItem>
                        <FormLabel>Họ và tên học viên</FormLabel>
                        <FormControl><Input placeholder="Nguyễn Thị B" {...field} /></FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
                {/* CHANGED: Thay thế trường Ngày sinh bằng Tuổi */}
                <FormField
                    control={form.control}
                    name="tuoiHocVien"
                    render={({field}) => (<FormItem>
                        <FormLabel>Tuổi của học viên</FormLabel>
                        <FormControl><Input type="number" placeholder="Ví dụ: 8" {...field} /></FormControl>
                        <FormMessage/>
                    </FormItem>)}
                />
            </div>

            <FormField
                control={form.control}
                name="diaChi"
                render={({field}) => (<FormItem>
                    <FormLabel>Địa chỉ</FormLabel>
                    <FormControl><Input
                        placeholder="Số nhà, tên đường, phường/xã..." {...field} /></FormControl>
                    <FormMessage/>
                </FormItem>)}
            />

            <FormField
                control={form.control}
                name="ghiChu"
                render={({field}) => (<FormItem>
                    <FormLabel>Ghi chú (tùy chọn)</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Ví dụ: Cần tư vấn thêm về lịch học..." {...field} />
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />

            <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-base text-white cursor-pointer"
                    size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Đang
                    gửi...</>) : ("Gửi thông tin")}
            </Button>
        </form>
    </Form>);
}

export default RegistrationForm;