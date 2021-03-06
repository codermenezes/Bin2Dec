import styled from 'styled-components'

export const StyledForm = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  paddin: 10px;
  width: 50%;
  backgroud: radial-gradient(ellipse at center, #f2f9fe 0%, #d6f0fd 100%);
`
export const Field = styled.div`
  display: flex;
  flex-direction: column;
`
export const Label = styled.span`
  margin: 10px;
  font-size: 18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #a3a3a3;
  padding: 10px;
  border-radius: 2px;
  background: #e0f0f0;
  outline: none;
  &:focus {
    border: 1px solid orange;
  }
`
