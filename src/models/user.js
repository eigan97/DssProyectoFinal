//conectar a la base de datos 
const mysql = require('mysql');

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'forecastqro'
})

let dataModel= {};

dataModel.getDataQueretaro = (data)=>{
	if(connection){
		connection.query(
			'SELECT * FROM data',
			(err, rows)=>{
				if(err){
					throw err
				}else{
					data(null, rows)
				}
			})
	}
};

dataModel.getDataAmerica = (data)=>{
	if(connection){
		connection.query(
			'SELECT * FROM data2',
			(err, rows)=>{
				if(err){
					throw err
				}else{
					data(null, rows)
				}
			})
	}
};

module.exports= dataModel;