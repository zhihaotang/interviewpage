import * as constants from './actionTypes';
const defaultState={
    interviewList:[
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

export default (state = defaultState,action) =>{
    if (action.type === constants.GET_CHANGE_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.interviewList = action.value;
        return newState;
    }
    return state;
}