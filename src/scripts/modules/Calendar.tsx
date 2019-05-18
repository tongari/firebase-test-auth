import * as React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import 'moment/locale/ja';
import ja from 'date-fns/locale/ja';

export default class App extends React.PureComponent<{}, {
  startDate: string | null
}> {
  constructor(props: any) {
    super(props)
    moment.locale('ja')
    registerLocale('ja', ja);
    this.state = {
      startDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date: Date) {
    this.setState({
      startDate: date? moment(date).format('YYYY-MM-DD').toString() : ''
    });
  }
  
  render() {
    return (
      <DatePicker
        selected={this.state.startDate ? moment(this.state.startDate).toDate() : null}
        onChange={this.handleChange}
        dateFormat="yyyy-MM-dd"
        dateFormatCalendar="yyyy年MM月"
        locale="ja"
      />
    );
  }
}