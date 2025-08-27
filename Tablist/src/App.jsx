import React from 'react'
import './App.css'
import TabList from './tab-list/TabList'
import { Tab1 } from './components/Tab1'
import { Tab2 } from './components/Tab2'
import { Tab3 } from './components/Tab3'
import { Tab4 } from './components/Tab4'

function App() {
const tabs= [
  {id:1, label: "Tab1", tabComponents:<Tab1/>},
  {id:2, label: "Tab2", tabComponents:<Tab2/>},
  {id:3, label: "Tab3", tabComponents:<Tab3/>},
  {id:4, label: "Tab4", tabComponents:<Tab4/>}
]

  return (
    <>
      <div>
        <h1>Tabs</h1>
        
            <TabList tabs={tabs} />
        
      </div>
    </>
  )
}

export default App
