import React, { useEffect, useState, useRef, useMemo } from 'react'
import { reviewContent } from '../../../../dummy/review'
import StarScore from './StarScore'
import Content from './Content'
import AddPicture from './AddPicture'
import Button from '../../../common/Button'
import { useAddProductReviewMutation } from '../../../../store/api/reviewApiSlice'
import { useLocation } from 'react-router-dom'
import CloseIcon from '../../../common/CloseIcon'
const index = () => {
  const [count, setCount] = useState(0)
  const [userValue, setUserValue] = useState({
    //id, product, member는 꼭 null로 createDate는 현재날짜로, title, images, star은 필수값이라고 해요!
    title: null,
    images: [],
    id: null,
    content: null,
    product: null,
    member: null,
    star: 0,
    createdDate: null,
  })
  //이거는 화면에 보이게 하려고 따로 하나 만들었어요! 코드를 효율적으로 짜는 방법을 몰라서 userValue랑
  //화면에 보이게 할 imageFile을 하나 더 만들었었어요!
  const [imageFile, setImageFile] = useState([])

  //review등록하는 rtk api불러왔어요! 저희 상품 조회가 아직 안되어서 url/1로 해서 상품 1번으로 박아두었어요!
  const [addProductReview] = useAddProductReviewMutation()

  //input창 관련 변동사항 핸들러에요!
  const onChangeHandler = (e) => {
    const { name, value } = e.target
    setUserValue({
      ...userValue,
      [name]: value,
    })
    //count는 textarea에 글자수 카운팅 하려고 따로 뺐어요!
    name === 'content' && setCount(value.length)
  }

  //제가 ref를 아직 잘 몰라서 요기 ref 2개 부분 잘 이해못해서 헤매고 있었어요!
  const uploadedImage = useRef(null)
  const imageUploader = useRef(null)
  const location = useLocation()

  //인석님 정말 최고라구용
  const edit = location.state

  // 기존에 인석님께서 쓰던 코드인데 base64로 보낼 수 없게 되어서 주석처리 했어요!
  // const handleImageUpload = (e) => {
  //   const [file] = e.target.files
  //   if (file) {
  //     const reader = new FileReader()
  //     const { current } = uploadedImage
  //     current.file = file
  //     reader.onload = (e) => {
  //       current.src = e.target.result
  //     }
  //     reader.readAsDataURL(file)
  //   }
  // }

  //코드 지저분 대주의가 필요한 구역입니다~!!
  //file이 업로드 되는 경우 사용하는 핸들러인데 너무 코드가 지저분해요..
  // 인석님께서 정리하셔서 쓰셔도 너무너무 좋아요!! (그럼 저는 슬쩍 샤샤샥 하겠습니다!)

  const handleImageUpload = (e) => {
    const fileList = e.target.files

    //이미지 파일을 최대 2개까지만 받으려고 length가 1개인경우 기존 imageFile을 짜르고 새거와함께 새로 set했어요!(코드가 지저분하네요ㅠ)
    //이부분은 화면에 보이게 하는 처리하려고 했어요!
    if (imageFile.length > 1) {
      let currentImages = imageFile.slice(1, 2)
      setImageFile([
        ...currentImages,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])

      //이부분은 api전송하기 위해 formData를 담아보려고 했어요!
      let currentFiles = userValue.images.slice(1, 2)
      setUserValue({
        ...userValue,
        images: [...currentFiles, fileList[fileList.length - 1]],
      })
    } else {
      setImageFile([
        ...imageFile,
        URL.createObjectURL(fileList[fileList.length - 1]),
      ])
      setUserValue({
        ...userValue,
        images: [...userValue.images, fileList[fileList.length - 1]],
      })
    }
  }

  //등록하기 버튼을 누르는 경우 호출하려고 했어요!
  const AddReviewHandler = () => {
    //createdDate생성
    setUserValue({
      ...userValue,
      createdDate: new Date(),
    })

    const formData = new FormData()

    //오늘 배운 부분!
    for (const key in userValue) {
      if (Array.isArray(userValue[key])) {
        formData.append(
          key,
          new Blob([JSON.stringify(userValue[key])], {
            type: 'application/json',
          }),
        )
      } else {
        formData.append(key, userValue[key])
      }
    }
    addProductReview(formData)
  }

  //X버튼을 클릭하면 지워지게 하려고 했어요!
  const removeThumbnail = (idx) => {
    imageFile.length === 1
      ? setImageFile([])
      : setImageFile(imageFile.splice(idx, 1))
  }

  //화면에 보여질 showImage를 만드려고 했어요!
  const showImage = useMemo(() => {
    return (
      <>
        {imageFile?.map((item, idx) => (
          <div className="relative flex gap-2" key={idx}>
            <div
              className="relative w-[86px] h-[86px] bg-cover rounded overflow-hidden shawdow-md"
              style={{
                backgroundImage: `url(${imageFile[idx]})`,
              }}
              onClick={() => removeThumbnail(idx)}
            ></div>
            <div className="absolute -right-2 -top-2">
              <CloseIcon
                fill="#000"
                size="8"
                className="bg-black-200 p-1 rounded-full"
              />
            </div>
          </div>
        ))}
      </>
    )
  })

  useEffect(() => {
    console.log(userValue)
  }, [userValue, edit])

  //요기도 아직 머리속이 정리가 안되어서 고치지를 못했어용...
  const reviewData = reviewContent

  return (
    <div className="px-5 mt-[38px]">
      <ul>
        {reviewData.map((review, index) => (
          <li
            className="flex items-center pb-5 border-b border-black-200"
            key={index}
          >
            <div
              className="w-[4.125rem] h-[4.125rem] bg-no-repeat bg-[length:100%_auto] rounded overflow-hidden mr-3"
              style={{
                backgroundImage: `url(${
                  edit ? edit.img_url : review.brand_img_url
                })`,
              }}
            ></div>
            <ul className="grow">
              <li className="text-xs flex flex-col justify-center gap-2">
                <p className="font-bold">{edit ? edit.brand : review.brand}</p>
                <p>{edit ? edit.name : review.product_name}</p>
                <p className="text-black-600">
                  옵션: {edit ? edit.option : review.product_option}
                </p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center py-[1.875rem] mb-[1.875rem] border-b border-black-200 gap-4">
        <p>상품에 대한 별점을 매겨주세요</p>
        <StarScore
          userValue={userValue}
          setUserValue={setUserValue}
          edit={edit}
        />
      </div>
      <AddPicture
        //사실 AddPicture을 잘 이해못해서 죄송스럽지만 인석님께 샤샤샥해요..!
        // showImage={showImage}
        //count={imageFile.length === 0 ? 0 : imageFile.length}

        handleImageUpload={handleImageUpload}
        uploadedImage={uploadedImage}
        imageUploader={imageUploader}
      />
      <Content count={count} onChangeHandler={onChangeHandler} edit={edit} />
      <Button
        classprop="text-sm mt-9 mb-5 bg-primary text-white"
        onClick={
          edit
            ? null //  AddUpdateHandler
            : AddReviewHandler
        }
      >
        {edit ? '수정하기' : '등록하기'}
      </Button>
    </div>
  )
}

export default index
