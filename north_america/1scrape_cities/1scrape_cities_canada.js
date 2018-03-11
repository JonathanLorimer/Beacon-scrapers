const Crawler = require("crawler");
const jsonfile = require('jsonfile');

// canada
const read_file_canada = '../0array_maker/0array_maker_canada.json'
const write_file_canada = './1scrape_cities_canada.json'
let city_link_canada = jsonfile.readFileSync(read_file_canada)

city_link_canada.city_link_canada.push('https://www.tripadvisor.ca/Attractions-g153339-Activities-Canada.html')

let city_list_canada = []
let obj = {city_list_canada}

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
        
            $("div.ap_navigator a.taLnk").each(
              function(){
                console.log(baseURL + $(this).attr('href'))
                city_list_canada.push(baseURL + $(this).attr('href'))
            });

            $("ul.geoList li a").each(
              function(){
                console.log(baseURL + $(this).attr('href'))
                city_list_canada.push(baseURL + $(this).attr('href'))   
            });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_link_canada.city_link_canada);

c.on('drain', function(){
    jsonfile.writeFile(write_file_canada, obj, function (err) {
        console.error(err)
    })
})