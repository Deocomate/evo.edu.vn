"use server";

import {registerCustomer} from "@/services/customerService";

export async function registerCustomerAction(formData, trainingId) {
    try {
        const apiData = {
            training_id: trainingId,
            full_name_parent: formData.hoTenPhuHuynh,
            phone: formData.soDienThoai,
            email: formData.email,
            full_name_children: formData.hoTenHocVien,
            date_of_birth: formData.ngaySinhHocVien,
            address: formData.diaChi,
            note: formData.ghiChu || "",
        };

        const result = await registerCustomer(apiData);

        return {success: true, data: result};

    } catch (error) {

        return {success: false, error: error.message};

    }
}
