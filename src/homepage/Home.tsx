import Video from './video'
import BD from './BD'
import Footer from './Footer'
import Testemonial from './Testemonial'
import Faq from './Faq'

export function Home() {
  return (
    <div className="font-medium">
      <Video />
      <BD />
      <Testemonial />
      <Faq />
      <Footer />
    </div>
  )
}
