/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState(['제목1', '남자코트추천', '포은대로 맛집'])
  const [like, setLike] = useState([0, 10, 0]);
  const [modal, setModal] = useState(false)
  const [titleNum, setTitleNum] = useState(0);
  const [inputVal, setInputVal] = useState('');
  function handleTitleSort(){
    let copy = [...title];
    copy.sort();
    setTitle(copy)
  }

  return (
    <div className="App">
      <div className='TopNav'>
        <h4>Blog</h4>
      </div>
      <button onClick={handleTitleSort
      }>가나다순 정렬</button>

      {
        title.map((elem, i)=> {
        return (
          <div className='list' key={i}>
            <h4 onClick={()=>{
              setModal(!modal);
              setTitleNum(i);
              }}>{elem}
              <span onClick={(e)=>{
                e.stopPropagation();
                console.log(e.target.key)
                let copyLike = [...like];
                copyLike[i] = copyLike[i]+1
                setLike(copyLike)}}>👍🏻</span> {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={(e)=>{
              let copy = [...title];
              copy.splice(i,1)
              setTitle(copy)
            }}>삭제</button>
          </div>    
          
              )})
      }
      <form>
        Enter Title: <input onChange={(e)=>{setInputVal(e.target.value)}} required="required"></input>
        <input type="submit" onClick={(e)=>{
          e.preventDefault();
          let copy = [...title];
          copy.unshift(inputVal)
          setTitle(copy);
        }}></input>
      </form>
      {
        modal == true ? <Modal title={title} style={{backgroundColor:"yellow"}} setTitle={setTitle} titleNum={titleNum}/> : null
      }
    </div>
  );
}
const Modal = (props) => {
  return (
  <div className='modal' style={props.style}>
    <h4>{props.title[props.titleNum]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      let copy = [...props.title];
      copy[0] = '여자코트 추천';
      props.setTitle(copy);
    }}>글수정</button>
  </div>
  )
}

export default App;
