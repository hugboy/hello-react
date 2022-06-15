import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setName] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    const nextNames = names.concat({
      id: nextId, // names아이디가 4까지 있어 초기값 5로 지정 후 +1 씩 증가
      text: inputText, // 입력한 텍스트
    });
    setNextId(nextId + 1);
    setName(nextNames);
    setInputText('');
  };
  const onRemove = (id) => {
    const nextNames = names.filter((nm) => nm.id !== id);
    setName(nextNames);
  };
  /* 리스트 생성 */
  const nameList = names.map((nm) => (
    <li key={nm.id} onDoubleClick={() => onRemove(nm.id)}>
      {nm.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
