const darkBut = document.querySelector("#DarkTheme");
const canBut = document.querySelector("#Cancel");
const text = document.querySelector("textarea");
const saveBut = document.querySelector("#Save")
const newBut = document.querySelector("#NewNote")
function darkTheme(){
    if(darkBut.textContent === "Dark Theme"){
        darkBut.textContent = "Light Theme"
    }else{
        darkBut.textContent = "Dark Theme"
    }
    document.body.classList.toggle("themeChangeMain");
    toggleNotes();
    toggleHeaders();
    toggleTextBox();
    toggleLinks();
}

function toggleNotes(){
    let notebox = document.querySelector("aside")
    let notes = document.querySelectorAll("aside ul li");
    notebox.classList.toggle("themeChangeAlt");
    for(i = 0; i < notes.length; i++){
        notes[i].classList.toggle("themeChangeText")
    }
}

function toggleHeaders(){
    let headers = document.querySelectorAll("h1");
    for(i = 0; i < headers.length; i++){
        headers[i].classList.toggle("themeChangeText")
    }
}

function toggleTextBox(){
    text.classList.toggle("themeChangeAlt");
    text.classList.toggle("themeChangeText");
}

function toggleLinks(){
    let links = document.querySelectorAll("a");
    for(i = 0; i < links.length; i++){
        links[i].classList.toggle("themeChangeText")
    }
}

function cancel(){
    text.style.display = "none";
    saveBut.style.display = "none";
    canBut.style.display = "none";
}

function newNote(){
    text.style.display = "block";
    text.value = "";
    saveBut.style.display = "block";
    canBut.style.display = "block";
}

darkBut.addEventListener("click",darkTheme);
canBut.addEventListener("click",cancel);
newBut.addEventListener("click",newNote)

