const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// Africa
const read_file_middle_east = '../2test_scraper/2_test_scraper_middle_east.json'
const write_file_middle_east = './3_city_scraper_middle_east.json'
let city_link_middle_east = jsonfile.readFileSync(read_file_middle_east)

let city_attraction_type_middle_east = []
let obj = {city_attraction_type_middle_east}

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
                    city_attraction_type_middle_east.push([baseURL + $(this).attr('href'), $(this).text()])
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_link_middle_east.city_link_middle_east);

c.on('drain', function(){
    jsonfile.writeFile(write_file_middle_east, obj, function (err) {
        console.error(err)
    })
})
