# Development manual

### Introduction
The following is a step by step guide for new developers or new teams on how to test, build and run this Tic Tac Toe game, originally made by a group of students in Reykjavík University called Code Epicé. 
### System Overview

The back-end logic is written in JavaScript and is tested with the Jest package through NPM. Front-end is also written in JavaScript, as well as CSS and HTML.
Our Application Programming interface (API) was set up by using Express.js which is Node.js web application framework. To test our Api we use SuperTest, which is a additional testing library. 

### Requirements for the system
Below are the software and package requirements needed to run the system
  - Node.js
  - NPM
  - A web browser
  - Git
  - Circle CI
  - Heroku

### Installations
##### NPM and NODE
JavaScript is an interpreted language, not a compiled one. There for we will use NPM to manage dependencies and NODE which gives us a JavaScript runtime. 

- You can find instruction on how to install Node for windows, mac or linux here:  https://nodejs.org/en/
Note that you should get the latest version of NPM when you download Node.js


### Source control client
For source control client we use GitHub. You will need to create an account if you don’t have an existing account. In your account you need to clone the remote repository from github which contains all the source code and creates a local copy on your computer. Below are introductions step by step.

1. Sign in or create a GitHub account here: https://github.com
2. Find the repository for Tic Tac Toe here: https://github.com/CodeEpice/TicTacToe
3. Open Git bash (windows) or terminal (mac) and navigate to a good location where you want to place the repository, for example  /home/username 
4. Copy the following to git bash or terminal       
    ```sh
    $ git clone git@github.com:CodeEpice/TicTacToe.git
    ```
5. Now you have a working local repository for tic tac toe.
6. We recommend to read the user-manual of Git, if you are not familiar with Git here:  https://git-scm.com/docs/user-manual.html

### Deployment 
##### Install
To download the dependencies for this project you need to start with execute the following command in git bash or terminal. 

    $ npm install

##### Test
To test the program we use Jest which is a JavaScript testing framework. Jest has been installed as a development dependency for this project. 

You can run our existing tests or add your own. To test the program on your local computer execute the following command in git bash or terminal. 

    $ npm test

Note that you need to be inside the root directory of the Tic Tac Toe repository.
You can read more about Jest here: https://jestjs.io

##### Build
To build the program on your local computer execute the following command in git bash or terminal.

    $ npm run build

This command is a script that runs webpack. We use webpack to bundle our program with all of its dependencies.

Note that you need to be inside the root directory of the Tic Tac Toe repository.

##### Run
To run the program on your local computer execute the following command in git bash or terminal.

    $ npm start
After you have run the command, open a browser and run your localhost with port number 8080, or click here: http://localhost:8080/

Note that you need to be inside the root directory of the Tic Tac Toe repository.

##### Development server
If you want to see changes made to static files such as CSS and HTML files, without shutting down and rebuilding, you can execute the following command in git bash or terminal. 

    $ npm run start-dev

Note that you need to be inside the root directory of the Tic Tac Toe repository.

##### Cut the connection (Windows)
Chances are that if you are using Windows you will need to execute the following command in git bash to shut down the localhost.

    $ npm run flocal

Note that this command will kill all node.exe proccesses on your computer.

##### Changes
All changes to the code, while in development, should be on a feature branch. 
Below is step by step descriptions of the workflow after a feature branches are ready.

1. The developer who has a finished branch, needs to create a pull request to the development branch.
2. Another developer has to review his pull request. He either declines or accepts the request, and leaves  a descriptive comment. 
3. If the team wants to deploy to production they need to create a pull request from development to master. We recomend all team members review this pull request before merging.


### Dependencies for development
##### Circle CI

For continuous integration and delivery platform we use CircleCI. It allows us to rapidly build, test and deploy our application faster and easier.  

1. Sign up on circleci.com with your GitHub account here: https://circleci.com 
2. Add the Tic Tac Toe repository to Cirlce CI as a project here: https://circleci.com/add-projects/gh/your_username_on_github
3. Note that In the Tic Tac Toe repository we have added a folder .circleci in the root of the project, which contains a config.yml file that handles what happends when you push changes to GitHub.

##### Heroku
To deploy our app we use Heroku which is a cloud development platform. Note that our Tic Tac Toe repository has all files set up for connection on heroku. 

1. Sign up on Heroku here: https://www.heroku.com
2. Setup the Heroku Toolbelt, we recommend following the instructions that can be found here: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. Sign in using the Heroku Toolbelt and execute the following command in git bash or terminal and enter your password.  
    ```sh
    $ heroku login
    ```
4. To connect to our heroku app, execute the following command in git bash or terminal.
    ```sh
    $ git remote add heroku git@heroku.com:ticTacToe-heroku.git
    ```
5. You can check if the connection was succesful by executing the following command in git bash or terminal. 
      ```sh
    $ git remote -v 
    ```
6. Now when you push changes to the master branch, heroku will automaticaly deploy the new build if it passes the tests on Circle CI.

  