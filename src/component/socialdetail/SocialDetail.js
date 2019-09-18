import React, { Component } from 'react'

export default class SocialDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
               这里是详情页
               <div>
                    {`传了个招聘详情ID：${this.props.match.params.id}`}
                </div> 
            </React.Fragment>
        )
    }
}
