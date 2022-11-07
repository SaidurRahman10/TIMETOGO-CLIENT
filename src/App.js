
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Route/Route';

function App() {
  return (
    <div className="App bg-slate-100">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
