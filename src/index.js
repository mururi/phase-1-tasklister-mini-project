document.addEventListener("DOMContentLoaded", () => {
  form = document.getElementById('create-task-form');
  ul = document.getElementById('tasks');

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newTask = form.querySelector('#new-task-description').value;
    li = document.createElement('li');
    li.textContent = `${newTask}  `;
    button = document.createElement('button');
    button.textContent = 'X';
    button.addEventListener("click", (event) => {
      event.target.parentNode.remove();
    });
    li.appendChild(button);
    ul.appendChild(li);
    form.reset();
  })
});
