import * as React from 'react'
import { SimpleSelect, OptionValue } from 'react-selectize'
import 'react-selectize/themes/index.css'

export default class App extends React.PureComponent<{}, {
  master: OptionValue[],
  selectedValue: number | null
}> {
  constructor(props: any) {
    super(props)

    const options = [
      { label: 'A', value: 1 },
      { label: 'B', value: 2 },
      { label: 'C', value: 3 },
    ]

    this.state = {
      master: options,
      selectedValue: null
    }

    this.onChange = this.onChange.bind(this)
  }

  private filterOptions() {
    return this.state.master.find((option: OptionValue) => {
      return option.value === this.state.selectedValue
    })
  }

  private onChange(option: OptionValue) {
    this.setState({
      selectedValue: option? option.value : null
    })
  }
  
  render() {
    return (
      <SimpleSelect
        value={this.filterOptions()}
        options = {this.state.master} 
        placeholder = "Select a fruit"
        theme = "material"
        transitionEnter = {true}
        onValueChange={this.onChange}
      />
    );
  }
}