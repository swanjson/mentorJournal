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
- Finish my input on website (Roughly done?)
- Start/Finish Javascripting school (DONE)
- Get all of mike's recs/tutorials downloaded (postman, etc.)


Website is deployed on github. [My New Website](swanjson.github.io) Now i'm filling it all in with my info.

Downloaded Postman - good testing tool for hitting REST API endpoints and seeing the responses that come back. It can get complex if you want it to, but it also just allows for quick and dirty trying out HTTP requests and seeing responses. Works on webpages, too, but you'll just get the raw HTML.

Finished "javascripting." I learnt js syntax. This was so much easier than anything node.js related. The only one I struggled with was the arrayFiltering.js because I didn't know what .filter() expected.

Now I want to finish learnyounode. But this takes a little more learning. I'm going to trying and start my project.

QUESTIONS FOR MIKE:
- When git branching do I have to be in the same folder i initialized the git? What happened with my website master branch. travis changed it then i branched to make sure i had an editable file. was that the right thing to do or should i have branched to deploy?
- why do i have to :wq when i do
```bash
git branch -a
```
-is there a way to get rid of branches after merged? a way to double check they're merged?

Website todo:
- Website won't publish my second USU job. Is that because they're the same title?
- remove all of joel's photos
- design title bar logo.

Mike if you're checking this out it's on branch "myFirstApi"
Alright. I'm jumping into building my first API. I'm going to do the whole project via a branch.


## 2019_04_22

Having an issue with my adb scripts.

Questions for Mike:
- There seems to be a difference running a bash script from the terminal via PATH or "/.script" vs double clicking the executable file. I wonder if it's something with synchronicity. Do you know the difference between those two executions or what's going on?

- The following is happening with some of my branches:![git branch -a](https://user-images.githubusercontent.com/37157901/56522003-392bf480-6503-11e9-823c-e8322751a663.png) What do the red titles at the bottom mean?





