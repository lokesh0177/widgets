import React, { useState } from 'react'
import Accordion from './component/Accordion'
import Search from './component/Search'
import Dropdown from './component/Dropdown'
import Translate from './component/Translate'
import Route from './component/Route'
import Header from './component/Header'

const items = [
  {
    title: 'What is React',
    content: 'React is a frontEnd javascript framework',
  },
  {
    title: 'Why use React',
    content: 'React is loved by engineers',
  },
  {
    title: 'How to use react',
    content: 'You use react by creating component',
  },
]

const options = [
  {
    label: 'The color Red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'A shade of blue',
    value: 'blue',
  },
]

export default () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  )
}
