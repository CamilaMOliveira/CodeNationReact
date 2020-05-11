const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function insertProductInfo (element, id, jsonData) {
	if(element.id == id) {

		let productInfo = {
			"name": element.name,
			"category": element.category
		}

		jsonData.products.push(productInfo);
		return jsonData;
	}
}

function setPromotionType (pants, shoes, bags, tshirts) {
	let num_categories = 0;

	if(tshirts > 0) {
		num_categories++;
	}
	if(pants > 0) {
		num_categories++;
	}
	if(bags > 0) {
		num_categories++;
	}
	if(shoes > 0) {
		num_categories++;
	}

	/* Set promotion type according to the number of categories in the list */
	switch(num_categories) {
		case 1:
			return "SINGLE LOOK";
		case 2:
			return "DOUBLE LOOK";
		case 3:
			return "TRIPLE LOOK";
		case 4:
			return "FULL LOOK";
	}
}

function getShoppingCart(ids, productsList) {

	/* -----------------------------= Arrow Functions =------------------------------------------ */
	let calculatePrices = (element, id) => {
		if(element.id == id) {
			let foundPromoLook = 0;

			regularPrice += element.regularPrice;

			element.promotions.forEach(promo => {
				/* Let's get the price corresponding to our current promotion look */
				if(promo.looks.indexOf(jsonData.promotion) != -1) {
					/* If we have found the promotion look in the list, 
					let's update the total price with the promotion price */
					foundPromoLook = 1;
					totalPrice += promo.price;
				}
			});

			if(foundPromoLook == 0) {
			/* If we haven't found the promotion look in the list, 
				let's update the total price with the regular price */
				totalPrice += element.regularPrice;
			}

			/* Let's return so we can go straight to the next ID */
			return;
		}
	}

	let countCategories = (product) => {
		if(product.category === "PANTS") {
			pants++;
		} else if (product.category === "T-SHIRTS") {
			tshirts++;
		} else if (product.category === "BAGS") {
			bags++;
		} else if (product.category === "SHOES") {
			shoes++;
		}
	}
	/* -------------------------------------= Variables =----------------------------------------------- */

	let idArray = ids;
	let jsonData = {};
	let products = [];
	/* Prices */
	let totalPrice = 0;
	let regularPrice = 0;
	let discountValue = 0;
	let discount = 0;
	/* Counters for the categories */
	let tshirts = 0;
	let pants = 0;
	let bags = 0;
	let shoes = 0;
	/* Promotion type */
	let promotion = '';

	/* Initializing JSON Object to contain array "products" */
	jsonData.products = products;

	idArray.map(id => {
		/* Insert product name and category */
		productsList.map(element => insertProductInfo(element, id, jsonData));
	});

	jsonData.products.forEach(product => countCategories(product));

	promotion = setPromotionType(pants, shoes, bags, tshirts);
	jsonData.promotion = promotion;

	idArray.map(id => {
		productsList.map(element => calculatePrices(element, id));
	});

	discountValue = regularPrice - totalPrice;
	discount = (discountValue*100)/regularPrice;

	/* Let's set the prices to have 2 digits after comma */
	jsonData.totalPrice = totalPrice.toFixed(2).toString();
	jsonData.discountValue = discountValue.toFixed(2).toString();
	/* Adding percentage symbol in the end of the discount value */
	jsonData.discount = discount.toFixed(2).toString()+"%";

	console.log(jsonData);

	return jsonData;
}

module.exports = { getShoppingCart };