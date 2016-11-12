(function(exports) {

    function SingleNoteView(singleNote) {
        this.singleNote = singleNote;
    }

    SingleNoteView.prototype.twentyCharacters = function(string) {
        var stringDOTS = string.length > 20 ? "..." : "";
        return (string.slice(0, 20) + stringDOTS);
    };

    SingleNoteView.prototype.htmlNote = function () {
              var note = this.singleNote;
              return "<a href='" + note.url + note.id + "'>" +
              this.twentyCharacters(note.note) + "</a>";
    };

    exports.SingleNoteView = SingleNoteView;

})(this);
