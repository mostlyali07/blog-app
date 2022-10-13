var quill = new Quill('#editor', {
    theme: 'snow'
});

let btnMain = document.getElementById('btnMain');


btnMain.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    console.log(title);
    document.getElementById("title").value = "";
    let editor = document.getElementById("editor").innerHTML;
    console.log(editor);
    document.getElementById("editor").innerHTML = "";
    let customFile = document.getElementById("customFile").value;
    console.log(customFile);
    document.getElementById("customFile").value = "";
})