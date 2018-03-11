const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Africa
const read_file_south_pacific = '../2test_scraper/2_test_scraper_south_pacific.json'
const write_file_south_pacific = './3_city_scraper_south_pacific.json'
let city_link_south_pacific = jsonfile.readFileSync(read_file_south_pacific)

let city_attraction_type_south_pacific = []
let obj = {city_attraction_type_south_pacific}

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
        
            $("label.label.filterName a.taLnk").each(
                function(){
                    console.log(baseURL + $(this).attr('href'))
                    city_attraction_type_south_pacific.push([baseURL + $(this).attr('href'), $(this).text()])
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_link_south_pacific.city_link_south_pacific);

c.on('drain', function(){
    jsonfile.writeFile(write_file_south_pacific, obj, function (err) {
        console.error(err)
    })
})
