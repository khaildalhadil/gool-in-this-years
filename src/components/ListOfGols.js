import { useState } from 'react';

export default function ListOfGols({listOfData, showGoleForUser}) {

  const [clickId, setClickId] = useState(null);

  return (
    <div className="list_of_gols" >
      <ul>
        {listOfData.map((item, i) => {
          return(
            <Item 
              key={i} 
              id={i} 
              item={item} 
              onUserClick={setClickId} 
              clickId={clickId} 
              showGoleForUser={showGoleForUser} 
            />)
        })}
      </ul>
    </div>
  )
}

function Item({item, id, onUserClick, clickId, showGoleForUser}) {

  function userClick() {
    onUserClick(id);
    showGoleForUser(id);
  }

  return (
    <li 
      value={id}
      onClick={()=> userClick()}
      className={clickId === id? 'target': ''}
    >{item.tital}
    </li>
  )
}