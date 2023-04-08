const darkBut = document.querySelector("#DarkTheme");
const canBut = document.querySelector("#Cancel");
const text = document.querySelector("textarea");
const saveBut = document.querySelector("#Save");
const newBut = document.querySelector("#NewNote");
const noteList = document.querySelector("aside ul");
// Dark theme
function darkTheme() {
  if (darkBut.textContent === "Dark Theme") {
    darkBut.textContent = "Light Theme";
  } else {
    darkBut.textContent = "Dark Theme";
  }
  document.body.classList.toggle("themeChangeMain");
  toggleNotes();
  toggleHeaders();
  toggleTextBox();
  toggleLinks();
}
// Dark theme textbox
function toggleNotes() {
  let notebox = document.querySelector("aside");
  let notes = document.querySelectorAll("aside ul li");
  notebox.classList.toggle("themeChangeAlt");
  for (i = 0; i < notes.length; i++) {
    notes[i].classList.toggle("themeChangeText");
  }
}
// Dark theme Header text
function toggleHeaders() {
  let headers = document.querySelectorAll("h1");
  for (i = 0; i < headers.length; i++) {
    headers[i].classList.toggle("themeChangeText");
  }
}
// Dark theme textbox
function toggleTextBox() {
  text.classList.toggle("themeChangeAlt");
  text.classList.toggle("themeChangeText");
}
// Dark theme links
function toggleLinks() {
  let links = document.querySelectorAll("a");
  for (i = 0; i < links.length; i++) {
    links[i].classList.toggle("themeChangeText");
  }
}

// Hide Save,Cancel buttons and Textbox
function cancel() {
  text.style.display = "none";
  saveBut.style.display = "none";
  canBut.style.display = "none";
}

// Display Save,Cancel buttons and Textbox
function startNew() {
  text.style.display = "block";
  text.value = "";
  saveBut.style.display = "block";
  canBut.style.display = "block";
}

let notesArray = [];
function addNote() {
  input = prompt("Enter a title for your note: ");
  note = { title: input, body: text.value };
  notesArray.push(note);
  addNoteToList(note);
}

function addNoteToList(note) {
  let newNote = document.createElement("li");
  newNote.textContent = note.title;
  noteList.appendChild(newNote);
}

//Add all button event listeners
darkBut.addEventListener("click", darkTheme);
canBut.addEventListener("click", cancel);
newBut.addEventListener("click", startNew);
saveBut.addEventListener("click", addNote);
// Notelist event listener where function checks which note
// clicked and displays the note description
noteList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    for (i = 0; i < notesArray.length; i++) {
      if (event.target.textContent == notesArray[i].title) {
        text.value = notesArray[i].body;
      }
    }
  }
});
