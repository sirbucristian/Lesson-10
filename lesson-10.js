
var myCurrentAge = 23;
console.log('myCurrentAge-23');

console.log('FOR');
for (var i = 3; i <= 23; i +=  3) {
    console.log('loop_for =', i);
    if (i === 23) {
        break;
    }
}
alert('MyCurrentAge' + myCurrentAge);
console.log('While Do');
var j = 3;
while (j <= 23) {
    console.log('loop_while_do = ', j);
    j += 3;
    if (j >= 24) {
        break;
    }
}
alert('MyCurrentAge' + myCurrentAge);

console.log('Do While');
var k = 3;
do {
    console.log('loop_do_while = ', k);
    k += 3;
} while (k <= 23);
alert('MyCurrentAge' + myCurrentAge);

 var ar = ['3', '6', '9', '12', '15', '18', '21', '23'];
console.log('For-In Array')
 for (var l in ar) {
}
ar.forEach(function (a) {
    console.log('loop_ar = ', a);
})

var obj = {
    '3':  '',
    '6':  '',
    '9':  '',
    '12': '',
    '15': '',
    '18': '',
    '21': '',
    '23': '',
} 


alert('MyCurrentAge' + myCurrentAge);


console.log('For-In Object');
for (var o in obj) {
    console.log('loop_obj = ', o);
}
var x = {
    outerObject1: {
        innerObject: {
            '3' : 'KeyNr [0]',
            '6' : 'KeyNr [1]',
            '9' : 'KeyNr [2]',
            '12': 'KeyNr [3]',
            '15': 'KeyNr [4]',
            '18': 'KeyNr [5]',
            '21': 'KeyNr [6]',
        },
        innerObject2: {
            '23': 'MyAge',
        },
    },
    outerObject2: {
        innerObject2: {}
   }
}
for (var key in x) {
    console.log(' out key = ', key, ', outer value =', x[key]);

    for (var innerKey in x[key]) {
        console.log('innerkey = ', innerKey, ', inner value: ', x[key][innerKey])
    }
}
alert('MyCurrentAge' + myCurrentAge);