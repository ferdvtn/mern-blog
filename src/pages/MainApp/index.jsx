import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CreateBlog, DetailBlog, Home } from '..'

const MainApp = () => {
    return (
        <div>
            <p>header</p>
            <Router>
                <Switch>
                    <Route path='/create-blog'>
                        <CreateBlog />
                    </Route>
                    <Route path='/detail-blog'>
                        <DetailBlog />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <p>footer</p>
        </div>
    )
}

export default MainApp
