import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/index';
import Header from './common/Header.js'
import Content from './component/home/Content.js'
import SocialInterview from './component/socialInterview/SocialInterview.js'
import SocialDetail from './component/socialdetail/SocialDetail.js'
import './App.scss';
import './App.css';
import './assets/icon/iconfont.css'


function App() {
    
    return (
      <Provider store ={store}>
        <BrowserRouter>
          <Header></Header>
          <Route path='/' exact component={Content}></Route>
          <Route path='/socialInterview/:value' exact component={SocialInterview}></Route>
          <Route path='/socialInterview/detail/:id' exact component={SocialDetail}></Route>
          {/* <Content></Content> */}
          <div 
          className='footerWrapper'
          >
            <div
            className='footerContent'
            >
              阿里巴巴集团 Copyright ©1999-2019 版权所有
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }


export default App;
