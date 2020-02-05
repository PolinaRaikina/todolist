var data = [];
var task = document.querySelector('.main_content__item');
var todoList = document.querySelector('.main_content_block');
var clearBtn = document.querySelector('.main_content__clear');
var addBtn = document.querySelector('.main_content__add');
var form = document.querySelector('.main_content');
function check(){
  if (task.value.length > 1){
    addBtn.disabled = false;
  }
};
function createItem(e) {
  var id = data.length;
  var li = document.createElement('li');
  var span = document.createElement('span');
  var checkbox = document.createElement('input');
  data.push(id);
  span.innerText = task.value;
  checkbox.type = 'checkbox';
  checkbox.task = id;
  li.appendChild(checkbox);
  li.appendChild(span);
  todoList.appendChild(li);
  task.value = '';
  addBtn.disabled = true;
};
function clearData(){
  var emptyArr = document.querySelectorAll('.main_content_block > li');
  emptyArr.forEach((e) => {
    e.remove();
  });
};
clearBtn.addEventListener('click',clearData);
addBtn.addEventListener('click', createItem);
task.addEventListener("keydown", check, true);
form.addEventListener('submit', function(e){
  e.preventDefault();
});