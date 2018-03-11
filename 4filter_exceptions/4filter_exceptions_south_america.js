const jsonfile = require('jsonfile')
const read_file_south_america = '../3city_scraper/3_city_scraper_south_america.json'
const write_file_south_america = './4filter_exceptions_south_america.json'
let south_america_cities_attractions = jsonfile.readFileSync(read_file_south_america)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp5 = /Nightlife/
const regexp6 = /Shopping/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/


let filtered_cities_south_america = south_america_cities_attractions.city_attraction_type_south_america.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp5) || item[1].match(regexp6) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_south_america}

jsonfile.writeFile(write_file_south_america, obj, function (err) {
  console.error(err)
})