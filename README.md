# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
The mini project is a front-end practice project from frontendmentor.io
I have used SCSS and vanilla javascript for this.
### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


## My process
The basic structure of the project was quite easy to build, however the challenge was to place the share menu on the correct spot.

The share menu was implemented using flexbox and pseudo element was used to create the downward arrow.

I used javascript to position the share menu for desktop and tablet view.
In order to determine the coordinates of the button, i used clientHeight and offsetHeight property for the button.
And further adjusted it for the pseudo element and the gap b/w menu and the button.

I also added and event listener for clicks to the windows element to turn off the share menu whenever a click is registered outside the share menu and the share button. Used the closest() method to determine if the event target's closest div is a button or the menu.

For mobile view, (the script would always overwrite any css therefore), I used !important attribute for the menu position.
### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid

### Useful resources

Used stackoverflow and w3schools documentation throughout the development.

- [SCSS course](https://www.youtube.com/watch?v=_a5j7KoflTs&t=5455s&ab_channel=freeCodeCamp.org) - Got familiar with SCSS with this course. Really amazing course.

## Author
- Frontend Mentor - [@gautamjuyal](https://www.frontendmentor.io/profile/gautamjuyal)
