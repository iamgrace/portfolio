# README

Graceful Dezigns 
http://gracefuldezigns.com/

## Redesign of my portfolio site to showcase my visual design talents and coding experience 

## Objective
This website was built using the latest and greatest technologies out today. I combined templates, CSS, JavaScript libraries, custom coding, and fonts to create a functional and intuitive interface that feels unique and engaging to the user. The project is responsive and cross browser functional.
 
## Design 
I chose to start with a template which included color to represent creativity yet maintained a clean a simple design ensuring not over stimulate the audience.

## Functionality
For the about me section, I chose to make this section interactive by custom coding two libraries. These libraries are listed in the technical stack section, Hover Effect and CSS Cross Fade Transitions. Through adjusting the CSS and JavaScript, I achieved have affect that reveals a picture of myself upon the user’s interaction with the page element. Please see the final output here: https://codepen.io/gwd88/pen/jexBvw 

Google maps is no longer available for free and has a pricing scale based upon how many times a site is accessed. Additionally, an account is required for production use, or a message stating “For developmental purpose only” watermark will appear over the map. I chose to use the opensource option of Map Tiler to achieve the similar experience Google Maps delivers. Through using Leaflets JavaScript library, I was able to have more customization to the map and keep the application lightweight. 

I chose to incorporate a section from another template to animate and display a general overall approach to my developing process. The Porto template fit the design of the existing project. I include only the libraries needed for that section. 

To include best practices on load times, I used image compression optimization via Photoshop, enabled gzip compression, and kept the majority of JavaScript Files towards the bottom of the document. 

## Technical Challenges Faced and Overcame
The template came with a few outdated libraries. Upon noticing the technical glitches, I researched on fixes for the FancyBox and Revolution Slider.  FancyBox needed a simple update to the latest version. Revolution Slider posed a bit more of a challenge. Auto play for the video would not work in Chrome only. Through the error console I tracked the issue to Google’s auto play policy that updated April 2018, which now does not allow auto play on muted videos. Article: https://developers.google.com/web/updates/2017/09/autoplay-policy-changes. After updating to latest version of Revolution Slider and a few more tweaks to the code this issue was resolved. 
## Tech Stack/ Libraries 
**Included with Template**
-	jQuery
-	Revolution Slider 
-	Owl Carousel
-	JQuery-MatchHeight
-	Bootstrap
-	Cube Portfolio  
-	JQuery Parallaxie
-	FancyBox 
-	JQuery-CountTo
-	JQuery Background Video

**CSS & Fonts**
-	Bootstrap
-	Revolution Slider
-	Owl Carousel
-	Animation
-	Font-Awesome (Font Icons)
-	Cube Portfolio
-	JQuery.mb.YTPlayer
-	FancyBox
-		Google Fonts
- Raleway
-	Opensans

**Addtional Librairies I personally added**
- MapTiler - https://github.com/mapbox/mapbox-gl-leaflet
-	Porto Template -  http://okler.net/tests/porto/5.5.0/test-video.html 
- Angled Edges - https://github.com/NigelOToole/angled-edges 
-SVG- Send Button - https://codepen.io/erlenmasson/pen/azVZXQ/ 
- Hover Effect - https://codepen.io/littlesnippets/pen/LpgRxo
- CSS Cross Fade Transitions - https://github.com/richbradshaw/CSS-Transitions-Transforms-and-Animation/blob/master/cfimg3.php 
- Intro Font

## Usage
Once you have downloaded the code, run the commands below to view the demo.
$ npm install
$ run start-dev
