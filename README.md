
  
  # Node-README-Generator [![License](https://img.shields.io/badge/License-MIT-yellow.svg)] 

  ## Description

  When creating a project/application, it is important to have a high-quality README file. This means it will include the what, where, why and how of your project. 

  * What is the app for   
  * Why was it created   
  * How to install and use it  
  * How to report issues  
  * How to make contributions  

  This is a command-line application that runs on `Node.js` and dynamically creates a professional README.md file from the data the user inputs. 

  ![readme-demoGif](https://user-images.githubusercontent.com/79684575/118587451-3cd1ea00-b762-11eb-8802-8be715c80a52.gif)

   See the full demonstation here: [README Full Video](https://youtu.be/RwwPXzwo5xg)

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  To generate a README, first run `npm install` the required dependencies as specified in package.json:

  `npm init`   
  `npm install inquirer` 

  The application can be invoked with node index.js.

  ## Usage 
  When you run `node index.js` in your terminal, the app uses the inquirer package to prompt the user with a series of questions about your project and GitHub account. 

  Once all the questions have been answered, the data is collected and your README file will be created with `fs.writeFile`.  
  
  There you have it! A professional README without the need to draw up a markdown outside of the command-line.

  View a sample README.md file generate with the application [here](https://github.com/thuylienvo/Node-ReadMe-Generator/tree/main/dist#readme). 

  ## License  

  This repo is licensed under the MIT License. (https://opensource.org/licenses/MIT) 

  ## Questions
  For any questions, connect with me at [mimzy414@gmail.com](mailto:mimzy414@gmail.com). 
  
  GitHub: [thuylienvo](https://github.com/thuylienvo) 


