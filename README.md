# gDating

Welcome to gDating! Dating for nerds!

![](https://github.com/gSchool/galvanize-student-apis/blob/master/server/gdating/mockups/home.png)

---

### Objectives

By the end of this project, you should be able to demonstrate that you can:

* Build a single-page CRUD application in Angular using routing, factories / services and $http
* Implement custom-directives
* Implement JWT-based authentication between single-page apps and servers

---

### Project Description

This project is an opportunity to test out all of your Angular knowledge and
act as a frontend developer. The backend team (your instructors) have put 
together an API for a dating website and you will be designing the frontend.

We've tried to make this project as "real life" as possible; you may very
likely find yourself working with an API developed by another team in your
company where the most information you get is documentation. Imagine it's
built in a language you don't know!

Thematically, you may take the project any direction you want: there's enough
information to build a number of different sites that are about connecting
individuals to one another. 

There is a _lot_ to do in this project and we don't expect you'll get every
feature completed. Take a look at the existing stories and mockups and make
sensible choices on what to work on. With that said, make sure to focus
on completing the Objectives above!

__Students from other cohorts said:__

* "It was a good opportunity to practice Angular design patterns."
* "[The gDating] site brought together all the different concepts
  we were working on."
* "It allowed me to focus on what I wanted to learn."

---

# [Go here for Mockups and Stories](mockups_stories.md)

### gDating API

The [gDating API](http://galvanize-student-apis.herokuapp.com/gdating/api-docs/) is the _entire_ backend for an online dating/networking site.

API Documentation can be found here:

[http://galvanize-student-apis.herokuapp.com/gdating/api-docs/](http://galvanize-student-apis.herokuapp.com/gdating/api-docs/)

You may test it out by hitting a `/ping` endpoint for any of the available resources.

```
curl http://galvanize-student-apis.herokuapp.com/gdating/ping
```

If you'd like to run the API locally during development, follow the instructions [here](https://github.com/gSchool/galvanize-student-apis/tree/master/server/gdating).

Note: your final deployed version must use the API hosted on heroku linked above.

The API has the following endpoints:

|Method|Endpoint|Description
|---|---|---|
|**Auth**||
|POST|/auth/register|Create and login a Member
|POST|/auth/login|Login a Member
|**Conversations**||
|GET|/members/{id}/conversations|Retrieve all Conversations for a single Member
|POST|/members/{id}/conversations|Update or create a Conversation between two Members.
|GET|/members/{id}/conversations/{recipientId}|Retrieve the Conversation between two members
|**Matches**||
|GET|/members/{id}/matches|Get all Matches for a single Member
|POST|/members/{id}/matches|Creates a new Match for a single Member
|DELETE|/members/{id}/matches/{matchId}|Removes a Match for a single Member
|**Members**||
|GET|/members|All Members
|POST|/members|Create a Member
|DELETE|/members/{id}|Deactivates a single Member
|GET|/members/{id}|Retrieve a single Member
|PUT|/members/{id}|Update a single Member
|GET|/members/search/{slug}|Retrieve a single Member by Slug
|**Search**||
|GET|/members/search|Search for a Member

---
