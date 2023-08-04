
//2.Get 5 subject marks from user and find total,average.

let a=parseInt(prompt("enter your tamil mark"));
let b=parseInt(prompt("enter your english mark"));
let c=parseInt(prompt("enter your maths mark"));
let d=parseInt(prompt("enter your science mark"));
let e=parseInt(prompt("enter your computerscience mark"));


if(a+b+c+d+e){
sum=a+b+c+d+e;
console.log(sum);
console.log(sum/5);
}


//3.program to read temperature and display a suitable message according to temperature state below. Temp < 0 then Freezing weather Temp 0-10 then Very Cold weather Temp 10-20 then Cold weather Temp 20-30 then Normal in Temp Temp 30-40 then Its Hot Temp >=40 then Its Very Hot


let f=prompt("temperature");
if(f<0){
	
	console.log(" Freezing weather");
}
else if(f>0&&f<=10){	
	console.log(" Very Cold weather");
}
else if(f>10&&f<=20){
	
	console.log("Cold weather");
}
else if(f>20&&f<=30){
	
	console.log("Normal");
}
else if(f>30&&f<=40){
	
	console.log("Its Hot Temp");
}
else if(f>=40){
	
	console.log("Its Very Hot");
}


//4.The given Number is even or odd


let g=parseInt(prompt("enter a value"));
if(g%2==0){
	console.log("the given number is even");
}
else{
	console.log("the given number is odd");
}


//5.Sum of the two given integers. If the two values are same, then returns triple their sum.

let h=parseInt(prompt("enter first value"));
let i=parseInt(prompt("enter second value"));
 if(h==i){
	   sum=a+b;
	console.log(sum**3);
}
else{
	console.log(h+i);
}


//6.Check two given numbers and return true if one of the number is 50 or if their sum is 50.



let j=parseInt(prompt("enter first value"));
let k=parseInt(prompt("enter second value"));

if((j+k==50)||(j==50)||(k==50)){
	console.log("true");
}
else{
	console.log("false");
}


//7.Check whether a given positive number is a multiple of 3 or a multiple of 7.


let l=parseInt(prompt("enter a positive value"));

if(l%3==0){
	console.log("the given number is multiple by 3")
}
else if (l%7==0){
	console.log("the given number is multiple by 7")
}

// 8.Find the largest of three given integers.


let m=parseInt(prompt("enter the A value"));
let n=parseInt(prompt("enter the B value"));
let o=parseInt(prompt("enter the C value"));
if((m>n)&&(m>o)){
	console.log("M is greater");
}
else if((n>m)&&(n>o)){
	console.log("N is greater");
}
else{
	console.log("O is greater");
}

// 9.Find a value which is nearest to 100 from two different given integer values.


let x=parseInt(prompt ("enter the X value"));
let y=parseInt(prompt ("enter the Y value"));
let p=x-100;
let q=y-100;
if(x<y)
{
	console.log("p")
}
else{
	console.log("q");

}