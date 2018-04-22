import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './comment_list_item.css'

export default class CommentListItem extends Component{

    static propTypes = {
        commentRemove: PropTypes.func.isRequired,
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
    }

    /*
    * 为什么将comments传递到这里，删除无效呢？
    * 因为操作的只是这个参数，并不会影响 this.props！！！
    * 也就是说，原本的根本不会受到影响，
    *   所以，定义状态和修改状态，要放到一个组件中。
    *   所以，传递的props外部数据，是不做修改，只是使用。
    * */
    // remove = () => {
    //     const {comments,index} = this.props
    //     comments.splice(index,1)
    // }

    remove = () => {
        const {commentRemove, comment, index} = this.props

        //先确定删除
        if(window.confirm(`确定要删除${comment.name}的评论吗`)){
            //删除
            commentRemove(index)
        }
    }

    render() {
        //如果是解构赋值，则必须和传递时的名称相同
        const {comment} = this.props

        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.remove}>删除</a>
                </div>
                <p className="user"><span>{comment.name}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}