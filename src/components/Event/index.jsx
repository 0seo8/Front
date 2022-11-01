import React from 'react'
import BackIcon from '../common/BackIcon'
import HeartIcon from '../common/HeartIcon'
import { ReactComponent as ArrowIcon } from '/public/assets/arrow_icon.svg'
import Header from '../layout/Header'
const index = ({ liked }) => {
  return (
    <>
      <Header />
      <div className="pt-[64px]">
        <div className="px-5 pt-10 py-5 border-t border-black-100">
          <div className="flex justify-between">
            <h2 className="text-xs font-medium w-[6.563rem] text-center border border-black-800 rounded-full leading-6">
              PRODUCT
            </h2>
            <span>2022.09.25 ~ 10.30</span>
          </div>
          <h3 className="text-[1.875rem] mt-5">
            오늘의 <br />
            패션컬렉션북
          </h3>
        </div>
      </div>
      <img src="https://ifh.cc/g/Lkwrm8.jpg" className="w-full" />
      <div className="px-5 py-10">
        <img
          src="https://aroundann.jp/web/upload/category/editor/2021/11/03/34113214691ad533e76facd4df88e8d3.png"
          width="49px"
        />
        <h4 className="text-3xl mt-2.5 my-5">어라운드앤</h4>
        <p className="font-sm mb-5">
          어라운드앤은 일상에 무드와 가장 가까운곳에서 <br />
          자연스럽게 어울리는 데일리 백입니다. <br />
          어라운드앤은 함께 오늘 하루도 <br />
          편안한 하루를 선사합니다.
        </p>
        <div>
          <div className="flex w-full border border-point">
            <div className="flex items-center justify-center px-3 py-4 border-point border-r">
              <img
                src="https://aroundann.jp/web/upload/category/editor/2021/11/03/34113214691ad533e76facd4df88e8d3.png"
                width="58px"
              />
            </div>
            <div className="flex-grow py-5 px-4">
              <div className="relative flex items-center w-full justify-between">
                <div className="w-full flex items-center">
                  <span className="text-color-800 text-sm font-bold">
                    aroundAnn
                  </span>
                  <BackIcon
                    className="rotate-180 ml-1"
                    size="14"
                    fill="var(--point)"
                  />
                </div>
                <HeartIcon
                  size="22px"
                  off={liked}
                  fill="var(--point)"
                  className="absolute right-5 top-[10px]"
                />
              </div>
              <h2 className="text-sm mt-2 font-bold">어라운드앤</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#403328] p-5 text-center">
        <p className="font-medium text-white text-sm mb-1.6">
          New release event
        </p>
        <p className="font-bold text-white">aroun ann upto 30% sale</p>
      </div>
      <p className="text-sm p-5">
        코디 고민 없는 베이직한 컬러감으로 어라운드앤만의 <br />
        자연스러운 데일리룩을 완성해 보세요.
      </p>
      <ul className="flex gap-[0.938rem]">
        <li className="w-1/2">
          <img src="https://ifh.cc/g/tVYvFC.jpg" className="w-full" />
        </li>
        <li className="w-1/2">
          <img src="https://ifh.cc/g/tVYvFC.jpg" className="w-full" />
        </li>
      </ul>
      <ul className="pt-2.5 py-5 mx-5 border-t border-black-200 mt-10">
        <li className="relative flex my-3">
          <img src="https://ifh.cc/g/taXqcK.jpg" />
          <div className="flex flex-col ml-[1.125rem] justify-center gap-2">
            <p className="text-sm font-bold">aroun ann</p>
            <p className="text-xs text-black-800">Wrinkle bag_Ivory</p>
            <p className="text-xs text-black-600">6500 ¥</p>
            <p className="flex gap-2.5">
              <span className="text-sm text-primary font-bold">30%</span>
              <span className="text-sm font-bold">4550 ¥</span>
            </p>
          </div>
          <HeartIcon
            size="22px"
            off={liked}
            className="absolute right-0 top-1.5"
          />
        </li>
        <li className="relative flex my-3">
          <img src="https://ifh.cc/g/jOdxGb.jpg" />
          <div className="flex flex-col ml-[1.125rem] justify-center gap-2">
            <p className="text-sm font-bold">aroun ann</p>
            <p className="text-xs text-black-800">Wrinkle bag_Black</p>
            <p className="text-xs text-black-600">6500 ¥</p>
            <p className="flex gap-2.5">
              <span className="text-sm text-primary font-bold">30%</span>
              <span className="text-sm font-bold">4550 ¥</span>
            </p>
          </div>
          <HeartIcon
            size="22px"
            off={liked}
            className="absolute right-0 top-1.5"
          />
        </li>
      </ul>
      {/* 키르시 */}
      <img src="https://ifh.cc/g/poXRk8.jpg" className="w-full" />
      <div className="px-5 py-10">
        <img src="https://ifh.cc/g/xap2k8.png" />
        <h4 className="text-3xl mt-2.5 my-5">키르시</h4>
        <p className="font-sm mb-5">
          Research and Creativity <br />
          심플하고 웨어러블한 무드 속의 키치함을 제안하는 <br />
          브랜드 키르시와 함께 오늘 하루를 <br />
          상큼함으로 물들여보세요.
        </p>
        <div>
          <div className="flex w-full border border-point">
            <div className="flex items-center justify-center px-3 py-4 border-point border-r">
              <img src="https://ifh.cc/g/LjW3ZS.png" width="58px" />
            </div>
            <div className="flex-grow py-5 px-4">
              <div className="relative flex items-center w-full justify-between">
                <div className="w-full flex items-center">
                  <span className="text-color-800 text-sm font-bold">
                    Kirsh
                  </span>
                  <BackIcon
                    className="rotate-180 ml-1"
                    size="14"
                    fill="var(--point)"
                  />
                </div>
                <HeartIcon
                  size="22px"
                  off={liked}
                  fill="var(--point)"
                  className="absolute right-5 top-[10px]"
                />
              </div>
              <h2 className="text-sm mt-2 font-bold">키르시</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#AE1117] p-5 text-center">
        <p className="font-medium text-white text-sm mb-1.6">
          New release event
        </p>
        <p className="font-bold text-white">Kirsh upto 30% sale</p>
      </div>
      <p className="text-sm p-5">
        어떤 코디든 산뜻한 컬러감의 키르시로 <br />
        귀엽고 키치룩을 완성해보세요
      </p>
      <ul className="flex gap-[0.938rem]">
        <li className="w-1/2">
          <img src="https://ifh.cc/g/FQR8qn.jpg" className="w-full" />
        </li>
        <li className="w-1/2">
          <img src="https://ifh.cc/g/t1Zdpa.jpg" className="w-full" />
        </li>
      </ul>
      <ul className="pt-2.5 py-5 mx-5 border-t border-black-200 mt-10">
        <li className="relative flex my-3">
          <img src="https://ifh.cc/g/PzvfLv.jpg" />
          <div className="flex flex-col ml-[1.125rem] justify-center gap-2">
            <p className="text-sm font-bold">Kirsh</p>
            <p className="text-xs text-black-800">
              BIG CHERRY FLEECE CROP HOOD
            </p>
            <p className="text-xs text-black-600">6500 ¥</p>
            <p className="flex gap-2.5">
              <span className="text-sm text-primary font-bold">30%</span>
              <span className="text-sm font-bold">4550 ¥</span>
            </p>
          </div>
          <HeartIcon
            size="22px"
            off={liked}
            className="absolute right-0 top-1.5"
          />
        </li>
        <li className="relative flex my-3">
          <img src="https://ifh.cc/g/51xlrg.jpg" />
          <div className="flex flex-col ml-[1.125rem] justify-center gap-2">
            <p className="text-sm font-bold">Kirsh</p>
            <p className="text-xs text-black-800">Wrinkle bag_Black</p>
            <p className="text-xs text-black-600">6500 ¥</p>
            <p className="flex gap-2.5">
              <span className="text-sm text-primary font-bold">30%</span>
              <span className="text-sm font-bold">4550 ¥</span>
            </p>
          </div>
          <HeartIcon
            size="22px"
            off={liked}
            className="absolute right-0 top-1.5"
          />
        </li>
      </ul>
      <ul className="mt-16 px-5">
        <li className="flex py-5">
          <span className="font-bold text-black-800 text-sm w-[43.5%] flex items-top gap-3 leading-none">
            <span>이전</span>
            <ArrowIcon className="mt-[2px]" />
          </span>
          <p className="font-medium text-black-800 text-xs grow">
            오늘에서 스냅찍고 경품받자!
          </p>
        </li>
        <li className="flex py-5 border-t border-black-200">
          <span className="font-bold text-black-800 text-sm w-[43.5%] flex items-top gap-3 leading-none">
            <span>다음</span>
            <ArrowIcon className="rotate-180 mt-[2px]" />
          </span>
          <p className="font-medium text-black-800 text-xs grow">
            다음페이지가 없습니다
          </p>
        </li>
      </ul>
    </>
  )
}

export default index
