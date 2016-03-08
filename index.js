#!/usr/bin/env node

const _ = require('lodash');
const dbs = [
    {name: 'RethinkDb', hipsterFeatures: ['Streams']},
    {name: 'CouchDb', hipsterFeatures: ['Distributed db']},
    {name: 'Couchbase', hipsterFeatures: ['Faster couch']},
    {name: 'Aerospike', hipsterFeatures: ['SSD optimized']},
    {name: 'Postgres', hipsterFeatures: ['DevOps approved db']},
    {name: 'MongoDb', hipsterFeatures: ['Such speed']},
    {name: 'Postgres', hipsterFeatures: ['DevOps approved']},
    {name: 'Redis', hipsterFeatures: ['Fast cache']},
    {name: 'ElasticSearch', hipsterFeatures: ['Data lake']}
];
const thisWeekDb = _.sample(dbs);
const noReason = _.flow(_.sample, _.toLower)(thisWeekDb.hipsterFeatures);
console.log(`This week we use ${thisWeekDb.name}, \
because having a ${noReason} is crucial to our business.`);

const img2ascii = require('img2ascii')({
    img: `${__dirname}/assets/snafu.gif`, cols: 90
}).pipe(process.stdout);
