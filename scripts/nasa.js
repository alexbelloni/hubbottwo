module.exports = (robot) => {
  robot.hear(/API/i, (res) => {
    res.send(`(${res.message.text}?) Me! I know lots of awesome NASA websites and APIs. Reply me "websites"`);
    return
  })

  robot.respond(/websites/i, (res) => sendWebsites(res, 2));

  const _robot = robot
  robot.respond(/picture/i, (res) => sendThePictureOfTheDay(res, _robot, new Date()));
}

function sendWebsites(res, quantity){
  const nasaWebsites = [
    "data.nasa.gov",
    "api.nasa.gov",
    "code.nasa.gov",
    "open.nasa.gov",
    "nasa.gov",
    "images.nasa.gov",
    "earthdata.nasa.gov",
    "pds.nasa.gov",
    "curator.jsc.nasa.gov",
    "power.larc.nasa.gov",
    "neo.sci.gsfc.nasa.gov",
    "smap.jpl.nasa.gov",
    "sti.nasa.gov",
    "technology.nasa.gov",
    "earthexplorer.usgs.gov",
    "nhc.noaa.gov/satellite",
    "usgs.gov",
    "ncdc.noaa.gov",
    "nodis3.gsfc.nasa.gov",
    "ntrs.nasa.gov",
    "resource-telescope.web.app",
    "soundcloud.com/nasa",
    "observablehq.com/collection/@justingosses/nasa",
    "blockbuilder.org/search?text=nasa"]
    const choices = [];
    for(let i=0; i<(quantity <= nasaWebsites.length ? quantity : nasaWebsites.length); ++i ){
      choices.push(res.random(nasaWebsites));
    }
    res.send(`My two suggestions are ${choices.join(" and ")}`);
    return
}

function sendThePictureOfTheDay(res, robot, day, lastAttempt) {
  console.log(`sendThePictureOfTheDay ${res.message.text}`);
  const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`
  robot.http(url)
    .header('accept', 'application/json')
    .get()(function (err, resp, body) {
      if (err) {
        res.reply("error requesting picture data")
        return
      }
      const data = JSON.parse(body);
      if (data.code && !lastAttempt) {
        const yesterday = new Date(day.setDate(day.getDate() - 1));
        getThePictureOfTheDay(res, robot, yesterday, true);
        return
      }
      const info = !data ? 'no data' : data.title ? '' : url.concat(' ', body);
      res.reply(`"${data.title}" ${data.copyright ? "by ".concat(data.copyright) : "" }: ${data.url} ${info}`);
    })
}



