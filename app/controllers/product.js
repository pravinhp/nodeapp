const productModel = require('../models/product.js');
const _ = require('lodash');


const get = async (req, res) => {
	let result = await productModel.get();
	let data = {
		products : {}
	}; 
	
	let ProductsArr = _.groupBy(result,'product_code');
	_.forEach(ProductsArr, function(arrData, productCode){
		var feature = [];
		
		_.forEach(arrData, function(val, key){
			feature.push({
				visible : val.visible,
                description : val.feature,
                sequence: val.sequence,
                country: val.country,
                icon: val.icon,
                applicable: val.applicable,
                tooltip: val.tooltip,
                new_badge: val.new_badge
			});
			
			data.products[productCode] = {
				basic : {
					product_code : val.product_code,
					name : val.name,
					description : val.description,
					plan : val.plan,
					duration_in_months : val.months,
					duration_in_days : val.days,
					sequence : val.sequence,
					visible : val.visible,
					category_code : val.cat_code
				},
				feature_calc : [
					{
						type : "contacts",
						value : val.contacts
					},
					{
						type : "emails",
						value : val.emailquota
					}
				],
				feature_description : feature
			};	
		});		
		
	});
	res.json({data});
};

module.exports = {get}