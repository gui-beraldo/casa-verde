import { Error404 } from 'pages/Error404';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import ResetCSS from './styles/ResetCSS';
import { ComponentTest } from 'pages/ComponentTest';

export default function AppRouter() {
  return (
    <Router>
      <ResetCSS />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/component" element={<ComponentTest />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  )
}
