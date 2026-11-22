# Requirements

## Problem statement

The Hatfield Marine Science Center hosts four live data streams on various servers and websites: (Weather Station, Yaquina Water Quality, Pumped Seawater SCADA, OSU underwater dock webcam). Part of Hatfield's mission is to make marine science accessible and relevant to the general public. Currently, the four data streams are scattered about, making it hard and inconvenient to see the data that each server/website hosts. Visitors to the HMSC also don't typically see this data, so it would be nice to consolidate the data in one place as part of an exhibit. Creating a user friendly website that displays all four data streams in one place will make it easier for people to access/see all of that data, and it will encourage visitors to explore and think about how the data streams might be related.

## Functional requirements

- FR-1 (Must: it is part of the UI that our displayed data streams will be accessed and built from): A user sees a graphic map of the Hatfield Marine Science Center when they first access the website. Acceptance: The map is visible on the website.

- FR-2 (Should: it makes it easier to navigate the map): A user can navigate the map using buttons and their cursor. Acceptance: The user can zoom in, zoom out, reset the view, and drag around on the map to look around and see points of interest. 

- FR-3 (Must: it is one of the required data streams to display): A user can see relevant data from the Weather Station at the HMSC. Acceptance: A user can click a button on the map to see the Weather Station data, as well as daily averages, weekly averages, monthly averages, and a weather chart. 

- FR-4 (Must: it is one of the required data streams to display): A user can see the live Youtube video from the Underwater Dock Webcam at the HMSC. Acceptance: A user can click a button on the map to see the Underwater Dock Webcam, with its feed shown through a live Youtube video, as well as see some information about the camera.

## Non-functional requirements

- NFR-1 (Should: it is frustrating to use a slow website): The website and its elements loads in under 2 seconds on any Wi-Fi network.

- NFR-2 (Must: it is the primary way to interact with websites): The website and its features are all able to be interacted with through touchpad/mouse clicks.

- NFR-3 (Should: access to data streams should be fast to retain engagement): Clicking any data stream button loads all of the relevant information and data within 2 seconds on any Wi-Fi network.

## Constraints

- C-1: The map of the Hatfield Marine Science Center comes from our project partner, Marnie Zirbel.

- C-2: The current data streams on the website were specified by Marnie.

- C-3: Access to the data streams' data was specified by Marnie, since the HMSC has dock instruments that collect the data that she manages.

## Success metrics

- SM-1: All data streams showcased on website: 4 data streams (data gathered from websites and/or API).

- SM-2: Users that use the website meet the learning outcomes: All learning outcomes met for the respective modules/data streams (learning outcomes come from Marnie Zirbel's Box files).

- SM-3: Users that use the website in general: Users are engaged and easily able to see the data from the 4 data streams (Conduct surveys with general public and visitors at the HMSC to gather responses and reactions to the website).

## Non-goals

- NG-1: The tech stack we are using.

- NG-2: Creating a mobile app in addition to a website.

- NG-3: Showcasing other aspects and exhibits of the HMSC besides the data streams.

- NG-4: Using drone footage to display a photorealistic map of the HMSC as a toggleable option between the current cartoon map graphic.

## Open questions

- OQ-1: How do we access the Pumped Seawater SCADA data stream, through a website or API? Owner: Logan Jordan, we've already asked our project partner about it and are hoping to get access to it by the end of fall term.

- OQ-2: What feedback do you have for our Figma mockups, as well as our progress so far on our website? Owner: Alexander Jiang, our project partner is currently on medical leave so we're hoping to get feedback from her as soon as she comes back.
