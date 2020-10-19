# Microservices with Node JS and React
taught by Stephen Grider on Udemy (cost $11)

## Section 1: Fundamental Ideas Around Microservices

Usually setup at monolithic. One section of code does everything.

Microservice contains all of the code required to make one feature of an app work correctly.


Weird how data is stored and accessed.


How do we store data?
- every service gets its own database
- Never access data from one service to another service's database.

'Database-Per-Service'
1. We want each service to run independently of other services.
2. Database schema/structure might change unexpectedly
3. Some services might function more efficiently with different types of DB's (sql vs nosql)

COMMUNICATION BETWEEN SERVICES

SYNC and ASYNC in microservices world has different meaning than how javascript uses them.

SYNC -> Services communicate with each other using direct requests.

	-+ Service D doesn't need database and just requests another service to get the data for them
	-+ only as fast as its slowest response
	-- can create a web of requests
	-- introduces dependency between services
	-- if any inter-service fails then the overall request fails.

ASYNC -> Services communicate with each other using events.

	-+ Service D has zero dependencies on other services
	-+ Service D will be extremely fast
	-- Data duplication. Paying for extra storage + extra DB.
	-- Harder to understand.

PAYING FOR EXTRA STORAGE!!!
- Storing extra data structures isn't too bad. only costs $14 a month to store 100 million amazon products.


	A Faux way of Async communication
	Creating an event bus. Service D needs to be called, but service D needs info from services A-C so it creates an 'event' That event is read/expected by service A and sends a new event with new data from A to the event bus


## SECTION 2: A Mini-Microservices App (APPLICATION 1)

Goal 1: Get taste of microservices architecture
Goal 2: Build as much as possible from scratch

Step 1 - What services are we going to create?
For every unqiue resource we create a new service.
(Posts, Comments) so 2 services
Posts
	- storing all posts created
	- retreiving posts and displaying
Comments
	- storing all comments created
	- retreiving comments and displaying



->BLOG
```bash
	npx create-react-app client
```	
	->Posts
```bash
	npm init -y
	npm install express cors axios nodemon
```
	->Comments
```bash
	npm init -y
	npm install express cors axios nodemon
```		
So i have three terminal windows. client, posts and comments. Client is a react app and the other two are just directories so far.

Posts service should have two methods
Path	Method 	Body 				Goal
/posts		POST   {title: string}		Create new post
/posts		GET 		-				Retrieve all posts


Created Post (index.js)
changed the package.json scripts entry to 
```json
	"start": "nodemon index.js"
```
start server via terminal and then check with postman

Checked requests with postman. (GET and POST)


nodemon - automatic server refreshing?!

Comments service should have two methods
Path	   				Method 	    Body 				Goal
/posts/:id/comments		POST   {content: string}		Create comment based on post ID
/posts/:id/comments		GET 		-				Retrieve all comments based on post ID


What's react observable? rxJS???

























