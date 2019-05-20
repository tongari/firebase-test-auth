import * as React from 'react'
import Calendar from './Calendar'
import SelectBox from './SelectBox'
import MultiSelectBox from './MultiSelectBox'

export default class App extends React.PureComponent<{}, {
  master: {
    data: {
      name: string
      age: number
    }
  }
}> {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <>
        <Calendar />
        <SelectBox />
        <MultiSelectBox />
      </>
    );
  }
}