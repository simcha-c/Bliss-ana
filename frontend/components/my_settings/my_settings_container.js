import { connect } from 'react-redux';
import MySettings from './my_settings.jsx';

const msp = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

export default connect(msp)(MySettings);