const Crawler = require("crawler");
const jsonfile = require('jsonfile')


// Central America
const read_file_central_america = '../1array_maker/1_array_maker_central_america.json'
const write_file_central_america = './2_test_scraper_central_america.json'
let city_list_central_america = jsonfile.readFileSync(read_file_central_america)

let city_link_central_america = []
let obj = {city_link_central_america}

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
                    city_link_central_america.push(baseURL + $(this).attr('href'))   
                });

        }
        done();
    }
});

// Queue a list of URLs
c.queue(city_list_central_america.city_list_central_america);

c.on('drain', function(){
    jsonfile.writeFile(write_file_central_america, obj, function (err) {
        console.error(err)
    })
})
