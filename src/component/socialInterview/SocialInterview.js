import React, { Component } from 'react';

import {Link} from 'react-router-dom';
export default class SocialInterview extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                这里是社招页

                <Link
                to='/socialInterview/detail/0'
                >
                详情
                </Link>
                <div>
                    {`传了个搜索值：${this.props.match.params.value}`}
                </div>
            </div>
        )
    }
}
