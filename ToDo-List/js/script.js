const itemList = [];
const textTheList = document.querySelector('#textTheList');
const btnAddToList = document.querySelector('#btnAddToList');
const form = document.querySelector('#userInput');
const clearText = () => textTheList.innerText = 'kjhk';
let position = -1;
form['inputItem'].addEventListener('change', function(e){

   console.log(this.value);
});
 form.addEventListener('submit', (e)=>{
    e.preventDefault();
   itemList.push(e.target[0].value);
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
      console.log('Du klickade på ' + event.target.textContent);
      
      // Det är något i den här koden som gör att positionen får fel värde (endast)
      // första gången man trycker på något i listan. Efter första gången funkar det bra
      // (Kolla konsollen för att se det konstiga beteendet)
      let item = event.target.textContent;
      position = itemList.indexOf(item)
      console.log('Item' + item + ' har position ' + position + ' i arrayen');


      // Jag gjorde en fullösning så nu går det att ta bort saker från listan...
      // Den börjar ta bort först andra gången man klickar på den item dock, när 'position'
      // inte längre är -1
      if (position > -1){
         itemList.splice(position, 1);
      }      

   }





   textTheList.innerHTML = ('<ul>');
   for (let i = 0; i < itemList.length; i++) {
      textTheList.innerHTML += (`<li>${i, itemList[i]}</li>`);
   }

   textTheList.innerHTML += ('</ul>');

 });