(function(exports){

  function NoteController(noteList, noteListView, singleNoteView){
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
    this.singleNoteView = new SingleNoteView(this.singleNote);
  }

  NoteController.prototype = {

    createNewNote: function (text) {
      this.noteList.storeNote(new Note(text));
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

    // makeUrlChangeShowNoteForCurrentPage: function() {
    //   window.addEventListener("hashchange", this.showNoteForCurrentPage());
    // },
    //
    // showNoteForCurrentPage: function() {
    //   this.showNote(this.getNoteFromUrl(window.location));
    // },
    //
    // getNoteFromUrl: function(location) {
    //   return location.hash.split("#notes/")[0];
    // },
    //
    // showNote: function(note) {
    //   document
    //     .getElementById("app")
    //     .innerHTML = note;
    // },

    run: function () {
      this.listNote();
      // this.makeUrlChangeShowNoteForCurrentPage();
    }

  };

  exports.NoteController = NoteController;

})(this);
