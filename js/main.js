/*
Hello there!
If you want to add these games to your site, please reach out at my email: echo-the-coder@tuta.io,
or discord: 3kh0_#6969, Thanks and have a great day!

Wondering how this works?
This JavaScript code begins with a console warning message that asks users to reach out via email if they
want to add the games to their website.

The second part of the code defines a function called "script" that logs an informational message to the console when it is called.
The rest of the code creates four separate script tags and adds them to the head of the HTML document.

Each script tag has different attributes and sources, and is appended with the script function.
The first script tag is for Google Tag Manager, the second is for the Arc.io widget, the third is for ad handling using Google Funding Choices,
and the fourth is for Google AdSense.

Each script is added to the page asynchronously for performance reasons.
*/
console.warn(
  "%cNote!",
  "color: purple; font-weight: 600; background: yellow; padding: 0 5px; border-radius: 5px",
  "If you want to add these games to your site, please reach out at my email: echo-the-coder@tuta.io\nPlease do not just add them without asking me first! Thank you!"
);

function script(text) {
  console.log("%cScript Injection", "color: cyan; font-weight: 600; background: black; padding: 0 5px; border-radius: 5px", text);
}

// ====================================
// SCRIPT INJECTION
// ====================================
script("Injected script 1/4 (Google Tag Manager)");

script("Injected script 3/4 (Ad stuff)");

script("Injected script 4/4 (Ad stuff)");
