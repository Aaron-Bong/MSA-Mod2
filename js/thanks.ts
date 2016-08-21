class alertbox {

    show() {
        alert("Thank you for your contribution!");

    }

}

window.onload = () => {

    var msb = new alertbox();

    var bttn = document.getElementById("Button1");

    bttn.onclick = function () {

        msb.show();

    }

};