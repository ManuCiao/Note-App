(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    //
    // var url = function (string) {
    //   return ("/#/notes/" + string.idReturn());
    // };


    NoteListView.prototype.twentyCharacters = function(string) {
        var stringDOTS = string.length > 20 ? "..." : "";
        return (string.slice(0, 20) + stringDOTS);
    };

    NoteListView.prototype.htmlURL = function() {
      var that = this;
        return this.noteList.noteArray.map(function(string) {
          var singleNote = new SingleNoteView(string);
            return ("<li>") +
                singleNote.htmlNote() + ("</li>");
        }).join("");
    };

    NoteListView.prototype.htmlJoiner = function() {
        return ("<ul>" + this.htmlURL() + "</ul>");
    };

    exports.NoteListView = NoteListView;

})(this);
