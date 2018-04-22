import React, {Component} from 'react'

export default class CommentAdd extends Component{

    submit = () => {
        const name = this.refs.name.value.trim()
        const content = this.refs.content.value
        const obj = {
            name,
            content
        }
        //不能为空
        if(name === '' || content === ''){
            return
        }
        //输入后，清空输入框
        this.refs.name.value = ''
        this.refs.content.value = ''

        this.props.commentAdd(obj)
    }

    render() {

        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名" ref='name'/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref='content'/>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.submit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}