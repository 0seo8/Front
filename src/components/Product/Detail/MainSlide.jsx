import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { detailProducts } from '../../../dummy/detail'
// import 'swiper/css'
const MainSlide = ({ list }) => {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      className="topslide"
    >
      {list.map((item, idx) => {
        return (
          <SwiperSlide className="topslide" key={idx}>
            <div className="w-full relative">
              <img className="w-full" src={item} alt="슬라이드" />
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MainSlide
