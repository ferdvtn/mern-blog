import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CreateBlog, DetailBlog, Home } from '..'
import { Footer, Header } from '../../components/molecules'
import './mainapp.scss'

const MainApp = () => {
    return (
        <div className='mainapp-wrapper'>
            <Header />
            <div className="content-wrappper">
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
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
