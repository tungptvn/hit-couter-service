'use strict';

let request = require('supertest');
let expect = require('expect.js');
let app = require('../app');

describe('test ok', () => {   
    it('ok?', (done) => { 
        request(app)
            .get('/')
            .query()
            .expect(testok)
            .end(done);
    });
});

function testok(res) {
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('OK')
}