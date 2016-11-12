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

    NoteListView.prototype.listElementHtml = function() {
      var that = this;
        return this.noteList.noteArray.map(function(element) {
          var singleNote = new SingleNoteView(element);
            return ("<li>") +
                singleNote.htmlNote() + ("</li>");
        }).join("");
    };

    NoteListView.prototype.listHtml = function() {
        return ("<ul>" + this.listElementHtml() + "</ul>");
    };

    NoteListView.prototype.htmlURL = function () {
        return ("<a href ")
    };

    exports.NoteListView = NoteListView;

})(this);
