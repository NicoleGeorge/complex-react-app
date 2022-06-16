import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import Page from './Page';

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/create-post', {
        title,
        body,
        token: localStorage.getItem('complexappToken')
      });
      // Redirect to new post URL
      nav(`/post/${res.data}`);
      console.log('new post was created');
    } catch (err) {
      console.log('there was an error!!');
    }
  };

  return (
    <Page title='Create New Post'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='post-title' className='text-muted mb-1'>
            <small>Title</small>
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            name='title'
            id='post-title'
            className='form-control form-control-lg form-control-title'
            type='text'
            placeholder=''
            autoComplete='off'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='post-body' className='text-muted mb-1 d-block'>
            <small>Body Content</small>
          </label>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            name='body'
            id='post-body'
            className='body-content tall-textarea form-control'
            type='text'
          ></textarea>
        </div>

        <button className='btn btn-primary'>Save New Post</button>
      </form>
    </Page>
  );
};

export default CreatePost;
