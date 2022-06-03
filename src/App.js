/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState(['제목1', '남자코트추천', '포은대로 맛집'])
  const [like, setLike] = useState([0, 10, 0]);
  const [modal, setModal] = useState(false)
  let likeCopy = [...like];
  // function handleLike(i){
  //   setLike(like[i]+1)
  // }

  return (
    <div className="App">
      <div className='TopNav'>
        <h4>Blog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy)
        }}>가나다순 정렬</button>

      {
        title.map((elem, i)=> {
        return (
          <div className='list' key={i}>
            <h4>{elem}
              <span onClick={()=>{setLike(like[i]+1)}}>👍🏻</span> {like[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>    
        )})
        }
      {/* <div className='list'>
        <h4 onClick={()=>{
          let copy = [...title];
          copy[0] = "여자코트추천";
          setTitle(copy);
        }}>{title[0]}<span onClick={handleLike}>👍🏻</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        modal == true ? <Modal/> : null
      }
    </div>
  );
}
const Modal = () => {
  return (
  <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
