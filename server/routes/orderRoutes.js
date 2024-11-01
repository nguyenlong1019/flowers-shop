import express from 'express';
import querystring from "qs";
import crypto from "crypto";
const router = express.Router()
import {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} from '../controllers/orderController.js';
import {verifyToken, verifyOrderOwnership, verifyAdmin} from '../middlewares/authMiddleware.js';

router.get('/vnpay_return', function (req, res, next) {
    let vnp_Params = req.query;
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
        res.render('success', {code: vnp_Params['vnp_ResponseCode']})
    } else{
        res.render('success', {code: '97'})
    }
});

router.post('/', verifyToken, createOrder);
router.get('/', verifyToken, getAllOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id', verifyToken, updateOrder);
router.delete('/:id', verifyToken, deleteOrder);

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