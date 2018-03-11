const jsonfile = require('jsonfile')
const read_file_canada = '../2city_scraper/2city_scraper_canada.json'
const write_file_canada = './3filter_exceptions_canada.json'
let canada_cities_attractions = jsonfile.readFileSync(read_file_canada)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/



let filtered_cities_canada = canada_cities_attractions.city_attraction_type_canada.filter((item)=>{
  if (item[1].match(regexp2) || item[1].match(regexp3) || item[1].match(regexp4) || item[1].match(regexp7) || item[1].match(regexp8)){
    return item
  }
})

let obj = {filtered_cities_canada}

jsonfile.writeFile(write_file_canada, obj, function (err) {
  console.error(err)
})