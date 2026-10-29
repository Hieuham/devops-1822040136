const button = document.getElementById("btn");
const message = document.getElementById("msg");

button.addEventListener("click", function () {
    message.textContent = "JavaScript hoạt động thành công!";
});