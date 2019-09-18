import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Header extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showColor:true,
             socialColor:false,
        }
    }
    
    render() {
        const {showColor ,socialColor} =this.state;
        return (
            <React.Fragment>
                <div
            className='headerLayout'
          >
            <div
              className='headerContainer'
            >
              <img
                className='headerLogo'
                alt='Logo'
                src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'
              >
              </img>
              <span className="iconfont icon-vertical_line first_line"></span>
              <div
                className='headerIcon'
              >
                社招官网
        </div>
              <div
                className='nav'
              >
                <div>
                    <Link
                    to='/'
                    onClick={()=>{
                        this.setState({
                            socialColor:false,
                            showColor:true,
                        })
                    }}
                    className={showColor?'homecolor':null}
                    >首页</Link>
                    </div>
                <div><Link 
                onClick={()=>{
                    this.setState({
                        socialColor:true,
                        showColor:false,
                    })
                }}
                className={socialColor?'homecolor':null}
                to={`/socialInterview/null`}>社会招聘</Link></div>
                <div><Link to='/'>校园招聘</Link></div>
                <div><Link to='/'>了解阿里</Link></div>
                <div><Link to='/'>个人中心</Link></div>
              </div>
              <div className='login'>
                欢迎来到阿里巴巴集团招聘！
          <a
                  href='/'
                >登录</a>
                <span className="iconfont icon-vertical_line second_line"></span>
                <a
                  href='/'
                >注册</a>
              </div>
            </div>

          </div>
            </React.Fragment>
        )
    }
}
