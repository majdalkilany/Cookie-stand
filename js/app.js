'use strict'

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', "12pm", '1pm',
'2pm', '3pm', '14pm', '5pm', "6pm", '7pm','total' ];
var total=0;

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
for (var i = 0; i < hours.length; i++) {
        this.randomCostumerArray.push(getRandomNum(this.min1, this.max1))
        this.avgSalesHoure[i] = Math.ceil(6.3 * this.randomCostumerArray[i])
        total = total + this.avgSalesHoure[i]
}
        this.avgSalesHoure.push(total);

}
function getRandomNum(min , max ) {
   var  minRan = Math.ceil(min);
   var maxRan = Math.floor(max);
    return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
}

// 
// header
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
// footer
// 
var tableFooter = document.createElement('tfoot');
tablEl.appendChild(tableFooter);
//
// 
// rander footer 
Locations.prototype.printSales  = function(){
    var tableRow = document.createElement('tr')
    tablEl.appendChild(tableRow);
    var td1 = document.createElement('td')
    tableRow.appendChild(td1);
    td1.textContent = this.name;
    for( var i =0 ; i < hours.length; i++){

        if (i > 13){
            i++;
            var td1 = document.createElement('td')
            tableRow.appendChild(td1);
            td1.textContent = this.avgSalesHoure[15];
        }
        var td1 = document.createElement('td')
        tableRow.appendChild(td1);
        td1.textContent = this.avgSalesHoure[i];

    }
   


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
