let dataforecast = {};
dataforecast.dataPMS = function (data,kj,h){
	
	let arrayFrecuenciaPMS = data.map((a)=>{
    	while(h<=data.length){
    		band = 0
    		for (var j = 1; j  <= kj ; j++) {
    			band += data[h-j].frecuencia;
    		}
    		h++;
        	return band/kj;
    	}
    })
    i=1;
	while(i<kj){
		popped = arrayFrecuenciaPMS.pop();
		i++
	}
    return arrayFrecuenciaPMS;
}

dataforecast.dataPMD = function (data,k,j,h){
	let arrayFrecuenciaPMD = data.map((a)=>{
    	while(h<=data.length){
    		band = 0
    		for (var y = 1; y <= j ; y++) {
    			band += data[h-y];
    		}
    		h++;
        	return band/j;
    	}
    })
    i=1;
	while(i<=j){
		popped = arrayFrecuenciaPMD.pop();
		i++
	}
    return arrayFrecuenciaPMD;
}

// dataforecast.dataPMDA = function (pms,pmd,h,m){
// 	if(!m){
// 		m=1;
// 	}
// 	let arrayFrecuenciaPMDA=[];
// 	while(h <= pmd.length){
// 		a= (2 * pms[h]) - pmd[h];
// 		console.log(h);
// 		console.log(pmd);
// 		console.log(pms);
// 		b= (2 *  Math.abs(parseInt(pms[h]) - parseInt(pmd[h])))/(parseInt(pmd.length)-1);
// 		band = parseInt(a) + (parseInt(b) * parseInt(m));
// 		h++;
//     	arrayFrecuenciaPMDA.push(band);
// 	}
//     return arrayFrecuenciaPMDA;
// }
dataforecast.TMAC = function (data){
	tmac = [];
  	for(var i = 1; i <= data.length-1; i++){
  		tmac[i-1] = ((data[i].frecuencia/data[i-1].frecuencia)-1)*100;
  	}
  	return tmac;
}


dataforecast.PTMAC = function (data,tmac){
  	ptmac = [];
  	for(var i = 2; i <= data.length-1; i++){
  		ptmac[i-2] = data[i].frecuencia + (data[i].frecuencia*(tmac[0]/100)) ;
  	}
  	return ptmac;
}



module.exports=dataforecast;