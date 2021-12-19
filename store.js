import { createStore } from './cores.js';
import reducer from './reducers.js';

const { attach, connect, dispatch } = createStore(reducer);

window.dispatch = dispatch;

export { attach, connect };
