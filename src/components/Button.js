

export default function Button({toggleFunction}) {
  return (
    <div className="btn" >
      <button onClick={toggleFunction} >+</button>
    </div>
  )
}