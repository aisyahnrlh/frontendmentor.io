import { useState, useEffect } from 'react';
import { evaluate, round } from 'mathjs';
import Button from './Button';
import { numbers } from './data';
import './App.css';

function App() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [isAnswered, setIsAnswered] = useState(false)
  const [isDecimal, setIsDecimal] = useState(true)
  const isOperator = /[*/+-]/
  const [theme, setTheme] = useState("theme1")
  const [themeValue, setThemeValue] = useState(1)

  useEffect(() => {
    // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered(excluding the negative(-) sign.
    if (input.match(/[*/+-]{3,}/)) {
      setInput(input.substring(0, input.length - 3) + input[input.length - 1]);
    }
  }, [input])

  useEffect(() => {
    switch (themeValue) {
      case '1':
        setTheme('theme1')
        break
      case '2':
        setTheme('theme2')
        break
      case '3':
        setTheme('theme3')
        break
      default:
        break
    }
  }, [themeValue])

  const handleInput = (value) => {
    switch (value) {
      case "0":
        if (input.length === 0) {
          setInput("")
        } else {
          setInput(input + value)
          setResult(result + value)
        }
        break
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        // if already click equals and want to input new number
        if (isAnswered) {
          setInput(value)
          setResult(value)
          setIsAnswered(false)
        }
        else {
          setInput(input + value)
          setResult(result + value)
        }

        if (isOperator.test(input.slice(-1))) {
          setResult(value)
        }
        break
      case ".":
        if (isAnswered && result.includes(".")) {
          setIsDecimal(false)
        }

        if (isAnswered && !result.includes(".")) {
          setInput(result + value)
          setResult(result + value)
          setIsAnswered(false)
          setIsDecimal(false)
        }

        if (!isAnswered && !result.includes(".")) {
          setInput(input + value)
          setResult(result + value)
        }
        break
      case "+":
      case "-":
      case "*":
      case "/":
        // if already click equals and want to input new operator
        if (isAnswered) {
          setInput(result + value)
          setIsAnswered(false)
        } else {
          setInput(input + value)
        }
        setResult(value)
        setIsDecimal(true)
        break
      case "DEL":
        let text = input.split('');
        const lastChar = input.slice(-1)
        text.pop()
        setInput(text.join(''))
        setResult("")
        if (lastChar === '.') {
          setIsDecimal(true)
        }
        break
      case "RESET":
        setInput("")
        setResult("")
        break
      case "=":
        let total = input[input.length - 1] === "=" ? evaluate(input.slice(0, input.length - 1)) : evaluate(input)
        const totalStr = total.toString().split('.')
        if (totalStr[1] > 5) {
          total = round(total, 5)
        }

        if (input[input.length - 1] === "=") {
          setInput(input + total.toString())
        } else {
          setInput(input + '=' + total.toString())
        }

        setResult(total.toString())
        setIsAnswered(true)
        break
      default:
        break
    }
  }

  const handleTheme = (event) => {
    setThemeValue(event.target.value)
  }

  return (
    <div className={`App ${theme}`}>
      <nav>
        <div className={`nav__title ${theme}`}>
          calc
        </div>
        <div className="nav__toggle">
          <p className={theme}>THEME</p>
          <div className="toggle">
            <div className={`theme__labels ${theme}`}>
              <label htmlFor="">1</label>
              <label htmlFor="">2</label>
              <label htmlFor="">3</label>
            </div>
            <input className={theme} type="range" min="1" max="3" value={themeValue} onChange={handleTheme} />
          </div>
        </div>
      </nav>
      <div className={`display ${theme}`}>
        <p>{input.length === 0 ? String.fromCharCode(160) : input}</p>
        <p id="display">{result.length === 0 ? "0" : result}</p>
      </div>
      <div className={`buttons ${theme}`}>
        {
          numbers.map((number, index) => {
            const { value } = number
            return value === "."
              ? <Button {...number} onClick={() => handleInput(value)} key={index} isDecimal={isDecimal} theme={theme} />
              : <Button {...number} onClick={() => handleInput(value)} key={index} isDecimal={true} theme={theme} />
          })
        }
      </div>
    </div>
  )
}


export default App;