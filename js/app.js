
'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', "12pm", '1pm',
'2pm', '3pm', '14pm', '5pm', "6pm", '7pm','total' ];
var total=0;
var locationsArray = [];

function Locations(name, min1 ,max1  , avrCoocHour) {
this.name = name;
// this.randomCostumerArray = randomCostumerArray;
// this.avgSalesHoure = avgSalesHoure;
this.min1 =  min1;
this.max1 =  max1 ;
this.avrCoocHour =  avrCoocHour;
this.randomCostumerArray = [];
this.avgSalesHoure= [];

}
Locations.prototype.getRandomCustomNum  = function(){
for (var i = 0; i < 14 ; i++) {
        this.randomCostumerArray.push(getRandomNum(this.min1, this.max1))
        this.avgSalesHoure[i] = Math.ceil(6.3 * this.randomCostumerArray[i])
        total = total + this.avgSalesHoure[i]
}
        this.avgSalesHoure.push(total);
        total = 0;

}
function getRandomNum(min , max ) {
   var  minRan = Math.ceil(min);
   var maxRan = Math.floor(max);
    return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
}

// 
// header//...................................................................
// 
// 
var table1 = document.getElementById('tableContainer');
var tablEl = document.createElement('table');
table1.appendChild(tablEl);

var tablehead = document.createElement('thead')
tablEl.appendChild(tablehead);
var th1 = document.createElement('th')
tablehead.appendChild(th1);
th1.textContent = "";

for(var i = 0; i < hours.length ;i ++){
    var th1 = document.createElement('th');
    tablehead.appendChild(th1);
    th1.textContent = hours[i];
    
}
// footer.................................................................................
// 

 //var totalPerHour =[0]
 

//
// 
// rander  .........................................................................
Locations.prototype.printSales  = function(){
    var tableRow = document.createElement('tr')
    tablEl.appendChild(tableRow);
    var td1 = document.createElement('td')
    tableRow.appendChild(td1);
    td1.textContent = this.name;
    for( var i =0 ; i < hours.length; i++){

       
        var td1 = document.createElement('td')
        tableRow.appendChild(td1);
        td1.textContent = this.avgSalesHoure[i];
        if (i > 13){
            i++;
            var td1 = document.createElement('td')
            tableRow.appendChild(td1);
            td1.textContent = this.avgSalesHoure[15];
        }
    }
    locationsArray.push(this);
   


    };

    var seattle = new Locations('seatle',23,65,6.3);
    seattle.getRandomCustomNum();
    seattle.printSales();
    
    var tokyo = new Locations('Tokyo',3,24,1.2);
    tokyo.getRandomCustomNum();
    tokyo.printSales();
    var dubai = new Locations('dubai',11,38,3.7);
    dubai.getRandomCustomNum();
    dubai.printSales();
    
    var paris = new Locations('paris',20,38,2.3);
    paris.getRandomCustomNum();
    paris.printSales();
    
    var lima = new Locations('lima',3,24,1.2);
    lima.getRandomCustomNum();
    lima.printSales();
    var  sum    = 0
    var  sumArr = [] ;

var tableFooter = document.createElement('tfoot');
tableFooter.setAttribute('id', 'remove');
tablEl.appendChild(tableFooter);
 var th1 = document.createElement('th')
 tableFooter.appendChild(th1);
th1.textContent = "total";
var Ssum = 0 ; 
for(var i = 0; i < hours.length  ;i++){

for (var j =0 ; j< locationsArray.length ; j++ ){
sum  = sum + locationsArray[j].avgSalesHoure[i] ;


} 

sumArr.push(sum);
sum = 0
    
        var th1 = document.createElement('th');
        tableFooter.appendChild(th1);
        th1.textContent =  sumArr[i];
    // else{
    //     sum[i]  = seattle.avgSalesHoure[i] + tokyo.avgSalesHoure[i] +paris.avgSalesHoure[i]+dubai.avgSalesHoure[i]
    //     +lima.avgSalesHoure[i] ;
    //      Ssum += sum[i] ;  
    //       var th1 = document.createElement('th');
    //       tableFooter.appendChild(th1);
    //       th1.textContent = sum[i];

    // }
     
    
  }

  
var newBranch = document.getElementById('Branch')
newBranch.addEventListener('submit' , function (event){
    event.preventDefault();

    console.log(event.target)
    var name = event.target.name.value;
    var min1 =  event.target.min1.value;
    var max1 =  event.target.max1.value ;
    var avrCoocHour =  event.target.avrCoocHour.value;
    var max1 =  event.target.avrCoocHour.value;
    var majd = new Locations(name,min1,max1,avrCoocHour)
    majd.getRandomCustomNum();
    majd.printSales();

var deletFooter = document.getElementById('remove')
tablEl.removeChild(deletFooter);
var newFooter = document.createElement('tfoot');
newFooter.setAttribute('id', 'remove');
tablEl.appendChild(newFooter);
 var th1 = document.createElement('th')
 newFooter.appendChild(th1);
th1.textContent = "total";
for(var i = 0; i < hours.length  ;i++){
    var th1 = document.createElement('th');
    newFooter.appendChild(th1);
    sumArr[i] = sumArr[i] + locationsArray[locationsArray.length - 1].avgSalesHoure[i];
    th1.textContent = sumArr[i];
    
}

}) 


  