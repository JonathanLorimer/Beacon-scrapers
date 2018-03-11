const jsonfile = require('jsonfile')
const read_file_canada = '../6detail_scraper/6_attraction_detail_canada.json'
const write_file_canada = './7big_data_parse.json'
let big_data = jsonfile.readFileSync(read_file_canada)

let regexp_neighbourhood = /(\D\d\D\W\d\D\d),\sCanada$/

let filter_array = big_data.canada_attractions_details


filter_array = filter_array.map((item)=>{
  if (item.address.match(regexp_neighbourhood)){
    let neighbourhood = regexp_neighbourhood.exec(item.address)
    item.neighbourhood = neighbourhood[1]
    return item
  } else {
  return item
  }
})

let obj = {filter_array}

jsonfile.writeFile(write_file_canada, obj, function (err) {
  console.error(err)
})