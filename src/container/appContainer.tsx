import { connect } from 'react-redux'
import Counter from '../component/counter'
import { increment, decrement, reset } from '../actions';

const mapStateToProps = (state:any) => {
    return {
        counter: state
    };
};
const mapDispatchToProps = (dispatch:any) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
