import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'vithu',
        year: '20',
        from:'kilinochchi',
        passion: 'It',
        media: 'https://i.pinimg.com/originals/76/45/a9/7645a9b888999bbbfaa7695502c2616e.jpg',
    },
    {
        id: 2,
        name: 'jathu',
        year: '20',
        from: 'london',
        passion: 'It',
        media: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj-s6iz_NTZAhUDL48KHe_1CiwQjRx6BAgAEAY&url=https%3A%2F%2Fwww.filmibeat.com%2Fcelebs%2Fvijay-tamil-actor%2Ffanphotos.html&psig=AOvVaw340aQQHgbh2f2bw1mPu3Hk&ust=1520324476480409',


    },
    {
        id: 3,
        name: 'geeththa',
        year: '20',
        from: 'jaffna',
        pasion: 'It',
        media: 'https://i.pinimg.com/originals/ce/ca/d6/cecad6e039712b856e1b002213b24bdd.jpg',
    },
    {
        id: 4,
        name: 'Ram',
        year: '22' ,
        from:'colombo'
        passion: 'It',
        media: 'http://www.plumeriamovies.com/wp-content/uploads/2017/10/Vijay-in-Mersal-HD.jpg',

    },
    {
        id: 5,
        name: 'Barani',
        year: '20',
        from: 'jaffna',
        passion: 'It',
        media: 'https://img.pinmyhair.com/b27b1b0f88cde054a3bc441f1004243f_vijay-jilla-still-ilayathalapathy-vijay-images-vijay-jilla-theri-vijay-hairstyle-hd-image_472-544.jpg',

    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            {/* Parameter route*/}
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
