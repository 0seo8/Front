import React, { useState } from 'react'

const DeliveryNotice = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 my-5 border-b border-primary pb-5">
      <h4 className="font-bold" onClick={openHandler}>
        배송정보
      </h4>
      <div className={open ? 'mt-3 block' : 'hidden'}>
        <span className="text-xs leading-normal text-black-100">
          <p className="text-black-600">配送方法 : 宅配</p>
          <p className="text-black-600">配送地域 : 全国</p>
          <p className="text-black-600">送料 : ¥800</p>
          <p className="text-black-600">配送期間 : 7日 ~ 14日</p>
          <p className="text-black-600">配送ガイド : </p>
          *商品は韓国からの海外発送です。
          <br />
          *お客様がご注文された商品は入金確認後、約3~5営業日以内に発送致します。配送期間は約7〜14営業日です。
          <br />
          *商品種類によって商品準備及び発送が少し遅れる場合がございます。また、大幅に発送遅延が見込まれる場合、お客様に事前にお知らせいたします。
          <br />
          *当日発送はできませんのでご了承ください。
          <br />
          *海外発送の為、配送の日時指定など、配送に関してのご要望につきましては弊社ではできませんのであらかじめご了承ください。
          <br />
          *配達状況は下記のURLからサイトに入って、到着国の送状番号をチェックし、{' '}
          <br />
          メールで届いた送り状番号を入力するとご確認いただけます。(他をチェックして送り状番号を入力しても配送状況は見れません。)
          <p className="text-black-600">https://cbt.sttd.kr/Track/Search</p>
          <div className="pt-4">
            -配送にお時間がかかる場合‐ ・商品の注文が集中した場合 <br />
            ・土日祝日、韓国の連休等挟んだ場合 <br />
            ・海外配送の為、悪天候/関税検査等に時間がかかった場合 <br />
            ・商品の在庫が無くなった場合 <br />
          </div>
        </span>
      </div>
    </div>
  )
}

export default DeliveryNotice
