import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../redux/actions';
import Post from './Post';

function FetchedPosts() {
    const dispath = useDispatch()
    const posts = useSelector((state) =>  state.posts.fetchedPost )
    if(!posts.length) {
        return <button onClick={() => dispath(fetchPost())} className="btn btn-primary text-center">Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
} 

export default FetchedPosts;