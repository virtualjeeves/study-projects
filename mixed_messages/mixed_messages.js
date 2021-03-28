
const mashGenerator = {
    houseTypes: ['Single Family Detached House','Apartment','Bungalow','Cabin','Carriage House','Castle','Cave House','Chalet','Chateau','Condominium','Container Home','Co-Op','Cottage','Dome House','Fort','In-Law Suite','Mansion','Manor','McMansion','Mobile Home','Multi-Family','Palace','Tiny Home','Townhome','Tree House','Ranch-Style House','Underground House','Villa','Yurt','Houseboats'],
    carTypes: ['McLaren Speedtail','Pininfarina Battista','Mercedes-AMG Project One','Koenigsegg Jesko','Aston Martin Valkyrie','W Motors Lykan Hypersport','Pagani Huayra BC Roadster','Bugatti Chiron Pur Sport','Lamborghini Sian FKP 37','Bugatti Chiron Super Sport 300+','1978 AMC Concord','2013 Dodge Dart','Chrysler Sebring Convertible','Vauxhall Viva','Yugo','Pontiac Aztek','PT Cruiser','Ford Pinto','Austin Allegro','1978 Cadillac Sedan DeVille','Honda Fit','Honda Civic','Mazda3','Genesis G70','BMW 2-Series','Audi A4','Volkswagen GTI','Kia Rio','Chevrolet Sonic','Toyota Camry','Chevrolet Impala','Mercedes-Benz S-Class','Porsche Panamera','Toyota Avalon','Dodge Challenger','Mazda MX-5 Miata','Ford Mustang','MINI Cooper','Tesla Model S'],
    dogTypes: ['Labrador Retriever','German Shepherd Dog','Golden Retriever','French Bulldog','Bulldog','Poodle','Beagle','Rottweiler','German Shorthaired Pointer','Pembroke Welsh Corgi','Dachshund','Yorkshire Terrier','Australian Shepherd','Boxer','Siberian Huskie','Cavalier King Charles Spaniel','Great Dane','Miniature Schnauzer','Doberman Pinscher','Shih Tzu','Chesapeake Bay Retriever Mutt named Theo'],

    outputMessageGenerator() {
        const randHouse = Math.floor(Math.random() * Math.floor(this.houseTypes.length));
        const randCar = Math.floor(Math.random() * Math.floor(this.carTypes.length));
        const randDog = Math.floor(Math.random() * Math.floor(this.dogTypes.length));

        return `In 5 years' time, you will have live in a ${this.houseTypes[randHouse]}, drive a ${this.carTypes[randCar]}, and share your life with a ${this.dogTypes[randDog]}.`;
    },

    crystalBallGenerator() {
     return `    _...._\n  .'      '.\n / ***      \\         The Crystal Ball\n: **         :         says.........\n:            :        You don't really\n \\          /       believe in fortunes,\n  '-.,,,,.-'              do you?\n   _(    )_          Well here's yours\n  )        (             anyway...\n (          )\n  '-......-'`;
    }
}

console.log(mashGenerator.crystalBallGenerator());

setTimeout(function(){console.log('.....')},1.0 * 1000);
setTimeout(function(){console.log('....')},2.0 * 1000);
setTimeout(function(){console.log('...')},3.0 * 1000);
setTimeout(function(){console.log('..')},4.0 * 1000);
setTimeout(function(){console.log('.')},5.0 * 1000);
setTimeout(function(){console.log(mashGenerator.outputMessageGenerator())},6.0 * 1000);
setTimeout(function(){console.log('.')},7.0 * 1000);
setTimeout(function(){console.log('..')},8.0 * 1000);
setTimeout(function(){console.log('...')},9.0 * 1000);
setTimeout(function(){console.log('....')},10.0 * 1000);
setTimeout(function(){console.log('.....')},11.0 * 1000);