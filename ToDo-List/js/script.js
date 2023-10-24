const itemList = [];
const textTheList = document.querySelector('#textTheList');
const btnAddToList = document.querySelector('#btnAddToList');
const form = document.querySelector('#userInput');

const clearText = () => textTheList.innerText = 'kjhk';

form['inputItem'].addEventListener('change', function(e){

   console.log(this.value);
});
 form.addEventListener('submit', (e)=>{
    e.preventDefault();
    itemList.unshift(e.target[0].value);
    e.target.reset();

      console.log(itemList);

      textTheList.innerHTML = ('<ul>');
      for (let i = 0; i < itemList.length; i++) {
         textTheList.innerHTML += (`
         <li>
         ${i, itemList[i]}
         
         </li>
         `);         
      }
      textTheList.innerHTML += ('</ul>');
 });

 textTheList.addEventListener('click', function(e){
   if (event.target.tagName === 'LI'){
      console.log('Du klickade på' + event.target.textContent);      
   }


   textTheList.innerHTML = ('<ul>');
   for (let i = 0; i < itemList.length; i++) {
      textTheList.innerHTML += (`<li>${i, itemList[i]}</li>`);
   }

   textTheList.innerHTML += ('</ul>');

 });