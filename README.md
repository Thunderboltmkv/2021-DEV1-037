# Getting Started with TicTacToe app

You must have nodejs installed.

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Approach

As it was my first React Project and because I have mostly a back end background, I started to writing down what to test and my logic (not a fully functional test/code) and compared it to several tictactoe's found on the web.

My first approach was purely thought as a backend developer that couldn't fit with a performant React app. The most noticeable concept I learnt for performance and better writing was with the immutable object with new data that automatically refresh the DOM when replacing old DOM instead of modify data and then compare old and new to refresh.

I followed mostly [this tutorial](https://fr.reactjs.org/tutorial/tutorial.html) to develop the app.

I couldn't do it with TDD approach (Though, I knew what test I would write) as I didn't know how to test and had problem to use the links with enzyme because I created a react 17 app and the official enzyme only works up to the 16's version.