import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Home from "./features/news/pages/Home";
import Article from "./features/news/pages/Article";
import ErrorFallback from "./components/Errors/ErrorFallback";

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Article />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
