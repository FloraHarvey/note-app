"strict mode";

(function(exports) {

  function NoteController (noteList) {
    this.noteList = noteList;
    this.view = new NoteListView(noteList);
  }

  NoteController.prototype.addNote = function (text) {
    this.noteList.createNote(text);
  };

  NoteController.prototype.addListHTML = function(element = document.getElementById("noteList")) {
    element.innerHTML = this.view.generateHTML();
  };

  NoteController.prototype.getHTMLForSingleNote = function (note, element) {
    var view = new SingleNoteView(note);
    element.innerHTML = view.generateHTML();
  };




  exports.NoteController = NoteController;

})(this);
