let dataforecast = {};
dataforecast.dataPMS = function (data,kj,h){
	
	let arrayFrecuenciaPMS = data.map((a)=>{
    	while(h<=data.length){
    		band = 0
    		for (var j = 1; j  <= kj ; j++) {
    			band += data[h-j].Goals;
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

dataforecast.dataPMDA = function (pms,pmd,h,m){
	if(!m){
		m=1;
	}
	let arrayFrecuenciaPMDA=[];
	console.log(h);
	console.log(pmd.length);
	while(h <= pmd.length){
		a= (2 * pms[h]) - pmd[h];
		console.log(h);
		console.log(pmd);
		console.log(pms);
		b= (2 *  Math.abs(parseInt(pms[h]) - parseInt(pmd[h])))/(parseInt(pmd.length)-1);
		band = parseInt(a) + (parseInt(b) * parseInt(m));
		h++;
    	arrayFrecuenciaPMDA.push(band);
	}
    return arrayFrecuenciaPMDA;
}


dataforecast.TMAC = function (data){
	tmac = [];
	console.log(data);
  	for(var i = 1; i <= data.length-1; i++){

  		if(data[i-1].Goals	!=0){
  			tmac[i-1] = ((data[i].Goals / data[i-1].Goals) - 1) * 100;
  			console.log(tmac[i-1])
  		}else{
  			tmac[i-1]=0;
  		}
  	}
  	return tmac;
}


dataforecast.PTMAC = function (data,tmac){
  	ptmac = [];
  	for(var i = 2; i <= data.length-1; i++){
  		ptmac[i-2] = data[i].Goals + (data[i].Goals*(tmac[0]/100)) ;
  	}
  	return ptmac;
}

dataforecast.SE = function (data_s,data,f,pronostico,j,k){
	inicio=0;
	if (pronostico == "PTMAC") { inicio = 3; }
  	if (pronostico == "PS") { inicio = 2; }
  	if (pronostico == "PMS") { inicio = parseInt(k) + 1; }
  	if (pronostico == "PMD") { inicio = parseInt(j) + parseInt(k) + 1; }
  	if (pronostico == "PMDA") { inicio = parseInt(j) + parseInt(k) + 1; }
  	se = [];
	for (var i = inicio ; i <= data_s.length; i++) {
		se[i]= data_s[i-1]+(parseFloat(f)*(((data[i-1].Goals)-data_s[i-1])))
	}
  	return se;
}

dataforecast.PS = function (data){	
	band = 0;
	let arrayFrecuenciaPS = data.map((a,index)=>{
		band += a.Goals;
		console.log(a)
		return band/index;
	})

	return arrayFrecuenciaPS;
}


module.exports=dataforecast;