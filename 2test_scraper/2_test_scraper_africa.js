const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Africa
const read_file_africa = '../1array_maker/1_array_maker_africa.json'
const write_file_africa = './2_test_scraper_africa.json'
let city_list_africa = jsonfile.readFileSync(read_file_africa)

let city_link_africa = []
let obj = {city_link_africa}

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
                    city_link_africa.push(baseURL + $(this).attr('href'))   
                });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_africa.city_list_africa);

c.on('drain', function(){
    jsonfile.writeFile(write_file_africa, obj, function (err) {
        console.error(err)
    })
})
