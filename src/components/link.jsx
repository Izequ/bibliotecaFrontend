import '../assets/css/link.css'

const Link = ({value, path, nameClass}) => {
  return (
  <a nameClass={nameClass} href={path}>
    {value}
  </a>);
};

export default Link;