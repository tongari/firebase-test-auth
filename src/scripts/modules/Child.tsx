import * as React from 'react'

interface IProps {
  list: number[] | null
}

interface IState {
  list: number[] | null
  enabled: boolean
}

export default class Child extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      list: null,
      enabled: false
    }
  }

  // react v16.3以降で「componentWillReceiveProps」が非推奨になったので
  // 代替として「getDerivedStateFromProps」を使う。
  // 差分を比較するためにstateをもつ必要がある
  public static getDerivedStateFromProps(
    nextProps: IProps,
    prevState: IState
  ): IState {
    if (nextProps.list !== prevState.list) {
      console.log('nextProps.list！！！ : ', nextProps)
      console.log('prevState.list！！！ : ', prevState)
      // 何かしらの処理などを挟む
      return { list: nextProps.list, enabled: true }
    }
    return prevState
  }
  
  render() {
    if (!this.state.enabled) return null
    return (
      <div style={{backgroundColor: '#f00'}}>child</div>
    );
  }
}