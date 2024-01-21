export const salary_class_tutor = (ugs_unit_price: any, ugs_salary: any, ugs_month: any, ugs_time: any) => {
    let priceType: number;
    let priceBy: string;
    let price: string;
    if (ugs_unit_price === 0) {
        priceType = ugs_month;
        priceBy = priceType === 3 ? 'Tháng' : 'Buổi';
        if (ugs_salary !== '' && ugs_salary !== null) {
            const arrPrice = ugs_salary.split('-');
            price = `${numberFormat(arrPrice[0].trim())} - ${numberFormat(arrPrice[1].trim())}`;
        } else {
            price = '0';
        }
    } else {
        priceType = ugs_time;
        priceBy = priceType === 3 ? 'Tháng' : 'Buổi';
        price = `${numberFormat(ugs_unit_price.toString())}`;
    }
    return `${price} VNĐ/${priceBy}`;

    
}
const numberFormat = (value: string): string => {
    return Number(value).toLocaleString('en-US');
};

export const subject = (data: { as_id: any, as_name: string }[], key: number) => {
    try {
        const value = data.find(item => item.as_id == key);
        if (value) {
            return value.as_name;
        } else {
            return '';
        }
    } catch (error) {
        return ''
    }
}
export const mapSubject = (data :any, string :any) => {
    try {
        string = string.toString();
        const arr = string.split(',');
        let result = '';
        for (let i = 0; i < arr.length; i++) {
            const item = subject(data, arr[i]);
            result += `${item}, `
        }
        if (result.endsWith(', ')) {
            // Nếu có, loại bỏ dấu phẩy cuối cùng
            result = result.slice(0, -2);
        }
        return result
    } catch (error) {
        return ''

    }

}