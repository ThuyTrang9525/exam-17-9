function add() {
    // Lấy giá trị từ form
    var productImage = document.getElementById("productImage").value;
    var productName = document.getElementById("productName").value;
    var newPrice = document.getElementById("newPrice").value;
    var oldPrice = document.getElementById("oldPrice").value;
    var productType = document.getElementById("productType").value;
    var productCode = document.getElementById("productCode").value;

    // Kiểm tra nếu các trường không có giá trị thì dừng lại
    if (!productImage || !productName || !newPrice || !oldPrice || !productType || !productCode) {
        alert("Please fill in all fields.");
        return;
    }

    // Tạo thẻ sản phẩm mới
    var card = document.createElement("div");
    card.className = "product-card"; // Thêm lớp CSS để định dạng

    // Thêm nội dung vào thẻ
    card.innerHTML = `
        <img src="${productImage}" alt="${productName}" />
        <h2>${productName}</h2>
        <p>New Price: $${newPrice}</p>
        <p>Old Price: $${oldPrice}</p>
        <p>Type: ${productType}</p>
        <p>Code: ${productCode}</p>
    `;

    // Thêm thẻ sản phẩm vào khu vực hiển thị
    document.getElementById("productCards").appendChild(card);

    // Ẩn form và hiển thị phần chứa các thẻ sản phẩm
    document.getElementById("productForm").style.display = "none";
    document.getElementById("productInfo").style.display = "none";
    document.getElementById("productCards").style.display = "block";
}

function showForm() {
    document.getElementById("productForm").style.display = "block"; // Hiển thị form
    document.getElementById("productInfo").style.display = "none";  // Ẩn phần hiển thị sản phẩm
    document.getElementById("productCards").style.display = "none"; // Ẩn phần chứa các thẻ sản phẩm
}

function showProduct() {
    document.getElementById("productForm").style.display = "none";  // Ẩn form
    document.getElementById("productInfo").style.display = "none"; // Ẩn phần thông tin sản phẩm
    document.getElementById("productCards").style.display = "block"; // Hiển thị phần chứa các thẻ sản phẩm
}

