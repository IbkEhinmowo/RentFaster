import Taskbar from './homepage/Taskbar'
import {Home} from './homepage/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouteProps,
} from 'react-router-dom'

export function App() {
  return (
    <div className="font-medium">
      <Router>
        <Taskbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}
