(function(exports){

  function NoteList(note){
    this.noteArray = [];
    this.note = note;
  }

  NoteList.prototype = {

    storeNote: function(text) {
      var array = new Note(text);
      this.noteArray.push(array);
      console.log(array);
      return array;
    },

   stringArray: function () {
      var stringArr = this.noteArray.map(function(noteObj){
        return noteObj.text;
      });
      return stringArr;
    }

};

  exports.NoteList = NoteList;

})(this);
