import Link from "next/link";
import styles from  '../styles/recipe.module.css'
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {BiLogoLinkedin} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'



export default function Footer() {
    return (
      <footer className=" bg-blue-950   text-white h-[600px]  pt-9 pl-10 text-left3xl gap-[20px] ">
        <h1 className=" text-4xl pt-2 pb-7  font-bold capitalize ">
          recipe central
        </h1>
      <main>
      <nav className="grid grid-cols-3  font-bold capitalize gap-[200px] hover:border-b-3 border-white    ">
        <ul  >
          <Link href='/'>
          <li className="cursor-pointer mt-0" >home</li>
          </Link>
          <Link href='/'>
          <li className="hover:border-b-3 border-white cursor-pointer mt-0" >specification</li>
          </Link>
          <Link href='/'>
          <li className="hover:border-b-3 border-white cursor-pointer mt-0" >drinks</li>
          </Link>
          <Link href='/'>
          <li className="hover:border-b-3 border-white cursor-pointer mt-0" >contact/mail</li>
          </Link>
        </ul>

        <ul>
          <Link href='/'>
          <li>terms/conditions</li>
          </Link>
          <Link href='/'>
          <li>privacy policy</li>
          </Link>
        </ul>
         
         <ul>
          <Link href='/'>
          <li>about us</li>
          </Link>
          <ul className=" mt-10  flex flex-row gap mr-8">
            <li className={`${styles.footer}`}><BiLogoFacebook/></li>
            <li className={`${styles.footer}`}><AiOutlineTwitter/></li>
            <li className={`${styles.footer}`}><BsWhatsapp/></li>
            <li className={`${styles.footer}`}><BiLogoLinkedin/></li>
            <li className={`${styles.footer}`}><AiOutlineInstagram/></li>
          </ul>   
         </ul>
      </nav>
      </main><br />
          {/* <p>&copy;  {new Date().getFullYear()}</p> */}
          <main><h1 className=" border-b-2 text-4xl font-bold w-[150px] capitalize">
        central
      </h1>
      <h6 className=" uppercase text-xs">where flavour meets inspiration</h6> 
      <p className=" mt-11 font-bold">Discover the art of culinary creativity with <Link href='/'>Recipe Central</Link>.</p>
      <p className=" mt-3 font-bold">From delightful desserts to savory sensations, we're your trusted source for mouthwatering recipes and cooking inspiration. </p>
      <p className=" mt-3 font-bold">Join our culinary community and savor the joy of home-cooked meals. Happy cooking!"</p>
      <p className=" mt-3 font-bold mr-2">Feel free to replace recipe central with the actual name of your recipe website. This write-up provides a warm invitation to explore the website's recipes and join the community of cooking enthusiasts.</p>
      
       </main>
      
      </footer>
    )
  }
  