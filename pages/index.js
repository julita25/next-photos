import Image from 'next/image'
import Gallery from '../components/Gallery'
import styles from '../styles/Home.module.css'




export default function Home({images}) {
 
 
  return (
   
    <div >
      <h1 className={styles.title}>Udroppy challenge</h1>
      <div className={styles.container} >
        <div className={styles.grid}>
          <Gallery images={images}/>
          </div>
      </div>

        
      
         
    </div>
  )


}

//server side props function
export const getServerSideProps = async()  => {
  const res = await fetch (
    'https://pixabay.com/api/?key=23189981-e215ca392c235b319b6ef6740')

  const images = await res.json();

  return{
    props: {
      images //object with images inside
    }
  }
}
