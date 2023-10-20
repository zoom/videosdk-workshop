## Introduction

This application is the first installment of our Developer Workshop Series, focused on getting you started with the Video SDK. To get started with this project, navigate to the server folder and install necessary packages. Run the following commands in your terminal: 

- `cd server`
- `npm install`

At this point, to keep things organized between our front and backend, it is suggested to open up a second terminal window in your code editor. Run the following commands in your second terminal: 
- `cd client`
- `npm install`

To start your server, run `node server` in your terminal that's in the folder `workshop-project/server`. To start your react application, navigate to the terminal that's in the `workshop-project/client` folder and run `npm start`. Your server should be listening on port 4000 and your react app should be running on localhost:3000. 

## Tech-Stack
The application is built using Javascript. Outside of that, here is the main tech-stack that is used throughout: 

- React 
- Node.js (^16)
- Express
- Zoom Video SDK 

## Learning Goals 
While this workshop is meant to be introductory, we advise that you have a working knowledge of the first three listed technologies. Our learning goals for this workshop are as follows: 

- Successfully access your Video SDK credentials & understand how to use them within your application 
- Understand how to generate your JWT token and where to do so in your application 
- Successfully initialize+end/destroy a Video SDK session within your application 
- Succesfully join+leave a Video SDK session within your application
- Sucessfully incorporate event listeners into your applicaton 

## Prerequisites 

When attending the workshop, make sure you have the following set up on your system: 

- A code editor; the host will be using VSCode
- The latest version of Node.js
- This repo, downloaded and cloned 
- An active Video SDK account 

## Branches/Sections

You may notice that this repo has branches following the name cadence "Step _". Each step will have an added portion of completed code, ensuring you have a place to jump to if you ever fall behind. **The master branch of this repo contains the completed project.** For this workhop, here is the outline of each step: 

- **Step 0** - This step contains mostly boiler plate code to get us started, including pre-installed npm packages, UI code, etc.

- **Step 1** - In Step 1, we'll fill out our` App.js` & `Home.js` page with functional code on the frontend, and create our middelware function for generating our JWT token on the backend. Here's what your application should include at the end of this step: 
  - `index.js` should now have an added variable, `client`, that is passed down to our application using Context Provider
  - `App.js` should include a 'meetingArgs' object and render the 'Home' component. The rendered components should be wrapped with 'UseContext.Provider', passing in the        meetingArgs object as a value
  - `Home.js` should include new variables `meetingArgs` and `client`, which are read in using the 'useContext' hook
  - The function `submitUserData` should now be added to `Home.js`, which makes a fetch request to generate our token _and_ initializes our session
  - `/server/Controllers/userControllers.js` should contain a function to generate our token, destructuring our request body to gain access to variables sent from the frontend, and saving the created signature to the res.locals object
  -`server/router.js` should now have `userControllers.generateToken` added to the post method 

*If at any time you feel behind before we move to Step 2, feel free to check out to the 'Step 1' branch, using the command `git checkout Step_1`, and work from there*

- **Step 2** - In this step, we'll create and fill out `session.js` in the Home folder on the frontend and then add it to be rendered on `App.js`. At the end of this step, you should have: 
  - These variables inside the functional component `Session`: 
  ```
        const client = useContext(ClientContext);
        const meetingArgs = useContext(UserContext);
        const {topic, name, password, signature} = meetingArgs;
        const navigate = useNavigate();
  ```
  - The function `joinSession` that joins the session, creates a variable called `stream` and one called `userId`
  - The function `endSession` that leaves the session and navigates back to the home page
  - a button that calls `joinSession` when clicked
  - a button that calls `endSession` when clicked
  - App.js should now additionally render the `Session` component, with the path `/session`

  *If at any time you feel behind before we move to Step 3, feel free to check out to the 'Step 2' branch,`git checkout Step_2`, and work from there*


  ` **Step 3** - In this last step, we'll add in our event listeners to notify when a user has joined the session. At the end of this step, you should have: 
  - A function called  `userJoined` added to `session.js` 
  - An event listener for the `user-added` event 

Completing this step will bring us to the end of our project. Additional useful documentation is linked below: 

- Video SDK Authorization: https://developers.zoom.us/docs/video-sdk/auth/
- Video SDK Sessions: https://developers.zoom.us/docs/video-sdk/web/sessions/
- Video SDK Event Listeners: https://marketplacefront.zoom.us/sdk/custom/web/modules.html
