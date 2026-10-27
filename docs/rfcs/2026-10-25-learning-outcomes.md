# RFC: Learning Outcomes

| Field | Value |
| --- | --- |
| Author | Alexander Jiang |
| Date | 2026-10-25 |
| Status | Proposed |
| Decision Date | (fill when decided) |
| Deciders | (who agreed to the outcome) |
| Superseded By | N/A |

## Problem and Context

The Hatfield Live Data Public UI project involves making a website to display four of the Hatfield Marine Science Center's data streams in one place, making it easy and accessible for users to see all of the relevant information from the center's servers and websites. One of the main goals of the project is to incorporate a K-12 educational component in some way so that the general public of ages 8+ will learn something from looking at our website. There are various ways to go about it, and we will need to ensure that the extra information we add to provide context for the data streams needs to be accurate. The decision we need to make is to decide on what sort of learning outcomes we want users to take away from after visiting our site, and how to go on about implementing features that enable users to meet those learning outcomes. 

This decision does not have to be decided asap, but it is a good idea to think about it now before it's too late. The educational component of the project could be added later on after we get the base requirements implemented (incorporating the four data streams on one website). Reaching a decision early on though will help drive our decisions for other aspects of the project and make it easier to develop the educational component/learning outcomes when we get to that stage, since we'd know exactly what to do by then. It is better to try to reach a decision sooner rather than later, especially this term when we have the most opportunity for planning requirements and specifications of the project out. 

If the team did nothing at all regarding making a decision for this problem, that would not be good. Technically, the educational component of the project is a stretch goal, and just displaying the four data streams in one place would suffice as the definition of done, but the team and our project partner would really like to have this be incorporated. We feel that we'd have a lot of extra time to play around with the website and add extra features to it once we get the core requirements done, and developing a system that teaches users something would be quite fulfilling to us. Nothing bad would happen if we didn't add an educational component in, besides the users not really taking anything away after visiting the site. But having learning outcomes would help give the website a purpose and help retain user attention and engagement.

## Options

### Option A: Speak with project partner about educational component

This option involves speaking with our project partner, Marnie Zirbel, first and ask for her thoughts and opinions on how we should go about implementing the educational components of the website, and what learning outcomes she recommends. In a meeting with her, she expressed some thoughts on this already, and how she was planning on perhaps discussing the educational component with a K-12 educator board. Marnie is an expert in marine science, so she would provide very helpful insight for this aspect of the project, and guide us in the right direction. She would know what data to highlight and how to frame the data in a way to make it understandable and informative for people of ages 8+. Marnie has also lectured and taught audiences before, so her experience would be very valuable for this. She would know what information would be accurate or not, so she'd be a good fact checker and consultant. There's not really any major costs to this option, besides perhaps taking a bit of time to get all the information and recommendations we need from Marnie and/or a K-12 educator board.

### Option B: Add context and fun facts to the data displayed from the data streams

This option involves implementing the educational component and learning outcomes ourselves without consulting Marnie first, and then showing her our project as it progresses and once this part is done. The project is quite open ended, so Marnie would not likely have strong oppositions to this idea. As a team, we talked about how we could add contextual information to each data stream to describe the instrument that recorded the data and what the data means. We also thought it would be cool to include fun facts to each data stream to further educate users in an entertaining way. This option would likely be approved by Marnie and it has the benefit of informing users what each data stream represents, since without context, the data can be confusing - especially to someone without a marine science background. The costs would include the fact that we would do this option on our own first without consulting Marnie, being if she doesn't like how we did it, that'd be a good amount of progress down the drain. In addition, we would probably need to spend more time doing research and fact checking our information, since we do not want to include any context or fun facts that are inaccurate.

### Option C: Do Nothing

Doing nothing and not implementing some sort of educational component/learning outcomes wouldn't be the end of the world, and the project could likely be defined as done without it, but it would make the project feel a bit lacking. Without this aspect of the website, I feel that there wouldn't be much purpose to the site. Sure, it would mean we complete the project faster, but since we have a full year to work on it, we might as well try to make it as complete as possible. Lacking this part would mean at the end of the year when our site is displayed online and at Hatfield, the users that go through our site wouldn't really take anything away from it. It could feel like they wasted their time, especially if they don't have a marine science background. Making a decision other than this one would mean that users will learn something, and feel happy and satisfed that they spent time out of their day to go through our site.

## Analysis

It is a bit tricky to talk about the technical tradeoffs for this sort of decision, since it is not a technical topic and is specific to this project. I will try my best though. 

For Option A, it is the most surefire way to ensure that we are developing the project in a way that Marnie likes and agrees with. We're not exactly sure what she would recommend but we feel that it would be pretty similar to Option B. If the K-12 educator board gets involved, the learning outcomes could get pretty complex and involved. With an official structure though, maintainability would likely be simple. I'm not sure what structure that would entail though, as I am not on the K-12 educator board. The only cost of this option is that it could take a bit of time to sort everything out and cover all the specifics with Marnie.

For Option B, we could start development right away without needing to consult anyone, at least initially. This option wouldn't be too complicated to add in addition to displaying the four data streams, since we'd just be adding relevant context to the data. This would also not be hard to maintain by keeping the information up to date. However, not running this option first through Marnie could result in big changes if Marnie did not like this direction we went in. We'd also need to fact check more on our own and it would be easier to let misinformation spread through the cracks, meaning users would see inaccurate information.

For Option C, doing nothing saves us the most time, but it would mean an important aspect of the project, in my opinion, would go unresolved and make the website feel a bit pointless. It is the least complex and it could save a bit on performance time, since there'd be less code that would need to be run. There would be nothing to maintain but our users would not really take anything away after visiting the website. People with a marine science background may know what the data streams mean with no context, but people without that background may feel lost and discouraged from visiting the website again.

## Recommendation and Verification Plan

I propose that we go with Option A. It is the option with the fewest tradeoffs and makes the most sense, talking it through with our project partner first before implementing the educational aspect ourselves. Our project partner came up with the project idea, so we would want to run through big decisions like this through her first, especially since she has teaching experience and a marine science background. The team will know this was the right choice straight away, since our project partner Marnie would be directly giving us suggestions and recommendations on how to handle the educational component. We would show her our progress regularly on our decided course of action and confirm that we're on the right track. In the testing stage and when we're gathering user feedback, we could quiz users once they go through the website to see if they learned anything from it. If they answered our questions correctly, then we succeeded with teaching people through our site. 

## Constraints

The project is not under any NDA and our project partner, Marnie Zirbel, has given us a lot of control and creative freedom over the project. Marnie will probably have some input and suggestions, so those could be our constraints, but they will be wanted and welcomed in order to help us develop a strong educational component for the project.

## Delegation and Validation

I wrote this whole RFC without the use of AI. It all came from my brain! Also, our repo does not currently have any checks. Since I wrote this RFC myself, I validated everything.

## Decision

Proposed.
