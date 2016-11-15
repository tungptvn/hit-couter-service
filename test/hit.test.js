'use strict';

let request = require('supertest');
let expect = require('expect.js');
let app = require('../app');
const url = "daksong.daknong.gov.vn";
describe('test ok', () => {
    it('ok?', (done) => {
        request(app)
            .get('/hit')
            .query({
                url: url
            })
            .expect(testhit)
            .end(done);
    });
});

function testhit(res) {
    expect(res.status).to.equal(200);
    expect(1).to.equal(1)// bac
}