function block(props) {
  const {image} =  props;
  const {title} =  props;
  const {text} =  props;
  const {addictionalText} = props;
  const {iconImg} = props;

  return(
    <>
    <div className='blocks'>
        <li>{title}</li>
        <img src={image} alt=""/>
        <img src={iconImg} alt="" />
        <p>{addictionalText}</p>
        <span>{text}</span>
      </div>
    </>
  )
}
export default block;