import * as React from 'react'
import Calendar from './Calendar'
import SelectBox from './SelectBox'

export default class App extends React.PureComponent<{}, {
  startDate: string | null
}> {
  constructor(props: any) {
    super(props)
  }
  
  render() {
    return (
      <>
        <Calendar />
        <SelectBox />
      </>
    );
  }
}