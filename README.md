# Andy Lech's Portfolio

## Background

I am currently looking for work and wanted to set up a simple web site to show off my developer experience for my job search. For roughly the last 9 years, my particular specialization has been as a cross-platform developer for mobile and desktop apps in the .NET ecosystem as well as developing and consuming API (Application Programming Interface) sites to feed those apps. For most of that time, the .NET framework of choice for cross-platform mobile/desktop apps has been Xamarin.Forms, but the ecosystem has switch over to its successor (.NET MAUI) as Xamarin.Forms has been phased out over the last two years and ultimately retired last month (May 2024).

## Requirements

This project started as a shallow fork of the [Software Developer Folio](https://github.com/saadpasta/developerFolio) template by [Saad Pasta (@saadpasta)](https://github.com/saadpasta). I was looking for an existing GitHub Pages project to modify and/or extend as I only needed to point my [AndyLech.com](https://andylech.com) domain to a simple site to show off my developer background for my job search. I picked Saad's project because it had more features, details, and styles than other repos I had seen on GitHub.

## Analysis

[Live example of the original project for reference [Software Developer Folio demo](https://developerfolio.js.org/). I abbreviate Software Developer Folio as SDF in some places below.]

I am grateful for the work of the original author, [Saad Pasta (@saadpasta)](https://github.com/saadpasta), and the [nearly 80 other contributors](https://github.com/saadpasta/developerFolio/graphs/contributors). But when I started modifying my first clone of the project for my needs, I made significant changes to the existing portfolio template for both my different developer background as well as my own personal preferences which I summarize below:

- The most obvious change needed for me was to remove all of the decorative animations and the "handwriting" font used in the original project. Because I am a more experienced developer and I am not a web developer showing off my own animation code and I am really not a fan of cutesy animations in general, I didn't want any of that on my own portfolio site.

- I love the idea of including logos to show of the variety of product, framework, and tool skills a developer needs in any particular specialization. But the Font Awesome icon font only seems to have logo glyphs related to web development which is a common shortcoming of many popular libraries (and a frequent bias of most web devs who don't consider other paradigms).

- I get the spirit of the 3 skills highlighted by the Proficiency bar-graphs but I don't think it is very helpful for me as implemented. With a longer career, I have a more diverse skill set and need a better way to differentiate between skills with different levels of proficiency. I plan to implement a different skills section in the future, but I will take it out for now.

- A few sections are less relevant to my background either chronologically (Education) or in content focus (Big Projects, Achievement and Certifications, Twitter Timeline, Podcast).

- The Experiences section needs styling changes to flow and resize better with more jobs and a more diverse variety of screen resolutions. (Plus "Experiences" for a job history sounds like cheesy tourism marketing to me.)

- I plan to spin up a blog on another site soon, so I will be adding back a Blogs section later, but I need to rethink its layout. Also, Blogs in SDF are heavily tied into only one blogging platform, Medium, which I won't be using, leading to more changes.

- The Talks section only shows the talk slides and one event page for one talk. It also doesn't connect to a speaker profile like on [Sessionize](https://sessionize.com/andy-lech/) which is typically used by frequent speakers. And it doesn't like to a repo of talk slides and code or links to other repos or resource lists.

- There is no section(s) for professional Organizations or Volunteering.

## Short-term Changes

- The first changes were to make the layout alterations detailed above except where the future plans are detailed below.

- The second changes were, obviously, that I need to replace the specifics of Saad Pasta's experience with my own.

## Medium-term Changes

- **_[Needs Research]_** Add an icon font set with logo glyphs relevant to cross-platform .NET, API, MS SQL Server, and other .NET frameworks. [I know there are extensions for VS code which use other font sets that aren't strictly for web devs, but I would need to research how easy it would be to include those.]

- Incorporate bolding and underlines like my resume and change the font to something that shows off those traits better,

- Add skills with year counts in some sort of UI layout which highlights those I have more proficiency with.

- Add new Blogs, Talks, Organizations, and Volunteering sections as discussed above.

## Long-term Changes

- Long-story short, I am not a fan of JavaScript or Node.js in any of their forms. I've used them for work projects before but only when I had no say in the technology stack. I got things working for this project, but I want to transition off JavaScript and Node.js in the future because of my distaste for and lack of confidence in those ecosystems.

- In the .NET ecosystem, Blazor is a GitHub Pages target and a logical framework to replace Node.js which would also allow me to replace JavaScript with C#. Plus, some Blazor implementations overlap with .NET MAUI, so win-win.

## Far-out changes

- Once I have made my own version of the SDF in Blazor, I could turn the Blazor project into a template for others to use in a more plug-and-play style. That is a long way off, if ever, but something to consider.

Andy Lech

[2024-06-29]
