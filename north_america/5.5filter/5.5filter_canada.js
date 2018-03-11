const jsonfile = require('jsonfile')
const read_file_canada = '../5attraction_scraper/5_attraction_scraper_canada.json'
const write_file_canada = './5.5filter_canada.json'
let canada_attractions_urls = jsonfile.readFileSync(read_file_canada)

const regexp = new RegExp('https:\//www.tripadvisor.ca/Attraction_Review-.*')



let filtered_cities_canada = canada_attractions_urls.canada_attractions_urls.filter((item)=>{
  if (item.match(regexp)){
    return item
  }
})

let obj = {filtered_cities_canada}

jsonfile.writeFile(write_file_canada, obj, function (err) {
  console.error(err)
})