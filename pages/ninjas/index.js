//import styles
import Link from 'next/link';
import styles from  '../../styles/Ninja.module.css'

//Run at build time,
export const getStaticProps = async() => {
  //Reaches data 
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await res.json();

//use data props
return {
  props: { ninjas: data}
}
}


const Ninjas = ({ninjas}) => {
  console.log(styles)
  return (
    <div>
      <h1>All ninjas</h1>
      {ninjas.map(ninja => (
        <Link  href={'./ninjas/' + ninja.id} key={ninja.id}>
          {/* Folosesc importul din .styles */}
          <a className={styles.single}>
            <h3> {ninja.name} </h3>
          </a>
          </Link>
      ))}
    </div>
  );
};

export default Ninjas