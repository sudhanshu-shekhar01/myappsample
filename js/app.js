// // console.dir(document); Examine document object
// //console.log(URL);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent ="hello";
// console.log(document.forms);
// console.log(document.links);

// Get element By Id

//console.log(document.getElementById('header-title'));
//var headertitle = document.getElementById('header-title');
//console.log(headertitle);
// headertitle.textContent ='Hello';
// headertitle.innerText= 'Good bye';
//console.log(headertitle.textContent); shows hidden text
//console.log(headertitle.innerText); does not shows hidden style content;
//headertitle.innerHTML= '<h3> Hello thia </h3>';
//headertitle.style.borderBottom= 'solid 3px #000';
//  var items =document.getElementsByClassName('list-group-item');
//  console.log(items);
//  console.log(items[0]);
//  items[1].textContent ="hello";
//  for (var i=0; i < items.length; i++)
//  {
//      items[i].style.backgroundColor ='yellow';
//  }

//  //items.style.backgroundColor = ''; gives error
// //queryselect//
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px Red';
// var imput = document.querySelector('input');
// imput.value ='Submit';

// var item =document.querySelector ('.list-group-item');
// item.style.color = 'Red';

// var li= document.getElementsByTagName ('li');
// for (var i=0; i < li.length; i++)
// {
//       li[i].style.backgroundColor ='Gray';
// }


//QuerySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector ('input'); //grab the first one
// input.value ='Hello World';
// var submit = document.querySelector('input[type= "Submit"]');
// submit.value ='Send';
// var item = document.querySelector('.list-group-item');
// item.style.backgroundColor = 'red';
// var lastItem =
// document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//Query SelectorAll
// var titles = document.querySelectorAll('.list-group-item');
// titles[0].textContent ='hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(i=0; i< odd.length; i++)
// {
//     odd[i].style.background ='grey';
// }

// var even = document.querySelectorAll('li:nth-child(even)');

// for(i=0; i< even.length; i++)
// {
//     even[i].style.background ='orange';
// }

// var bannerSkew = document.querySelector('.banner-skew');
// //console.log(bannerSkew);
// bannerSkew.style.background = ' white';

//Traversing The DomS

//var bannerSkew = document.querySelector('.banner-skew');
//parentnode 
//console.log(bannerSkew.parentNode);
// var itemlist =document.querySelector('#items');

//console.log(itemlist.parentElement);

//console.log(itemlist.parentNode);
//itemlist.parentNode.style.backgroundColor= 'red';


//console.log(itemlist.parentNode.parentNode);


//parentElement are almost same thing
//console.log(itemlist.childNodes);
//console.log(itemlist.children);
//itemlist.children[1].style.backgroundColor = 'Red';
// itemlist.firstChild.textContent ="Hello 2234";
// itemlist.firstElementChild.textContent ="hero";

//parentElement 
//console.log(itemlist.parentElement);

//childNodes
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor ='Red';

// //Firstchild
// console.log(itemlist.firstElementChild.textContent);
// itemlist.firstChild.textContent ="Hellow";
// itemlist.lastChild.textContent ="Wow";

//Nextsibbling
//var itemlist = document.querySelector('#items');
//console.log(itemlist.nextSibling);
/* //NextElementsibbling // one same level new element could be span or li
itemlist.nextSibling.textContent ="Why";
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color= 'green'; */
//create a div
// var newdiv = document.createElement ('div');
// newdiv.ClassName ='Hello';
// //Add Id
// newdiv.id ='Hello1';

// //Add attribute
// newdiv.setAttribute ('title' , 'Hello Div');

// var newdivText = document.createTextNode('Hello World');
// newdiv.appendChild(newdivText);

// var container1 =document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container1.insertBefore(newdiv ,h1);
// console.log (newdiv);
// newdiv.style.fontSize ='30px';

//firing two function simultaneously : 

// var button1 = document.getElementById('button').addEventListener
// ('click', function(){ console.log(123);
// });

// //or

// var button1 = document.getElementById('button').addEventListener
// ('click', buttonClick);



// function buttonClick(e)
// {
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // //client is for the windows
//     // console.log(e.clientX);

//     // //offset is for actual element

//     // //console.log(e.offsetX);
//     // console.log(e.offsetY);
//     //console.log(e.shiftKey);
//     console.log(e.ctrlKey);
// }

// var button = document.getElementById('button');
// // button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);
 
// function runEvent(e)
// {
//     console.log('Event Type: ' +e.type);
// }
var box = document.getElementById('box');
var output = document.getElementById('output');

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
box.addEventListener('mousemove', runEvent);
function runEvent(e)
{
    console.log("Event type: "+ e.type);
    output.innerHTML = '<h3> MouseX: ' +e.offsetX+ '</h3> <h3> MouseY: ' +e.offsetY+ ' </h3>';
    box.style.background ='rgb('+e.offsetX+','+e.offsetY+', 40 )';
}






