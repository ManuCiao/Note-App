(function(exports){

  function SingleNoteView(singleNote){
    this.singleNote = singleNote;
  }

  SingleNoteView.prototype = {

    htmlNote: function () {
      var noteText = this.singleNote.textReturn();
      return "<div id='id'>" + noteText + "</div>";
    },

  };

  exports.SingleNoteView = SingleNoteView;

})(this);
