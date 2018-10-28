# Administration manual

The following are instructions on how to take over and maintain this program. 
The manual will start from the scratch and go through step by step on how to be able to host, run and deploy this program. 

### Requirements for the system
Below are the software and package requirements needed to run the system
  - Node.js
  - NPM
  - A web browser
  - Git
  - Circle CI
  - Heroku

### Installations
#### NPM and NODE
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
#### Install
To download the dependencies for this project you need to start with execute the following command in git bash or terminal. 

    $ npm install


### Dependencies for development
#### Circle CI

For continuous integration and delivery platform we use CircleCI. It allows us to rapidly build, test and deploy our application faster and easier.  

1. Sign up on circleci.com with your GitHub account here: https://circleci.com 
2. Add the Tic Tac Toe repository to Cirlce CI as a project here: https://circleci.com/add-projects/gh/your_username_on_github
3. Note that In the Tic Tac Toe repository we have added a folder .circleci in the root of the project, which contains a config.yml file that handles what happends when you push changes to GitHub.

#### Heroku
To deploy our app we use Heroku which is a cloud development platform. Note that our Tic Tac Toe repository has all files set up for connection on heroku. 

1. Sign up on Heroku here: https://www.heroku.com
2. Setup the Heroku Toolbelt, we recomend to follow the instroductions that can be found here: https://devcenter.heroku.com/articles/heroku-cli#download-and-install
3. Sign in using the Heroku Toolbelt, execute the following command in git bash or terminal and enter your password.  
    ```sh
    $ heroku login
    ```
4. Conect to our heroku app, execute the following command in git bash or terminal.
    ```sh
    $ git remote add heroku git@heroku.com:ticTacToe-heroku.git
    ```
5. You can check if the connection was succesful by execute the following command in git bash or terminal. 
      ```sh
    $ git remote -v 
    ```
6. Now when you push changes to the master branch, heroku will automaticly deploy the new build if it passes the tests on Circle CI.
7. If you now go to heroku.com and login, you can select the app for more information.
