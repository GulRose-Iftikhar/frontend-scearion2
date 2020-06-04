# CC_Frontend_Scenario
This repo contains the cypress automation framework done as a code challenge to automate a scenario on tajawal.ae

Framwork done in a short time, but tried to incorporate following best practices and requirements..

Separate page classes with locators and page specific functions
Utility and helper classes with common used functions

Random generated data through functions
Assertions on different steps
HTML Report generation using mochawsome
No implicit wait is used
cypress.json containing reporter config
package.json containing scripts and dependencies
gitignore file setup to ignore unnecessary files


#STEPS FOR SETUP

Clone Repo using Git Command
----
```

git clone 'https://github.com/GulRose-Iftikhar/CC_Frontend_Scenario.git'

```
Install project with dependencies
---
```

npm install

```

Cypress ready commands
---
```
//These script commands already defined in package.json
npm run cy:open 
npm run cy:open:tajawal
npm run cy:open:almosafer

```

Generate Reports
---
```

npm run mocha:generate:report

```
It will generate htlm report in cypress/reports directory
