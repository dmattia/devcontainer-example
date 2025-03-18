import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import { addOne } from '@onboarding/utils';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(import.meta.env.VITE_BACKEND_URL);
            setMessage(result.data);
        };
        fetchData();
    }, []);
    return (_jsx("div", Object.assign({ className: "App" }, { children: _jsxs("header", Object.assign({ className: "App-header" }, { children: [_jsx("img", { src: logo, className: "App-logo", alt: "logo" }, void 0), _jsx("p", { children: "Hello Vite + React!" }, void 0), _jsx("p", { children: _jsxs("button", Object.assign({ type: "button", onClick: () => setCount((count) => addOne(count)) }, { children: ["count is: ", count] }), void 0) }, void 0), _jsxs("p", { children: ["Message from the server: ", message] }, void 0), _jsx("img", { src: "https://images.unsplash.com/photo-1615326636917-94b09ddefded?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" }, void 0), _jsxs("p", { children: [_jsx("a", Object.assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }), void 0), ' | ', _jsx("a", Object.assign({ className: "App-link", href: "https://vitejs.dev/guide/features.html", target: "_blank", rel: "noopener noreferrer" }, { children: "Vite Docs" }), void 0)] }, void 0)] }), void 0) }), void 0));
}
export default App;
//# sourceMappingURL=App.js.map