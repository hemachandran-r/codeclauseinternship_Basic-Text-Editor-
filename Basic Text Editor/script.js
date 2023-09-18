function execCommand(command, value = null) {
    document.execCommand(command, false, value);
}

document.getElementById("font-size").addEventListener("change", function () {
    execCommand("fontSize", this.value);
});

document.getElementById("font-color").addEventListener("change", function () {
    execCommand("foreColor", this.value);
});
document.getElementById("image-upload").addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                document.execCommand("insertImage", false, img.src);
            };
        };
        reader.readAsDataURL(file);
    }
});
function saveText() {
    const text = document.querySelector(".editor").innerHTML;
    localStorage.setItem("savedText", text);
    alert("Text saved!");
}

function loadText() {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
        document.querySelector(".editor").innerHTML = savedText;
        alert("Text loaded!");
    } else {
        alert("No saved text found.");
    }
}

