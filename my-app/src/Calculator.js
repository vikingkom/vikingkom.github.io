import React from 'react';

class Calculator extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

      render(){
        return (<form>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <Result val={this.state.value}/>
        </form> )
      } 
    
}

function Result(props)
{
    const {val} = props;
    const split = calc(val);
    return <div>
        <h2>Vouchers: {split.vouchers}</h2>
        <h2>Rest: {split.rest}</h2>    
    </div>
}

function calc(val){
    let voucherCount = Math.floor(val/4.4);
    let rest = (val - voucherCount*4.4).toFixed(2);
    return {
        vouchers: voucherCount,
        rest: rest
    }
}

export default Calculator;