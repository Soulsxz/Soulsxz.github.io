function upDate(previewPic) {
    console.log("Sự kiện upDate đã được kích hoạt thành công!");
    console.log("Alt text của ảnh: " + previewPic.alt);
    console.log("Đường dẫn (Source) của ảnh: " + previewPic.src);

    var imageDiv = document.getElementById("image");

    if (imageDiv) {
        imageDiv.innerHTML = previewPic.alt;
        imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
        console.log("Đã cập nhật giao diện vùng hiển thị lớn phối hợp Alt và Source.");
    } else {
        console.warn("Lưu ý: Không tìm thấy phần tử có id='image' trên trang này. Hãy thêm <div id='image'> vào HTML.");
    }
}

function undo() {
    console.log("Sự kiện undo đã được kích hoạt!");

    var imageDiv = document.getElementById("image");

    if (imageDiv) {
        imageDiv.style.backgroundImage = "url('')";
        imageDiv.innerHTML = "Hover over an image below to display here.";
        console.log("Giao diện đã được khôi phục về trạng thái mặc định ban đầu.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("Trang web đã tải xong hoàn toàn. Đang tự động cấu hình các bộ lắng nghe sự kiện...");

    var previewImages = document.querySelectorAll(".game-card img");

    if (previewImages.length === 0) {
        console.log("Không tìm thấy thẻ ảnh nào thuộc class '.game-card' trên trang này.");
        return;
    }

    previewImages.forEach(function(img) {
        img.setAttribute("tabindex", "0");

        img.addEventListener("mouseover", function() {
            upDate(this);
        });

        img.addEventListener("mouseout", function() {
            undo();
        });

        img.addEventListener("focus", function() {
            upDate(this);
        });

        img.addEventListener("blur", function() {
            undo();
        });
    });

    console.log("Đã kết nối sự kiện thành công cho " + previewImages.length + " thẻ ảnh!");
});