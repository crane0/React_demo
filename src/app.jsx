import React, {Component} from 'react'
import CommentAdd from './component_add/comment_add'
import CommentList from './component_list/comment_list'

export default class App extends Component {
    state = {
        comments:[
            {name:'Tom1', content:'这是tom1说的话'},
            {name:'Tom2', content:'这是tom2说的话'},
            {name:'Tom3', content:'这是tom3说的话'}
        ]
    }
    /*
    * 因为状态在哪个组件中定义，就要在哪个组件中修改，
    * 所以这个修改的方法，传递的参数就是要修改的内容
    * 最后也要进行更新
    * 所以，将这个方法传递给要做修改的组件。
    * */
    commentAdd = (comment) => {
        const {comments} = this.state
        comments.unshift(comment)

        this.setState({
            comments
        })
    }

    //index对应的是删除的评论的数组下标
    commentRemove = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)

        this.setState({
            comments
        })
    }

    render() {
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd commentAdd={this.commentAdd}/>
                    <CommentList comments={this.state.comments} commentRemove={this.commentRemove}/>
                </div>
            </div>
        )
    }
}