const jsonfile = require('jsonfile')
const read_file_canada = './7big_data_parse.json'
const write_file_canada = './7type_parse.json'
let big_data = jsonfile.readFileSync(read_file_canada)

const regexp2 = /Sights & Landmarks/
const regexp3 = /Nature & Parks/
const regexp4 = /Museums/
const regexp7 = /Water & Amusement Parks/
const regexp8 = /Zoos & Aquariums/

let filter_array = big_data.filter_array


filter_array = filter_array.map((item)=>{
  if (item.type.match(regexp2)){
    item.type = 'Sights & Landmarks'
    return item
  } else if (item.type.match(regexp4)) {
    item.type = 'Museums'
    return item
  } else if (item.type.match(regexp8)) {
    item.type = 'Zoos & Aquariums'
    return item
  } else if (item.type.match(regexp3)) {
    item.type = 'Nature & Parks'
    return item
  } else if (item.type.match(regexp7)) {
    item.type = 'Water & Amusement Parks'
    return item
  }
})

let obj = {filter_array}

jsonfile.writeFile(write_file_canada, obj, function (err) {
  console.error(err)
})




