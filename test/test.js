var assert = require('assert');
var request = require('../request-promise')();
var expect = require('chai').expect;
let model = require('../model/model.js')();
// let tunnel = require('tunnel-ssh');
// let url = 'http://localhost:7357/';
let url = 'http://9a335c32.ngrok.io/';


describe('Array', ()=>{
  describe('#indexOf()',()=>{
    it('should return -1 when the value is not present', ()=>{
	assert.equal([1,2,3].indexOf(4),-1);
    });
  });
});
describe('is string', ()=>{
  describe('#indexOf()',()=>{
    it('should return -1 when the value is not present', ()=>{
	expect('jilan inas').to.be.a('string');
    });
  });
});

describe('API / ', ()=>{
	it('should return object with all true',async()=>{
		
		let res = await request.get(url);
		let response = JSON.parse(res.res.body);
		
		expect(response).to.have.property("response");
		expect(response).to.have.property("statusCode");
		expect(response.response).to.include('o');
		}
	);
});

describe('API /user', ()=>{
	it('should have username string , id integer and status with boolean',async	()=>{
		let res = await request.get(url+'user')
		console.log(res.res.body);
		let response = JSON.parse(res.res.body);	
			
			expect(model.getId(response.data)).to.be.a('number');
			expect(model.getUsername(response.data)).to.be.a('string');
			expect(model.getName(response.data)).to.be.a('string');
			expect(model.getStatus(response.data)).to.be.a('boolean');
			expect(model.getName(response.data)).to.include('dimas');		
		}
	);
});	

	

