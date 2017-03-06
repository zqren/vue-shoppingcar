import axios from 'axios'

axios.get('/api/mobile/get', {
		params: {
			phone: 13120262747,
			key: '249ec2f31f88a7d1b31b44e160f1722d'
		}
	})
	.then(function(response) {
		console.log(JSON.stringify(response.data.result));
	})
	.catch(function(err) {
		console.log(111)
		console.log(err)
	});

const _products = {
	price: '',
	activeStyleUrl: '',
	activeColor: '',
	activeStorage: '',
	style: {
		'银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
		'深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
		'金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
		'玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
	},
	storage: {
		'16GB': 5288,
		'64GB': 6088,
		'128GB': 6888
	},
	isSelected: true
}

export default _products