
var hours = [ '6am','7am','8am','9am','10am','11am',"12am",'1am',
'2am','3am','14am','5am',"6am",'am7','8am'];
var Seattle = {
    name : "Seattle" , 
    min1: 23,   
    max1: 65,
    avrCoocHour : 6.3 ,
    randomCostumerArray : [],
    avgSalesHoure : [] ,  
    getRandomCustomNum :  function () {
        for(var i =0 ; i < hours.length ; i++)
        {
             this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
             this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
        }
        console.log(this.randomCostumerArray)
        console.log(this.avgSalesHoure)
    }
};
var Tokyo = {
    name : "Tokyo" , 
    min1: 3,    
    max1: 24,
    avrCoocHour : 1.2 ,
    randomCostumerArray : [],
    avgSalesHoure : [] ,  
    getRandomCustomNum :  function () {
        for(var i =0 ; i < hours.length ; i++)
        {
             this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
             this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
        }
        console.log(this.randomCostumerArray)
        console.log(this.avgSalesHoure)
    }
};
var Dubai = {
    name : "Dubai" , 
    min1: 11,   
    max1: 38,
    avrCoocHour : 3.7 ,
    randomCostumerArray : [],
    avgSalesHoure : [] ,  
    getRandomCustomNum :  function () {
        for(var i =0 ; i < hours.length ; i++)
        {
             this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
             this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
        }
        console.log(this.randomCostumerArray)
        console.log(this.avgSalesHoure)
    }
};
var Paris = {
    name : "Paris" , 
    min1: 20,   
    max1: 38,
    avrCoocHour : 2.3 ,
    randomCostumerArray : [],
    avgSalesHoure : [] ,  
    getRandomCustomNum :  function () {
        for(var i =0 ; i < hours.length ; i++)
        {
             this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
             this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
        }
        console.log(this.randomCostumerArray)
        console.log(this.avgSalesHoure)
    }
};
var Lima = {
    name : "Lima" , 
    min1: 2,    
    max1: 16,
    avrCoocHour : 4.6 ,
    randomCostumerArray : [],
    avgSalesHoure : [] ,  
    getRandomCustomNum :  function () {
        for(var i =0 ; i < hours.length ; i++)
        {
             this.randomCostumerArray.push(getRandomNum(this.min1,this.max1))
             this.avgSalesHoure[i] =Math.ceil( 6.3 * this.randomCostumerArray[i] )
        }
        console.log(this.randomCostumerArray)
        console.log(this.avgSalesHoure)
    }
};
console.log(Seattle.getRandomCustomNum());
console.log(Tokyo.getRandomCustomNum());
console.log(Dubai.getRandomCustomNum());
console.log(Paris.getRandomCustomNum());
console.log(Lima.getRandomCustomNum());

function getRandomNum(min , max ) {
    minRan = Math.ceil(min);
    maxRan = Math.floor(max);
    return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
}
// console.log(getnum)
var container = document.getElementById('container');
console.log(Seattle.getRandomCustomNum());
console.log(Tokyo.getRandomCustomNum());
function getRandomNum(min , max ) {
    minRan = Math.ceil(min);
    maxRan = Math.floor(max);
    return Math.floor(Math.random() * (maxRan - minRan)) + minRan;
}
// console.log(getnum)
var container = document.getElementById('container');
printSales(hours,Seattle);
printSales(hours,Tokyo);
printSales(hours,Dubai);
printSales(hours,Paris);
printSales(hours,Lima);
function printSales(hours , obj) {
    var SubTitle = document.createElement('h3');
    SubTitle.textContent=obj.name; 
    container.appendChild(SubTitle);
    var list = document.createElement('ul');
    container.appendChild(list);
     
     var arr = obj.avgSalesHoure;
    var total =0 ; 
    for (let index = 0; index < hours.length; index++) {
        total = total +  arr[index];
        var listItem = document.createElement('li'); 
        listItem.textContent = hours[index]  + " : " + arr[index] + " Cookies" ; 
        list.appendChild(listItem) ; 
    }
    var listItemTotal = document.createElement('li'); 
        listItemTotal.textContent = "Total"  + " : " + total + " Cookies" ; 
        list.appendChild(listItemTotal) ; 
}


