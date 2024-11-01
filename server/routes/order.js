import express from 'express';
import querystring from "qs";
import crypto from "crypto";
const router = express.Router()

router.get('/vnpay_return', function (req, res, next) {
    let vnp_Params = req.query;
    console.log(req.query);
    console.log(req.body);
    
    
    let secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);
    
    let tmnCode = 'DEND955G'
    let secretKey = 'KYNYU155OS08SSGNQXRQ0R0HQ1MG2C8O'

    let signData = querystring.stringify(vnp_Params, { encode: false });    
    let hmac = crypto.createHmac("sha512", secretKey);
    let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");     

    if(secureHash === signed){
        //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
        // res.render('success', {code: vnp_Params['vnp_ResponseCode']})
        // res.status(200).json({ message: 'Payment successful', code: vnp_Params['vnp_ResponseCode'] });
        res.redirect(`http://localhost:3000/payment-success?code=${vnp_Params['vnp_ResponseCode']}&orderId=${vnp_Params['vnp_TxnRef']}`);
    } else{
        // res.render('success', {code: '97'})
        // res.status(400).json({ message: 'Payment verification failed', code: '97' });
        res.redirect('http://localhost:3000/payment-failure?code=97');
    }
});

function sortObject(obj) {
	let sorted = {};
	let str = [];
	let key;
	for (key in obj){
		if (obj.hasOwnProperty(key)) {
		str.push(encodeURIComponent(key));
		}
	}
	str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}

export default router;