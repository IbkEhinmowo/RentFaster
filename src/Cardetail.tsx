import {AiOutlineHeart} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import ReactImageGallery from 'react-image-gallery'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


function CarDetail() {
const location = useLocation()
const car = location.state.car
const navigate = useNavigate()


  const productDetailItem = {
    images: [
      {
        original: car.imageUrl,
      },
    ],
    title: car.title,
    reviews: '150',
    availability: true,
    category: car.vehicleType,
    sku: "BE45VGTRK",
    price: car.price,
    previousPrice: 59.99,
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!',
  }
  return (
    <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
      {/* image gallery */}
      <div className="container mx-auto px-4">
        <ReactImageGallery
          showBullets={false}
          showFullscreenButton={false}
          showPlayButton={false}
          items={productDetailItem.images}
        />

        {/* /image gallery  */}
      </div>
      {/* description  */}

      <div className="mx-auto px-5 lg:px-5">
        <h2 className="pt-3 text-2xl font-bold lg:pt-0">
          {productDetailItem.title}
        </h2>
        <div className="mt-1">
          <div className="flex items-center">
            <Rater
              total={5}
              interactive={false}
              rating={3.5}
            />

            <p className="ml-3 text-sm text-gray-400">
              ({productDetailItem.reviews})
            </p>
          </div>
        </div>
        <p className="mt-5 font-bold">
          Availability:{' '}
          {productDetailItem.availability ? (
            <span className="text-green-600">In Stock </span>
          ) : (
            <span className="text-red-600">Expired</span>
          )}
        </p>

        <p className="font-bold">
          Cathegory:{' '}
          <span className="font-normal">{productDetailItem.category}</span>
        </p>
        <p className="font-bold">
          SKU: <span className="font-normal">{productDetailItem.sku}</span>
        </p>
        <p className="mt-4 text-4xl font-bold text-blue-900">
          ${productDetailItem.price}{' '}
          <span className="text-xs text-gray-400 line-through">
            ${productDetailItem.previousPrice}
          </span>
        </p>
        <p className="pt-5 text-sm leading-5 text-gray-500">
          {productDetailItem.description}
        </p>

        <div className="mt-7 flex flex-row items-center gap-6">
          <button
            className="flex h-12 w-1/3 items-center justify-center bg-blue-900 text-white duration-100 hover:bg-blue-800"
            onClick={() => {
              console.log(car)
              navigate('/Booking', {state: {car}})
            }}
          >
            <BiShoppingBag className="mx-2" />
            Book Now
          </button>
          <button className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
            <AiOutlineHeart className="mx-2" />
            Wishlist
          </button>
        </div>
      </div>
    </section>
  )
}

export default CarDetail
