(function(exports) {

    function NoteController(noteList,noteListView) {
        this.noteList = new NoteList();
        this.noteListView = new NoteListView(this.noteList);
    }

    NoteController.prototype = {

        createNewNote: function(note) {
            this.noteList.storeNote(note);
        },

        toHtml: function() {
            var joiner = this.noteListView.listHtml();
            return joiner;
        },

        listNote: function() {
            var listNote = document.getElementById("app");
            listNote.innerHTML = this.toHtml();
        },

        revealSingleNote: function(id) {
            var note = this.noteList.noteArray[id].note;
            var textNote =  document.getElementById('currentSingleNote')
            textNote.innerHTML = note;
        },

    };

    exports.NoteController = NoteController;

})(this);
