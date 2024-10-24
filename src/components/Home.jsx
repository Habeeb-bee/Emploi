import Nav from './home/Nav';
import Title from './home/Title';


const Home = () => {
    return (
         <div id='home' className="home w-screen h-[722px] 
         flex-none order-1 grow-0 overflow-hidden ">
         <Nav/>
          <Title/> 
         </div>

        
    )
}

export default Home