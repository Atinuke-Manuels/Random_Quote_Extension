# Random_Quote_Extension
#### Video Demo Link : 
#### Description

## TODO:
### Step 1:
The first thing I did was to decide on the project I wanted to work on based various options available. I finally settled for for a chrome extension built using HTML and JavaScript.

### Step 2:
Was to put my idea together as a pseudocode. I had to outline the steps needed to create the chrome extension
First step was knowing the exact chrome extension I wanted to create as there were various options avaialable. I thoughht of a currency converter, a background and text changer and also a random quote extension. I finally settled for a random quote extension as I had issues with the other ideas like getting the right API and browser restriction issues with the background changer.

### Step 3
I had to learn what it entailed to create a chrome extension as I had never done this before. I watched videos online and also read some documentations just to get familiar with the way a chrome extension can be built using JavaScript.

### Step 4
Deciding the IDE to use. Either the Cs50 IDE or my local VScode. I settled for my local VScode as this was closer to day to day coding experience and trying to detach cs50 training wheels.

### Step 5
After the above steps I dived into creating the random quote chrome extension.

The files listed below were the files I had to create to get my chrome extension working:
- index.html
- manifest.json
- script.js
- icon.png
- styles.css
- api.js

Now let's delve into the content and functionalities of these files.

### index.html

- This file contains the structure of the page. The title, the body and also this is where we link the script.js file to using the script tag. For this project the index.html file contains an h3 tag , a p tag and a button. The h3 tag contains the header/title, the p tag hold the random quootes as fetched from the API set on the script.js file and the button tag which when clicked would trigger the fetching of the random quote from the API backend.

### manifest.json
- The manifest file is where the manifest version is declared, the title, the project description which in this instance is a random quote generation, the default icon is also set in this file, the default icon that would be displayed when the extension is dowloaded and the default pop page which is usually the default html file displayed in the browser when the extension is clicked on in the browser.

### Script.js
- This file contains the logic on whicg the entire chrome extension runs. The elements created in the index.html file is accessed here using the getElementById function. I added event listeners to the element i.e the button which listens for the on click action then executes the function of fetching the API and displaying same on the index.html file. The script file in my opinion is the engine room for my chrome extension.

### icon.png
- This basicall refers to the icon/image displayed on my chrome extension.

### styles.css
- I used this file to basically set the user interface of my chrome extension. I defined the style and appearnace of my extension in this file and this was made possible by accessing the elements by id and tag types e.g body.

### api.js
- I created an api.js file to help hide my api i.e to separate it from the main code but it kept throwing errors when I tried accessing it from that file. I couldn't figure out why.

### Challenges Faced while working on this project
- Getting the right API was a challenge as some had restrictions
- Knowing the right manifest version to use and the corresponding syntax
- Getting the extension to run in the browser due to the script running before the html file. I had to include (DOMContentLoaded) at the top level before the main code in the script.js file

### Learnings from the project
- I learnt the use of the manifest.json
- I learnt the importance of the DOMContentLoaded as I experienced challenges running chrome extension when this was this was not included in my code.

