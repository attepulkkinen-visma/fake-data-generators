function getRandomFinnishStreetName() {
    const streetNames = [
        "A.I. Virtasen aukio",
        "Aadolfinkatu",
        "Aamitie",
        "Abrahaminkatu",
        "Adalmiinankatu",
        "Adelenpolku",
        "Adjutantinpolku",
        "Adolf Lindforsin tie",
        "Adolf Virginin polku",
        "Agnes Sjöbergin katu",
        "Agnetankuja",
        "Agronominkuja",
        "Emilienpolku",
        "Engelinaukio",
        "Ensi linja",
        "Erik Lönnrothin kuja",
        "Erik Palménin aukio",
        "Erkki Kivisen kuja",
        "Erkki Melartinin tie",
        "Hakaniemenranta",
        "Hakatie",
        "Hakkukuja",
        "Hakolahdenkuja",
        "Hakuninmaanpolku",
        "Hakunintie",
        "Halistentie",
        "Halkaisijantie",
        "Halkosuonkuja",
        "Halkosuonpolku",
        "Halkosuontie",
        "Hallainvuorentie",
        "Hallatie",
        "Halmetie",
        "Haltialan tila",
        "Hernematalankatu",
        "Hernesaarenranta",
        "Hertanmäenkatu",
        "Herttoniemen siirtolapuutarha",
        "Hiekkakiventie",
        "Hiekkalaiturinraitti",
        "Hietapellontie",
        "Hiomopolku",
        "Humikkalankuja",
        "Huvilakatu",
        "Hyttyspolku",
        "Härkätie",
        "Häyhäntie",
        "Iiluodontie",
        "Iivarinpolku",
        "Iivarintie",
        "Ilkantie",
        "Ilmalankatu",
        "Isonmastontie",
        "Isonnevantie",
        "Itäinen Alppirinne",
        "Itäinen Puistotie",
        "Jarrutie",
        "Jasmiinikuja",
        "Jatasalmentie",
        "Jauhokuja",
        "Jokikuja",
        "Jokiniementie",
        "Jokipellontie",
        "Joutsenraitti",
        "Juhani Ahon tie",
        "Juhannuspolku",
        "Juhannusruusunkuja",
        "Juhannustie",
        "Juhtakuja",
        "Juhtatie",
        "Jukolankuja",
        "Jukolantie",
        "Junailijanaukio",
        "Junailijankuja",
        "Karistimentie",
        "Karjakuja",
        "Karjalankatu",
        "Karjatanhuanpolku",
        "Karjuniitynkuja",
        "Karkaisukuja",
        "Karl Collanin kuja",
        "Karoliininpolku",
        "Karoliinintie",
        "Karpalokuja",
        "Karpalopolku",
        "Karpalotie",
        "Karppitie",
        "Karrinkuja",
        "Karrinpolku",
        "Karrintie",
        "Karstulantie",
        "Kartanomuseontie",
        "Kartanon puistotie",
        "Kartanonkaari",
        "Kartanonmetsäntie",
        "Kartanontie",
        "Kartanonvoudintie",
        "Karunantie",
        "Karvaamokuja",
        "Karvaamopolku",
        "Karviaismäenkuja",
        "Karviaismäenpolku",
        "Karviaismäki",
        "Karviaispolku",
        "Karviaisrinne",
        "Karviaistie",
        "Kasarmikatu",
        "Kasarmitori",
        "Kasemattikuja",
        "Kaskenpolttajantie",
        "Kaskiauranpolku",
        "Kaskisaarentie",
        "Kaskitie",
        "Kasperinkuja",
        "Kylävoudintie",
        "Kymintie",
        "Kyntelikuja",
        "Kynttiläkuja",
        "Kyntäjäntie",
        "Kypäräpolku",
        "Kytkintie",
        "Kyttäläntie",
        "Kytöpolku",
        "Kytösuontie",
        "Kyyhkyspolku",
        "Kyyluodontie",
        "Kärkikallionkuja",
        "Kärkitie",
        "Kärppäkuja",
        "Käskynhaltijantie",
        "Kätköpolku",
        "Kääpiöidenpolku",
        "Lapinrinne",
        "Lappeentie",
        "Lapuankatu",
        "Larin Kyöstin polku",
        "Larin Parasken polku",
        "Lasinpuhaltajantie",
        "Lasipalatsinaukio",
        "Laskumäki",
        "Latokartanonkaari",
        "Latokartanonkuja",
        "Latokartanonsilmukka",
        "Latokartanontie",
        "Latokartanontori",
        "Laukkaniementie",
        "Laukkasaarenkatu",
        "Laukkipäänpolku",
        "Laulurastaanpolku",
        "Laulurastaantie",
        "Merikorttikuja",
        "Merikorttitie",
        "Merimiehenkatu",
        "Merimiehenkuja",
        "Merimiehenpolku",
        "Meripellontie",
        "Meripihkapolku",
        "Meripihkatie",
        "Meripuistotie",
        "Merisatamanranta",
        "Merisotilaankatu",
        "Merisotilaankuja",
        "Mittakuja",
        "Moisiontie",
        "Moreenitie",
        "Mosaiikkitori",
        "Muhu",
        "Munkkirinne",
        "Munkkisaarenkatu",
        "Munkkisaarenlaituri",
        "Muonamiehentie",
        "Muotoilijankuja",
        "Nuotiokuja",
        "Nuottaniemi",
        "Nuppukuja",
        "Nyyrikintie",
        "Näkinkuja",
        "Näkinpolku",
        "Närekuja",
        "Näsinojankuja",
        "Näsinojantie",
        "Näyttelijänpolku",
        "Näyttelijäntie",
        "Näätäkuja",
        "Pakkaajankatu",
        "Palikkapolku",
        "Pallomäentie",
        "Palmsenpolku",
        "Palomäentie",
        "Palopirtintie",
        "Pasilanraitio",
        "Pasteurinkatu",
        "Paulankatu",
        "Paunakuja",
        "Pehtoorinpolku",
        "Peilitie",
        "Peipontie",
        "Pertunkuja",
        "Pertunpellonraitti",
        "Pertunpellontie",
        "Perustie",
        "Perämiehenkatu",
        "Peräsinpolku",
        "Peräsintie",
        "Pestikuja",
        "Pesäkuja",
        "Petaksenkuja",
        "Petaksentie",
        "Petter Wetterin polku",
        "Petter Wetterin tie",
        "Peukaloisentie",
        "Peuratie",
        "Pieksupolku",
        "Pienen Villasaaren kuja",
        "Pienen Villasaaren tie",
        "Pienenkarhunpolku",
        "Pieni Koivusaari",
        "Pieni Roobertinkatu",
        "Piennar",
        "Pietari Hannikaisen tie",
        "Pietari Kalmin katu",
        "Pietarinkatu",
        "Pietarinkuja",
        "Pietiläntie",
        "Pihapolku",
        "Pihatie",
        "Pihkapolku",
        "Pihkatie",
        "Pihlajamäentie",
        "Pihlajistontie",
        "Runonlaulajanpolku",
        "Ruusutarhantie",
        "Ryytikuja",
        "Saarankatu",
        "Saarenkatu",
        "Saarenmaankatu",
        "Salomonkatu",
        "Sampo Lappalaisen katu",
        "Sarkatie",
        "Sarpapolku",
        "Sarsantie",
        "Sarvastonkaari",
        "Satakielentie",
        "Sidetie",
        "Sienikuja",
        "Sihtikuja",
        "Siilikuja",
        "Siilitie",
        "Siimakuja",
        "Silkinkutojankuja",
        "Simppukarinkatu",
        "Sitratie",
        "Sitratori",
        "Siuntionkatu",
        "Sivakkapolku",
        "Sjöströmintie",
        "Skataniemi meriharju",
        "Skatanniemi",
        "Skutholminkaari",
        "Snellmaninaukio",
        "Solvikinkuja",
        "Somerikkokuja",
        "Somerontie",
        "Sompasaarenlaituri",
        "Sompasaari",
        "Sompionpolku",
        "Sompiontie",
        "Sopulirinne",
        "Tammisalontie",
        "Tammitie",
        "Tamppitie",
        "Tankomäenkuja",
        "Tanotorventie",
        "Tapaninkallio",
        "Taulutie",
        "Tavaststjernankatu",
        "Telekatu",
        "Televisioaukio",
        "Televisiokatu",
        "Toriraitti",
        "Torivoudintie",
        "Torkkelinkatu",
        "Torkkelinkuja",
        "Torpankuja",
        "Torppamäki",
        "Torpparinmäentie",
        "Trumpettitie",
        "Tuhatjalkainen",
        "Tuhkanummenkuja",
        "Tuhkanummentie",
        "Tuhkelo",
        "Tuhkimontie",
        "Tuhtotie",
        "Tuiskutie",
        "Tukkitie",
        "Vesuritie",
        "Vetehisenkuja",
        "Vetelintie",
        "Veteraanikuja",
        "Veturimiehenkatu",
        "Veturitallinkuja",
        "Veturitie",
        "Veturitori",
        "Victor Hartwallin polku",
        "Vienankatu",
        "Vierinkiventie",
        "Viertolantie",
        "Viertotien aukio",
        "Viestitie",
        "Vihdintie",
        "Viherniemenkatu",
        "Vihervarpusenpolku",
        "Vihervarpusentie",
        "Vihtakuja",
        "Vihtorinkuja",
        "Viidenrajantie",
        "Viides linja",
        "Viikin koetila",
        "Viikinginkuja",
        "Viikingintie",
        "Viikinkaari",
        "Viikinmäenraitti",
        "Viikinmäentie",
        "Viikinportinkatu",
        "Viikinportti",
        "Viikinraitti",
        "Viikintie",
        "Viikintori",
        "Viiktorpantie",
        "Viilarinkuja",
        "Viilarintie",
        "Viinenkuja",
        "Viinentie",
        "Viipurinkatu",
        "Viitankruununpolku",
        "Viitankruununtie",
        "Viitasuonkuja",
        "Viitasuontie",
        "Viittapolku",
        "Vikkullantie",
        "Viklakuja",
        "Vilhonkatu",
        "Vilhonvuorenkatu",
        "Vilhonvuorenkuja",
        "Viljakuja",
        "Viljatie",
        "Viljelijäntie",
        "Vilkastuksentie",
        "Vilkenintie",
        "Vilkmanintie",
        "Villanella",
        "Villingin kartano",
        "Villinginsalmenpolku",
        "Villinginsalmentie",
        "Villiruusunkuja",
        "Vilppulantie",
        "Vilsandinkuja",
        "Vinsentinkatu",
        "Violankatu",
        "Violankuja",
        "Vipusentie",
        "Virepolku",
        "Virnapolku",
        "Virolahdentie",
        "Vironkatu",
        "Virtaintie",
        "Virtarannankatu",
        "Virvakuja",
        "Virvatulentie",
        "Virvokekuja",
        "Visbynkatu",
        "Visbynkuja",
        "Viskaalintie",
        "Viskurikuja",
        "Vislauskuja",
        "Vitsaskuja",
        "Vitsaspolku",
        "Vitsastie",
        "Viulupolku",
        "Viulutie",
        "Voikukanpolku",
        "Voikukantie",
        "Voimalakatu",
        "Voimapolku",
        "Voirasia",
        "Volttikuja",
        "Von Daehnin katu",
        "Vormsi",
        "Voudintie",
        "Vouti Björnramin kuja",
        "Vuohikuja",
        "Vuokkiniemenkatu",
        "Vuokraajankuja",
        "Vuokraajanpolku",
        "Vuoksentie",
        "Vuolukiventie",
        "Vuorenjuurenpolku",
        "Vuorenjuuri",
        "Vuorenpeikontie",
        "Vuorensyrjä",
        "Vuorikatu",
        "Vuorikummunpolku",
        "Vuorikummuntie",
        "Vuorilahdenpolku",
        "Vuorilahdentie",
        "Vuorilinnakkeenpolku",
        "Vuorilinnakkeentie",
        "Vuorimiehenkatu",
        "Vuorimiehenpuistikko",
        "Vuorineuvoksentie",
        "Vuosaaren satamatie",
        "Vuosaarentie",
        "Vuotie",
        "Vuotori",
        "Vyökatu",
        "Vähäkaski",
        "Vähäniitynkuja",
        "Vähäniityntie",
        "Vähänkyröntie",
        "Vähäntuvantie",
        "Väinämöisenkatu",
        "Väinö Auerin katu",
        "Väinö Kanteleen katu",
        "Väinölänkatu",
        "Väinölänkuja",
        "Väisälänaukio",
        "Välikatu",
        "Välimerenkatu",
        "Välimetsänkuja",
        "Välimetsäntie",
        "Välipolku",
        "Välitalontie",
        "Välskärinkatu",
        "Vänrikki Stoolin katu",
        "Värikuja",
        "Värjärintie",
        "Värttinäkuja",
        "Värälänkuja",
        "Västäräkintie",
        "Väylänrinne",
        "Väylänsuu",
        "Vääksynkuja",
        "Vääksyntie",
        "Väärämäentie",
        "Walentin Chorellin tie",
        "Wallininkatu",
        "Wallininkuja",
        "Wavulinintie",
        "Wecksellintie",
        "Werner Wirénin tie",
        "Wihurinaukio",
        "Willebrandinkuja",
        "Willebrandintie",
        "Winqvistinkatu",
        "Wäinö Aaltosen tie",
        "Wäinönkuja",
        "Yhdistystie",
        "Yhdyskunnantie",
        "Yhteiskoulunaukio",
        "Yhteiskouluntie",
        "Yhteistuvankuja",
        "Ylerminkuja",
        "Ylerminpolku",
        "Ylermintie",
        "Yliopistonkatu",
        "Ylipalontie",
        "Yliskylän puistokatu",
        "Yliskylänkaari",
        "Yliskyläntie",
        "Yllästunturinkuja",
        "Yllästunturintie",
        "Ylä-Fallin kuja",
        "Ylä-Fallin polku",
        "Ylä-Fallin tie",
        "Ylä-Malmin raitti",
        "Ylä-Malmin tori",
        "Yläkaskenkuja",
        "Yläkaskentie",
        "Yläkivenpolku",
        "Yläkivenrinne",
        "Yläkiventie",
        "Ylänkötie",
        "Ylätuvanpolku",
        "Ylätuvantie",
        "Yrityspiha",
        "Yrjö-Koskisen katu",
        "Yrjölänkuja",
        "Yrjönkatu",
        "Yrttimaankuja",
        "Yrttimaantie",
        "Zaidankatu",
        "Äestäjänkuja",
        "Äestäjäntie",
        "Ähtärintie",
        "Äijänpolku",
        "Ässänrinne",
        "Äyripolku",
        "Örnvikinkuja",
        "Örskinkuja",
        "Örskintie"
    ];

    const randomIndex = Math.floor(Math.random() * streetNames.length);
    return streetNames[randomIndex];
}

return getRandomFinnishStreetName();
