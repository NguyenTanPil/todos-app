import html from '../cores.js';

function TodoItem({ title, completed }, index, editIndex) {
  return html`
    <li class="${completed && 'completed'} ${editIndex === index && 'editing'}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${completed && 'checked'}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('editTodo', ${index})">${title}</label>
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${title}"
        onkeyup="event.keyCode === 13 && dispatch('saveTodo', this.value.trim()) || event.keyCode === 27 && dispatch('cacelEdit')"
        onblur="dispatch('saveTodo', this.value.trim())"
      />
    </li>
  `;
}

export default TodoItem;
