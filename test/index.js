"use strict";

// Declare the variables used
import {expect} from 'chai';
import request from 'request';
import server from '../index';
import io from 'socket.io-client';

describe('Server', () => {
	it('serves the main route', () => {
		
    // Beforehand, start the server
    before((done) => {
        console.log('Starting the server');
        done();
    });

    // Afterwards, stop the server and empty the database
    after((done) => {
        console.log('Stopping the server');
        done();
    });

    // Test the index route
    it('should return a page with the title Dashboard', (done) => {
			request.get({ url: 'http://localhost:3000/' }, function (error, response, body) {
				expect(body).to.include('Dashboard');
				expect(response.statusCode).to.equal(200);
				expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
				done();
			});
		});
  });
});
