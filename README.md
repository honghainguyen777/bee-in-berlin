# Bee In Berlin - A Berlin Public Ticket Recommendation Application

- Is it your first time in Berlin?
- Do you see that the Berlin public transport map is complicated?
- You know what Berlin public transport zones are, but you don't know which ticket fits your plan and time, don't you?
- You know the ticket you want to buy in English but does not know it in German and how much does it cost?
- => This small application can help you. You just need to answer some questions according to your plan -> We give you the information of the ticket!
- Visit the website to find a suitable ticket for your trips in Berlin: https://honghainguyen777.github.io/bee-in-berlin/

## What's tech stack used to build the application?

- JavaScript
- React
- Redux
- CSS

## How to run the application

- Step 1: Clone or download the app: `git clone https://github.com/honghainguyen777/bee-in-berlin.git`
- Step 2: Enter the app directory: `cd bee-in-berlin`
- Step 3: Install dependency packages: `npm install` or `yarn add` (make sure you already have Node, npm/yarn installed)
- Step 4: Run the app: `npm start` or `yarn start`
- Step 5: Enjoy finding your Berlin public transport ticket

## Decision Tree

- The app is based one sligtly complicated decision tree.
- Depending on the anwer from users for each question, a decision is made behind the scenes.
- There are 18 questions in the question pool. The answers of users can lead to one of the 9 family tickets (in total 46 tickets - note some tickets have the same price between reduced and normal fares).

## Plans for future developmet

- Due to current restriction in time, no unit testing is available. Jest and Enzyme will be used for implementing unit testion.
- Plain text for the recommended ticket will be replaced by ticket image
- Some tickets and questions have not yet been implemented due to the complexity of the decision tree
- Styles need to be improved
- The normal import of the seeds (json data files) needs to be replaced by Webpack-dev-server

## Mistakes and Challenges

- Created many questions and tickets that led to the complexity of the decision tree -> time consumption
- First time using Tailwind CSS -> mixed with normal CSS
- Implemented Redux in this small application

## Directory Structure

```bash
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|
\---src
    |   index.css
    |   index.js
    |   reportWebVitals.js
    |   setupTests.js
    |
    +---actions
    |       index.js
    |       types.js
    |
    +---components
    |   +---App
    |   |       App.css
    |   |       App.js
    |   |       App.test.js
    |   |       index.js
    |   |
    |   +---NameModal
    |   |       index.js
    |   |       NameModal.css
    |   |       NameModal.js
    |   |
    |   +---Navbar
    |   |       bvg-logo.png
    |   |       index.js
    |   |       Navbar.css
    |   |       Navbar.js
    |   |
    |   \---Questionnaire
    |           decisionTree.js
    |           index.js
    |           Questionnaire.css
    |           Questionnaire.js
    |
    +---reducers
    |       index.js
    |       initialAppReducer.js
    |       updateUserAnswerPoolReducer.js
    |
    \---seeds
            questions.json
            tickets.json
```
