
let todoList=[
  {items:'Type Here Iteams', blankDate:'01/01/2024'}
];
displayIteams();

function addTodo(){
  let inputElement=document.querySelector('#todoInput');
  let dateElement=document.querySelector('#tododate');
  let todoItem=inputElement.value;
  let dueItem=dateElement.value;
  todoList.push({items:todoItem,blankDate:dueItem});
  inputElement.value='';
  dateElement.value='';
  displayIteams();
}

function displayIteams(){
  let displayElement=document.querySelector('.todo-Items');
  let newHtml='';
  for(let i=0; i<todoList.length; i++){
    let {items, blankDate}=todoList[i];
    newHtml +=`
      <span class="js-span1">${items}</span>
      <span class="js-span2">${blankDate}</span>
      <button id="js-btn" onclick="todoList.splice(${i},1); displayIteams();">Delete</button>
    `;
  }
  displayElement.innerHTML= newHtml;
}