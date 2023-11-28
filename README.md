## Random Quote Extension

### Video Demo Link: [Insert Link Here]

### Testing the Random Quote Chrome Extension:

1. **Open Chrome and Go to Extensions:**
   - Open Google Chrome.
   - In the top-right corner, click on the three dots to open the menu.
   - Go to "More tools" and then select "Extensions."

2. **Enable Developer Mode:**
   - In the Extensions page, enable "Developer mode" located at the top-right.

3. **Load Unpacked Extension:**
   - Click on the "Load unpacked" button that appears after enabling Developer mode.
   - Select the folder where your extension files (including `manifest.json`) are located.
   - Click "Select Folder."

4. **Verify Extension Loading:**
   - Your extension should now appear in the list of installed extensions.
   - It will also add an icon to the Chrome toolbar.

5. **Test the Extension:**
   - Click on the extension icon in the toolbar to open the popup.
   - Verify that the popup displays your HTML content, and the JavaScript logic works as expected.
   - Test any functionality, such as fetching and displaying random quotes.

### Description

**TODO:**

#### Step 1: Project Decision
The initial step involved selecting a project, and after considering various options, I settled on creating a Chrome extension using HTML and JavaScript.

#### Step 2: Pseudocode
To outline the steps needed to build the extension, I created a pseudocode. Initially considering ideas like a currency converter and a background/text changer, I encountered difficulties such as API restrictions and browser limitations. Eventually, I decided on a random quote extension due to its simplicity and compatibility.

#### Step 3: Learning
As a newcomer to Chrome extension development, I dedicated time to learning the essentials. I watched online videos and read documentation to gain familiarity with building Chrome extensions using JavaScript.

#### Step 4: IDE Decision
Choosing the appropriate Integrated Development Environment (IDE) was crucial. I weighed the options between the CS50 IDE and my local VSCode. Opting for VSCode, I aimed to detach from the CS50 training wheels for a more everyday coding experience.

#### Step 5: Implementation
With the groundwork laid, I delved into creating the random quote Chrome extension.

#### What the Extension Does:
The Random Quote Extension provides users with a simple and enjoyable experience. Once installed, users can click a button on their browser, triggering the extension to fetch and display a random quote on their screen. The extension aims to add a touch of inspiration or thoughtfulness to users' browsing experiences.

#### Files Created:

- **index.html:**
  This file serves as the structural foundation of the extension. It includes an `h3` tag for the title, a `p` tag to display quotes fetched from the API set in `script.js`, and a `button` tag to trigger the fetching of a random quote from the API backend.

- **manifest.json:**
  The manifest file contains essential information such as the manifest version, title, project description (random quote generation), default icon for download, and the default pop page—typically the default HTML file displayed in the browser when the extension is clicked.

- **script.js:**
  The logic behind the entire Chrome extension resides in this file. Using `getElementById`, the script accesses elements created in `index.html`. Event listeners are added to elements, particularly the button, to fetch quotes from the API and display them on the page.

- **icon.png:**
  This file represents the icon or image displayed on the Chrome extension.

- **styles.css:**
  The styling of the extension's user interface is defined in this file. Accessing elements by ID and tag types (e.g., `body`), I specified the appearance and style of the extension.

- **api.js:**
  Created to hide the API and separate it from the main code. Despite encountering errors when accessing it from that file, the intention was to enhance code organization.

#### Challenges Faced:

1. **API Selection:**
   Identifying the right API posed a challenge due to some having restrictions.

2. **Manifest Version:**
   Understanding the appropriate manifest version and corresponding syntax.

3. **Extension Runtime:**
   Ensuring the extension runs in the browser, resolved by including `(DOMContentLoaded)` before the main code in `script.js`.

#### Learnings:

- **Manifest.json Usage:**
  Acquired knowledge about using `manifest.json` for Chrome extension configuration.

- **DOMContentLoaded Importance:**
  Realized the significance of `(DOMContentLoaded)` to address challenges encountered when running Chrome extensions.

In conclusion, the Random Quote Extension project provided valuable insights into Chrome extension development, including API handling, manifest configuration, and the importance of proper event handling for extension functionality.
