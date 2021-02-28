export function validateEmail(mail) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))return (true)

  alert("Kindly enter a valid email address")
  return (false)
}

export function getProductById(id,prodArray){
  const updatedProdArray = prodArray.filter(prod=>prod._id===id)

  return updatedProdArray
}

export function getProductNameById(id,prodArray){
  const updatedProdArray = prodArray.filter(prod=>prod._id===id)

  return updatedProdArray.length ? updatedProdArray[0].name : false
}

export function getProductImageById(id,prodArray){
  const updatedProdArray = prodArray.filter(prod=>prod._id===id)

  return updatedProdArray.length ? updatedProdArray[0].image : false
}

export function getProductPriceById(id,prodArray){
  const updatedProdArray = prodArray.filter(prod=>prod._id===id)

  return updatedProdArray.length ? updatedProdArray[0].price : false
}

function minutesDifference(timestamp1, timestamp2) {
  var difference = timestamp1 - timestamp2;
  var minutesDifference = Math.floor(difference/1000/60);

  return minutesDifference;
}