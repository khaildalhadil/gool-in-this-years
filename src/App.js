import MainPaper from './components/MainPaper.js';
import Button from './components/Button.js';
import ListOfGols from './components/ListOfGols.js';
import { useState } from 'react';

export default function App() {

  const [listOfData, setListOfData] = useState([]);
  const [userClickBtn, setUserClickBtn] = useState(false);

  const [targetId, setTargetId] = useState();

  function dataFromMainPage(tital, subTital) {
    const id = listOfData.length
    setListOfData([...listOfData, {id: id, tital: tital, subTital: subTital}]);
    setUserClickBtn(false)
  }

  function toggleFunction() {
    setUserClickBtn(!userClickBtn)
  }

  function showGoleForUser(id) {
    setTargetId(id)
  }

  return (
    <div className="App">
      <MainPaper userClickBtn={userClickBtn} dataFromMainPage={dataFromMainPage} targetId={targetId} />
      <Button toggleFunction={toggleFunction} />
      <ListOfGols listOfData={listOfData} showGoleForUser={showGoleForUser} />
    </div>
  );
}