import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addPost} from "../redux/postsReducer";
import Alert from "./Alert";
import {showAlert} from "../redux/loaderReducer";

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;
        const newPost = {
            id: Date.now().toString(),
            title
        }

        if(!title.trim()) {
            return this.props.showAlert('qwe')
        } else {
            this.props.addPost(newPost);
        }

        this.setState({
            title: ''
        })
    }

    changeInputHandler = (e) => {
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert} />}

                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">Create</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        alert: state.loader.alert
    }
}

const mapDispatchToProps = {
    addPost,
    showAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);