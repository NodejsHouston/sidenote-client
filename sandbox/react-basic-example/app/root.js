import React from 'react';
import Sigwel from './sigwel.js';

export default class Root extends React.Component {
	constructor(props) {
		super(props);
		this.handlePostRef = this.handlePostRef.bind(this);
		this.handlePostTest = this. handlePostTest.bind(this);
		this.handleNext = this.handleNext.bind(this);
	}

	handlePostRef(){
		//console.log(this.refs.sigwel);
		//console.log(this.refs.sigwel.AddnewTrack());

		this.refs.sigwelref.PostRef('zxs','sigwel1@gmail.com',function(err,res){
			console.log(res.body);
		});
	}

	handlePostTest(){
		this.refs.sigweltest.NewTest();
		this.refs.sigweltest.PostTest('zxs','sigwel1@gmail.com',function(err,res){
			console.log(res.body);
		});

	}

	handleNext(){
		this.refs.sigwelref.AddNewRef();
		this.refs.sigwelref.clear();
	}

	render(){
		return(
			<div>
			<Sigwel ref='sigwelref' name="ref"/>
			
			<input type='button' onClick={this.handlePostRef} value="Submit Ref"/>
			<input type='button' onClick={this.handleNext} value="Next One"/>
			
			<Sigwel ref='sigweltest' name="test"/>
			<input type='button' onClick={this.handlePostTest} value="Submit Test"/>
			
			</div>
			);
	}	

}