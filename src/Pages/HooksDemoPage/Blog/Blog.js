import React, { useEffect, useState } from 'react'

const Blog = () => {
  // console.log('Program Started');
  const [bookTitle, getBookTitle] = useState('React Js');
  const [publishedDate, getPublishedDate] = useState(new Date());

  // in useEffect hook -- first param: effect callback; second param: dependency list
  useEffect(() => {
    // console.log('Inside useEffect');

    // runs after initital rendering
    // this is alternative to lifecycle hooks -- componentDidMount and componentDidUpdate
    // this is ideal place for your REST API calls
    // you can update state from here
    document.title = bookTitle;
  }, [bookTitle])
  // if dependence not given it will re render use effect when the button is clicked.
  // second arg: dependency. it is an array and it is optional
  // if the dep is changed by any means, then useEffect callback will be called

  // console.log('Program Ended');
  return (
    <div>
      <h5>Blog</h5>
      <p>Book Title : {bookTitle}</p>
      <button type = 'button' onClick = {() => {
        getBookTitle('Advanced React Js');
      }}>Change Book Title
      </button>

      <p>Book Published Date : {publishedDate.toString()}</p>
      <button type = 'button' onClick = {() => {
        getPublishedDate(new Date());
      }}>Change Published Date</button>
    </div>
  )
}

export default Blog
