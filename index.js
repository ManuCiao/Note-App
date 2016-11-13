var noteController = new NoteController();

window.onload = function() {

    var form = document.getElementById('form');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var inputValue = document.getElementById('note-text').value;
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            noteController.createNewNote(inputValue);
            noteController.listNote();
        }
        document.getElementById('note-text').value = "";

    });

};