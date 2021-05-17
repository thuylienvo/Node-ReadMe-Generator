const licenseBadgeLinks = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU v3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
};


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (data.license === "MIT") {
        badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
    } else if(data.license === "Apache 2.0"){
        badgeURL = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
    } else if(data.license === "GNU v3"){
        badgeURL = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]";
    } else if(data.license === "Mozilla Public License 2.0"){
        badgeURL = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    } else if (data.license === "BSD 3-Clause"){
        badgeURL = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    } else {
        badgeURL = ''
    }
    return badgeURL
    //end of conditional
}
// const badgeOutput = renderLicenseBadge(data.license);
// console.log(data.license + ": " + badgeOutput);



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    //license badge URL
    // data.licenseBadge = licenseBadgeLinks[data.license];

  //Display markdown data from user  
  return `
  
  # ${data.title} ${data.badgeURL}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credit)
  * [License](#license)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install the dependencies, run the following: 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits 
  ${data.credit}

  ## License  

  This repo is licensed under the ${data.license} license. 

  ## Contributing
  ${data.contributors}

  ## Tests
  In order to run tests, run the following:

  ${data.tests}

  ## Questions
  For any questions, connect with me at [${data.email}](mailto:${data.email}). Check out more of my work at [${data.username}](https://github.com/${data.username}) 


`;
}

module.exports = generateMarkdown;