import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.css"
import { BrowserRouter } from "react-router-dom"
import ToastProvider from "./components/provider/toast.provider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
