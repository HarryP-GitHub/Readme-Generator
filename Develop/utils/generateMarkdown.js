// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None')
    return '';
  else
  return `![${license}](https://img.shields.io/badge/License-${license}-lightblue.svg)`;
}
// MIT 
// Apache
// BSL
// BSD
// EPL
// GPL
// None 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Switch case
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'BSL':
      return 'https://www.boost.org/LICENSE_1_0.txt';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    case 'EPL':
      return 'https://opensource.org/licenses/EPL-1.0';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None')
  return '';
  else 
  return 'The license used for this project was:'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license); 
  const section = renderLicenseSection(data.license);

  return `# ${data.title}

  ${badge}

  ## Description
  ${data.description}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${section} ![${data.license}](${link})

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please reach out on GitHub
  [${data.github}](https://github.com/${data.github})
  or Via Email:
  ${data.email}

`;
}

module.exports = generateMarkdown;
