# portfolio-final

## Description

The site was developed to serve as my presence on the web, particularly for prospective employers.  It contains a bio, contact information, links to GitHub, LinkedIn, and my resume, and some of my projects.

Evolved from my [updated-portfolio](https://github.com/bferriman/updated-portfolio), this version has been refined in a number of ways. Personal info has been split onto a separate page from my project portfolio, I've added a nav bar, layout has been significantly improved at lower resolutions, and styling has been improved.

Behind the scenes, I've built a back end for the site rather than serve it as a static page.  Data like project names and descriptions and my personal info are now saved in js files server side.  The server passes that data to handlebars templates to serve html to the client.  This setup will make it easier to maintain the site and add and modify content in the future as projects are added or removed, or other features are added to the site.

## Opportunities For Further Development

I would like to add a button for each portfolio project that you can click to pull up more detailed information on the project - a fuller description of the functionality, technologies used, and so on.

Still needs a professional headshot.

I would like to add some subtle animations to make the site come alive a little bit.

## Credits

This site uses [Bootstrap 4](https://getbootstrap.com/) (copyright 2019 Twitter).
This site uses icons from [Font Awesome](https://fontawesome.com/).
Back end uses Express and Handlebars.