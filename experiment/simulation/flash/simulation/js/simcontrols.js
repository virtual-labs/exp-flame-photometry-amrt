// JavaScript Document
window.onload=initialFunction;"initEvent";

/////////////////////////Declaring Arrays ////////////////////////////////////
var IonArr=new Array("potassium","sodium");
var FruitArr=new Array("Standard solution","Grapes","Guava","Lime","Lemon","Mango","Orange","papaya","Tomato","Apple");
var NameArr=new Array("StndSoln0","StndSoln1","StndSoln2","StndSoln3","Fruitimg");
var PpmKArr=new Array("0.00 ppm","2.88 ppm","6.88 ppm","0.68 ppm","1.16 ppm","3.23 ppm","2.37 ppm","3.60 ppm","2.92 ppm","1.95 ppm");
var PpmNaArr=new Array("0.00 ppm","3.00 ppm","3.00 ppm","1.00 ppm","2.00 ppm","4.00 ppm","0.00 ppm","4.00 ppm","6.00 ppm","2.00 ppm");
var stndArr=new Array("0.00 ppm","15.00 ppm","10.00 ppm","5.00 ppm");
////////////////////////Declaring variables/////////////////////////////////////

var sample=FruitArr[0];
var selectedCombo=IonArr[0];
var x;
var K;
var moveFlag=false;
var ImgPlaced=false;
var moveFlag1=false;
var ImgPlaced1=false;
var bgLeft;
var bgTop;
var seltedFrutId;
var Evtid;
var clicked=false;
var currentTraget;
///////////////////////////////////////////////////////////////////////////////
//Drag functiom
$(document).ready(function(){
	bgLeft=document.getElementById("bgCanvas").offsetLeft;
	bgTop=document.getElementById("bgCanvas").offsetTop;
	dragSample();
	
				   
});
// Fn for drag different samples
function dragSample(){
	for(var j=0;j<=3;j++){
		$( "#StndSoln"+j ).draggable({
			start : function(event, ui) {
				 ImgPlaced=false;	
				 moveFlag=true;
			}
		});
		$( "#StndSoln"+j ).draggable({
			stop : function(event, ui) {
				if (!ImgPlaced){
					 moveFlag=false;
					 if (((((this.offsetTop>=335)&& (this.offsetLeft>=327)) && ((this.offsetTop<=385)&&(this.offsetLeft<=400))) )){
						 this.style.left=bgLeft+434+"px";							
						 this.style.top=bgTop+375+"px";
						 ImgPlaced=true;
						 document.getElementById("thelist2").disabled=true;
						 document.getElementById("testId").disabled=true;
						 document.getElementById("plot").disabled=false;
						 document.getElementById("Start").disabled=true;
						 switch (this.id){
							case NameArr[0]://Distilled Water
								$( "#StndSoln1" ).draggable( 'disable' );
								$( "#StndSoln2" ).draggable( 'disable' );
								$( "#StndSoln3" ).draggable( 'disable' );
								currentTraget= document.getElementById("StndSoln0");
								break;
											
						    case NameArr[1]://Standard solution1
								$( "#StndSoln0" ).draggable( 'disable' );
								$( "#StndSoln3" ).draggable( 'disable' );
								$( "#StndSoln2" ).draggable( 'disable' );
								currentTraget= document.getElementById("StndSoln1");
								break;
								
							 case NameArr[2]://Standard solution2
							 	$( "#StndSoln0" ).draggable( 'disable' );
								$( "#StndSoln3" ).draggable( 'disable' );
								$( "#StndSoln1" ).draggable( 'disable' );
								currentTraget= document.getElementById("StndSoln2");
								break;
							 case NameArr[3]://Standard solution3
							 	$( "#StndSoln0" ).draggable( 'disable' );
								$( "#StndSoln2" ).draggable( 'disable' );
								$( "#StndSoln1" ).draggable( 'disable' );
								currentTraget= document.getElementById("StndSoln3");
								break;
						 }
							
					}
					else
					{
					   if(clicked==true){
							document.getElementById("thelist2").disabled=false;
					   }
					   document.getElementById("naflame").style.display="none";
		  			   document.getElementById("kflame").style.display="block";
					   document.getElementById("plot").disabled=true;
					   document.getElementById("Start").disabled=true;
					   document.getElementById("topValue").style.left=82+"px";
					   document.getElementById("topValue").innerHTML="138 IE";
					   document.getElementById("testId").disabled=false;
					   document.getElementById("instructionTxt").style.visibility="hidden";
					  
					  switch (this.id){
 
					   		case NameArr[0]://Distilled Water
								$( "#StndSoln1" ).draggable( 'enable' );
								$( "#StndSoln2" ).draggable( 'enable' );
								$( "#StndSoln3" ).draggable( 'enable' );
								this.style.left=bgLeft+60+"px";								
								this.style.top=bgTop+375+"px";
								break;
									
						  	case NameArr[1]://Standard solution1
							    $( "#StndSoln2" ).draggable( 'enable' );
								$( "#StndSoln0" ).draggable( 'enable' );
								$( "#StndSoln3" ).draggable( 'enable' );
								this.style.left=bgLeft+120+"px";								
								this.style.top=bgTop+375+"px";	
								break;
						
							case NameArr[2]://Standard solution3
							    $( "#StndSoln0" ).draggable( 'enable' );
								$( "#StndSoln3" ).draggable( 'enable' );
								$( "#StndSoln1" ).draggable( 'enable' );
								this.style.left=bgLeft+180+"px";								
								this.style.top=bgTop+375+"px";
								break;
							
							case NameArr[3]://Standard solution3
							    $( "#StndSoln0" ).draggable( 'enable' );
								$( "#StndSoln2" ).draggable( 'enable' );
								$( "#StndSoln1" ).draggable( 'enable' );
								this.style.left=bgLeft+240+"px";								
								this.style.top=bgTop+375+"px";
								break;
						
					    }
							  
					}
				}
			}
		});
	}
	for(var i=1;i<=9;i++){
		$( "#img"+i ).draggable({
			start : function(event, ui) {
				 ImgPlaced1=false;	
				 moveFlag1=true;
			}
		});
		$( "#img"+i ).draggable({
			stop : function(event, ui) {
				if (!ImgPlaced1){
					 moveFlag1=false;
					 if (((((this.offsetTop>=335)&& (this.offsetLeft>=327)) && ((this.offsetTop<=385)&&(this.offsetLeft<=400))) )){
						 
						 this.style.left=bgLeft+434+"px";							
						 this.style.top=bgTop+375+"px";
						 ImgPlaced1=true;
						 document.getElementById("thelist2").disabled=true;
						 document.getElementById("testId").disabled=true;
						 document.getElementById("plot").disabled=false;
						 document.getElementById("Start").disabled=true;
						 document.getElementById("plot").disabled=true;
				   		 document.getElementById("Start").disabled=false;
							
					}
					else
					{
					
					   if(clicked==true){
							document.getElementById("thelist2").disabled=false;
					   }
					   document.getElementById("naflame").style.display="none";
		  			   document.getElementById("kflame").style.display="block";
					   document.getElementById("plot").disabled=true;
					   document.getElementById("Start").disabled=true;
					   document.getElementById("topValue").style.left=82+"px";
					   document.getElementById("topValue").innerHTML="138 IE";
					   document.getElementById("testId").disabled=false;
					   document.getElementById("instructionTxt").style.visibility="hidden";
					   this.style.left=bgLeft+300+"px";								
				       this.style.top=bgTop+375+"px";
					  
							  
					}
				}
			}
		});
	}
}
//Loading functions
function initialFunction(){
	
	//Loading items to sample drop down
	for(var k=0; k<FruitArr.length; k++){
		document.lister.thelist2.options[k]=new Option(FruitArr[k], k);
	}
	document.getElementById("thelist2").disabled=true;
}


// Fn for Test combo....  
function testCombo(thelist1)
{
	selectedCombo=document.getElementsByName('thelist3').item(0).value;
	initialFunction();
	dragSample();
	if(sample==FruitArr[0]){// selecting standard solution
		$( "#imgBox" ).draggable( 'enable' );  
	 }else{// selecting fruit juice
		for(var p=0;p<=3;p++) {
			$( "#StndSoln"+p ).draggable( 'enable' ); 	
		}
		
	 }
	document.getElementById("img0").style.display="block";
	for(var i=1; i<FruitArr.length; i++){
		document.getElementById("img"+i).style.display="none";
    }
}

// Fn for Sample combo....  
function sampleCombo(thelist6)
{
	 x=document.getElementById("thelist2").selectedIndex;
	 K=document.getElementById("thelist2").options;
	 sample=K[x].text;
	 for(var i=0; i<FruitArr.length; i++){//Fruit juice displayed
		if(x==i){
		  document.getElementById("img"+i).style.display="block";
		}else{
		  document.getElementById("img"+i).style.display="none";
	    }
     }
	 dragSample();
	 if(sample==FruitArr[0]){// selecting standard solution
		$( "#imgBox" ).draggable( 'disable' );  
		for(var p=0;p<=3;p++) {
			$( "#StndSoln"+p ).draggable( 'enable' ); 
	 	}
	 }else{// selecting fruit juice
	 	for(var p=0;p<=3;p++) {
			$( "#StndSoln"+p ).draggable( 'disable' );
			 
		}
		$( "#imgBox" ).draggable( 'enable' ); 
	 }
}


// Fn to caliberate the machine..
function AspirateFN(){
	if(selectedCombo==IonArr[0]){  //Potasium (K+)
		  document.getElementById("naflame").style.display="none";
		  document.getElementById("kflame").style.display="block";
		  
	}
	else if(selectedCombo==IonArr[1]){ //Sodium (Na+)
		document.getElementById("naflame").style.display="block";
	    document.getElementById("kflame").style.display="none";
	  	
	 } 
	clicked=true;
	document.getElementById("instructionTxt").style.visibility="visible";
	document.getElementById("instructionTxt").innerHTML="Drag the sample to place it in the orginal position."
	document.getElementById("topValue").style.left=63+"px";
	if((ImgPlaced==true)&&(currentTraget.name==NameArr[0])){
	   document.getElementById("topValue").style.left=70+"px";
	   document.getElementById("topValue").innerHTML=stndArr[0];
	   document.getElementById("naflame").style.display="none";
	   document.getElementById("kflame").style.display="block";
	}
	else if((ImgPlaced==true)&&(currentTraget.name==NameArr[1])){
		document.getElementById("topValue").innerHTML=stndArr[1];
	}else if((ImgPlaced==true)&&(currentTraget.name==NameArr[2])){
	    document.getElementById("topValue").innerHTML=stndArr[2];	
	}else if((ImgPlaced==true)&&(currentTraget.name==NameArr[3])){
		document.getElementById("topValue").style.left=70+"px";
	    document.getElementById("topValue").innerHTML=stndArr[3];	
	}
	
}


// Fn to measure the concentation of the sample..
function StartFun(){
	document.getElementById("instructionTxt").style.visibility="visible";
	document.getElementById("instructionTxt").innerHTML="Drag the sample to place it in the orginal position."
	document.getElementById("topValue").style.left=70+"px";
	if(selectedCombo==IonArr[0]){  //Potasium (K+)
		  document.getElementById("naflame").style.display="none";
		  document.getElementById("kflame").style.display="block";
		  for(var i=0;i<FruitArr.length;i++){
				if(sample==FruitArr[i]){
					document.getElementById("topValue").innerHTML=PpmKArr[i];	//To display the ppm
				}
		  }
	}
	else if(selectedCombo==IonArr[1]){ //Sodium (Na+)
		document.getElementById("naflame").style.display="block";
	    document.getElementById("kflame").style.display="none";
	  	for(var j=0;j<FruitArr.length;j++){
			if(sample==FruitArr[j]){
				document.getElementById("topValue").innerHTML=PpmNaArr[j];	//To display the ppm	
				
			}
	  	}
	 } 
}

//Show tool tip of beakers..
function  showTooltip(e){
	     Evtid=e.id;
		document.getElementById("tooltip2").style.display="";		
		var leftPos=e.offsetLeft-20+"px";
		var topPos=e.offsetTop-33+"px";	
		document.getElementById("tooltip2").style.left=leftPos;
		document.getElementById("tooltip2").style.top=topPos;
		document.getElementById("tooltip").style.left=leftPos;
		document.getElementById("tooltip").style.top=topPos;
		if (e.id=="StndSoln1"){	
		    document.getElementById("tooltip").style.display="none";	
			document.getElementById("tooltip2").innerHTML="Standard solution 15 ppm";
			document.getElementById("tooltip2").style.paddingLeft=3+"px";
			
		}else if (e.id=="StndSoln2"){
			document.getElementById("tooltip").style.display="none";
			document.getElementById("tooltip2").innerHTML="Standard solution 10 ppm";
			document.getElementById("tooltip2").style.paddingLeft=3+"px";
		}else if (e.id=="StndSoln3"){
			document.getElementById("tooltip").style.display="none";
			document.getElementById("tooltip2").innerHTML="Standard solution 5 ppm";
			document.getElementById("tooltip2").style.paddingLeft=7+"px";
		}else if (e.id=="StndSoln0"){
			document.getElementById("tooltip").style.display="none";
			document.getElementById("tooltip2").innerHTML="Distilled water";
			document.getElementById("tooltip2").style.paddingLeft=28+"px";
		}else if (e.id=="pipe"){
			document.getElementById("tooltip2").style.display="none";
		    document.getElementById("tooltip").style.left=e.offsetLeft-25+"px";
		    document.getElementById("tooltip").style.top=e.offsetTop-27+"px";
			document.getElementById("tooltip").style.display="";		
			document.getElementById("tooltip").innerHTML="Capillary tube";
		}
		else if (e.id==Evtid){
			document.getElementById("tooltip2").style.display="none";
			document.getElementById("tooltip").style.display="";
			document.getElementById("tooltip").innerHTML="Fruit juice";
		}
		document.getElementById("tooltip2").style.fontWeight = "bold";
		document.getElementById("tooltip").style.fontWeight = "bold";
}


//Hide tool tip of beakers..
function  hideTooltip(){	
	document.getElementById("tooltip2").style.display="none";
	document.getElementById("tooltip").style.display="none";
}
// Fn to reset all events
function  resetFN(){	
	document.getElementById("thelist2").disabled=true;
	document.getElementById("testId").disabled=false;
	document.getElementById("plot").disabled=true;
	document.getElementById("Start").disabled=true;
	document.getElementById("testId").selectedIndex=0;
	document.getElementById("thelist2").selectedIndex=0;
	document.getElementById("naflame").style.display="none";
	document.getElementById("kflame").style.display="none";
}
