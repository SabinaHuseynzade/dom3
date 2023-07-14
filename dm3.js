// // 1)
// // //создайте новый элемент и добавьте его в блок ниже с помощью append
// // <div id='block'></div>

// let elem = document.createElement('div');
// document.getElementById('block').appendChild(elem);

// // 2)
// // //создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
// // <div id='block'></div>

// let elem2 = document.createElement('div');
// document.getElementById('block').insertBefore(elem2, document.getElementById('block').firstChild);
// // 3)
// // //удалите тег 'p' из скрипта ниже с помощью DOM метода
// // <div id='block'>
// //     <p>Some text</p>
// // </div>

// document.getElementById('block').removeChild(document.querySelector('#block p'));


// // 4)
// // //замените тег 'p' на <i>Hello World</i>
// // <div id='block'>
// //     <p>Some text</p>
// // </div>

// let elem3 = document.createElement('i');

// elem3.textContent = 'Hello World';

// document.getElementById('block').replaceChild(elem3, document.querySelector('#block p'));

// // 5)
// // //выведите в консоли коллекцию всех элементов с классом .block

// let elem4 = document.getElementsByClassName('block');
// console.log(elem4);

// // 6)
// // //выведите в консоли первый элемент из ранее созданной коллекции

// console.log(elem4[1]);

// // 7)
// // //выведите в консоли количество элементов в ранее созданной коллекции

// console.log(elem4.length);

// // 8)
// // //в чем разница между nodeList и HtmlCollection

// //nodeList может содержать узлы,а HtmlCollection может содержать только элементы. 

//1

function sevenBoom(array){
    let string = array.join("");
    if (string.includes("7")) {
        return "Boom!";
    } 
    else {
        return "There is no 7 in this massiv";
    }
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7, 8]));

//2

function mostExpensive(obj) {
    let newDec = Math.max.apply(null, Object.values(obj));
    return newDec;
}
  
console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}));

