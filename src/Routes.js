import React, {Component} from 'react';
import { Route, Switch} from "react-router-dom";
import PageLayout from "./components/PageLayout";
// Pages
import HomePage from "./components/pages/HomePage";
import NoPageFound from "./components/pages/NoPageFound";
import SettingsPage from "./components/pages/SettingsPage";
import LoginPage from "./components/pages/LoginPage";


class Routes extends Component {
    render() {
        return (
            
                <div style={{ margin: '12px',minHeight:"76vh" }}>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
                        <Route path={"/settings"} exact component={SettingsPage}/>
                        <Route path={"/login"} exact component={LoginPage}/>

                        <Route /*strict*/ component={NoPageFound}/>
                    </Switch>
                </div>
            
        );
    }
}

export default Routes;