import * as React from 'react'
import { MultiSelect, OptionValue } from 'react-selectize'
import 'react-selectize/themes/index.css'

export default class MultiSelectBox extends React.Component<{}, {
  master: OptionValue[],
  selectedValues: any
}> {
  constructor(props: any) {
    super(props)

    const options = [
      { label: 'AAA', value: 1 },
      { label: 'BBB', value: 2 },
      { label: 'CCC', value: 3 },
    ]

    this.state = {
      master: options,
      selectedValues: []
    }

    this.onChange = this.onChange.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  private filterCustomOptions() {
    let result = null
    result = this.state.selectedValues && this.state.selectedValues.map((sv: any) => {
      return this.state.master.find((option: OptionValue) => {
        return option.value === sv
      })
    })
    return result
  }

  private onChange(options: any) {
    let add = null
    if(options.length > 0) {
      add = options.map((option: OptionValue)=>{
        return option.value
      })
    }
    this.setState({
      selectedValues: add
    })
  }

  private onDelete(option: OptionValue) {
    return () => {
      const selectedValues = this.state.selectedValues
      let result = null
      if(selectedValues) {
        result = selectedValues.map((sv: any)=> {
          if (sv !== option.value) {
            return sv
          }
        }).filter((item: any) => item)
      }
      this.setState({
        selectedValues: result
      })
    }
  }
  
  render() {
    return (
      <MultiSelect
        value={this.filterCustomOptions()}
        options = {this.state.master} 
        placeholder = "Select a fruit"
        theme = "material"
        transitionEnter = {true}
        onValuesChange={this.onChange}
        renderValue={(item) => {
          return(
            <>
              <div style={{border: '1px solid', borderRadius: '4px'}}>
                {item.label}
              </div>
              <span
                onClick={this.onDelete(item)}
                style={{display: 'inline-block', padding: '4px'}}
                >
                  x
              </span>
            </>
          )
        }}
      />
    )
  }
}