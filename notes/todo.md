6/28/22
  Major fixes:
  - Page transition animations
    - partially working somehow now, need to get triggering correctly all the time and adjust timing values
  - Mobile design
    - Header? Either fix the logo or the header concept, the header bar disappears at 599 but the logo still drops down with the black bar behind it
    - Basic layouts - rough box / content models
    - Increase height of main image on /home (make it taller than the contact section, should take ~the entire phone screen?)
    - What do we do with Specials and Menu images?
      - Double Taki logos
      - Double Dive logos
    - Footer gets too small to read
    - waves too small? (minor polishing fix)


6/21/22
  1. Either use public-client album-display component to show Specials and Menu on Menu page
  1a. OR create a new component if necessary
  - positon-fixed component hidden/shown via button in mouse-facer
  - X button to close
  - mobile sizes swipe to nav through
    - not needed for MVP (single image for menu / specials)
  2. Dive Logo in mobile view in e.g. Menu page
  3. Move Taki / Cluck logo to right side and have Dive logo upper-left always (for e.g. Menu page, to match home page)??

-------------------------------


Next Steps:
  1. Host somewhere - use fishbone sub-domain? - DONE test.fishbonedigital.io
  2. Refactor into components and do cleanup
  2a. Functionality / other pages for:
    - Logo (scroll to top / return to homepage)
    - Main nav in header (or hide entirely?)
    - Contact section
    - Specials / Events
    - Charters or other banner sections?
    - About Us / Contact Us / Work With Us
    - Find Us / Map
    - Footer
  3. Mobile views
    - Fix main nav - text gets too small / want to hide some menu items in hamburger
    - Fix logo 10th anniversary badge - overlaps at smaller sizes - DONE
      - Fix 320 - 600px as single column w/large logo
    - 10th anniversary callout too small to read (get rid of?) - DONEish, fixed position
    - Contact section - stack vertically
    - Mouse-facer cards - title wrapping and size / spacing
    - Footer - wrap / hide nav items? stack?
  4. Script for deploying (server) - DONE
  5. Fix flashing pink bg on mouse-facer using OS X, iOS, Linux
  6. Final design polishing
  *. Funny intro, "5 attempts / 10 years / 1000 hours / We present..." -> old geocities looking page & kazoo reveal -> just kidding -> site
    - cookie to only play once
Target date: 5/4/2020


Public-Client:
4/14/2022
0. Custom directive that checks screen width against breakpoints
0. Connection between SCSS and ts using CSS vars

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
    - "draw" at sign?
    - spin clock hands
  - time card flip to show open/closed sign
  - address flip to show map/directions links
  - at sign flip to show tel/email links
  - CODE IS UGLY NEEDS REFACTORING - DONE

6. Blurb - include links for e.g. "#1 neighborhood bar", "every day"? Color?

7. Topic section - polish and decide on final styles
  - refactor code / css to be able to experiment w/styles easier
  - filigree 

8. Footer - polish and decide on final styles
  - social media sprite

9. Mobile views / cleanup

Future Enhancements
* remove the switch from topic-section.component.ts and make it inputs
  * refactor to where we can load topic-sections arbitrarily from JSON

--------------------------------------------
Admin-Client: