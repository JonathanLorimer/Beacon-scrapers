const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Asia
const read_file_asia = '../1array_maker/1_array_maker_asia.json'
const write_file_asia = './2_test_scraper_asia.json'
let city_list_asia = jsonfile.readFileSync(read_file_asia)

let city_link_asia = []
let obj = {city_link_asia}

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
                    city_link_asia.push(baseURL + $(this).attr('href'))   
                });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_asia.city_list_asia);

c.on('drain', function(){
    jsonfile.writeFile(write_file_asia, obj, function (err) {
        console.error(err)
    })
})
