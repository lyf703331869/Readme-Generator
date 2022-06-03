// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  return `![License](https://img.shields.io/badge/license-${license}-green?style=for-the-badge&logo=appveyor)`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  return `* [License](#license)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  return `## License`;
};

// TODO: Create a function to generate markdown for README

const generateMarkdown = ({
  name,
  username,
  email,
  title,
  description,
  license,
  installation,
  usage,
  contributing,
  tests,
}) =>
  `
  # ${title}
  ${renderLicenseBadge(license)}

  ## Description
  ${description}
  

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)


  ## Installation

  ${installation}
 

  ## Usage

  ${usage}
  

  ${renderLicenseSection(license)}


  ## Contributing

  ${contributing}
  

  ## Tests

  ${tests}


  ## Questions
  
  If you have any questions, please feel free to reach out to me via:
  1. ${email}
  2. [${username}](https://github.com/${username})
  
  
  ## Credits
  Copyright © All rights reserved by ${name}.   
`;

module.exports = generateMarkdown;
