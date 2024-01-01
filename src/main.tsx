import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css";
import HomePage from "./HomePage";
import UseGuides from "./UseGuides";
import Layout from "./Layout";
import OpenBanking from "./OpenBanking";
import Webhooks from "./Webhooks";
import Glossary from "./Glossary";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/use-guides" element={<Layout><UseGuides /></Layout>} />
      <Route path="/open-banking" element={<Layout><OpenBanking /></Layout>} />
      <Route path="/webhooks" element={<Layout><Webhooks /></Layout>} />
      <Route path="/glossary" element={<Layout><Glossary /></Layout>} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
