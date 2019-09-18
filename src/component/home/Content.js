import React, { Component } from 'react'
import { connect } from 'react-redux'; 
import {Link} from 'react-router-dom';
import InterviewList from './InterviewList.js';

class Content extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputPlaceholder:'请输入职位关键词',
        }
    }
    handleInputOnFocus = (e)=>{
        console.log(e.target.placeholder)
        this.setState({
          inputPlaceholder:'',
        })
      }
      handleInputOnBlur = (e) =>{
        this.setState({
          inputPlaceholder:'请输入职位关键词',
        })
      }
    render() {
        const {inputPlaceholder} = this.state;
        return (
            <React.Fragment>
                <div className='interviewContainer'>
            <img
              className='interviewImage'
              src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"
              alt=''
            ></img>
            <div
              className='backgroundContainer'
            >
              <div
                className='midContainer'
              >
                <p>
                  If not now, when?
            </p>
                <p>
                  If not me, who?
            </p>
                <p>
                  此时此刻，非我莫属！
            </p>
                <div
                  className='searchContainer'
                >
                  <div
                  className='backgroundSet'
                  >

                  </div>
                 <input
                  className='searchInput'
                  placeholder={inputPlaceholder}
                  onChange={this.inputSearchValue}
                  onFocus={this.handleInputOnFocus}
                  onBlur={this.handleInputOnBlur}
                  >
                  </input>
                  <button
                  className='searchButton'
                  >
                  搜索
                  </button>
                </div>
                <div
                className='hotText'
                >
                  热门搜索：
                  
                  <Link
                  to={`/socialInterview/${decodeURI('java')}`}
                  >
                  java
                  </Link>
                    
                  
                  <a
                  href='/'
                  >
                    ios
                  </a>
                  <a
                  href='/'
                  >
                    数据
                  </a>
                  <a
                  href='/'
                  >
                    安全
                  </a><a
                  href='/'
                  >
                    搜索
                  </a><a
                  href='/'
                  >
                    算法
                  </a>
                </div>
                
              </div>
            </div>
          </div>
          <div
          className='newPosition'
          >
            <div
            className='newContent'
            >
              <div
              className='newPosition-list'
              >
                <InterviewList
                list={this.props.list}
                ></InterviewList>
              </div>
              <div
              className='recommendWrapper'
              >
                <a
                className='aliyun'
                href='/'
                >
                <img
                className='aliyun-image'
                src='https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png'
                alt=''
                >
                </img>
                </a>
                <a
                className='aliIntell'
                href='/'
                >
                 <img
                className='aliIntell-image'
                src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'
                alt=''
                >
                </img>
                </a>
              </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
  console.log(state)
  return {
      list: state.home.interviewList,
  }
}
export default connect(mapStateToProps,null)(Content);