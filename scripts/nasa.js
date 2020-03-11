module.exports = (robot) => {
  robot.hear("/API/i", (res) => {
    res.send(`${res.message.text}? I should know about APIs...`);
    return
  })

  const famousMessages = ['"Houston, we have a problem"', '"That is one small step for man, one giant leap for mankind."']
  robot.respond("/famous message/i", (res) => {
    res.send(res.random(famousMessages));
    return
  })

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const _robot = robot
  robot.respond("/picture of the day/i", (res) =>  getThePictureOfTheDay(res, _robot) )
}

function getThePictureOfTheDay(res, robot) {
    const today = new Date();
    robot.http(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
      .header('accept', 'application/json')
      .get()(function (err, resp, body) {
        if (err) {
          res.send("error requesting picture data")
          return
        }
        const data = JSON.parse(body);
        const info = !data ? 'no data' : data.title ? '' : body;
        res.send(`${data.title} by ${data.copyright}: ${data.url} ${info}`);
      })
}



