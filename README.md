# projectCharly
## UI test cases for login page

### Steps for running the test case 
1. Create a repository in Github named "projectCharly" and clone it to your local directory
2. Install "node.js"
3. Install the respective latest version of dependencies mentioned in package.json file.
4. If you start with empty project initialize npm first:  
    ***npm init -y***
5. Now install CodeceptJS with Puppeteer  
  ***npm install codeceptjs puppeteer --save-dev***
6. Initialize CodeceptJS in current directory by running:  
   ***npx codeceptjs init***  
   (use node node_modules/.bin/codeceptjs if you have issues with npx)  
   Answer questions.  
   a. Where are your tests located? ./*tests.js   
   b. What helpers do you want to use? Puppeteer  
   c. Where should logs, screenshots, and reports to be stored? ./output  
   d. Do you want localization for tests? (See https://codecept.io/translation/) English (no localization)  
   e. [Puppeteer] Base url of site to be tested http://localhost  
   f. [Puppeteer] Show browser window Yes  
   g. Feature which is being tested loginform  
   h. Filename of a test wiki loginform_test ---- as we already have it just skip it.  
   

#### Installing Allure for reporting
7. Allure requires Java 8 to work. Then Allure can be installed via NPM:  
  ***npm install -g allure-commandline --save-dev***
8. Add Allure plugin in config under plugins section in codecept.config.js file  
   ***allure": {***  
            ***outputDir: './output'***  
        ***},***  
9. Run tests with allure plugin enabled:  
  ***npx codeceptjs run --plugins allure***   
10. Launch Allure server and see the report like on a screenshot above:   
  ***allure serve output***   
11. Push the changes to GitHub (exclude node_modules files).
