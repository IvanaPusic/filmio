import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { AppLayout, Homepage, Login, Signup, Movies, TvSeries, Bookmarked, ErrorPage, } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Later create protected route */}
      <Route path = "/" element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="movies" element={<Movies/>} />
        <Route path="tv-series" element={<TvSeries/>} />
        <Route path="bookmarked" element={<Bookmarked/>} />
      </Route>
      <Route path = "/login" element ={<Login/>}/>
      <Route path = "/signup" element ={<Signup/>} />
      <Route path = "*" element ={<ErrorPage/>} />
    </Route>
));

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
