/**
 * @name Common util function module
 * @author SunSeekerX
 * @time 2019年6月19日23点06分
 */

module.exports = {
	// Remove left and right spaces
	trim: (str) => {
		console.log(uni);
		return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
	},

	// Check if the number is available
	isTel: (tel) => {
		return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(tel) ? true : false
	},

	// 检查是否是正确的银行卡号
	bankCardValidate: bankno => {
		if (bankno) {
			const lastNum = +bankno.substr(bankno.length - 1, 1);
			const first15Num = bankno.substr(0, bankno.length - 1);
			const newArr = [];
			for (let i = first15Num.length - 1; i > -1; i -= 1) {
				newArr.push(first15Num.substr(i, 1));
			}
			const arrJiShu = [];
			const arrJiShu2 = [];
			const arrOuShu = [];
			for (let j = 0; j < newArr.length; j += 1) {
				if ((j + 1) % 2 === 1) {
					if (parseInt(newArr[j], 10) * 2 < 9) {
						arrJiShu.push(parseInt(newArr[j], 10) * 2);
					} else {
						arrJiShu2.push(parseInt(newArr[j], 10) * 2);
					}
				} else {
					arrOuShu.push(newArr[j]);
				}
			}

			const jishuChild1 = [];
			const jishuChild2 = [];
			for (let h = 0; h < arrJiShu2.length; h += 1) {
				jishuChild1.push(parseInt(arrJiShu2[h], 10) % 10);
				jishuChild2.push(parseInt(arrJiShu2[h], 10) / 10);
			}

			let sumJiShu = 0;
			let sumOuShu = 0;
			let sumJiShuChild1 = 0;
			let sumJiShuChild2 = 0;
			let sumTotal = 0;
			for (let m = 0; m < arrJiShu.length; m += 1) {
				sumJiShu += parseInt(arrJiShu[m], 10);
			}

			for (let n = 0; n < arrOuShu.length; n += 1) {
				sumOuShu += parseInt(arrOuShu[n], 10);
			}

			for (let p = 0; p < jishuChild1.length; p += 1) {
				sumJiShuChild1 += parseInt(jishuChild1[p], 10);
				sumJiShuChild2 += parseInt(jishuChild2[p], 10);
			}
			sumTotal = parseInt(sumJiShu, 10) + parseInt(sumOuShu, 10) +
				parseInt(sumJiShuChild1, 10) + parseInt(sumJiShuChild2, 10);
			const k = parseInt(sumTotal, 10) % 10 === 0 ? 10 : parseInt(sumTotal, 10) % 10
			const luhn = 10 - k;
			if (lastNum === luhn) {
				return true;
			} else {
				return false
			}
		} else {
			return false
		}
	},

	// The following functions are used only in uni-app

	// Toast
	toast: (msg) => {
		uni.showToast({
			title: msg,
			mask: false,
			duration: 1500,
			icon: 'none'
		});
	},

	// Loading tips
	loading: (msg) => {
		let title = '请稍后...'
		if (msg) {
			title = msg
		}
		uni.showLoading({
			title: title,
			mask: true
		});
	},

	// Hide loading tips
	hideLoading: () => {
		uni.hideLoading()
	},

	// Network error
	networkError: () => {
		uni.showToast({
			title: 'Network error',
			mask: false,
			duration: 1500,
			icon: 'none'
		});
	},

	// Request error
	requestError: () => {
		uni.showToast({
			title: 'Request error',
			mask: false,
			duration: 1500,
			icon: 'none'
		});
	},

	// navigator
	navigator(url) {
		uni.navigateTo({
			url,
		});
	}
}
