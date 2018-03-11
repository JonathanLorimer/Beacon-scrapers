const jsonfile = require('jsonfile')
const read_file_south_pacific = '../4filter_exceptions/4filter_exceptions_south_pacific.json'
const write_file_south_pacific = './5array_maker_south_pacific.json'
let south_pacific_cities_attractions = jsonfile.readFileSync(read_file_south_pacific)
let south_pacific_attractions_list = []

const regexp = /.*:\/\/.*tripadvisor\.ca\/Attractions-.*-Activities-c\d\d/
const regexp2 = /-\D*.html$/
const regexp3 = /\d\d*/

south_pacific_cities_attractions.filtered_cities_south_pacific = south_pacific_cities_attractions.filtered_cities_south_pacific.map((item)=>{
  south_pacific_attractions_list.push(item[0])
  let item1 = item[0].split(regexp)
  let item2 = item[0].split(regexp2)
  let new_item = item2[0] + '-oa${count}' + item1[1]
  let new_item2 = regexp3.exec(item[1])
  return [new_item, parseInt(new_item2[0])]
})

south_pacific_cities_attractions.filtered_cities_south_pacific.forEach((item)=>{
  let count = 30
  while (count < item[1]) {
    south_pacific_attractions_list.push(eval('`'+item[0]+'`'))
    count += 30
  }
})

let obj = {south_pacific_attractions_list}

jsonfile.writeFile(write_file_south_pacific, obj, function (err) {
  console.error(err)
})



