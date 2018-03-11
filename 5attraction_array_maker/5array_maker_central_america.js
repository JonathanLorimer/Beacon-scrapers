const jsonfile = require('jsonfile')
const read_file_central_america = '../4filter_exceptions/4filter_exceptions_central_america.json'
const write_file_central_america = './5array_maker_central_america.json'
let central_america_cities_attractions = jsonfile.readFileSync(read_file_central_america)
let central_america_attractions_list = []

const regexp = /.*:\/\/.*tripadvisor\.ca\/Attractions-.*-Activities-c\d\d/
const regexp2 = /-\D*.html$/
const regexp3 = /\d\d*/

central_america_cities_attractions.filtered_cities_central_america = central_america_cities_attractions.filtered_cities_central_america.map((item)=>{
  central_america_attractions_list.push(item[0])
  let item1 = item[0].split(regexp)
  let item2 = item[0].split(regexp2)
  let new_item = item2[0] + '-oa${count}' + item1[1]
  let new_item2 = regexp3.exec(item[1])
  return [new_item, parseInt(new_item2[0])]
})

central_america_cities_attractions.filtered_cities_central_america.forEach((item)=>{
  let count = 30
  while (count < item[1]) {
    central_america_attractions_list.push(eval('`'+item[0]+'`'))
    count += 30
  }
})

let obj = {central_america_attractions_list}

jsonfile.writeFile(write_file_central_america, obj, function (err) {
  console.error(err)
})

