import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Video } from "./components/Video";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Subscribe />} />
        <Route path="/event" element={<Event />} />

        <Route path="event/lesson/:slug" element={<Event />} />


        <Route path="header" element={<Header />} />
        <Route path="video" element={<Video lessonSlug="aula-02" />} />

      </Routes>
    </Router>
  );
}