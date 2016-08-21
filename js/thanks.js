var alertbox = (function () {
    function alertbox() {
    }
    alertbox.prototype.show = function () {
        alert("Thank you for your contribution!");
    };
    return alertbox;
}());
window.onload = function () {
    var msb = new alertbox();
    var bttn = document.getElementById("Button1");
    bttn.onclick = function () {
        msb.show();
    };
};
