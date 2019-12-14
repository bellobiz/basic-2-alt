'use strict'

function chocholateBars() {
    const array = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
    console.log(array); // [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]
}

function addElementToBeginningOfArray(array, element) {
    console.log([element, ...array]); // [ 'foo', 1 ]
}

function addElementToEndOfArray(array, element) {
    console.log([...array, element]); // [ 1, 'foo' ]
}

function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element);
    console.log(array); // [ 1, 'foo' ]
}

function accessElementInArray(array, index) {
    console.log(array[index]); // 3
}

function desructivelyRemoveElementFromBeginningOfArray(array) {
    array.shift();
    console.log(array); // [ 2, 3 ]
}


function removeElementFromBeginningOfArray(array) {
    console.log(array.slice(1)); // [ 2, 3 ]
}

function destructivelyRemoveElementToEndOfArray(array) {
    array.pop();
    console.log(array); // [ 1, 2 ]
}

function removeElementToEndOfArray(array) {
    console.log(array.slice(0, 2)); // [ 1, 2 ]
}

(function () {
    chocholateBars();
    addElementToBeginningOfArray([1], 'foo');
    addElementToEndOfArray([1], 'foo');
    destructivelyAddElementToEndOfArray([1], 'foo');
    accessElementInArray([1, 2, 3], 2);
    desructivelyRemoveElementFromBeginningOfArray([1, 2, 3]);
    removeElementFromBeginningOfArray([1, 2, 3]);
    destructivelyRemoveElementToEndOfArray([1, 2, 3]);
    removeElementToEndOfArray([1, 2, 3]);
}()) 
