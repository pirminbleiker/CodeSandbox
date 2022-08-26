import { useState } from 'react'
import styled from 'styled-components/macro'

export default function App() {
  const [text, setText] = useState('')

  return (
    <Container>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <Output hasContent={text.length > 0}>
        Upper Case: {text.toUpperCase()}{' '}
      </Output>
    </Container>
  )
}

interface OutputProps {
  hasContent: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: sans-serif;
`

const Input = styled.input`
  padding: 5px 10px;
  border: 1px solid royalblue;
  border-radius: 5px;
`

const Output = styled.div<OutputProps>`
  background: ${p => (p.hasContent ? 'lightgreen' : 'lightblue')};
  padding: 5px;
`
