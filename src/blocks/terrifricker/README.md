# Just-Hamburger-Menu
This snippet will create a hamburger menu icon under an invisible checkbox input.
Once clicked the hamburger icon will change to a closed icon X with a transition
effect.  Clicking the closed icon will transition it back to the hamburger menu icon.

Notes: css variables have been used to make customizing easier.  These are found
in the :root element.  (The distance between the hamburger icon lines need
to be entered as both a positive number and the cooresponding negative number).

To add to your project:
1. Add the snippet of html between the <nav> tags to your own html file.
2. Check for duplicate class names.
    This css snippet uses:
        classes:
            hamburger-menu
            hamburger-menu-hidden-checkbox
            hamburger-icon-container
            hamburger-icon-middle-line
3. Add the css to your own css file.
4. Customize the details of your hamburger menu by changing the css variables found in :root.


