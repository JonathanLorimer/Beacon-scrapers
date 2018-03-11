const Crawler = require("crawler");

let c = new Crawler({
    rateLimit: 500, // `maxConnections` will be forced to 1
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            const $ = res.$;
            let baseURL = 'https://www.tripadvisor.ca'
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            // $("div.geo_name a").each(
            //   function(){
            //      console.log(baseURL + $(this).attr('href'))
            //   });
            if ($("div.prw_rup.prw_common_bubble_rating.bubble_rating span").attr('content') > 3){
                console.log($("h1#HEADING.heading_title").text())
                console.log($("div.blEntry.address.clickable span").text())
                console.log($("span.header_detail.attraction_details div a").text())                
                // let coordinates = $('div.prv_map.clickable img').attr('src').text()
                // let regex = new RegExp('\center..\d\d.\d\d\d\d\d\d..\d\d.\d\d\d\d\d\d\/g')
                // console.log(coordinates.match(regex))
            } 
        }
        done();
    }
});

// Queue a list of URLs
// c.queue([
//     'https://www.tripadvisor.ca/Attractions-g4-Activities-Europe.html',
//     'https://www.tripadvisor.ca/Attractions-g13-Activities-South_America.html',
//     'https://www.tripadvisor.ca/Attractions-g2-Activities-Asia.html',
//     'https://www.tripadvisor.ca/Attractions-g6-Activities-Africa.html',
//     'https://www.tripadvisor.ca/Attractions-g8-Activities-South_Pacific.html',
//     'https://www.tripadvisor.ca/Attractions-g291958-Activities-Central_America.html',
//     'https://www.tripadvisor.ca/Attractions-g21-Activities-Middle_East.html',
//   ]);

  c.queue([
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d12518766-Reviews-Facultad_de_Ingenieria-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2051991-Reviews-Basilica_Nuestra_Senora_de_la_Merced-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d6685812-Reviews-Palacio_San_Martin-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2136797-Reviews-Mafalda_Statue-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d1226723-Reviews-Avenida_Corrientes-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7225588-Reviews-Paseo_de_la_Historieta-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311753-Reviews-Plaza_Dorrego-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d6105488-Reviews-Fuente_de_Las_Nereidas-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311769-Reviews-Congreso-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311778-Reviews-Plaza_San_Martin-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550485-Reviews-Centro_Naval-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550533-Reviews-Palermo_Chico-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7388124-Reviews-Facultad_de_Derecho_Universidad_de_Buenos_Aires-Buenos_Aires_Capital_Federal_Dist.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311754-Reviews-The_Pink_House-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d640848-Reviews-Palermo_Hollywood-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d532273-Reviews-Palais_de_Glace_Salas_Nacionales_de_Cultura-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311776-Reviews-Palermo_Viejo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4092374-Reviews-Palacio_de_Tribunales-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311755-Reviews-Plaza_de_Mayo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2626705-Reviews-Plaza_Serrano_Plazoleta_Julio_Cortazar-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317184-Reviews-Edificio_Kavanagh-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d314078-Reviews-El_Obelisco-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550527-Reviews-Barrio_de_Belgrano-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d1238227-Reviews-Luna_Park-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317179-Reviews-Calle_Museo_Caminito-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9454359-Reviews-Costanera_Sur-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311930-Reviews-Cabildo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2587779-Reviews-Avenida_Santa_Fe-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317192-Reviews-La_Manzana_de_Las_Luces-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8492557-Reviews-Gomero_de_la_Recoleta-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7901089-Reviews-Convento_Santo_Domingo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317526-Reviews-Torre_Monumental-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311772-Reviews-La_Boca-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7199236-Reviews-Abadia_San_Benito_de_Palermo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d1226726-Reviews-Abasto_Shopping-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317268-Reviews-Parroquia_de_San_Pedro_Gonzalez_Telmo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8786705-Reviews-Avenida_del_Libertador-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d3478646-Reviews-Estatua_de_Olmedo_y_Portales-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d572519-Reviews-Chinatown-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d622891-Reviews-Microcentro-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4553762-Reviews-Palacio_Legislativo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d622887-Reviews-Barrio_Norte-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2433043-Reviews-Iglesia_de_la_Piedad-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4271637-Reviews-Iglesia_Inmaculada_Concepcion-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317527-Reviews-Russian_Orthodox_Church_Iglesia_Apostolica_Ortodoxa_Rusa-Buenos_Aires_Capital_Fede.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7726888-Reviews-Plaza_de_la_Republica-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d12388920-Reviews-DWS-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d6023461-Reviews-Roque_Saenz_Pena_Avenue-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8746020-Reviews-Monumento_a_San_Martin-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8385806-Reviews-Estadio_Jose_Amalfitani-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317249-Reviews-Parque_Lezama-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d311768-Reviews-Basilica_y_Convento_de_San_Francisco-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8544851-Reviews-Embajada_de_Francia-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550256-Reviews-Eva_Peron_s_Tomb-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8544848-Reviews-Embajada_de_Brasil-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2302719-Reviews-El_Pensador-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8817576-Reviews-Iglesia_de_San_Ignacio_de_Loyola-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d312245-Reviews-El_Centro-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550507-Reviews-Pasaje_La_Defensa-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8476195-Reviews-Plaza_Intendente_Torcuato_de_Alvear-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8308166-Reviews-Parroquia_San_Nicolas_de_Bari-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9706077-Reviews-Plaza_del_Congreso-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7789718-Reviews-Parroquia_Nuestra_Senora_de_Guadalupe-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8617145-Reviews-Monumento_de_los_Espanoles-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2535828-Reviews-Piramide_de_Mayo_May_Pyramid-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4943109-Reviews-Palacio_Pizzurno-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8449359-Reviews-Basilica_Maria_Auxiliadora_y_San_Carlos-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7736048-Reviews-Plaza_Vicente_Lopez_y_Planes-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317293-Reviews-La_Chacarita_Cemetery-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4743451-Reviews-Congregacion_Israelita_de_la_Republica_Argentina-Buenos_Aires_Capital_Federal_Dis.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550505-Reviews-Plaza_Lavalle_Lavalle_Square-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d312246-Reviews-Carlos_Gardel_Statue-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d1520607-Reviews-Convento_de_San_Ramon-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7249721-Reviews-Parque_Avellaneda-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7909390-Reviews-Iglesia_San_Miguel_de_Arcangel-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d312274-Reviews-Academia_Nacional_del_Tango-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317732-Reviews-Plaza_Italia-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550624-Reviews-Centro_Cultural_Islamico-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4055419-Reviews-Museo_Santa_Felicitas-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4757001-Reviews-Aduana_de_Buenos_Aires-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8692809-Reviews-Monumento_Ecuestre_al_General_Manuel_Belgrano-Buenos_Aires_Capital_Federal_Distri.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4689686-Reviews-Basilica_de_Nuestra_Senora_del_Socorro-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8745937-Reviews-Monumento_a_Combatientes_de_Malvinas-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8549400-Reviews-Libreria_De_Avila-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550651-Reviews-Farmacia_De_la_Estrella_Homeopatia-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4945470-Reviews-Puente_Transbordador_Nicolas_Avellaneda-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8791001-Reviews-Plaza_Alemania-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7895804-Reviews-Parque_Micaela_Bastidas-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8464523-Reviews-Monumento_a_Eva_Peron-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d313343-Reviews-Boedo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d10252141-Reviews-Plaza_Irlanda-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d3270562-Reviews-Diego_Armando_Maradona_Stadium-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d3478677-Reviews-MACBA_Museo_de_Arte_Contemporaneo_Buenos_Aires-Buenos_Aires_Capital_Federal_Distr.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8385812-Reviews-Estadio_Pedro_Bidegain-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2310534-Reviews-Edificio_La_Inmobiliaria-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8037101-Reviews-Basilica_Santa_Rosa_de_Lima-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9715072-Reviews-Galeria_Bond_Street-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d6352831-Reviews-Yuyu_Tango-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d550502-Reviews-Our_Lady_of_Rosario_Basilica-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9594126-Reviews-Basilica_Nuestra_Senora_de_la_Piedad-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8692802-Reviews-Santuario_Nuestra_Senora_de_Lourdes-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4556201-Reviews-Calle_Murillo-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8449557-Reviews-Plazoleta_San_Martin_de_Tours-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d6510240-Reviews-Casa_Minima-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d7640297-Reviews-Iglesia_Santa_Felicitas-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8471625-Reviews-Plaza_Bartolome_Mitre-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317178-Reviews-Calle_Balcarce-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d2158631-Reviews-Pasaje_Roverano-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8566939-Reviews-Monumento_a_Carlos_Pellegrini-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d10731031-Reviews-Plaza_Holanda-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9851941-Reviews-Basilica_de_San_Jose_de_Flores-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d9803653-Reviews-Calle_Lanin-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8464423-Reviews-Monumento_al_General_Carlos_Maria_de_Alvear-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d317669-Reviews-Catalinas_Norte-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8692840-Reviews-Edificio_First_National_Bank_of_Boston-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d4041691-Reviews-Dain_Usina_Cultural-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d12123647-Reviews-Patio_de_los_Lecheros-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8481701-Reviews-Monumento_de_Francia_a_la_Argentina-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8617197-Reviews-Colegio_Nacional_de_Buenos_Aires-Buenos_Aires_Capital_Federal_District.html',
    'https://www.tripadvisor.ca/Attraction_Review-g312741-d8775979-Reviews-Bolsa_de_Comercio_de_Buenos_Aires-Buenos_Aires_Capital_Federal_District.html'
  ]);
