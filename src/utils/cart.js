const local = JSON.parse(localStorage.getItem(recentViewProduct))

// local에 저장된 '최근 본 상품'이 없다면 key값을 설정하고 그 product id만 로컬에 저장 후 return
if (!local) {
  window.localStorage.setItem(recentViewProduct, JSON.stringify([id]))
  return
}

// 이전에 본 기록이 있는 product id는 지운 후, 맨 앞에서 추가
local.map((item, idx) => {
  if (item === id) local.splice(idx, 1)
})

// 최근 본 상품 최대 20개만 저장
if (local.length >= 20) local.pop()

// 새로운 product id를 맨 앞으로 저장
window.localStorage.setItem(recentViewProduct, JSON.stringify([id, ...local]))
