import html from '../cores.js';

function TodoItem({ title, completed }) {
  return html`
    <li class="${completed && 'completed'}">
      <div class="view">
        <input class="toggle" type="checkbox" ${completed && 'checked'} />
        <label>${title}</label>
      </div>
      <input class="edit" value="${title}" />
    </li>
  `;
}

export default TodoItem;
