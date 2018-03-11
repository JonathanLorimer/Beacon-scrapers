const jsonfile = require('jsonfile')
const read_file_middle_east = '../3city_scraper/3_city_scraper_middle_east.json'
const write_file_middle_east = './4filter_exceptions_middle_east.json'
let middle_east_cities_attractions = jsonfile.readFileSync(read_file_middle_east)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp5 = /Nightlife/
const regexp6 = /Shopping/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/


let filtered_cities_middle_east = middle_east_cities_attractions.city_attraction_type_middle_east.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp5) || item[1].match(regexp6) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_middle_east}

jsonfile.writeFile(write_file_middle_east, obj, function (err) {
  console.error(err)
})