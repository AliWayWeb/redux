import React from 'react';
import { connect } from 'react-redux';
import createPost from '../redux/actions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()
        const {title} = this.state

        if(!title.trim()) {
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({ title: ''})

    }

    changeInputHandler = e => {
        e.persist()
        this.setState(prev => ({
            ...prev, ...{
                [e.target.name]: e.target.value
            }
        }))
    }
    render() {
        return (
            <form onSubmit={this.submitHandler} style={{ width: '50%' }}>
                <div className="col-auto flex">
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                        placeholder="Add" />
                </div>
                <button type="submit" className="btn btn-success mt-2 right">Add</button>
            </form>
        )
    }
}

const mapDispathToProps =  {
    createPost
}

export default connect(null, mapDispathToProps) (PostForm)