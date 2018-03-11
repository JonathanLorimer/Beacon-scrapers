const jsonfile = require('jsonfile');

let city_link_canada = []

let count = 20
while (count <= 120) {
    city_link_canada.push(`https://www.tripadvisor.ca/Attractions-g153339-Activities-oa${count}-Canada.html#LOCATION_link`)
count += 50
}
let obj_link_canada = {city_link_canada}
let file_canada = './0array_maker_canada.json'

jsonfile.writeFile(file_canada, obj_link_canada, function (err) {
  console.error(err)
})