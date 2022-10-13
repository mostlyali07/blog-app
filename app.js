var quill = new Quill('#editor', {
    theme: 'snow'
});

let btnMain = document.getElementById('btnMain');


btnMain.addEventListener("click" , () =>{
    let title = document.getElementById("title").value;
    console.log(title);
    document.getElementById("title").value="";
})