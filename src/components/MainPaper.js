import { useState } from "react";

export default function MainPaper({userClickBtn, dataFromMainPage}) {

  const [tital, setTital] = useState('');
  const [subTital, setSubTital] = useState('');

  const [openTheGole, setOpenTheGole] = useState(false);

  // function resast() {
  //   setTital('')
  //   setSubTital('')
  // }

  function addNewGole(e) {
    e.preventDefault();
    dataFromMainPage(tital, subTital);
    setOpenTheGole(true)

  }

  return (
    <div className="main">
      {userClickBtn? 
        <From tital={tital} setTital={setTital} subTital={subTital} setSubTital={setSubTital} addNewGole={addNewGole} />
        : openTheGole ? 
        <div>
          <div>
            <h1>{tital}</h1>
            <div>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
              </svg>
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
            </div>
          </div>
        </div>
        : <h1>الرجاء اختيار ملاحظات</h1>
    }
    </div>
  )
}

// function NewGole() {
//   return(
//     <div className="show_gole" >

//     </div>
//   )
// }

function From ({tital, setTital, subTital, setSubTital, addNewGole}) {
  return (

    <form  className="form">

      <h1>ملاحظة جديدة</h1>
      <div>
        <input 
          value={tital}
          onChange={(e) => setTital(e.target.value)} 
          placeholder="اضف عنوان" /> 
      </div>

      <div>
        <textarea
          value={subTital}
          onChange={(e) => setSubTital(e.target.value)} 
          placeholder="اضف وصف للعنوان" 
        /> 
      </div>

      <div>
        <button onClick={addNewGole} className="btn_add_gole" >أضافة</button>
      </div>

  </form>
  )
}