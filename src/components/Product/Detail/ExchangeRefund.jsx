import React, { useState } from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { cls } from '../../../utils'

const ExchangeRefund = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen((prev) => !prev)
  }
  return (
    <div className="px-5 mt-5 border-b border-primary pb-5">
      <div className="flex justify-between items-center" onClick={openHandler}>
        <h4 className="font-bold">교환 / 환불안내</h4>
        <GoBackIcon
          width="14px"
          height="14px"
          className={cls(open ? 'rotate-90' : '-rotate-90')}
        />
      </div>
      <div className={open ? 'mt-3 block' : 'hidden'}>
        <div className="text-xs leading-normal text-black-600">
          <div className="mb-5">
            <p> 1. 注文キャンセルについて</p>
            ご注文の状態が「入金確認」もしくは「発送準備中」の状態のご注文のみ可能です。
            <br />
            注文キャンセルをご希望の方は、メールにてご連絡お願いいたします。
            <br />
          </div>
          <div className="mb-5">
            <p> 2. 交換および返品について ※</p>
            海外配送商品の特性上、お客様の都合にる交換および返品は承れない場合もございますので、事前にお問合せください。
            <br />
            (カラー・サイズの交換など含む)
            <br />
            なお、お客様都合による交換および返品される際、往復海外送料および関税・付加価値税などはお客様の負担となりますので十分にご注意の上、ご注文をお願い致します。
          </div>
          <div className="mb-5">
            - 交換および返品先住所 <br />
            - [06223] 서울특별시 강남구 테헤란로28길 42 (역삼동) 5층 <br />
          </div>
          <div className="mb-5">
            - 交換・返品をお受けできる商品 <br />
            商品を受取ってから14日以内の商品
            <br />
            着用、洗濯、加工・補正をしておらず、タグが付いた状態の品の商品
            <br />
            間違って送られた商品 不良品、または損傷して到着した商品
            <br />
            交換および払戻しの手続きにおいて通信販売サイトと事前協議を済ませた場合
            <br />
          </div>
          <div className="mb-5">
            - 交換・返品をお受けできない商品 <br />
            お客様のもとでキズまたは破損が生じた商品 <br />
            梱包を開けたり、毀損され商品価値を喪失された場合 <br />
            使用済みもしくは一部消費によって商品価値が顕著に減少した場合 <br />
            時間の経過によって再販売できないほど商品価値が顕著に減少した場合
            複製が可能な商品などの梱包を毀損した場合 <br />
            通信販売サイトの交換および返品手続きを履行していない場合 <br />
            (詳しく、メールにてお問合せください。)
          </div>
          <div className="mb-5">
            3. 返品方法 <br />
            商品の返品を希望されます場合は、まずはメールにてご連絡ください。{' '}
            <br />
            下記【返品の手順】をご覧のうえ、お手続きをお願いいたします。
            <br />
            【返品の手順】 <br />
            １）商品受領日から14日以内に、欠陥であることを証明できる画像(商品全体画像及び欠陥の拡大画像)を添付し、{' '}
            <br />
            注文番号、誤配達/欠陥商品番号、払戻し理由などの情報と一緒にメールにてご送付お願いいたします。
            <br />
            ２）返品申込が受付けられたら、後ほど別途ご連絡いたします。
            <br />
            ３）返品時、パッケージ(箱、包ビニールなど)の中に注文番号、購入者名、会員IDを記載したメモを同梱してお送りください。
            <br />
            ※
            返品申込や申込受付など手続きなしに返送され場合は、返品及び払戻しの処理ができかねますのでご了承ください。
            <br />
            ※ 返品する際の送料は、帰責事由によって処理されます。 <br />
            -心変わりによるカラーやサイズの交換などお客様の都合による場合の返品送料はお客様のご負担
            <br />-
            誤配達・不良品など弊社責任の場合の返品送料は弊社にて負担致します。{' '}
            <br />
            ※海外配送の為、着払いができませんので商品発送後、送料に対する領収書をメールで送って下さい。確認後、払戻しさせて頂きます。
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeRefund
