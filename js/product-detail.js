let quickOrder = document.querySelector("#quick-order");
let popup = document.querySelector(".popup-order");
let popDelete = document.querySelector("#popup-delete");
quickOrder.addEventListener("click", function () {
    popup.classList.add("active");
});
popDelete.addEventListener("click", function () {
    popup.classList.remove("active");
});

let thumbImg = document.querySelector(".thumb");
let listImg = document.querySelectorAll(".list-image img");
listImg.forEach((element) => {
    element.addEventListener("click", function () {
        thumbImg.src = element.src;
    });
});
