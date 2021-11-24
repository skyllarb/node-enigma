// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !='No license') {
      var lic;
      switch(license) {
        case 'MIT':
          lic = "MIT"
          break; 
        case 'Mozilla Public':
          lic = "Mozilla%20Public%20License%202.0"
          break; 
        case 'Apache License':
          lic = "Apache%20License%202.0"
          break; 
        case 'Boost Software License':
          lic = "Boost%20Software%20License%201.0"
          break;
      }
      return `![License badge](https://img.shields.io/badge/License-${lic}-brightgreen)`
    }
    return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !='No license') {
      var lic;
      switch(license) {
        case 'MIT':
          lic = "mit"
          break; 
        case 'Mozilla Public':
          lic = "mpl-2.0"
          break; 
        case 'Apache License':
          lic = "apache-2.0"
          break; 
        case 'Boost Software License':
          lic = "bsl-1.0"
          break; 
      } 
      return `https://choosealicense.com/licenses/${lic}/`
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !='No license') {
    return `
  ## License 
  ${renderLicenseLink(license)}`
  }
  return ""  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${renderLicenseBadge(data.license)}
    \n
   ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   * [License](#license)
   
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me via my Github via https://github.com/${data.github}.
  For other questions, contact me via email at ${data.email}.
  ${renderLicenseSection(data.license)}
  `
}

module.exports = generateMarkdown;
