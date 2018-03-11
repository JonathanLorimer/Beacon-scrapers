const jsonfile = require('jsonfile')
const read_file_central_america = '../3city_scraper/3_city_scraper_central_america.json'
const write_file_central_america = './4filter_exceptions_central_america.json'
let central_america_cities_attractions = jsonfile.readFileSync(read_file_central_america)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp5 = /Nightlife/
const regexp6 = /Shopping/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/


let filtered_cities_central_america = central_america_cities_attractions.city_attraction_type_central_america.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp5) || item[1].match(regexp6) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_central_america}

jsonfile.writeFile(write_file_central_america, obj, function (err) {
  console.error(err)
})