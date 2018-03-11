
var jsonfile = require('../jsonfile')

let city_list_europe = []
let city_list_south_america = []
let city_list_asia = []
let city_list_africa = []
let city_list_south_pacific = []
let city_list_central_america = []
let city_list_middle_east = []

let count = 20
while (count < 2000) {
    city_list_europe.push(`https://www.tripadvisor.ca/Attractions-g4-Activities-oa${count}-Europe.html#LOCATION_LIST`)
    city_list_south_america.push(`https://www.tripadvisor.ca/Attractions-g13-Activities-oa${count}-South_America.html#LOCATION_LIST`)
    city_list_asia.push(`https://www.tripadvisor.ca/Attractions-g2-Activities-oa${count}-Asia.html#LOCATION_LIST`)
    city_list_africa.push(`https://www.tripadvisor.ca/Attractions-g6-Activities-oa${count}-Africa.html#LOCATION_LIST`)
    city_list_south_pacific.push(`https://www.tripadvisor.ca/Attractions-g8-Activities-oa${count}-South_Pacific.html#LOCATION_LIST`)
    city_list_central_america.push(`https://www.tripadvisor.ca/Attractions-g291958-Activities-oa${count}-Central_America.html#LOCATION_LIST`)
    city_list_middle_east.push(`https://www.tripadvisor.ca/Attractions-g21-Activities-oa${count}-Middle_East.html#LOCATION_LIST`)
    count += 50
}

let obj_list_europe = {city_list_europe}
let obj_list_south_america = {city_list_south_america}
let obj_list_asia = {city_list_asia}
let obj_list_africa = {city_list_africa}
let obj_list_south_pacific = {city_list_south_pacific}
let obj_list_central_america = {city_list_central_america}
let obj_list_middle_east = {city_list_middle_east}

let file_europe = './1_array_maker_europe.json'
let file_south_america = './1_array_maker_south_america.json'
let file_asia = './1_array_maker_asia.json'
let file_africa = './1_array_maker_africa.json'
let file_south_pacific = './1_array_maker_south_pacific.json'
let file_central_america = './1_array_maker_central_america.json'
let file_middle_east = './1_array_maker_middle_east.json'
 
jsonfile.writeFile(file_europe, obj_list_europe, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_south_america, obj_list_south_america, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_asia, obj_list_asia, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_africa, obj_list_africa, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_south_pacific, obj_list_south_pacific, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_central_america, obj_list_central_america, function (err) {
  console.error(err)
})
jsonfile.writeFile(file_middle_east, obj_list_middle_east, function (err) {
  console.error(err)
})