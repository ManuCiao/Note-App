(function(exports) {

    function SingleNoteView(singleNote) {
        this.singleNote = singleNote;
    }

    SingleNoteView.prototype.twentyCharacters = function(string) {
        var stringDOTS = string.length > 20 ? "..." : "";
        return (string.slice(0, 20) + stringDOTS);
    };

    SingleNoteView.prototype.htmlNote = function () {
              return "<div>" + this.twentyCharacters(this.singleNote) + "</div>";
    };

    exports.SingleNoteView = SingleNoteView;

})(this);
