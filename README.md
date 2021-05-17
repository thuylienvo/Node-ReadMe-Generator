
  
  # Node-README-Generator [![License](https://img.shields.io/badge/License-MIT-yellow.svg)] 

  ## Description

  When creating a project/application, it is imperative to have a high-quality README file. This means it will include the what, where, why and how of your project. 

    What is the app for   
    Why was it created   
    How to install and use it 
    How to report issues
    How to make contributions

    This is a command-line application that runs on `Node.js` and dynamically creates a professional README.md file from the data the user inputs. 

    See the following demonstation: 


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  To generate a README, first run `npm install` the required dependencies as specified in package.json:

    * `npm init`
    * `npm install inquirer` 

    The application can be invoked with node index.js.

  ## Usage 
  When you run `node index.js` in your terminal, the app uses the inquirer package to prompt the user with a series of questions about your project and GitHub account. 


  Lastly, your README file will be created with `fs.writeFile`. There you have it! A professional README without the need to draw up a markdown outside of the command-line.

  ## License  

  This repo is licensed under the MIT License. (https://opensource.org/licenses/MIT) 

  ## Questions
  For any questions, connect with me at [mimzy414@gmail.com](mailto:mimzy414@gmail.com). 
  
  GitHub: [thuylienvo](https://github.com/thuylienvo) 


