'use strict';
var CouterMng = require('../../services/hit-counter-service');
module.exports = (req, res, next) => {
    let url = req.query.url;
    console.log('url:',url);
    let CounterManager = new CouterMng(url);
    CounterManager.hit().then(rs=>{
        res.send( rs);
    })
}