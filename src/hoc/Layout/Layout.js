import React from 'react';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    };

	sideDrawerToggleHandler = () => {
		this.setState((prevState, props) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		})
	}

    render() {
        return (
            <Aux>
                <Toolbar drawerTogglerClick ={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
