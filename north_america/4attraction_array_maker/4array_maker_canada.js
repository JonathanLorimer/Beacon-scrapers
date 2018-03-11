const jsonfile = require('jsonfile')
const read_file_canada = '../3filter_exceptions/3filter_exceptions_canada.json'
const write_file_canada = './4array_maker_canada.json'
let canada_cities_attractions = jsonfile.readFileSync(read_file_canada)
let canada_attractions_list = []

const regexp = /.*:\/\/.*tripadvisor\.ca\/Attractions-.*-Activities-c\d\d/
const regexp2 = /-\D*.html$/
const regexp3 = /\d\d*/

canada_cities_attractions.filtered_cities_canada = canada_cities_attractions.filtered_cities_canada.map((item)=>{
  canada_attractions_list.push(item[0])
  let item1 = item[0].split(regexp)
  let item2 = item[0].split(regexp2)
  let new_item = item2[0] + '-oa${count}' + item1[1]
  let new_item2 = regexp3.exec(item[1])
  return [new_item, parseInt(new_item2[0])]
})

canada_cities_attractions.filtered_cities_canada.forEach((item)=>{
  let count = 30
  while (count < item[1]) {
    canada_attractions_list.push(eval('`'+item[0]+'`'))
    count += 30
  }
})

let obj = {canada_attractions_list}

jsonfile.writeFile(write_file_canada, obj, function (err) {
  console.error(err)
})

