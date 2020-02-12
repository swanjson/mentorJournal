# mentorJournal
Journal for projects with iFit mentor.
## Goals:
- Learn how industry development works from concept to completion
- Start and FINISH a full-stack project
- Use GitHub and branching for features
- I love Joel's github website and would love to have something similar. https://jdd1260.github.io/

## 2019_03_19
Message to Chase:
I'm finishing up my computer engineering degree at USU. I started off mechanical then switched to computer after my first coding class. I'm fairly confident with c/c++, python, vdhl/verilog, bash scripting and webscraping. I've been teaching myself JS/TS, HTML and CSS via MEAN stack pet projects. My goal would be to learn more about full-stack development, noSQL databases, hardware programming, or automation. Level of interest is probably in that order. I would definitely love some guidance in either of those.

## 2019_03_29
MEETING SET for April 3rd at 12p MST.

### Notes:
I’ve started a few pet projects out of general interest and for resume builders. There are a few that would be awesome to finish up and I think that they might be great structure for this program. One example is a webscraping script that pulls mushroom data from Wikipedia. It would be awesome to develop a basic taxonomy database web-app type deal. Either that or if Mike has something more productive in mind or related to iFit in mind.

Through iFit I really enjoyed working on bash scripting. I made 4 scripts to pull logs from the wolf app and one to install adb platform tools and add the terminal command to the path. That was my first github/developer addition.
- Look over these and see how my process was?
- I’m also very interested in your feedback for my resume and which direction I should be headed in with education and applying for jobs.
- Walk me through one of your projects.


### Questions:
- Maybe use the ($50/mo, $600/yr) for web hosting costs?
- Or any books/resources you recommend?


## 2019_04_04
Had meeting with Mike
- Introductions and Backgrounds
- Talked through some project possibilities
- Agreed on full-stack project

Ordered the following books:
- https://www.amazon.com/Pragmatic-Programmer-Journeyman-Master/dp/020161622X
- https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8/ref=sr_1_4?keywords=design+patterns&qid=1554316452&s=gateway&sr=8-4
- https://www.amazon.com/Design-Patterns-Explained-Perspective-Object-Oriented-ebook/dp/B001U5VJW2/ref=sr_1_2?keywords=design+patterns+explained&qid=1554316482&s=gateway&sr=8-2


Created Repo and README.md for fungal app (fungalTaxonomy)


## 2019_04_05
### Notes/Progress: 
- Created Repo for mentor tracking (mentorJournal)
- Downloaded Node.js (https://nodejs.org/en/) which is the installable binaries for running JS from the command line.
- Downloaded npm (node package manager) (https://www.npmjs.com/) which is a package manager similar to pip for python. It allows you to install third-party packages in your project. When you install them, they create a “node-modules” directory in your project that holds all the JavaScript sources. This is bundled with nodejs, so you essentially get it for free.
- Downloaded yarn. Alternative package manager to npm. Newer and different syntax. Widely used in open-source.
- Already have Visual Studio Code installed (https://code.visualstudio.com/). Great IDE. Feels like it's built around JS development, but does have plugins for python or c++. VIM plugin as well. (BOoooooO). 
- Installed eslint(https://eslint.org/). A linter for JS. Customizable rules. Linting is the process of running a program that will analyse code for potential errors.
	- Download:
``` bash
npm install eslint --save-dev
```
- How to run:
	- Set up config file:
``` bash
./node_modules/.bin/eslint --init
```
- After that, you can run ESLint in your project’s root directory like this:
``` bash
./node_modules/.bin/eslint yourfile.js
```
- Installed prettier (https://github.com/prettier/prettier). An opinionated code formatter. Because of permissions I had to do the following:
``` bash
mkdir ~/.npm-global
npm config set prefix '\~/.npm-global'
export PATH=~/.npm-global/bin:$PATH >> ~/.bash_profile
source ~/.bash_profile
npm install -g prettier
```
- The above methods are sterring me in the direction of Javascript/Node.js. The same can be accomplished with something like Python/Django. Concepts will be similar regardless of language.
- Started the tutorials.
- Yarn and npm weren't installing on the iconwireless networks. Switched networks and stuff installed just fine.
- Had to figure out PATHs for the shortcuts. In \~/.bash_profile you must put the path to the folder the executable is contained in example:
```bash
source ~/.bash_profile
export PATH=/Users/jay.swanson/.npm-global/lib/node_modules/learnyounode/bin/:$PATH
```
- Comments in JS are just like c++
- var x = require('x') are like #includes in c++


### Recommended tutorials:
- https://nodeschool.io/#workshoppers - This is a good one for getting an understanding of syntax. The learnyounode portion is something I used when initially learning.
- https://github.com/getify/You-Dont-Know-JS/blob/master/README.md - Javascript language itself.


### Questions:
- Node Version Manager (nvm)?
- Linting?
	- Linting is the process of running a program that will analyse code for potential errors.
	- "lint was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language." -from Wikipedia
- npx?
	- npx is a npm package runner
- What did i do with prettier? Why was that throwing errors? (https://stackoverflow.com/questions/46058546/error-eacces-permission-denied-access-usr-lib-node-modules)
- Bullet point spacing on markdown file is off.
- What's the difference between synchronous and asynchronous??? (ex: nodeSchool/myFirstIO and nodeSchool/myFirstAsyncIO)
	- https://github.com/maxogden/art-of-node#callbacks
	- Callbacks are functions that are executed asynchronously, or at a later time. Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen.
	- In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
	- Node, however, uses mostly asynchronous code.
- my npm didn't install the learnyounode PATH?
- why not just use readFileSync?
- what are .yml files?
- What's the deal with semi colons?

### Todo:
- Start tutorials (Started)
- Set up project
- Send Mike repos (DONE)
- Try to answer my own questions

Finishing up the Module challenge i'm starting to get a hang of syntax the only that is straining is passing functions through and callbacks. Still need to break down that last one.

## 2019_04_10
- Started learnyounode course again
- Finished two lessons

## 2019_04_12
- What's the deal with the data collected from http?
	- must've just been a url with the strings required to test the code for nodeschool

## 2019_04_16

Meeting with Mike:
- nvm will switch which node version you're using. Kind of like switching python versions. Virtual Environments. .nvmrc file "this project uses node at this version"
- Linting checks code for errors like varibles not being used and such
- Functional Programming (Elm) Higher order function which is function that takes another function. (like what happens when using callbacks or promises)
- Promises? "like callback" More concrete. Basically you set it as a callback but once it gets called you can tell it to do something after.
- node.js to start servers
- Semi colons kind of just old school syntax, not always required but sometimes
- concept of webAPI
- .yml https://en.wikipedia.org/wiki/YAML
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- Postman "tool to save request with url sends data back"
- gitHub site uses Gatsby (static site generator) looking at https://github.com/jdd1260/jdd1260.github.io for reference point
- Anything you can usually see on GitHub is open source.

Goals:
- Nodeschool/jsSchool
	- make jsSchool folder
	- make each project a feature branch and merge when done
- Start project
	- mike will send me samples of APIs and tools to start backend
	- get data into json file
	- backend in one repo (only exposes api calls)
	- front end in another (set up UI later)
	- http calls between the two
	- express js webserver Express will put backend onto a temp server for front end to grab
- Resume
	- update and send to mike in Latex for look over for content
	- then get a github resume/website up

Links from Mike:
"Here are links to some of the things we discussed today":
- https://www.getpostman.com/ - Postman. This is a good testing tool for hitting REST API endpoints and seeing the responses that come back. It can get complex if you want it to, but it also just allows for quick and dirty trying out HTTP requests and seeing responses. Works on webpages, too, but you'll just get the raw HTML.
- REST API tutorial using Node / Express: https://medium.freecodecamp.org/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2 Uses mongo as the database back-end, but should give you enough a springboard that you can do similar with just a JSON file to start with.
- https://www.gatsbyjs.org/: This is the back-end that runs Joel's personal website. Really helpful static site generator.
- Good explanation of REST / CRUD API: https://www.codecademy.com/articles/what-is-crud
- Sample, test REST API: https://jsonplaceholder.typicode.com/. Can point stuff at it just to experiment with an API running on a different server.
- Good discussion of feature branch workflow: https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow

## 2019_04_17

I just learnt more about npm and PATHs and permissions than I ever wanted to.
I was trying to install gatsby so that it would run from the terminal. I don't know why but earlier I made a directory to install things to called /.npm-global it was where I installed all the previous packages to. I think I made it to avoid changing permissions to my /usr/local/ folder. I finally did that and now everything is running fine.
```bash
sudo chown -R jay.swanson: /usr/local/lib/node_modules
```
The above gave me proper permissions to install globally and run from the command line. The files i was downloading into the .npm-global folder we .js and if I tried copying the PATH it still wouldn't execute. I don't know why but we're working now.

*Might have to reinstall other packages or change my npm prefix when I want to use them*
```bash
npm install -g gatsby-cli
npm install -g gatsby
npm -g ls --depth=0 #lists what is currently installed with npm
```
Got the site up and running. Had to use travis and generate a GITHUB_TOKEN to deploy via GitHub link.

I have to figure out deploying because travis changed my master branch.

Also took a while to realize git doesn't recognize changes in case.

*BOOKS CAME IN!*
- The Pragmatic Programmer: From Journeyman to Master.
- Design Patterns: Elements of Reusable Object-Oriented Software
- Design Patterns Explained: A New Perspective on Object-Oriented Design

tableau public to display data from sheets.

link for travis: https://travis-ci.com/swanjson/swanjson.github.io

## 2019_04_19

Goals for the day:
- Finish my input on website
- Start/Finish Javascripting school
- Get all of mike's recs/tutorials downloaded (postman, etc.)


Website is deployed on github. [My New Website](swanjson.github.io) Now i'm filling it all in with my info.

Downloaded Postman - good testing tool for hitting REST API endpoints and seeing the responses that come back. It can get complex if you want it to, but it also just allows for quick and dirty trying out HTTP requests and seeing responses. Works on webpages, too, but you'll just get the raw HTML.

Finished "javascripting." I learned js syntax. This was so much easier than anything node.js related. The only one I struggled with was the arrayFiltering.js because I didn't know what .filter() expected.

QUESTIONS FOR MIKE:
- When git branching do I have to be in the same folder i initialized the git? What happened with my website master branch. travis changed it then i branched to make sure i had an editable file. was that the right thing to do or should i have branched to deploy?


## 2019_04_23

- Downloaded iTerm and oh my zsh (https://medium.freecodecamp.org/how-to-configure-your-macos-terminal-with-zsh-like-a-pro-c0ab3f3c1156) . Using iTerm 2 + Solarized Dark with 14pt Menlo Font.
- Going to try to upload my spreadsheet.


## 2019_06_07

Using


- Redux can make buttons disabled then when response is returned it enables it again.
- pass object as string or pass as string then convert. 
```javascript
JSON.parse()
JSON.stringify()
```
- Mongoose connects to Mongo by making schemas
- async await

## 19_06_26 Meeting

BEFORE:
- Google Cloud summary compilation and questions
- Rest vs. restful vs. CRUD (rails? ruby on rails? for JSON apis?) READ: https://www.codecademy.com/articles/what-is-crud
- Compile README.md
- put Euclid's c++ on github


I reorganized my GitHub. Self-learning projects i've put into `mentorJournal` then I left the demo `mentoring-app` forked from Mike's original creation just in case we use it again.

### mentorJournal/myFirstAPI
- Stopped because the guide needed to connect to mLab

### mentorJournal/quote-builder
- Logs quotes. Full stack project. Completed uses MongoDB and needs to be whitelists to work.
- Uses `npm run dev` script so I don't have to constantly refresh when updating backend.
- ?How do I pass in private variables or credentials (Database connection URL)?
- ?ejs is a template engine but react is a js library for building UIs. They both allow dynamic html writing via hybrid code?

### mentorJournal/node-easy-notes-app
- IN PROGRESS
- Full restful crud API

### mentoring-app -branch> jaysAdditions
- The playground you created that I tweaked slightly.
- Uses Axios, has a query component, API call, camData.json, responses, alerts, stringify

### rackbuilder
- Front end for the eventual larger project.
- ?Should I even use Redux? Or global states? reducers? How do I know if I should be using that type of library? Based on the data i'm manipulating or what?
- ?How do I convert or link the JSON tags to the states or calls within the frontend?
- ?Bootstrap tables? Bootstrap and jQuery? It looked easy to add remove buttons
- ?How would I make inline text input where I could input quantities and have a state for the quantities? It would also need to ignore repeated input.
- ?- how to parse current input(state) and search for double words within text? Ex. "blue alien"

### rackbuilder-backend
- This is a copy of quote-logger.


//I want to find the script where i can npm run dev and know where that is.




Questions:
- Please tell me if this is something I should easily be able to find on my own or if I'm ever asking the 'wrong' questions.
Google:
	- Just want to get your take on cloud computing. Please explain containers!!! VM instances?
	- Scaling? how does that play into full stack??
	- Load balancing? HTML vs TCP/SSL
- Git merge after pull req. how to resolve merge conflicts through the terminal?
- If I continue with rackbuilder the way I am right now, will i be able to make those calls to the back end a lot easier?
- How did they handle that whole github vunerabilities thing?

- Is ifit doing differential(fuzzing) testing? How?
- Do you have a .gitignore creation script?
- Script to scrape GitHub of posted credentials? How to delete older versions? Full copy delete then reupload?


Todo:
- Walkthrough for full CRUD?:
https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
-Another node.js CRUD https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/
- If I want to learn REDUX:
https://www.youtube.com/watch?v=OSSpVLpuVWA
- RSA Prime number generator?


## 19_07_02 Meeting

BEFORE:
- Google Cloud summary compilation and questions
- Rest vs. restful vs. CRUD (rails? ruby on rails? for JSON apis?) READ: https://www.codecademy.com/articles/what-is-crud
- Compile README.md
- put Euclid's c++ on github

## 2019_08_05

-What does it take to step into a junior developer position?
	-justin just applied, and they said he needed more experience
	-should I take hackerrank tests?
	-one on my team is getting transitioned into a dev position.
	-i've made scripting additions
	-What can i do right now to put me in a better position?
	-Should I work on speed? thouroughness? personal projects?
	-How often should I be seeking a new job?

-I want to watch you do your thing




rackBuilder(branch: pull down from bring-borrow-logic-and-creation):
-I was stuck on pushing an array onto an array instead of pushing objects onto an array. My logic is pretty tight though. 13 cases two ranges can overlap and I have it down to 3 cases.
-is there a better way I could've done it?
-potential security vunerablities?
	-didn't ifit come up with a way to automatically handle that?
	-what should I do about it?
-Help me write a unit test please!
-Should i separate any of my functions/components?
-Is there a way to delete selected objects from arrays without index? (See remove functions on ParentCompare)
-REAAAALLLY need help with the architecture of my comparisons! I don't know when to call the checks to compare and how to keep them consistent.

-What i have now I'm pretty sure is a rendering issue. Unique key's for my create list functions? OnChange default value?

-Need help with my HaveRackBar and NeedRackBar quantity boxes and assigning values/onchange.

-Environmental clicks canceling suggestions.


## 2019_08_06 

###general questions
	- Want to generally cover career stuff.
	- spoke to older tech recruiter and he said the best thing you can get is someone saying they write beautiful code and to get in touch with the engineering director
	- What does it take to step into a junior developer position?
	- my buddy justin just applied, and they said he needed more experience (he's been doing full stack auto for a year)
	- should I practice with hackerrank tests? or keep going with projects?
	- one on my team is getting transitioned into a dev position for building the app/admin (i've seen his project and it's pretty simple)
	- i've made scripting github contributions
	- What can i do right now to put me in a better position?
	- Should I work on speed? thouroughness? personal projects?
	- How often should I be seeking a new job?

- I want to watch you do your thing

- can you give me a less hairy work task?
	-Little brother with an unplugged controller




###rackBuilder(branch: pull down from bring-borrow-logic-and-creation):
- I was stuck on pushing an array onto an array instead of pushing objects onto an array. My logic is pretty tight though. 13 cases two ranges can overlap and I have it down to 3 cases.
- is there a better way I could've done it?
- potential security vunerablities?
	-didn't ifit come up with a way to automatically handle that?
	-what should I do about it?
- Help me write a unit test please!
- Should i separate any of my functions/components?
- Is there a way to delete selected objects from arrays without index? (See remove functions on ParentCompare)
- REAAAALLLY need help with the architecture of my comparisons! I don't know when to call the checks to compare and how to keep them consistent.

- What i have now I'm pretty sure is a rendering issue. Unique key's for my create list functions? OnChange default value?

- Need help with my HaveRackBar and NeedRackBar quantity boxes and assigning values/onchange.

- Terminal won't display nested arrays of objects SOLUTION: console.log(JSON.stringify(arrayOfObjects, null, 2));



Answers:
-they setup babel to make things more uniform, typescript might have some of the import stuff too
- plain js i can do "const CamObjects = require('./CamObjects')"
-declaration of variables for objects "const {selH: highMM} = camTemps[i];"
-Test driven design is made from writing the tests as you write the code.
-`yarn test` to run tests


# Google Cloud conference review:

BIG QUERY on gcp for big data has the data from the NCAA and Wikipedia.


Languages to Review:
- Ruby
- Rails
- GO
- Scala
- Oracle (memory allocation?)
- Jupyter / Colossus
- Cloud Pub/Sub Internet of Things (Basically BANs)
- TensorFlow (PhD level machine learning)
- Spark, Pig, Hive
- Kubernetes open source containers
- mySQL / PostgreSQL
- Cloud ID instead of IP address accessing from it's IAM based on what they're trying to access (secure?)
- Relational Databases?
- Docker
- Cloud Spanner API
- Neural Networks
- Anthos


GCP App Engine:
- can be used to run web apps
- web/mobile backends
- 'containerized' apps
- 'container-based workloads'?
- Stackdriver to monitor apps

Machine Learning:
- Division API?
- Cloud Speech API?



## 2019_09_13

NOTES ON RACKBUILDER
	- 'some' function stops at the first found isntead of 'filter' or 'find'
```javascript
const gear = rackNeeded.find(e => e.id === camId);
```
	- I should look up the documentation for array functions
	- jest is inculded in react for unit testing
	- I should start including unit tests (see meeting recording)

Code Katas!!! Do the gilded rose kata uploaded by mike.

Contribute to an open source project.

SOLID Principles (Object oriented principles)

typeScript is just js with types (kind of like another test to make sure functions are receiving and returning the right things)

Jeremiah Workman - Working on data from comments.
Andy Meyers - Using ML to find recommended workouts.

Set up a meeting or two!

## 2019_10_22

mentor2019_10_21

My rackbuilder is adding, removing and comparing correctly now (I think). I now want to take similar sized cams into account. I've already done the comparisons to other cams and have the list of similar cams stored. I'm trying to figure out when to do the comparison check/add for similar cams.

- Add options from yourRack if you have them to bringRack. If not add several options to borrowRack.

- Should I subtract from yourRack or should I make a new modified object?

- What is the deal with console saying unique ids?

- What is it saying when switching branches says "Your branch and 'origin/master' have diverged,
and have 21 and 1 different commits each, respectively."
	- What's the difference between origin/master and master?
	- Proper PR to CLI format?
	- `git remote update` yields: "Your branch is behind 'origin/master' by 4 commits, and can be fast-forwarded."
	- so just do the above and then git pull?
	- "fast forward"?


- Also why is my bring and buy/borrow list staggered? (CSS ISSUE)

- Add similar cam checker. Enter cam with drop down menus. Display output of: % similarity, price and weight.

- Add images to cams added on side column with hover over option to say what it is with plus/minus option


NOTES:

-Pass in prev states
-Create tests for bring borrow compare.
-Rainbow brackets vs code extension
-Only merge from/to master if there are merge conflicts
-Fast forward is just pulling the most recent master because there were changes on master before there were changes on your new branch
-Pad my other lists so they're not staggered and change opacity for color

## 2019_11_12

# Mentor Transfer

Hey Jay! Here's a little recap and background for what we're jumping into.

About me:
I'm finishing up my computer engineering degree at USU. I started off mechanical then switched to computer after my first coding class. I'm fairly confident with c/c++, python, vdhl/verilog, bash scripting and webscraping. I've been teaching myself JS/TS, HTML and CSS via MEAN stack pet projects. My goal would be to learn more about full-stack development, databases, hardware programming, or automation. Level of interest is probably in that order. I'm a student right now in computer vision, microcontrollers, programming architecture, computer networking. Hoping to graduate next fall.

Mike and I were paired early April of this year and have been meeting weekly since. We usually meet for an hour and discuss progress/strategy for the next meeting. He's been super helpful and knowledgeable. I originally started a webscraping project in python to pull data from wikipedia in hopes of making a fungal taxonomy app. As my interests and focus shifted I decided to switch over to a more JS heavy project. I manually collected data on climbing camming devices and have been working with that since. The eventual goal being a full-stack web app used for cam comparison. I've done a few small projects to help with that along the way including a quote-builder app and part of a notes app.

I have a list of goal below but the overall goal would be some sort of employment.

## What i've accomplished already:
- Learnt how to setup react projects
- Some JS and nodejs coding experience
	- Downloaded all relevant software and packages
	- Setup on github and npm for ifit
- Gained working knowledge of git


## Things i'm interested in:
- Computer Vis
- Automation/Scripting
- Data
	- Data Vis
- Full-Stack

## My current goals:
- Finish rackBuilder
	- Add similar cam comparison functionality
	- Add user capability (database storage)
	- Add single cam comparison
	- Add test cases
	- Refactor existing code (similarCamCompare)
	- Add images for each cam type on side column
- Get summer internship/job
	- Complete Resume
	- Complete Website
- Postman!
- Contribute to an open source project (fix an issue/add a feature)
- Solve a bug start to finish (bug,fix,PR,push)
- Get a working knowledge of SQL (seems to be universally useful)
- Start doing some code katas.

mentorJournal Breakdown:
### mentorJournal/myFirstAPI
- Stopped because the guide needed to connect to mLab

### mentorJournal/quote-builder
- Logs quotes. Full stack project. Completed uses MongoDB and needs to be whitelists to work.
- Uses `npm run dev` script so I don't have to constantly refresh when updating backend.
- ?How do I pass in private variables or credentials (Database connection URL)?

### mentorJournal/node-easy-notes-app
- IN PROGRESS
- Full restful crud API

### mentoring-app -branch> jaysAdditions
- The playground you created that I tweaked slightly.
- Uses Axios, has a query component, API call, camData.json, responses, alerts, stringify

### rackbuilder
- Front end for the eventual larger project.
- Reading data from JSON file and displaying items based on comparing data

### rackbuilder-backend
- This is a copy of quote-logger.


QUESTIONS:
- How did you come about being at ifit?
- What are some of your career goals? 


TO DO:
- Have res/website ready by next week
- Create speaking crontab bot repo
- Keep going on rackBuilder

## 2019_12_17

talk about NN, and ML via computer vision project from finals

practical vim and pragmatic programmer

QUESTIONS:
- How do they block api requests? Is it by IP address? What about different devices on the same network. Could a pi cluster data farm faster?


Rest client
Walk through chrome dev tools. How to use an api with a bearer token?


Notes from meeting:
axios library for API requests.

native fetch for api calls. DOM API window

requests and promises, await that, .then

push promises into an array


iFit is going to embrace 16.8 and on.


Dan abrimov
A guided tour of react hooks off the reddit.


Redux
React Context
React Hooks - do away with render prop and higher order
Prop drilling (tiers of props)
flux architecture
Redux and React dev tools (targeting and styling)


https://github.com/Huachao/vscode-restclient
https://nodeweekly.com/issues/310
https://javascriptweekly.com/issues/463
https://kentcdodds.com/blog/
https://www.reddit.com/r/reactjs/comments/eay5cg/my_top_react_techtalks_of_2019/
https://hero35.com/react-boston/2019/a-guided-tour-of-react-hooks 

# 2019_01_07

## mentorMeeting
Questions:
- c-r-a/npx c-r-a, the former is 'missing start script' He said that it might be because of versioning? like babel?
- Can you explain babel? Downgrades high level JS into ES5, included in c-r-a
- Resume
- p5 library for game development? Any other recs? I'm good as long as they can run npm install npm start
- Build publishable smaller projects with over arching idea.
- I'm going to build a smaller rack builder project
	- Shows only related items to selected cam from drop down menus
	- Shows images
- Any discord communities? Do you have a guru?

flipFlop based:
- Know what 'Lua' is? Must be for 
- Google cloud functions, async and such
- Setting up a database (put csvs into database and update with every pull)
- Google visualization? How do i protect my data? Minify?
- Scrape update pages for items that could be used in the future.
- How should I set up this website/database/pi server?

Notes from meeting:
- Jay used manipulation and created a grid as playfield.
- Dungeon creator
- SQL or MongoDB (no structure, document based, can restrict)
- wrapper around a wrapper (mongoose)
- mongoDB university (dev-101), aggregation
- Highcharts 
- Create diary/youtube vid summarizing project. Can be privatized.


# 2019_01_10

Lookup:
- Quadtree
- Go
- K8
- Docker
- Postgres
- gcloud
- Serverless online
- How does wikis use Lua

serverless is framework making lambda easier to devolop (python nodejs or ts)

vpc on aws and vpc management

create different subnets to make different IPs (IPv4 CIDR block)

# 2019_01_14

meeting notes:
- node process environment
- chaining -> function that returns object that returns everything of the same and adds on it
- REACT_APP_ENV
- Mutation testing
- heckle runs on docker container


postgres, nosql, sql, 

sql - 
post - implementation of sql (with a little bit more)
nosql - (like mongodb) not limited to table based data, can mimic sql, might use one or other depending on dataset or scalability. Mongo is very scalable. makes it easy to have different server instances.


"wolf-workouts-service" to see about test case basics


heroku - used to publish projects, application hosting.
gatsby for static pages.
might have mongo included.

Tableau

MAKE tinyRackBuilder's data private??? code should be fine??
MAKE token or code to view the youtube video for a certain amount of time.











