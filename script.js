function handleYellow(name) {
    const banner = document.getElementById('yl-banner');

    if (!banner) {
        console.error('Banner element not found!');
        return;
    }

    // Tạo một phần tử img mới
    const newImg = document.createElement('img');

    switch (name) {
        case 'yl1':
            newImg.src = 'images/vang-to-1.png';
            break;
        case 'yl2':
            newImg.src = 'images/vang-to-2.png';
            break;
        case 'yl3':
            newImg.src = 'images/vang-to-3.png';
            break;
        default:
            console.warn('Invalid name:', name);
            return;
    }

    newImg.id = 'yl-banner'; // Giữ nguyên ID để thay thế chính xác
    banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới
}


function handlePink(name) {
    const banner = document.getElementById('pink-banner');

    if (!banner) {
        console.error('Banner element not found!');
        return;
    }

    // Tạo một phần tử img mới
    const newImg = document.createElement('img');

    switch (name) {
        case 'pink1':
            newImg.src = 'images/hong-to-1.png';
            break;
        case 'pink2':
            newImg.src = 'images/hong-to-2.png';
            break;
        case 'pink3':
            newImg.src = 'images/hong-to-3.png';
            break;
        default:
            console.warn('Invalid name:', name);
            return;
    }

    newImg.id = 'pink-banner'; // Giữ nguyên ID để thay thế chính xác
    banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới
}


function handleGreen(name) {
    const banner = document.getElementById('green-banner');

    if (!banner) {
        console.error('Banner element not found!');
        return;
    }

    // Tạo một phần tử img mới
    const newImg = document.createElement('img');

    switch (name) {
        case 'green1':
            newImg.src = 'images/xanh-to-1.png';
            break;
        case 'green2':
            newImg.src = 'images/xanh-to-2.png';
            break;
        case 'green3':
            newImg.src = 'images/xanh-to-3.png';
            break;
        default:
            console.warn('Invalid name:', name);
            return;
    }

    newImg.id = 'green-banner'; // Giữ nguyên ID để thay thế chính xác
    banner.replaceWith(newImg); // Thay thế ảnh cũ bằng ảnh mới
}
