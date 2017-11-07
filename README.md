# elastic-toll
##### Requirements
- Elasticsearch running on port 9200
- Kibana
##### Install elasticsearch js lib with npm
```
npm install --save elasticsearch
```
##### Run configuration for index and mapping config
```
node configure.js
```
##### Run script to populate (change as you wish)
```
node configure.js
```
##### Import visualizations and dashboard
There is 2 json files that represent the visualization and dashboard.
At kibana's interface, import both files, remembering to import the visualizations first.


##### Deleting index (for testing purposes)
Use this cURL to delete the index with all its data
```
curl -XDELETE localhost:9200/toll
```
