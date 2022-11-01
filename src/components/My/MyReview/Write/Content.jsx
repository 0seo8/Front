const Content = ({ count, onChangeHandler, edit }) => {
  return (
    <>
      <div className="py-5 w-full border-b border-black-200">
        <div className="relative flex box-border rounded items-center border-box">
          <textarea
            onChange={onChangeHandler}
            name="content"
            placeholder="최소 15자 이상 작성해주세요"
            maxLength={1000}
            resize="none"
            rows="5"
            cols="1"
            className=" w-full px-3 py-3 text-sm h-[105px] placeholder:text-sm resize-none"
            style={{ backgroundColor: '#F5F5F5' }}
          >
            {edit ? edit.reply : null}
          </textarea>
          <div className="absolute text-xs bottom-1 right-2">
            {count} / 1000
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
