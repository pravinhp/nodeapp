var db = require('../config/db.js');

//const product = {};
const get = async() => {
		
		let query = "select * from pt_category_product c join pt_product p on c.product_code = p.product_code join pt_feature f on f.ref_code = p.product_code  where c.status = 'Active' and p.status = 'Active' and c.visible = 'Yes' and f.visible = 'c' and c.cat_code IN ('SSP','select') order by p.plan, p.months";
		return await execute(query);
		//console.log('out', data);
};

const execute = (query) => {

   		return new Promise((resolve, reject) => {
          	db.connection.query(query, function(err, rows, fields){
	           	if (err) throw err;
	           	resolve(JSON.parse(JSON.stringify(rows)));
           	});           
   		});
};


module.exports = {get};