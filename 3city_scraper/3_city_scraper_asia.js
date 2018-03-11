const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// asia
const read_file_asia = '../2test_scraper/2_test_scraper_asia.json'
const write_file_asia = './3_city_scraper_asia.json'
let city_link_asia = jsonfile.readFileSync(read_file_asia)

let city_attraction_type_asia = []
let obj = {city_attraction_type_asia}

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
                    city_attraction_type_asia.push([baseURL + $(this).attr('href'), $(this).text()])
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_link_asia.city_link_asia);

c.on('drain', function(){
    jsonfile.writeFile(write_file_asia, obj, function (err) {
        console.error(err)
    })
})
