
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBWlnx1l0lnS4bbsLcxfPEbHFTige6IOBM",
    authDomain: "blog-app-7477.firebaseapp.com",
    projectId: "blog-app-7477",
    storageBucket: "blog-app-7477.appspot.com",
    messagingSenderId: "903246589883",
    appId: "1:903246589883:web:09247627930322e12a5e9e",
    measurementId: "G-X4KF2XFYBE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



var quill = new Quill('#editor', {
    theme: 'snow'
});

let btnMain = document.getElementById('btnMain');


btnMain.addEventListener("click", () => {
    let title = document.getElementById("title").value;
    console.log(title);
    document.getElementById("title").value = "";
    let editor = document.getElementById("editor");
    console.log(editor.innerHTML);
    document.getElementById("editor").innerHTML = "";
    let customFile = document.getElementById("customFile").value;
    console.log(customFile);
    document.getElementById("customFile").value = "";
})