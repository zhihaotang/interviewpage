import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import {
// 	CSSTransition,
//     TransitionGroup,
//   } from 'react-transition-group';
import './InterviewList.scss';

class InterviewList extends Component {
    constructor(props) {
        super(props)
		this.myRef = React.createRef();
        this.state = {
             list:[
				 {
					 id:1,
					 value:'本地生活-JAVA开发-杭州、上海',
					 href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP535519',
					 time:'27分钟前',
					 city:'杭州,上海',
				 },
				 {
					id:2,
					value:'盒马-生鲜肉禽蛋采购专家-重庆',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP548037',
					time:'27分钟前',
					city:'重庆',
				},
				{
					id:3,
					value:'ICBU-国际贸易事业部-行业运营专家（大工业）',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP533018',
					time:'27分钟前',
					city:'杭州',
				},
				{
					id:4,
					value:'新零售客户体验-高级商家运营专家-天猫国际',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP575333',
					time:'37分钟前',
					city:'杭州',
				},
				{
					id:5,
					value:'搜索事业部-机器学习平台研发专家-杭州',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP529954',
					time:'37分钟前',
					city:'杭州',
				},
				{
					id:6,
					value:'AliExpress-社交营销专家(意大利)-杭州',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP575253',
					time:'37分钟前',
					city:'杭州',
				},
				{
					id:7,
					value:'阿里集团-ICBU-南粤大区-高级渠道运营专家',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP537334',
					time:'57分钟前',
					city:'广州',
				},
				{
					id:8,
					value:'零售事业部-类目营销专家-杭州',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP556542',
					time:'57分钟前',
					city:'杭州',
				},
				{
					id:9,
					value:'口碑-品牌策略专家',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP070186',
					time:'57分钟前',
					city:'杭州',
				},
				{
					id:10,
					value:'口碑-品牌策略专家',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP070186',
					time:'57分钟前',
					city:'杭州',
				},
				{
					id:11,
					value:'口碑-销售运营专家-业务中台',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP572225',
					time:'57分钟前',
					city:'杭州',
				},
				{
					id:12,
					value:'集团CFO线-资深财务专员（天猫国际）-杭州',
					href:'https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP575801',
					time:'57分钟前',
					city:'杭州',
				},
			 ],
        }
    }
    
    render() {
		const {list} =this.state;
		console.log(this.props.list)

        return (
            <div
            className='interviewListWrapper'
            >
                <div
                className='interviewTitle'
                >
                最新职位
				<Link
				className='clickMore'
				to={`/socialInterview/null`}
				>更多</Link>
                </div>
                {/* <TransitionGroup component='ul'> */}
				<ul 
				className='interViewList'
				ref={this.myRef}
				onMouseOver={()=>{
					console.log(this.myRef.current.style)
					this.myRef.current.style.animationPlayState='paused'
				}}
				onMouseOut={()=>{
					this.myRef.current.style.animationPlayState='running'
				}}
				
				>
					{this.props.list.map((item,index)=>{
						return(
							// <CSSTransition
							// 	key={index}
							// 	timeout={500}
							// 	classNames={'item-animated'}
							// 	// 点击元素卸载元素
							// 	onClick={this.handleRemove.bind(null,index)}
							// >
								<li 
								key ={index+item.value}
								className="scroll-1">
									<Link 							
									className="position" 
									to={`/socialInterview/detail/${item.id}`}		
									>
									{item.value}
									</Link>
									<em className="time">{item.time}</em>
									<em className="city" title="北京">{item.city}</em>
								</li>
								// </CSSTransition>
						)
					})}
                		
					{/* <li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP542928" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里云智能-智能制造咨询-智能制造（北京）</a>
						<em className="time">1小时前</em>
						<em className="city" title="北京">北京</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP572423" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里云智能-智能制造咨询-智能制造（杭州）</a>
						<em className="time">1小时前</em>
						<em className="city" title="杭州">杭州</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP572424" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里云智能-智能制造咨询-智能制造（上海）</a>
						<em className="time">1小时前</em>
						<em className="city" title="上海">上海</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP575515" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">菜鸟-公关专家</a>
						<em className="time">1小时前</em>
						<em className="city" title="杭州">杭州</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP543548" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里集团-财税行业架构师-数字政府-北京/杭州</a>
						<em className="time">1小时前</em>
						<em className="city" title="北京">北京</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP575605" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里集团-公安行业架构师-数字政府-北京/杭州</a>
						<em className="time">1小时前</em>
						<em className="city" title="北京">北京</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP571208" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">阿里集团-淘抢购-行业运营专家（大消费电子/3C数码）</a>
						<em className="time">1小时前</em>
						<em className="city" title="杭州">杭州</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP528916" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">淘宝-数码3C行业-运营专家（手机配件/数码配件/智能设备）</a>
						<em className="time">1小时前</em>
						<em className="city" title="杭州">杭州</em>
					</li>
										<li className="scroll-1">
						<a data-xux-log="text=首页推荐职位" href="https://job.alibaba.com/zhaopin/PositionDetail.htm?positionCode=GP516924" className="position" data-spm-click="gostr=/hr;locaid=newPositionLink">创新事业群UC事业部-用户运营</a>
						<em className="time">1小时前</em>
						<em className="city" title="北京">北京</em>
					</li> */}
					</ul>
                {/* </TransitionGroup> */}
            </div>
        )
    }
}
export default InterviewList;