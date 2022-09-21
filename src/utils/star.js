export const ratingStar = (starcount) => {
  let star
  switch (starcount) {
    case 5:
      star = '-126px'
      break
    case 4.5:
      star = '-115px'
      break
    case 4:
      star = '-102px'
      break
    case 3.5:
      star = '-89px'
      break
    case 3:
      star = '-76px'
      break
    case 2.5:
      star = '-63px'
      break
    case 2:
      star = '-51px'
      break
    case 1.5:
      star = '-38px'
      break
    case 1:
      star = '-25px'
      break
    default:
      return (star = '-13px')
  }

  return star
}
