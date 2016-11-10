(function(exports){

  var index = 0;

  function Note(text, id){
    this.text = text;
    this.id = index++;
  }

  Note.prototype = {
    textReturn: function () {
      return this.text;
    },

    idReturn: function () {
      return this.id;
    }
  };

  exports.Note = Note;

})(this);
