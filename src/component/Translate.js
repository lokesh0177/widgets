import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, settext] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field"></div>
        <label>Enter text</label>
        <input
          value={text}
          onChange={(e) => {
            settext(e.target.value)
          }}
        />
      </div>

      <Dropdown
        label="Select a language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr></hr>
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  )
}

export default Translate
