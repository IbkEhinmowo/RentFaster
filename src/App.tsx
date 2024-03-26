import Taskbar from './homepage/Taskbar'
import Video from './homepage/video'
import BD from './homepage/BD'
import Footer from './homepage/Footer'
import Testemonial from './homepage/Testemonial'
import Faq from './homepage/Faq'

export function App() {
  return (
    <div className="font-medium">
      <Taskbar />
      <Video />
      <Testemonial />
      <Faq /> 
      <Footer />
      
    </div>
  )
}
