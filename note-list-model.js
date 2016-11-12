(function(exports){

  function NoteList(){
    this.noteArray = [];
  }

  NoteList.prototype = {

    storeNote: function(note) {
      this.noteArray.push(note);
      return note;
    }
};

  exports.NoteList = NoteList;

})(this);
