function noteListStoresNote() {
  var noteList = new NoteList();
  noteList.storeNote("test text");
  if (noteList.noteArray[0].note == "test text") {
    console.log("noteListStoresNote");
  } else {
    console.log("false");
  }
}


function ViewReturnHTMLstring() {
  var noteList = new NoteList();
  var view = new NoteListView(noteList);
  noteList.storeNote("harry potter");
  noteList.storeNote("pray, eat, eat");
  if (view.listElementHtml() == "<li><a onclick='noteController.revealSingleNote(0)' id='notes/0' href='#notes/0'>harry potter</a></li><li><a onclick='noteController.revealSingleNote(1)' id='notes/1' href='#notes/1'>pray, eat, eat</a></li>") {
    console.log("ViewReturnHTMLstring");
  } else {
    console.log("false");
  }
}

function singleNoteViewReturns20CharactersHTML() {
  var note = new Note("harry potter is still alive!!!!");
  singleNote = new SingleNoteView(note);
  if (singleNote.twentyCharacters(note.text) == "harry potter is stil...") {
    console.log("singleNoteViewReturns20CharactersHTML");
  } else {
    console.log("false");
  }
}


noteListStoresNote();
ViewReturnHTMLstring();
singleNoteViewReturns20CharactersHTML();
