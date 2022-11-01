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
    case 0.5:
      star = '-13px'
      break
    default:
      return (star = 0)
  }

  return star
}

export const ratingStarReview = (starcount) => {
  let star
  switch (starcount) {
    case 5:
      star = '88px'
      break
    case 4.5:
      star = '80px'
      break
    case 4:
      star = '70px'
      break
    case 3.5:
      star = '62px'
      break
    case 3:
      star = '52px'
      break
    case 2.5:
      star = '44px'
      break
    case 2:
      star = '34px'
      break
    case 1.5:
      star = '26.5px'
      break
    case 1:
      star = '16px'
      break
    default:
      return (star = '16px')
  }

  return star
}
