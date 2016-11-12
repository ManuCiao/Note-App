(function(exports) {

    function NoteController(noteListView) {
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
            var test = document.getElementById("app");
            test.innerHTML = this.toHtml();
        },

        revealSingleNote: function(id) {
            var note = this.noteList.noteArray[id].note;
            document.getElementById('currentSingleNote').innerHTML = note;
        },


    };

    exports.NoteController = NoteController;

})(this);