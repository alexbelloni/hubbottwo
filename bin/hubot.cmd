@echo off

call npm install
SETLOCAL
SET PATH=node_modules\.bin;node_modules\hubot\node_modules\.bin;%PATH%
SET HUBOT_SLACK_TOKEN=xoxb-977264126994-991132886197-7ZL4DwrW9ioUa8pdpRks33Wt

node_modules\.bin\hubot.cmd --name "hubbottwo" %* 
