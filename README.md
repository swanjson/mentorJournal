# mentorJournal
Journal for projects with iFit mentor.

## 2019_03_19
Message to Chase:
I'm finishing up my computer engineering degree at USU. I started off mechanical then switched to computer after my first coding class. I'm fairly confident with c/c++, python, vdhl/verilog, bash scripting and webscraping. I've been teaching myself JS/TS, HTML and CSS via MEAN stack pet projects. My goal would be to learn more about full-stack development, noSQL databases, hardware programming, or automation. Level of interest is probably in that order. I would definitely love some guidance in either of those.

## 2019_03_29
MEETING SET for April 3rd at 12p MST.

Notes:
I’ve started a few pet projects out of general interest and for resume builders. There are a few that would be awesome to finish up and I think that they might be great structure for this program. One example is a webscraping script that pulls mushroom data from Wikipedia. It would be awesome to develop a basic taxonomy database web-app type deal. Either that or if Mike has something more productive in mind or related to iFit in mind.

Through iFit I really enjoyed working on bash scripting. I made 4 scripts to pull logs from the wolf app and one to install adb platform tools and add the terminal command to the path. That was my first github/developer addition.
- Look over these and see how my process was?
- I’m also very interested in your feedback for my resume and which direction I should be headed in with education and applying for jobs.
- Walk me through one of your projects.

Goals:
- Learn how industry development works from concept to completion
- Start and FINISH a full-stack project
- Use GitHub and branching for features

Questions:
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


Recommended tutorials:
- https://nodeschool.io/#workshoppers - This is a good one for getting an understanding of syntax. The learnyounode portion is something I used when initially learning.
- https://github.com/getify/You-Dont-Know-JS/blob/master/README.md - Javascript language itself.


Questions:
- Node Version Manager (nvm)?
- Linting?
	- Linting is the process of running a program that will analyse code for potential errors.
	- "lint was the name originally given to a particular program that flagged some suspicious and non-portable constructs (likely to be bugs) in C language source code. The term is now applied generically to tools that flag suspicious usage in software written in any computer language." -from Wikipedia
- npx?
	- npx is a npm package runner
- What did i do with prettier? Why was that throwing errors? (https://stackoverflow.com/questions/46058546/error-eacces-permission-denied-access-usr-lib-node-modules)
- Bullet point spacing on markdown file is off.

Todo:
- Start tutorials (Started)
- Set up project
- Send Mike repos (DONE)
- Try to answer my own questions

- Started the tutorials.
- Yarn and npm weren't installing on the iconwireless networks. Switched networks and stuff installed just fine.
- Had to figure out PATHs for the shortcuts. In \~/.bash_profile you must put the path to the folder the executable is contained in example:
```bash
source ~/.bash_profile
export PATH=/Users/jay.swanson/.npm-global/lib/node_modules/learnyounode/bin/:$PATH
```
- Comments in JS are just like c++



## 2019_04








