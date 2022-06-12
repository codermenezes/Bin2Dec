import React, { useState } from 'react'
import ReactDom from 'react-dom'

import {
  StyledForm,
  Field,
  Label,
  BinaryTextInput
} from './styles'

function App() {
  const [binaryText, setBinaryText] = useState('')
  const [decimalText, setDecimalText] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const onFormSubmit = e => {
    e.preventDefault()
    if (binaryText.match(/ˆ[0-1]+$/g) == null) {
      setErrorMessage('Enter either 0 or 1')
      return
    }
  }

  return (
    <>
      <h1 style={{color: 'red'}}>Binary to Decimal Converter</h1>

      <StyledForm onSubmit={onFormSubmit}>
        <br />
        <Field>
          <Label>Binary Input</Label>
          <div>
            <BinaryTextInput
              autoComplete="off"
              type="text"
              name="binary"
              placeholder="Enter 0 or 1"
              value={binaryText}
              onChange={e => setBinaryText(e.target.value)}
            />

          </div>
        </Field>

      </StyledForm>

    </>
  );
}

export default App;
