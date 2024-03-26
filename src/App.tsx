import Taskbar from './homepage/Taskbar'
import Video from './homepage/video'
import BD from './homepage/BD'
import Footer from './homepage/Footer'
import Testemonial from './homepage/Testemonial'

export function App() {
  return (
    <div className="font-medium">
      <Taskbar />
      <Video />
      <BD />
      <Testemonial />
      <Footer />
    </div>
  )
}
