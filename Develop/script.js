// Assignment code here

const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')

const includeUppercaseElement = document.getElementById
('includeUppercase')
const includeLowercaseElement = document.getElementById
('includeLowercase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSpecialCharactersElement = document.getElementById
('includeSpecialCharacters')

const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SPECIALCHARACTER_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58,64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(126, 126)
)



characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)


form.addEventListener('submit', e => {
  e.preventDefault()
  const charaterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecialCharacters = includeSpecialCharactersElement.checked
  const password = generatePassword(charaterAmount, includeUppercase, includeNumbers, includeSpecialCharacters) 
  passwordDisplay.innerText = password
  
})

function generatePassword(charaterAmount, includeUppercase, 
includeNumbers, includeSpecialCharacters) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES)
  if (includeSpecialCharacters) charCodes = charCodes.concat(SPECIALCHARACTER_CHAR_CODES)

  const passwordCharacters = []
  for (let i = 0; i < charaterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}


function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}