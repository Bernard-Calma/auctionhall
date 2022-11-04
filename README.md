# auctionhall

## Project Choice (Tell us which project you're doing!)
> Auction Hall  

## Project Description
> Include:<br />
> - This app is a mobile app where you can take a picture of any item that you want to put for auction, other user can participate in your auction and submit their bid on the date you want to have the event done.<br />

> Front End Technologies<br />
> - React / React Native
> - Node JS
> - JavaScript
> - CSS

> Back End Technologies<br />
> - Python
> - Flask
> - PostgreSQL

> Entity Relationship Diagram <br />
<img width="957" alt="image" src="https://media.git.generalassemb.ly/user/43518/files/263d5d09-ff69-4f42-8a7e-e3e4ca9cabfe">

> CRUD ROUTES <br />

| Verb        | URL             | Action    | Description |
|:---------:|:-----------:|:--------:|:---------------------:|
| GET         | /auction      | INDEX    | Show all auctions        |
| POST       | /auction      | CREATE | Create a new auction |
| GET         | /auction/:id | SHOW    | Show auction by id     |
| DELETE   | /auction/:id | DELETE  | Delete auction by id   |
| PUT         | /auction/:id | EDIT       | Edit auction by id        |
| POST       | /user           | CREATE | Create a new user       |
| GET         | /user/:id       | SHOW   | Show user by id          |
| PUT         | /user/:id       | EDIT       | Edit user by id            |


## Wireframes
> Wireframes with basic page layouts<br />
> | <img width="333" alt="image" src="https://media.git.generalassemb.ly/user/43518/files/a658b683-d224-4027-9452-b051a165ebde"> <img width="333" alt="image" src="https://media.git.generalassemb.ly/user/43518/files/93ffc0e4-1a9a-429c-b2f4-b172bba9ea8b">.
> <img width="333" alt="image" src="https://media.git.generalassemb.ly/user/43518/files/0d45d646-b573-4bfe-8ce3-7926e45b3487"> <img width="333" alt="image" src="https://media.git.generalassemb.ly/user/43518/files/2beab287-e404-4183-8cdc-41df890d35cb">



## Feasibility Study
> This app will be using React Native as the front end with knowledge and skills from React Lessons added by React Native Documentation (https://reactnative.dev/docs/environment-setup), will be focusing on IOS platform for this project. Back end will be created using Python, SQLite and Flask from lessons.

## User Stories
> - As a User, I want to create an account, so that I can see the postings that I only created.
> - As a User, I want to be able to upload a picture or take a picture from my phone's camera, so I can show it to other users.
> - As a User, I want to be able to see other user's auction, so that will help me decide which auction I want to join.
> - As a User, I want to be able to participate in an auction and place my offer, so that I can join and possibly win the auction.
> - As a User, I want to be able to edit and delete my posts, so that in case I changed my mind or had a mistake I can fix it.
> - As a User, I want to be able to send the item and received payment from the auction.

### MVP Goals
> - User Login.
> - User can upload a picture for posting.
> - User can view all other post.
> - User can view a certain post.
> - User can edit own post.
> - User can join/leave an auction post.

### Stretch Goals
> - User can upload a photo using phone's camera
> - User can set a time for auction
> - App will notify auction participants
> - User can increase auction amount
> - User will see auction amount update amount right away
> - User can filter auctions by title
> - User can sort by price, date
> - User can rate the auction host when user wins the auction.
