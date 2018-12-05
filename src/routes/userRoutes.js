const data = require('../models/user');
const forecastLibrary = require('../function/forecastLibrary');

module.exports = function (app) {
	app.get('/Queretaro',(req, res)=>{
		data.getDataQueretaro((err,data)=>{
			kj = req.query.k;
			j = req.query.j;
			pronostico = req.query.pronosticose
			f = req.query.f
			
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

			        let PMDA = forecastLibrary.dataPMDA(PMS_PMDA,PMD_PMDA,hkjj,m)
			        res.status(200).json(PMDA);
			        break;
			    //revisar que datos le vamos a enviar ps,pms,frecuencia,pmd, pmda
			    case 'TMAC':
			        console.log('TMAC')
			        hkj=kj;
			        let TMAC = forecastLibrary.TMAC(data)
			        res.status(200).json(TMAC);
			        break;
			    case 'PTMAC':
			        console.log('PTMAC')
			        let TMAC_PTMAC = forecastLibrary.TMAC(data)
			        let PTMAC = forecastLibrary.PTMAC(data,TMAC_PTMAC)
			        res.status(200).json(PTMAC);
			        break;

			    case 'SE':
			        console.log('SE');
			        data_serie=[];
			        if (pronostico == "PTMAC") { 
			        	let TMAC_PTMAC_SE = forecastLibrary.TMAC(data)
			        	let PTMAC_SE = forecastLibrary.PTMAC(data,TMAC_PTMAC_SE)
			        	data_serie = PTMAC_SE; 
			        }
					if (pronostico == "PS") { 
						let PS = forecastLibrary.PS(data)
						data_serie = PS;
					}
					if (pronostico == "PMS") { 
						h=kj;
						let arrayPMS_SE = forecastLibrary.dataPMS(data,kj,h)
						data_serie = arrayPMS_SE;
					}
					if (pronostico == "PMD") { 
						hj=j;
			        	hkj=kj;
			        	let PMS_PMD_SE = forecastLibrary.dataPMS(data,kj,hkj)
			        	let PMD_SE = forecastLibrary.dataPMD(PMS_PMD_SE,kj,j,hj)
			        	data_serie=PMD_SE;

					}
					if (pronostico == "PMDA") { 
						console.log('PMDA')
				        hkj=kj;
				        hj=j;
				        hkjj=parseInt(j)+parseInt(kj);
				        
				        m = req.query.m;
				        
				        let PMS_PMDA = forecastLibrary.dataPMS(data,kj,hkj)
				        let PMD_PMDA = forecastLibrary.dataPMD(PMS_PMDA,kj,j,hj)

				        let PMDA = forecastLibrary.dataPMDA(PMS_PMDA,PMD_PMDA,hkjj,m)
				        res.status(200).json(PMDA);

					}
			        let SE = forecastLibrary.SE(data_serie,data,f,pronostico,j,kj)
			        res.status(200).json(SE);
			        break;
			    default:
			        console.log('PS')
			        let PS = forecastLibrary.PS(data)
			        res.status(200).json(PS);
			      	break;
			}
		});
	});

	app.get('/America',(req, res)=>{
		data.getDataAmerica((err,data)=>{
			kj = req.query.k;
			j = req.query.j;
			pronostico = req.query.pronosticose
			f = req.query.f
			
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

			        let PMDA = forecastLibrary.dataPMDA(PMS_PMDA,PMD_PMDA,hkjj,m)
			        res.status(200).json(PMDA);
			        break;

			    case 'TMAC':
			        console.log('TMAC')
			        hkj=kj;
			        let TMAC = forecastLibrary.TMAC(data)
			        res.status(200).json(TMAC);
			        break;
			    case 'PTMAC':
			        console.log('PTMAC')
			        let TMAC_PTMAC = forecastLibrary.TMAC(data)
			        let PTMAC = forecastLibrary.PTMAC(data,TMAC_PTMAC)
			        res.status(200).json(PTMAC);
			        break;

			    case 'SE':
			        console.log('SE');
			        data_serie=[];
			        if (pronostico == "PTMAC") { 
			        	let TMAC_PTMAC_SE = forecastLibrary.TMAC(data)
			        	let PTMAC_SE = forecastLibrary.PTMAC(data,TMAC_PTMAC_SE)
			        	data_serie = PTMAC_SE; 
			        }
					if (pronostico == "PS") { 
						let PS = forecastLibrary.PS(data)
						data_serie = PS;
					}
					if (pronostico == "PMS") { 
						h=kj;
						let arrayPMS_SE = forecastLibrary.dataPMS(data,kj,h)
						data_serie = arrayPMS_SE;
					}
					if (pronostico == "PMD") { 
						hj=j;
			        	hkj=kj;
			        	let PMS_PMD_SE = forecastLibrary.dataPMS(data,kj,hkj)
			        	let PMD_SE = forecastLibrary.dataPMD(PMS_PMD_SE,kj,j,hj)
			        	data_serie=PMD_SE;

					}
					if (pronostico == "PMDA") { 

					}
			        let SE = forecastLibrary.SE(data_serie,data,f,pronostico,j,kj)
			        res.status(200).json(SE);
			        break;
			    default:
			        console.log('PS')
			        let PS = forecastLibrary.PS(data)
			        res.status(200).json(PS);
			      	break;
			}
		});
	})

}