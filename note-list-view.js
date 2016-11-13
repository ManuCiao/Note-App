(function(exports) {

    function NoteListView(noteList) {
        this.noteList = noteList;
    }

    NoteListView.prototype.twentyCharacters = function(string) {
        var stringDOTS = string.length > 20 ? "..." : "";
        return (string.slice(0, 20) + stringDOTS);
    };

    NoteListView.prototype.listElementHtml = function() {
        return this.noteList.noteArray.map(function(element) {
            var singleNote = new SingleNoteView(element);
            return ("<li>") +
                singleNote.htmlNote() + ("</li>");
        }).join("");
    };

    NoteListView.prototype.listHtml = function() {
        return ("<ul id='myUL'>" + this.listElementHtml() + "</ul>");
    };

    exports.NoteListView = NoteListView;

})(this);
