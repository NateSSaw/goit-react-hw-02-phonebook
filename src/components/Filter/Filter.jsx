import {Component} from 'react';

export default class Filter extends Component {
    onChange = (e) => {
        const { updateFilter } = this.props;
        
        updateFilter(e.target.value);
    }

    render() {
        const { getFilterValue } = this.props;
        return <div><label>Find contacts by name<input type="text" onChange={this.onChange} value={getFilterValue() } /></label></div>
    }
}