const jsonfile = require('jsonfile')
const read_file_africa = '../3city_scraper/3_city_scraper_africa.json'
const write_file_africa = './4filter_exceptions_africa.json'
let africa_cities_attractions = jsonfile.readFileSync(read_file_africa)

const regexp1 = /.*:\/\/.*tripadvisor\.ca\/Attractions-.*-Activities-c\d\d-.*/
const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp5 = /Nightlife/
const regexp6 = /Shopping/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/



let filtered_cities_africa = africa_cities_attractions.city_attraction_type_africa.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp5) || item[1].match(regexp6) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_africa}

jsonfile.writeFile(write_file_africa, obj, function (err) {
  console.error(err)
})