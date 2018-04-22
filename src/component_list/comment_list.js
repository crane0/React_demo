import React, {Component} from 'react'
import PropTypes from 'prop-types'

import CommentListItem from '../component_list_item/comment_list_item'
import './comment_list.css'

export default class CommentList extends Component {
    static propTypes =  {
        commentRemove: PropTypes.func.isRequired,
        comments: PropTypes.array.isRequired,

    }

    render() {
        const {comments, commentRemove} = this.props
        //当删除所有评论后，<h2>将会显示
        const display = comments.length ? 'none' : 'block'

        /*
        * 下面使用 display是对象简写形式
        * 属性值等于属性名所代表的变量
        * */
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <CommentListItem key={index} index={index} comment={comment} commentRemove={commentRemove}/>)
                    }
                </ul>
            </div>
        )
    }
}