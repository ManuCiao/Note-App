(function(exports){

  function NoteController(noteListView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  }

  NoteController.prototype = {

    createNewNote: function (note, url) {
      this.noteList.storeNote(note, url);
    },

    toHtml: function () {
      this.createNewNote("anything?more of something....:P", "http://localhost:8080#notes/");
      this.createNewNote("anything?more of nothing....:P", "http://localhost:8080#notes/");
      var joiner = this.noteListView.listHtml();
      return joiner;
    },

    listNote: function () {
      var test =  document.getElementById("app");
      test.innerHTML = this.toHtml();
    },

    run: function () {
      this.listNote();
    }

  };

  exports.NoteController = NoteController;

})(this);
