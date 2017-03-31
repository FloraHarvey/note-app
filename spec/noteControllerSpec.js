"strict mode";

function NoteListDouble() {
  this.createNoteCallCount = 0;
}

NoteListDouble.prototype = {
  createNote: function() {
    this.createNoteCallCount++;
  },
  viewNotes: function() {
    return ["hello"];
  }
};

function HTMLDouble() {
  this.innerHTML = "";
}

function ViewDouble() {}
ViewDouble.prototype = {
  generateHTML: function() {
    return "html";
  }
};

function noteControllerCanBeInstantiated () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller, "NoteController was not instantiated", "noteControllerCanBeInstantiated").isTypeOf(NoteController);
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerSavesNotelist () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller.noteList, "NoteController does not save notelist as property", "noteControllerSavesNotelist", noteListDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerAddsNoteToNoteList () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  controller.addNote("Hello");
  try {
    new Assert(noteListDouble.createNoteCallCount, "Note not added to note list", "noteControllerAddsNoteToNoteList", 1).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerCreatesNoteListView () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  try {
    new Assert(controller.view.noteList, "Note list view not created", "noteControllerCreatesNoteListView", noteListDouble).isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerInsertsHtmlForNoteList () {
  var noteListDouble = new NoteListDouble();
  var controller = new NoteController(noteListDouble);
  var divDouble = new HTMLDouble();
  controller.view = new ViewDouble(noteListDouble);
  controller.addListHTML(divDouble);

  try {
    new Assert(divDouble.innerHTML, "HTML not added to page", "noteControllerInsertsHtmlForNoteList", "html").isEqual();
  }
  catch(err) {
    console.log(err.message);
  }
}

function  noteControllerInsertsHtmlForSingleNote() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var elementDiv = function() {};
  var note = new Note('To do: buy eggs');
  noteController.getHTMLForSingleNote(note, elementDiv);
  try {
    new Assert(elementDiv.innerHTML === "<div>To do: buy eggs</div>" , "Can't display a note", "noteControllerInsertsHtmlForSingleNote").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function noteControllerLoadsCorrectIdFromUrl() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  function DummyLocation() {
    this.hash = "#notes/1";
  }
  var dummyLocation = new DummyLocation();
  try {
    new Assert( noteController.getNoteIdFromUrl(dummyLocation) === "1" , "ID not loaded from URL", "noteControllerLoadsCorrectIdFromUrl").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}



noteControllerCanBeInstantiated ();
noteControllerSavesNotelist ();
noteControllerAddsNoteToNoteList();
noteControllerCreatesNoteListView();
noteControllerInsertsHtmlForNoteList();
noteControllerInsertsHtmlForSingleNote();
noteControllerLoadsCorrectIdFromUrl();
