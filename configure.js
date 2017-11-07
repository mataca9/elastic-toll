var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


client.indices.create({
    index: "toll",
    body: {
        "mappings": {
            "ticket":{
                "properties":{
                    "toll": {"type": "integer"},
                    "vehicle": {"type": "keyword"},
                    "color": {"type": "keyword"},
                    "cost": {"type": "float"},
                    "year": {"type": "integer"},
                    "plate": {"type": "string"},
                    "date": {"type": "date"}
                }
            }
        }
    }
});
