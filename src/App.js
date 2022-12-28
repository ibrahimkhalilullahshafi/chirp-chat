import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Route';

function App() {
  return (
    <div className="w-10/12 mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
