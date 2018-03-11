const jsonfile = require('jsonfile')
const read_file_asia = '../3city_scraper/3_city_scraper_asia.json'
const write_file_asia = './4filter_exceptions_asia.json'
let asia_cities_attractions = jsonfile.readFileSync(read_file_asia)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp5 = /Nightlife/
const regexp6 = /Shopping/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/


let filtered_cities_asia = asia_cities_attractions.city_attraction_type_asia.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp5) || item[1].match(regexp6) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_asia}

jsonfile.writeFile(write_file_asia, obj, function (err) {
  console.error(err)
})