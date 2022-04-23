Next Steps:
  1. Host somewhere - use fishbone sub-domain? - DONE test.fishbonedigital.io
  2. Refactor into components and do cleanup
  3. Mobile views
  4. Script for deploying (server) - DONE
  5. Fix flashing pink bg on mouse-facer using OS X, iOS, Linux
  6. Final design polishing
  *. Funny intro, "5 attempts / 10 years / 1000 hours / We present..." -> old geocities looking page & kazoo reveal -> just kidding -> site
    - cookie to only play once
Target date: 5/4/2020


Public-Client:
4/14/2022
0. Custom directive that checks screen width against breakpoints

1. Header nav - style it and remove whichever items to make the menu smaller for mobile sizes
  - selected state / how to indicate which page we're on?
    - hiding the current page link
    - "caret" indicator on active link
  - configurable list of which items dis/appear 1st, 2nd etc

  - hamburger menu - collapse all items at some small breakpoint?
  - social icons in top left corner?
    - what about mobile?

2. Logo - too small at mobile sizes, balance between breakpoints - DONE
  - in Chrome (check FF etc), gets fuzzy after scaling down at mobile sizes (could just keep the logo a fixed size for mobile)
  - scroll trigger is too low for mobile sizes
    - check OnScreenDirective??

3. Boat Cam - remove for now or rough styling? - Removed for now DONE

4. Title - check into letter rotation ability
  - make the title text configurable
    - and have it apply to the CSS
      - CSS variables

4a. Add Westword award icon / tagline somwhere
  - other awards / press stuff / social media?

5. Contact section - style for top border? Filligree?
  - remove waves and turn into ribbon?
  - animations for icons
    - map marker wobble
    - time card flip to show open/closed sign
    - "draw" at sign?
  - CODE IS UGLY NEEDS REFACTORING

6. Blurb - include links for e.g. "#1 neighborhood bar", "every day"? Color?

7. Topic section - polish and decide on final styles
  - refactor code / css to be able to experiment w/styles easier

8. Footer - polish and decide on final styles
  - social media sprite

9. Mobile views / cleanup

Future Enhancements
* remove the switch from topic-section.component.ts and make it inputs
  * refactor to where we can load topic-sections arbitrarily from JSON

--------------------------------------------
Admin-Client: