"use strict";
const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');
const Promise = require('bluebird');

let db = low('db/data.json', {
    storage: fileAsync
})

/**
 * @constructor
 * 
 * @param {string} url
 */
function CouterMng(url) {
    if (typeof url !== 'string') {
        return TypeError('Invalid input Url');
    };
    let me = this;
    me.url = url;
}

var _insertUrl = function (url) {
    return new Promise((resolve, reject) => {
        var rs = db.get('data').chain().push({
            "url": url,
            "hit_total": 1
        }).last().value();
        console.log("inserted");
        resolve({
            "url": url,
            "hit_total": 1
        });
    });
}
var _get = function(url) {
    return new Promise((resolve, reject) => {
        let query = db.get('data').chain()
            .find({
                url: url
            }).value();
        if (typeof query == 'object') {
            resolve(query);
        } else {
            return Promise.resolve(_insertUrl(url));
        }
    });
};


CouterMng.prototype.hit = function () {
    let query = db.get('data').chain()
        .find({
            url: this.url
        }).value();
    if (typeof query == 'object') {
        let update = db.get('data')
            .find({
                url: this.url
            }).assign({
                hit_total: query.hit_total + 1
            }).value();
            return Promise.resolve(query);
    }
    else{
    return Promise.resolve(_get(this.url));
    }

};
module.exports = CouterMng;