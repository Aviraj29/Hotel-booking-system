
export default function HeaderItems(props) {
  return <li> <a style={{color:props.color}} href={props.link} target="_blank" rel="noopener noreferrer" ><i className={props.icon}></i></a></li>
  
}
