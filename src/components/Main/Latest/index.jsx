import TodayMagazine from './TodayMagazine'
import { ReactComponent as WomanIcon } from '/public/assets/woman.svg'

const Latest = () => {
  return (
    <div className="relative bg-primary h-[37.5rem] before:content-[attr(before)] before:absolute before:w-full before:h-48 before:bg-[#FEF1DD] before:bottom-0 z-1">
      <h2 className="pt-10 pb-4 px-5 bg-primary border-2 border-white border-b-2 border-l-0 border-r-0 border-t-0 text-white text-xl font-bold">
        오늘의 추천 매거진
      </h2>
      <div className="bg-primary flex flex-col items-end pr-[1.875rem]">
        <h3 className="text-[2rem] text-white mt-7">オヌル</h3>
        <p className="text-xs text-white w-[10.5rem] text-right mt-2 leading-[17px]">
          오늘의 추천 매거진은
          <br />
          따끈따끈 2022 9월호
          <br />
          어라운드 앤 컬렉션입니다
          <br />
          따뜻한 색감과 부드러운 실루엣이
          <br />
          이번 가을과 무척 잘어울린답니다
          <br />
          어느 룩에나 어울리는 어라운드의
          <br />
          데일리백을 지금 바로 만나보세요
          <br />
        </p>
        <TodayMagazine />
      </div>
      <WomanIcon className="absolute left-1 bottom-[8rem]" />
    </div>
  )
}

export default Latest
