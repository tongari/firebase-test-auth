import * as React from 'react'
import Child from './Child'
import Calendar from './Calendar'
import SelectBox from './SelectBox'
import MultiSelectBox from './MultiSelectBox'

export default class App extends React.Component<{}, {
  // master: {
  //   data: {
  //     name: string
  //     age: number
  //   }
  // },
  // displayedChild: boolean,
  list: number[] | null
}> {
  constructor(props: any) {
    super(props)
    this.state = {
      list: null
    }
  }

  componentDidMount() {
    
    setTimeout(()=>{
      const newState = Object.assign(this.state, {list: []})
      this.setState(newState)
    },2000)
  }

  // private renderChild() {
  //   if(this.state.list && this.state.list.length > 0) {
  //     return <Child list={this.state.list} />
  //   } else {
  //     return null
  //   }
  // }

  private renderContainer() {
    if(this.state.list) {
      return(
        <>
        {/* {this.renderChild()} */}
        <Child list={this.state.list} />
        <Calendar />
        <SelectBox />
        <MultiSelectBox />
      </>
      )
    } else {
      return <div>hoge</div>
    }
  }
  
  render() {
    return this.renderContainer()
  }
}