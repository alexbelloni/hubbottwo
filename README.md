# Slackbot hubbottwo

hubbottwo is a Slack chat bot, which gives us NASA information.

## What can hubbottwo do?

### 1) Alert users about its abilities

Hubbottwo takes action in any mention about the acronym "API".

Example on Slack channel:

    user> Some interesting NASA API? 
    hubbottwo> (Some interesting NASA API?) Me! I know lots of awesome NASA websites and APIs. Reply me "websites"


### 2) Give suggestions of awesome NASA websites

This bot gives suggestions of awesome NASA pages when users post the command "websites".

 Example on Slack channel:

    user> @hubbottwo websites 
    hubbottwo> My two suggestions are power.larc.nasa.gov and ntrs.nasa.gov

### 3) Show the picture of the day

The chatbot searches for the picture of the day on NASA APOD API.

 Example on Slack channel:

    user> @hubbottwo picture 
    hubbottwo> @user "Zoom in of the Sun" by NASA: zoom-in-of-the-sun.jpg


## Project's Technical Requirements

✔ Have a message post to Slack based on user input  
✔ Do at least 3 different things  
✔ Use at least 1 conditional to change the outcome of a Slackbot.  
✔ Leverage a for loop to iterate over a collection  
✔ Introduce a random component  
✔ Include an image in the response in addition to text

## Technical hurdles and new knowledge
### Hurdles
Follow a configuration guide based on old versions of Slack pages  
Understand a new coding syntax (CoffeeScript)  
Fix the token environment variable in Windows (; issue) 
### New things 
Hubot framework  
How to connect a chatbot to slack  
Hubot external packages

## Running hubbottwo Locally

You can test your hubot by running the following, however some plugins will not
behave as expected unless the [environment variables](#configuration) they rely
upon have been set.

You can start hubbottwo locally by running:

    % bin/hubot

## Deployment

Coding on GitHub  
Deployment on Heroku

## Restart the bot

You may want to get comfortable with `heroku logs` and `heroku restart` if
you're having issues.

## References

Hubot Framework: http://hubot.github.com  
Generator-Hubot: https://github.com/github/generator-hubot  
Heroku: https://heroku.com  
Slack room for testing: https://nasahubbot2.slack.com  
Alex's website: https://alexandrebelloni.com  

