##Welcome to Trans.it...You've said goodbye to the past and welcomed the FUTURE!

Trans.it is a crowd-sourced speech translation website app that allows you to:
- Easily choose whether you want to be a User or a Translator
- dictate and/or type messages
- Receive immediate live translations from people around the world
- Have fun!

Trans.it's mission is to provide the user with a unique and fun way to use language translation.

We have some ideas in mind for the future which will resemble UBER's structure. We will allow the Translator
to have an account set up and when a user signs up with Trans.it they will be synced to a translator that will
translate their message. Upon completion of the session the translator will be paid for his translation.

Dependencies
============
This is a MEAN stack application with the following dependencies:

- Bower
- Grunt-cli
- Node
- MongoDB
- Mailgun


Installation
============

Clone this repository into *project-folder*, then do the following in a terminal window:
:
1.  cd to *project-folder*
2.  bower install
3.  (sudo) npm install
4.  (sudo) npm install mailgun
5.  (sudo) npm install mailgun-js
4.  grunt serve (to start)

Instructions on how to use Trans.it:

User Instructions
==================

1. In the Top right hand corner click on Sign-Up
2. Choose whether you are a user or translator
3. Users will have a dashboard, on this dashboard, they can:
    - View all of their translation requests/translations
    - Delete an active and or current translation request
    - Press a button to submit a new translation request
4. Users can either speak and/or type their message to be translated
5. Users can edit their message using the keyboard, (but likely not speaking) before submitting
6. Users submit their translation and it goes into a queue

Translator Instructions
======================

1. If you have chosen the translator option you have chosen to embark on a journey of excitement and wonder.
There is no telling what country your next translation request may come from,
and we are ecstatic you are willing to join us on that trip
2. Being a Translator has its perks. Think of it as UBER, a user requests a translation
and you are immedaitely paid for your session. (future idea)
3. Translators specify which languages they can translate when they register
4. They pull a message to translate from a queue, but don’t get to pick which particular message
5. Once they get a message, they can optionally “skip” it if they don’t want to translate that message,
and it will go back on the queue and will not be reassigned to that translator
6. Translators can “speak” and/or type their translation.  
Once they are satisfied with the translation, they select the submit button


Some things to note:

- We are implementing a Single Page Architecture

- Using a MEAN Stack as a our backend.

- APIS: Google Web Speech, Mailgun


Common questions:
================
# Who came up with this awesome App?

Having one person take the all the credit is not how team IRON SQUAD rolls. The brains behind the operation are:

- Jennifer
- Cameron
- Irwin
- Michael
- Projjol

# How do I get my hands on this application?

Wait until 12AM midnight of 12/8/14 and it will be available. Follow the link to: http://ujkk9d3f0fc2.jwncoexists.koding.io::9000

# Does it cost anything initially to use?

For the time being the application will be FREE, but in the near future when we implement paid sessions for translators
and there will be a fee.


Thanks for reading about Trans.it and TEAM IRON SQUAD.
