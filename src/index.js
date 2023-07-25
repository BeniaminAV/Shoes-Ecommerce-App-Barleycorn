import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./styles/index.css"
import { BrowserRouter } from "react-router-dom"
import ToastProvider from "./components/provider/toast.provider"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"
import { Footer } from "./routes"
import ScrollToTop from "./utils/scrollToTop"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <ScrollToTop />
          <ToastProvider />
          <App />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
