import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx executing");
const rootElement = document.getElementById("root");
console.log("Root element found:", !!rootElement);

if (rootElement) {
  const root = createRoot(rootElement);
  console.log("Root created, rendering App");
  root.render(<App />);
} else {
  console.error("Root element not found!");
}
