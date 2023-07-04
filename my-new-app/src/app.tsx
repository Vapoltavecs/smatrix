import * as ReactDOM from 'react-dom/client';
import { GroupsProvider } from './providers/GroupsContext/GroupsContext';
import { Router } from './router/Router';

const rootElement = document.getElementById("root")

function render() {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<GroupsProvider><Router /></GroupsProvider>)
}

render();