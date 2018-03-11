const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Europe
const read_file_europe = '../1array_maker/1_array_maker_europe.json'
const write_file_europe = './2_test_scraper_europe.json'
let city_list_europe = jsonfile.readFileSync(read_file_europe)

let city_link_europe = []
let obj = {city_link_europe}

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
                    city_link_europe.push(baseURL + $(this).attr('href'))   
                });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_europe.city_list_europe);

c.on('drain', function(){
    jsonfile.writeFile(write_file_europe, obj, function (err) {
        console.error(err)
    })
})
