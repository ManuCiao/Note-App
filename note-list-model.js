(function(exports) {

    function NoteList() {
        this.index = 0;
        this.noteArray = [];
    }

    NoteList.prototype = {

        storeNote: function(note) {
            var result = {
                note: note,
                id: this.index++
            };
            this.noteArray.push(result);
            return result;
        }
    };

    exports.NoteList = NoteList;

})(this);