const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Middle East
const read_file_middle_east = '../1array_maker/1_array_maker_middle_east.json'
const write_file_middle_east = './2_test_scraper_middle_east.json'
let city_list_middle_east = jsonfile.readFileSync(read_file_middle_east)

let city_link_middle_east = []
let obj = {city_link_middle_east}

let c = new Crawler({
    maxConnections: 5, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            let baseURL = 'https://www.tripadvisor.ca'
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            
              $("ul.geoList li a").each(
                function(){
                    console.log(baseURL + $(this).attr('href'))
                    city_link_middle_east.push(baseURL + $(this).attr('href'))   
                });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_middle_east.city_list_middle_east);


c.on('drain', function(){
    jsonfile.writeFile(write_file_middle_east, obj, function (err) {
        console.error(err)
    })
})
