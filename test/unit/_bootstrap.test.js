var request = require('../../lib/request');
var Client = require('../../lib/client');

beforeEach(function () {
    this.client = new Client();
    this.response = {};
    request.run = (function (data, callback) {
        this.request = data;
        callback(null, this.response);
    }).bind(this);
});

afterEach(function () {
    request.restore();
});
