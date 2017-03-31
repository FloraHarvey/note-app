## Notes App

Task: Build a notes app as a frontend, single page web app. Write a test framework to test it.

## User Stories

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want

As a programmer
I can create a new note
So I can record something I need to remember

As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

(NB: notes do not need to be permanently stored. If the user refreshes their web page, they'll lose their notes, and that's fine.)

## Approach

- Wrote initial test framework - assert variable takes function 'isTrue' and throws an error when assertion is false. Displays custom error message which is passed in for each test.
- Created note and notelist models - the note model takes text on creation, and the notelist model can create a new note and save it.
- Created note list view - it takes a note list model, and generates HTML string displaying list of notes
- Created controller with functions to ask model to add a note, and ask view to generate HTML for list. Controller can insert generated HTML string into index.html page.
- Created mock objects for controller tests so they don't rely on actual Note and NoteList Models
- Created single note view - it generates the HTML for displaying a single note
- Added to controller to allow dynamic content change without refreshing page - note list is displayed as list of links - when clicked they change the url, which is then used to display the text of the clicked note without refreshing page.

## Struggles

- Mocking an HTML element - initially tried to mock the method for 'getElementById', or create a dummy element using 'document.createElement', but with these not working we ended up creating a dummy element that could be passed into the function that used it. It did mean the controller had to take the element as a parameter rather than finding it within the function, as we had initially wanted.
- Generating the note text via the url - as there were so many functions that relied on each other to get to the end point, we struggled to test each in turn, in an order that made sense. Had to spike the code first to understand what functions would be necessary.
