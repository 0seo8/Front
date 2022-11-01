import { magazineDummy } from '../../../dummy/magaineDetail'
const Relation = ({ list }) => {
  const itemsArr = magazineDummy.filter((item) =>
    item.prodcutId.includes(list?.productId),
  )
  return (
    <div className="px-5">
      <h4 className="font-bold my-4">이 상품이 포함된 매거진</h4>
      <div className="w-full grid grid-cols-3">
        {itemsArr.map((item, idx) => (
          <div key={idx}>
            <img src={item.cover} />
            <p className="text-xs mt-2 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Relation
