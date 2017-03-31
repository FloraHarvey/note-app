controller = new NoteController(new NoteList());



controller.addNote("Hello!!");
console.log(controller.noteList);

controller.addNote("How's it going?!!");
controller.addNote("Hi!");

controller.addListHTML();
