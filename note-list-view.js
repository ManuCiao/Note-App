(function(exports){

  function NoteListView(noteList){
    this.noteList = noteList;
  }

  var twentyCharacters = function (string) {
    return (string.textReturn().slice(0, 20) + " ...");
  };

  var url = function (string) {
    return ("/#/notes/" + string.idReturn());
  };

  NoteListView.prototype = {


    htmlURL: function () {
      var index = 1;
      var stringArr = this.noteList.stringArray();
      var resultArray = stringArr.map(function(string) {
        index++;
        return ("<li><div><a href='" + url + "'>") + twentyCharacters(string) + ("</a></li></div>");
      }).join("");
      return resultArray;
    },

    htmlJoiner: function () {
      return ("<ul>" + this.htmlURL() + "</ul>");
    },



  };

  exports.NoteListView = NoteListView;

})(this);
