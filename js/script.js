const inputList = document.getElementById("inputList");
const tambahList = document.getElementById("tambahList");
const resetList = document.getElementById("resetList");

function proses() {
    const list = document.getElementById("list");
    const inputValue = inputList.value.trim();
    const li = document.createElement("li");
    if (inputValue == "") {
        alert("Inputan wajib diisi dan tidak boleh diisi dengan spasi !");
        return;
    }
    list.append(li);
    li.append(inputValue);
    document.getElementById("inputList").value = "";
}
tambahList.addEventListener('click', proses);

resetList.addEventListener('click', function () {
    document.getElementById("list").innerHTML = "";
    document.getElementById("inputList").value = "";
});

inputList.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        proses();
    }
});