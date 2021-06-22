// Normal (Used Constructor & This)
/*
function person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
    this.sum = function(){
        return this.first+this.second;
    }
}

let kim = new person('kim', 10, 20);
kim.sum = function(){
    return 'modified : '+(this.first+this.second);
}
let lee = new person('lee', 10, 10);
lee.sum = function(){
    return 'modified : '+(this.first+this.second);
}
console.log(kim.sum());
console.log(lee.sum());
*/

/*
// Used Prototype
function person(name, first, second){
    this.name=name;
    this.first=first;
    this.second=second;
}
person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second);
}
let kim = new person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
let lee = new person('lee', 10, 10);
console.log(kim.sum());
console.log(lee.sum());
*/

/*
// Used Classes (babeljs.io)
class person{
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
    }
    sum(){
        return 'prototype : '+(this.first+this.second);
    }
}
let kim = new person('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
let lee = new person('lee', 10, 10);
console.log(kim);
console.log(lee);
console.log(kim.sum());
console.log(lee.sum());
*/

/*
// Inheritance
class person{
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
    }
    sum(){
        return this.first+this.second;
    }
}
class personPlus extends person{
    avg(){
        return (this.first+this.second)/2;
    }
}
let kim = new personPlus('kim', 10, 20);
kim.sum = function(){
    return 'this : '+(this.first+this.second);
}
let lee = new personPlus('lee', 10, 10);
console.log(kim);
console.log(lee);
console.log(kim.sum());
console.log(lee.sum());
console.log(kim.avg());
console.log(lee.avg());
*/

/*
// Used Super
class person{
    constructor(name, first, second){
        this.name=name;
        this.first=first;
        this.second=second;
    }
    sum(){
        return this.first+this.second;
    }
}
class personPlus extends person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third=third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}
let kim = new personPlus('kim', 10, 20, 30);
let lee = new personPlus('lee', 10, 10, 10);
console.log(kim.sum());
console.log(lee.sum());
console.log(kim.avg());
console.log(lee.avg());
*/

/*
// Prototype inheritance // Used __proto__
let superObj = {superVal:'super'}
let subObj = {subVal:'sub'}
subObj.__proto__ = superObj;
console.log(subObj.subVal);
console.log(subObj.superVal);
*/

/*
// Used Object.create() // __proto__보단 Object.create()를 사용해서 상속할 것
let superObj = {superVal:'super'}
let subObj = Object.create(superObj);
subObj.subVal = 'sub';
console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superVal = 'sub';
console.log(subObj.superVal);
*/
/*
// call & bind
const kim = {
    name:'kim',
    first:10,
    second:20
}
const lee = {
    name:'lee',
    first:10,
    second:10
}
function sum(prefix){
    return prefix + (this.first+this.second);
}
console.log(sum.call(kim, '=> '));
console.log(sum.call(lee, ': '));
let kimSum = sum.bind(kim, '-> ');
console.log(kimSum());
*/