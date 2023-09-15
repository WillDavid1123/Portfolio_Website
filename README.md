# Portfolio_Website

<ul>
Description:
<ul>
  <li>Portfolio website created to showcase skills as a computer scientist, mainly as a web developer, software engineer, and AI/ML developer. Ideally scalable to the point that adding information is done purely through backend storage (Firebase/SQL/etc.).</li>
</ul>
<br>
Development Log
<ul>
  <li>12/29/2022: Github repository and Vue project files created</li>
  <li>12/31/2022: Clear website of base Vue pages, Figma work on base page layout, project card, and Home page</li>
  <li>1/1/2023: Figma work (Projects page, Login and Signup popups, Navbar and Navbar hamburger, Footer, Announcements page, Color Picker Game page, and Leader Board popup)</li>
  <li>1/3/2023: Navbar work (Router-links), Figma updates</li>
  <li>1/10/2023: Navbar work (Hamburger), Login Popup work (Design), Figma updates</li>
  <li>1/23/2023: Further hamburger work, device compatibility work on Navbar (smaller screens now have the page links in the hamburger), the addition of an About page to site and Figma, Figma work, log-in and Signup designs complete, Footer added (needs to be stuck to the bottom still)</li>
  <li>4/30/2023: Returning to this project after my last semester for my bachelor's degree in computer science. All base page layouts added, database (Firebase) connected and feeding data to the site, small adjustments for different screen sizes, footer sitting at the bottom of the page</li>
  <li>5/2/2023: Database connection reworked so that all data is loaded in at once instead of by page, headers and database collection made for all 4 pages, home page starting design complete</li>
  <li>9/2/2023: Returning after a trip to Germany and settling into a new job. Added top page descriptions to the Announcements and Projects page and adjusted the color to be lighter</li>
  <li>9/5/2023: Created and hooked up base Settings modal, still need to add shell settings</li>
  <li>9/8/2023: Created and implemented a prototype of project cards, hooked up to Firebase, and they now show information about each project. Won't appear if the Projects page is refreshed, need to find a way to "rerun" the card section of HTML. Plan to make an extended modal for each project so cards aren't too long</li>
  <li>9/11/2023: Fixed project cards so they appear when refreshing on the Projects page, just needed to simplify passing projects as props</li>
  <li>9/12/2023: Added Expand button to project cards, but the button only activates the first project's modal. Need to do research on how to change the modal's text depending on which project's button is pressed</li>
  <li>9/14/2023: Fixed project modal so that it pulls from the Vue Store, which is updated with the correct project's data whenever a project's expand button is pressed. Styled the expand page with the data currently used with projects, will have to update both the card and modal whenever I add a new data field</li>
</ul>
</ul>
