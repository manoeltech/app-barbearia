const getService = document.querySelector('#selectService')
const btnSubmit = document.querySelector('#btnSubmit')
const textResult = document.querySelector('#textResult')

getService.addEventListener('click', function(){
  let price = getService.value 
  textResult.innerHTML = `<b>Total:</b> R$ ${price}`
})

btnSubmit.addEventListener('click', function(){
  window.location.href = 'agendamento.html'
})

