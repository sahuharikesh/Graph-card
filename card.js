var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
 labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'],
 datasets: [{
     label:'Profit',
     backgroundColor: 'rgb(0, 99, 132)',
     borderColor: 'rgb(10, 60, 102)',
     data: [0, 10, 5, 2, 20, 30, 45]
 }]
},
});
//    second graph
var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx2, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
 labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'],
 datasets: [{
     label:'Profit',
     backgroundColor: 'rgb(0, 99, 132)',
     borderColor: 'rgb(10, 60, 102)',
     data: [0, 10, 5, 2, 20, 30, 45]
 }]
},

});
//    Third graph
var ctx3 = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx3, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
 labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July'],
 datasets: [{
     label:'Profit',
     backgroundColor: 'rgb(0, 99, 132)',
     borderColor: 'rgb(10, 60, 102)',
     data: [0, 10, 5, 2, 20, 30, 45]
 }]
},
});