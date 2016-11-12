var noteController = new NoteController();


window.onload = function() {

  var form = document.getElementById('form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var single = document.getElementById('note-text').value;
    noteController.createNewNote(single);
    noteController.listNote();
  });

};
