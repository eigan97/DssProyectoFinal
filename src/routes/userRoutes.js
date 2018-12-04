const data = require('../models/user');
const forecastLibrary = require('../function/forecastLibrary');

module.exports = function (app) {
	app.get('/',(req, res)=>{
		data.getData((err,data)=>{
			kj = req.query.k;
			j = req.query.j;
			
			switch(req.query.pronostico) {
			    case 'PMS':
			        console.log('PMS')
			        h=kj;
			        let arrayPMS = forecastLibrary.dataPMS(data,kj,h)
			        res.status(200).json(arrayPMS);
			        break;
			    case 'PMD':
			        console.log('PMD')
			        hj=j;
			        hkj=kj;
			        let PMS = forecastLibrary.dataPMS(data,kj,hkj)
			        let PMD = forecastLibrary.dataPMD(PMS,kj,j,hj)
			        res.status(200).json(PMD);
			        break;
			    case 'PMDA':
			        console.log('PMDA')
			        hkj=kj;
			        hj=j;
			        hkjj=parseInt(j)+parseInt(kj);
			        
			        m = req.query.m;
			        
			        let PMS_PMDA = forecastLibrary.dataPMS(data,kj,hkj)
			        let PMD_PMDA = forecastLibrary.dataPMD(PMS_PMDA,kj,j,hj)

			        // let PMDA = forecastLibrary.dataPMDA(PMS_PMDA,PMD_PMDA,hkjj,m)
			        //res.status(200).json(PMDA);
			        break;
			    case 'TMAC':
			        console.log('TMAC')
			        hkj=kj;

			        let PMS_TMAC = forecastLibrary.dataPMS(data,kj,hkj)
			        let TMAC = forecastLibrary.TMAC(PMS_TMAC)

			        res.status(200).json(TMAC);
			        break;
			    case 'PTMAC':
			        console.log('PTMAC')
			        let PMS_TMAC = forecastLibrary.dataPMS(data,kj,hkj)
			        let TMAC_PTMAC = forecastLibrary.TMAC(PMS_TMAC)
			        let PTMAC = forecastLibrary.PTMAC(data,TMAC_PTMAC)
			        res.status(200).json(PTMAC);
			        break;
			    case 'SE':
			        console.log('SE');
			        
			        res.status(200).json(SE);
			        break;
			    default:
			        console.log('PS')
			        res.status(200).json(PS);
			      	break;
			}
		});
	})
}