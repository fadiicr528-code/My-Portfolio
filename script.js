const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML="Light Mode";
    }
    else{
        darkBtn.innerHTML="Dark Mode";
    }

});