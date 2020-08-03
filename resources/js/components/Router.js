import React from 'react';
import { MainPage } from './Main/MainPage';
import {
  Switch,
  Route
} from "react-router-dom";
import { Update } from './Hero/Update';
import { Index } from './Hero/Index';
import { Show } from './Hero/Show';
import { Delete } from './Hero/Delete';
import { Create } from './Hero/Create';
import { NotFound } from './NotFound';

export function Router() {
    return (
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/heroes/:id" component={Show} />
                <Route exact path="/heroes/update/:id" component={Update} />
                <Route exact path="/heroes/delete/:id" component={Delete} />
                <Route exact path="/heroes/create" component={Create} />
                <Route exact path="/heroes" component={Index} />
                <Route component={NotFound} />
            </Switch>
    );
}

   //
