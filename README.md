# Image slider

Simple image slider made with vanilla js

## Possible solutions

### 1. Stacked images controlled by classes

-   All images are -200px / 200px to right and one is at 0px.
-   No need to manipulate DOM, images always at the same positions
-   Position of images recognized by 'left', 'shown' and 'right' classes
-   Difficult operation that can lag when reaching edges

### 2. Stacked images controlled by DOM placement

-   Similarly like above but displayed image is always middle one in DOM
-   When moving slider edge image must move to beginning or end of container
-   Removes edge problem

### 3. Gradually moving hidden images

-   Hidden images are literally hidden with CSS and they smoothly transition from -200px through 0 to 200px
-   Or images are really further (200px, 400px, 600px) but after halfway they swap (from 600px to -600px): it should fix images overlapping when fast sliding
-   When image is in one of 3 edge states it should be visible (-200 px, currentIndex, 200px) so that animation works correctly
-   All images must be updated on every slide
-   There shouldn't be any difference on which image is clicked

---

[<img align="right" alt="odin-head" width="50px" src="https://user-images.githubusercontent.com/33003089/213583000-bb26a90c-ec79-4d81-89a9-fc791792467d.svg" style="padding-right:10px;padding-top:10px;"/>](https://www.theodinproject.com/paths/foundations/courses/foundations)

### Used technologies

[<img align="left" alt="HTML" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;"/>][html]
[<img align="left" alt="CSS" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;"/>][css]
[<img align="left" alt="JS" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />][js]

[js]: https://en.wikipedia.org/wiki/JavaScript
[html]: https://en.wikipedia.org/wiki/HTML
[css]: https://en.wikipedia.org/wiki/CSS
