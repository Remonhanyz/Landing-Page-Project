# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Global_Variables]
* [Helper_functions]
* [Main_functions]
* [Events]


## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Global Variables

Defined the global variables that was used in many functions 

## Helper Functions

added three functions to hide the navbar
1. set a timer for 1.5 seconds after which the navbar will be hidden
2. funtion to add not_active class to hide navbar with animation using CSS and classes
2. funtion to remove not_active class to show navbar with animation using CSS and classes

## Main Functions

created the main functions required in the rubric
1. navbar creator function dynamically
2. a funtion that Add the class 'active' to the section itself in the page main & to the links of this section in the navbae when it is near top of the viewport 
3. a function that scrolls to the desired section when the user press on the links given in the navbar 

## Events

created the event lesteners that trigger the above functions
1. create navbar as soon as the DOM loads
2. Scroll to section when the link in the navbar is clicked
3. on scrolling check which section is in the portview and sets it as active, shows the navbar when scrolling, sets a timer to hide the navbar after 1.5 sec
