let inputElement = document.getElementById('numberInput')
let listContainer = document.getElementById('listContainer')
let summaryContainer  = document.getElementById('summaryContainer')
let addButton = document.getElementById('addButton')
let finalizeButton = document.getElementById('finalizeButton')

addButton.addEventListener('click', addNumber)
finalizeButton.addEventListener('click', finalize)

let numbers = []

function addNumber(){ 
   if(summaryContainer.style.display === 'block'){
      numbers = []
      listContainer.innerHTML = ''
      }
   summaryContainer .style.display = 'none'
   let inputValue = Number(inputElement.value)
   let contains = numbers.includes(inputValue)
   if(contains === true || inputValue < 1 || inputValue > 100){
    alert('Invalid number or already found in the list.')
   inputElement.value = ''
   inputElement.focus()
    return
   } else {
    numbers.push(inputValue)
    listContainer.style.display = 'block'
    listContainer.innerHTML = listContainer.innerHTML + `<p>Number ${inputValue} added</p>`
    inputElement.value = ''
    inputElement.focus()
   }
}

function finalize(){
   listContainer.style.display = 'none'
   if (numbers.length === 0){
      alert('Add at least one number')
      return
   }
   let biggestNumber = Math.max(...numbers)
   let smallestNumber = Math.min(...numbers)
   let sum = 0
   for (let i = 0; i < numbers.length; i = i + 1){
      sum = sum + numbers[i]
   }
   let average = (sum / numbers.length).toFixed(2)
   summaryContainer.style.display = 'block'
   summaryContainer.innerHTML = ''
   summaryContainer.innerHTML = `
  <p>In total, ${numbers.length} numbers were added.</p>
  <p>The highest number entered was ${biggestNumber}.</p>
  <p>The lowest number entered was ${smallestNumber}.</p>
  <p>The sum of all numbers is ${sum}.</p>
  <p>The average of the entered numbers is ${average}.</p>
`
}

