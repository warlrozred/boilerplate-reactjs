import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ROOT } from './constants'

import Homepage from '../pages/Homepage'
import NotFound from './NotFound'

export default function RouterConfig() {
    return (
        <Switch>
            <Route exact path={ROOT} component={Homepage} />
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
    )
}