(function(exports){

  function NoteController(noteListView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype = {

    createNewNote: function (text) {
      this.noteList.storeNote(text);
    },

    htmlList: function () {
      this.createNewNote("anything?more of something....:P");
      this.createNewNote("anything?more of nothing....:P");
      var joiner = this.noteListView.htmlJoiner();
      return joiner;
    },

    listNote: function () {
      var test =  document.getElementById("app");
      test.innerHTML = this.htmlList();
    },

    run: function () {
      this.listNote();
    }

  };

  exports.NoteController = NoteController;

})(this);
