const _ = require('lodash');
const dbs = [
    {name: 'RethinkDb', hipsterFeatures: ['Streams']},
    {name: 'CouchDb', hipsterFeatures: ['Distributed db']},
    {name: 'Couchbase', hipsterFeatures: ['Faster couch']},
    {name: 'Aerospike', hipsterFeatures: ['SSD optimized']},
    {name: 'Postgres', hipsterFeatures: ['DevOps approved']},
    {name: 'MongoDb', hipsterFeatures: ['Such speed']},
    {name: 'Postgres', hipsterFeatures: ['DevOps approved']},
    {name: 'Redis', hipsterFeatures: ['Fast cache']},
    {name: 'ElasticSearch', hipsterFeatures: ['Data lake']}
];
const thisWeekDb = _.sample(dbs);
const because = _.sample(thisWeekDb.hipsterFeatures).toLowerCase();
console.log(`This week we use ${thisWeekDb.name}, because having a ${thisWeekDb.hipsterFeatures} is crucial to our business.`);
