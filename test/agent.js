'use strict';

/* jshint expr: true */

/**
 * Module dependencies.
 */

var should = require('should');

var consul = require('../lib');

/**
 * Tests
 */

describe('Agent', function() {
  before(function() {
    this.c = consul();
  });

  describe('checks', function() {
    it('should return local checks', function(done) {
      this.c.agent.checks(function(err, data) {
        should.not.exist(err);

        should(data).be.instanceOf(Object);

        done();
      });
    });
  });

  describe('services', function() {
    it('should return local services', function(done) {
      this.c.agent.services(function(err, data) {
        should.not.exist(err);

        should(data).be.instanceOf(Object);

        done();
      });
    });
  });

  describe('members', function() {
    it('should return members agent sees in cluster gossip pool', function(done) {
      this.c.agent.members(function(err, data) {
        should.not.exist(err);

        should(data).be.instanceOf(Object);

        done();
      });
    });
  });

  describe('self', function() {
    it('should return information about agent', function(done) {
      this.c.agent.self(function(err, data) {
        should.not.exist(err);

        should(data).be.instanceOf(Object);
        data.should.have.keys('Config', 'Member');

        done();
      });
    });
  });
});
