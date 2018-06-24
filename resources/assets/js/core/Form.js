import Errors from './Error'
import axios from 'axios';

class Form {

	constructor(data) {
		this.originalData = data;

		for (let field in data) {
			this[field] = data[field]

			this.errors = new Errors();
		}
	}

	data() {

		let data = {};

		for(let property in this.originalData){

			data[property] = this[property];


		}

		// let data = Object.assign({}, this);
		//
		//
		// delete data.originalData;
		// delete data.errors;

		return data;
	}


	reset() {
		for (let filed in this.originalData) {
			this[filed] = ''
		}
	}


	submit(requestType, url) {
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(
					response => {
						this.onSuccess(response.data);

						resolve(response.data);

					})
				.catch(
					error => {
						this.onFail(error.response.data);

						reject(error.response.data);
					})
		});

	}

	onSuccess(data) {
		alert(data.message);
		this.errors.clear();

		this.reset();
	}

	onFail(errors) {
		this.errors.record(errors);
	}

}

export default Form;