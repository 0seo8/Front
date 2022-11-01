import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorCom from '../common/ErrorCom'
import { magazineDummy as datas } from '../../dummy/magaineDetail'
import Brand from './Brand'
import Plus from './Plus'
// import { useGetMagazineQuery } from '../../store/api/magazineSlice'
import { cls } from '../../utils'
import Loading from '../layout/Loading'

const TopMain = () => {
  const params = useParams()
  const navigate = useNavigate()
  const data = datas.filter((item) => item.id == params.id)
  const [list] = data
  // const { data: list, isLoading, isError } = useGetMagazineQuery(params.id)
  const onClickHandler = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorCom  />
      ) : (
        list && ( */}
      <>
        <div className="h-[76px] bg-point text-white font-bold flex items-center justify-center">
          {list.title}
        </div>
        <div className="relative">
          {list.thumbnail.map((item, idx) => (
            <React.Fragment key={idx}>
              <img src={item} className="w-full" />
              {idx === 0 && <Brand item={list} />}
            </React.Fragment>
          ))}
          {list &&
            list.items.map((item, idx) => (
              <Plus
                className={cls('absolute', item.className && item.className)}
                id={item.id}
                key={idx}
              />
            ))}
        </div>
      </>
      {/* ) */}
      {/* )} */}
    </>
  )
}

export default TopMain
