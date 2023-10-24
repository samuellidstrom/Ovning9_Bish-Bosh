// let listLength = 100;
let listLength =100;
let bish = 3;
let bosh = 4;

const textBishBosh = document.querySelector('#textBishBosh');
const btnBishBosh = document.querySelector('#btnBishBosh');
const btnClearList = document.querySelector('#btnClearList');
const form = document.querySelector('#userInput');

const clearText = () => textBishBosh.innerText = '';


console.log(listLength, bish, bosh);

btnClearList.addEventListener('click', clearText);

// form['listLength'].addEventListener('focus',function(e){
//    console.log('fosus');
//    this.classList.add('focus');
// });

form['inputLength'].addEventListener('change', function(e){
   listLength = +this.value;
   console.log(listLength, bish, bosh);
})

form['inputBish'].addEventListener('change', function(e){
      bish = +this.value;
   console.log(listLength, bish, bosh);
})

form['inputBosh'].addEventListener('change', function(e){
   bosh = +this.value;
console.log(listLength, bish, bosh);
})


btnBishBosh.addEventListener('click', function(e){
   textBishBosh.innerHTML = ('');

   textBishBosh.innerHTML = ('Listans längd: ' + listLength + ' <b>|</b> Bish-talet: ' + bish + ' <b>|</b> Bosh-talet: ' + bosh + ' <br><br>');
    for (let i = 1; i < listLength+1; i++) {    
     if (i % bish == 0 && i % bosh == 0) {      
        console.log('Bish-Bosh');
        textBishBosh.innerHTML += ('Bish-Bosh <b>|</b> ');
     }
     
     else if (i % bish == 0) {
        console.log('Bish');
        textBishBosh.innerHTML += ('Bish <b>|</b> ');
     }

     else if (i % bosh == 0) {
        console.log('Bosh');
        textBishBosh.innerHTML += ('Bosh <b>|</b> ')
     }

     else {
        console.log(i);
        textBishBosh.innerHTML += (i + ' <b>|</b> ')
     }

     if (i % 10 == 0) {
      textBishBosh.innerHTML += ('<br>')
     }
 }
});



