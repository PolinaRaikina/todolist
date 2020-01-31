var add = document.querySelector('.main_content__add');
var clear = document.querySelector('.main_content__clear');
var todoList = document.querySelector(".main_content_block"); 
add.addEventListener('click', function (){
    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 
    checkbox.id = "id"; 
    var label = document.createElement('label'); 
    label.htmlFor = "id"; 
    var item = document.querySelector('.main_content__item').value;
    label.appendChild(document.createTextNode(item)); 
    todoList.appendChild(checkbox); 
    todoList.appendChild(label);
    document.querySelector('.main_content__item').value = '';
  
});
function isChecked () {
  var chbox=document.getElementById('id');
    if (chbox.checked == true){
      console.log("Флажок установлен");
   }else{
       console.log("Флажок не установлен");
  }
}
isChecked();

clear.addEventListener('click', function (){
    document.querySelector('.main_content_block').innerHTML = '';
});