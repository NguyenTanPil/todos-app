import html from '../cores.js';

function TodoItem({ title, completed }, index) {
  return html`
    <li class="${completed && 'completed'}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${completed && 'checked'}
          onchange="dispatch('toggle', ${index})"
        />
        <label>${title}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="${title}" />
    </li>
  `;
}

export default TodoItem;
