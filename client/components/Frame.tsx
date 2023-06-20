interface Props {
  image: string
}

function Frame(props: Props) {
  return (
    <div className="frame">
      <img className="contents" src={props.image} alt="frame contents"></img>
    </div>
  )
}

export default Frame
