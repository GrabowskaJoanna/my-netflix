import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SeriesAndPrograms from "./pages/SeriesAndPrograms";
import Movies from "./pages/Movies";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/login-form' element={<LoginForm />} />
					<Route path='/series-and-programs' element={<SeriesAndPrograms />} />
					<Route path='/movies' element={<Movies />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
