var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


function getPlate(){
    var str = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    while (str.length < 3) {
      str += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    str += "-";
    while (str.length < 8) {
        str += Math.floor(Math.random() * 9);
    }
    return str;
}

function getYear(){
    return 1980 + Math.floor(Math.random() * 38);
}

function getColor(){
    let colors = ['blue', 'red', 'yellow', 'white', 'black', 'green', 'purple', 'orange', 'gray', 'brown'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function getVehicle(){
    let vehicle;
    switch(Math.floor(Math.random() * 3) + 1 ){
        case 1:
            vehicle = {
                type: 'car',
                cost: 5
            }
            break;
        case 2:
            vehicle = {
                type: 'bike',
                cost: 2
            }
            break;
        case 3:
            vehicle = {
                type: 'truck',
                cost: 12
            }
            break;
    }

    vehicle.color = getColor();
    vehicle.year = getYear();
    vehicle.plate = getPlate();

    return vehicle;
}

function generateTicket(id){
    let vehicle = getVehicle();
    let toll = Math.floor(Math.random() * 10) + 1;
    
    client.index({  
        index: 'toll',
        type: 'ticket',
        id: id,
        body: {
            "toll": toll,
            "vehicle": vehicle.type,
            "color": vehicle.color,
            "cost": vehicle.cost,
            "year": vehicle.year,
            "plate": vehicle.plate,
            "date": (new Date()).getTime()
        }
    },function(err,resp,status) {
        console.log(resp);
    });
}

(function generator(){
    let id = 500;
    let randomLoop = function(){
        setTimeout(function(){
            generateTicket(id++);
            if(id < 1500){
                randomLoop();
            }
        }, Math.floor(Math.random() * 350) + 1);
    }

    randomLoop();
})();