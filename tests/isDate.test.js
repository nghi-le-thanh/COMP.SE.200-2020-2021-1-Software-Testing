import isDate from '../src/isDate.js'
import chai from 'chai'

let expect = chai.expect;

describe('isDate test', () => {

    it('should return true if value is a Date object', () => {
        
        expect(isDate(new Date())).to.be.true;
        expect(isDate(new Date(2020, 11, 24, 10, 33, 30, 0))).to.be.true;
        expect(isDate(new Date(2020, 11, 24, 10, 33, 30))).to.be.true;
        expect(isDate(new Date(2020, 11, 24, 10, 33))).to.be.true;
        expect(isDate(new Date(2020, 11, 24, 10))).to.be.true;
        expect(isDate(new Date(2020, 11, 24))).to.be.true;
        expect(isDate(new Date(2020, 11))).to.be.true;
        expect(isDate(new Date(2020))).to.be.true;
        expect(isDate(new Date("October 13, 2014 11:13:00"))).to.be.true;
        
    });
    
    it('should return false if value is not a Date object', () => {
       
        expect(isDate('Mon April 23 2012')).to.be.false;
        expect(isDate(undefined)).to.be.false;
        expect(isDate(null)).to.be.false;
        expect(isDate(12)).to.be.false;
        expect(isDate('abc')).to.be.false;
        expect(isDate([1,2,3])).to.be.false;
        expect(isDate({'a':1})).to.be.false;
    });

});