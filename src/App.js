import {useState} from 'react'
import './App.css';
import { RuxTextarea, RuxButton } from '@astrouxds/react'
import Button from './components/Btn.js'

function App() {
  //! When 0 is a regular number, it doesn't show up in the button. Every other number works and string works, wtf? 
  let nums = ['0', 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let symbols = ['+', '-', '*', '/']

  const [total, setTotal] = useState(0)
  const [selections, setSelections] = useState([])

  function handleClick(char){
    //just for testing, this would need to actually do math 
    //? each time a button is pressed, setSelection and add the pressed value
    setSelections([...selections, char])
  }
  function handleEquals(){
    let commandStr = selections.join(' ')
    //? This gets us a nice string of the commands in order, but how do we factor in the operators? 
    //? you get something like 9+1-3 ---- how do you dynamically handle the operators?
    //* ANS to the above - eval!
    let res = eval(commandStr);
    setTotal(res)
    setSelections([res])
    //When equals is pressed we want to calc total, but if input continues after that then we also want to 
    // display the input with the calc'd total. 
    // 1+1 enter will display 2
    //input continues 
    // 2+1 
  }
 
  return (
    <div className="App">
          <RuxTextarea value={selections.join('')} />
      <div className="numbers">
      {
        nums.map((num) => {
          return <Button key={num} number={num} handleClick={handleClick} />
        })
      }

      </div>
      <div className="symbols">
      {
        symbols.map((symbol) => {
          return <Button key={symbol} symbol={symbol} handleClick={handleClick} />
        })
      }
      <RuxButton className="enter" size="large" secondary onClick={() => handleEquals()}>Enter</RuxButton>
      <RuxButton secondary size="large" onClick={() => setSelections([])}>Clear</RuxButton>

      </div>
    </div>
  );
}

export default App;
