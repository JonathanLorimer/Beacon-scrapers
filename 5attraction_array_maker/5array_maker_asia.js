const jsonfile = require('jsonfile')
const read_file_asia = '../4filter_exceptions/4filter_exceptions_asia.json'
const write_file_asia = './5array_maker_asia.json'
let asia_cities_attractions = jsonfile.readFileSync(read_file_asia)
let asia_attractions_list = []

const regexp = /.*:\/\/.*tripadvisor\.ca\/Attractions-.*-Activities-c\d\d/
const regexp2 = /-\D*.html$/
const regexp3 = /\d\d*/

asia_cities_attractions.filtered_cities_asia = asia_cities_attractions.filtered_cities_asia.map((item)=>{
  asia_attractions_list.push(item[0])
  let item1 = item[0].split(regexp)
  let item2 = item[0].split(regexp2)
  let new_item = item2[0] + '-oa${count}' + item1[1]
  let new_item2 = regexp3.exec(item[1])
  return [new_item, parseInt(new_item2[0])]
})

asia_cities_attractions.filtered_cities_asia.forEach((item)=>{
  let count = 30
  while (count < item[1]) {
    asia_attractions_list.push(eval('`'+item[0]+'`'))
    count += 30
  }
})

let obj = {asia_attractions_list}

jsonfile.writeFile(write_file_asia, obj, function (err) {
  console.error(err)
})

