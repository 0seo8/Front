import React from 'react'
import { detailProducts } from '../../../dummy/detail'
import { useParams } from 'react-router-dom'
import { useGetQuestionQuery } from '../../../store/api/questionApiSlice'

const Inquiry = () => {
  const { id } = useParams()
  const { data: list, isError, isLoading } = useGetQuestionQuery(id)

  return (
    <>
      <div className=" pb-6 ">
        <div className="flex justify-between px-5 items-center border-primary border-b">
          <h4 className="font-bold my-4">
            상품 문의 <span>({list ? list.length : 0})</span>
          </h4>
          <span className="text-sm text-black-600 font-medium">Q&A쓰기</span>
        </div>
        <div>
          {list?.length === 0 ? (
            <div className="pt-5 px-5 text-xs text-black-600">
              아직 등록된 상품 문의가 없습니다.
            </div>
          ) : (
            list?.map(
              ({ id, member, title, content, images, createdDate, type }) => (
                <div className="py-5  border-b border-black-400" key={id}>
                  <div className="pl-5 text-xs text-black-600 ">
                    <div className="flex gap-3">
                      <span>{createdDate}</span>
                      <span>{member.username}</span>
                    </div>
                    <div className=" mt-2">[{type}]</div>
                  </div>
                  <p className="mt-3 pl-5 text-xs ellipsis w-[257px]">
                    {content}
                  </p>
                </div>
              ),
            )
          )}
        </div>
        <div className="flex items-center justify-center mt-3 text-xs">1</div>
      </div>
    </>
  )
}

export default Inquiry
