const Crawler = require("crawler");
const jsonfile = require('jsonfile')

// canada
const read_file_canada = '../1scrape_cities/1scrape_cities_canada.json'
const write_file_canada = './2city_scraper_canada.json'
let city_list_canada = jsonfile.readFileSync(read_file_canada)

let city_attraction_type_canada = []
let obj = {city_attraction_type_canada}

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
                    city_attraction_type_canada.push([baseURL + $(this).attr('href'), $(this).text()])
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_canada.city_list_canada);

c.on('drain', function(){
    jsonfile.writeFile(write_file_canada, obj, function (err) {
        console.error(err)
    })
})