export const salary_class_tutor = (ugs_unit_price, ugs_salary, ugs_month, ugs_time) => {
    let priceType;
    let priceBy;
    let price;
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
        price = ugs_unit_price !== undefined && ugs_unit_price !== null ? `${numberFormat(ugs_unit_price.toString())}` : '0';
    }
    return `${price} VNĐ/${priceBy}`;
}
export const salaryClass = (type, salary, unit) => {
    let price;

    if (type === 1) {
        price = new Intl.NumberFormat().format(parseInt(salary));
    } else {
        const arrPrice = salary.split(',');
        price = `${new Intl.NumberFormat().format(parseInt(arrPrice[0]))}-${new Intl.NumberFormat().format(parseInt(arrPrice[1]))}`;
    }

    let time;
    if (unit === 'time') {
        time = 'Buổi';
    } else if (unit === 'month') {
        time = 'Tháng';
    }

    return `${price} VNĐ/${time}`;
}
const numberFormat = (value) => {
    return Number(value).toLocaleString('en-US');
};

export const subject = (data, key) => {
    try {
        const value = data.find(item => item.as_id == key);
        return value.as_name;
    } catch (error) {
        return ''
    }
}

export const mapSubject = (data, string) => {
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