import '../assets/Styles/HotelsSearch.css'
import HotelCardCarousel from './HotelCardCarousel'

export default function HotelCard() {
  return (
    <div className='HotelCard'>
        <div className="carouselContainer">
            <HotelCardCarousel/>
        </div>
        <div className="HotelData"></div>
        <div className="HotelFeatues"></div>
    </div>
  )
}
