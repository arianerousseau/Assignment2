const btn = document.getElementById("btnID");
console.log(btn);
btn.addEventListener("click", show);

function show() {
    console.log('test');
    document.getElementById('image')
            .style.display = "block";

    document.getElementById('btnID')
            .style.display = "none";
}