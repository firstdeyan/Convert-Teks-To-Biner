window.onload = function () {
    var convertBtn = document.getElementById("convert-btn");
    var textInput = document.getElementById("text-input");
    var binaryOutput = document.getElementById("binary-output");

    textInput.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            convertToBinaryAndDisplay();
        }
    });

    convertBtn.addEventListener("click", function () {
        var text = textInput.value;
        var binary = convertToBinary(text);
        binaryOutput.innerHTML = binary;
    });

    function convertToBinaryAndDisplay() {
        var text = textInput.value;
        var binary = convertToBinary(text);
        binaryOutput.innerHTML = binary;
    }



    function convertToBinary(text) {
        var binary = "";
        for (var i = 0; i < text.length; i++) {
            var charCode = text.charCodeAt(i);
            var binaryChar = charCode.toString(2);
            binary += binaryChar.padStart(8, "0") + " ";
        }
        return binary.trim();
    }
};
