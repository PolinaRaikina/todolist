document.getElementById('main_content__add').onclick = function (){

    var todoList = document.getElementById("main_content__block"); 
    var checkbox = document.createElement('input'); 
    checkbox.type = "checkbox"; 
    checkbox.id = "id"; 
    var label = document.createElement('label'); 
    label.htmlFor = "id"; 
    var item = document.getElementById('main_content__item').value;
    label.appendChild(document.createTextNode(item)); 
    todoList.appendChild(checkbox); 
    todoList.appendChild(label);
    document.getElementById('main_content__item').value = '';
  
};
var match = document.getElementById('id');
if (match%3){
    alert('yep');
}
//function isChecked () {
 //   var chbox;
 //   chbox=document.getElementById('id');
//    if (chbox.checked){
 //       console.log("Флажок установлен");
 //   }else{
 //       console.log("Флажок не установлен");
 //   }
//}
//isChecked();
document.getElementById('main_content__clear').onclick = function (){
    document.getElementById('main_content__block').innerHTML = '';
}