(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  //
  // var url = function (string) {
  //   return ("/#/notes/" + string.idReturn());
  // };

  NoteListView.prototype = {

    twentyCharacters: function (string) {
      var stringDOTS = string.length > 20  ? "..." : "";
      return (this.noteList.textReturn().slice(0, 20) + stringDOTS);
    },

    htmlURL: function () {
      return this.noteList.noteArray.map(function(string) {
        return ("<li><div>") +
          string + ("</div></li>");
      }).join("");
    },

    htmlJoiner: function () {
      return ("<ul>" + this.htmlURL() + "</ul>");
    },

  };

  exports.NoteListView = NoteListView;

})(this);
