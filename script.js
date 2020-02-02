var todos = []
  var todo = document.querySelector('.main_content__item')
  var todoView = document.querySelector('.main_content_block')
  var clear = document.querySelector('.main_content__clear');
  document.querySelector('.main_content__add').addEventListener('click', function () {
      var id = todos.length
      todos.push(id)
      var li = document.createElement('li')
      var span = document.createElement('span')
      span.innerText = todo.value
      var checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      checkbox.todo = id
      li.appendChild(checkbox)
      li.appendChild(span)
      todoView.appendChild(li)
      todo.value = ''
  });
  clear.addEventListener('click', function (){
    document.querySelector('.main_content_block').innerHTML = '';
});