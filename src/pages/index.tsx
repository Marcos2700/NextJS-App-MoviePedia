import type { NextPage } from 'next';
import { ApplicationWrapper } from '../components/layout/ApplicationWrapper';

type HomeProps = {
  response : string;
}

const Home : NextPage<HomeProps> = () => {
  return (
    <ApplicationWrapper 
    title='Home'
    description='Home of MoviePedia'
    >
      <div className="grow flex flex-col justify-center items-center bg-[url('/images/home-img.jpg')]">
        <div className="grow flex flex-col bg-black w-full justify-center items-center opacity-70">
          
          <h1 className="text-7xl font-bold underline text-white">
            ¡Bienvenidos a MoviePedia!
          </h1>    
          <legend>Author: Marcos Escobar</legend>
          <legend>Email: marcos.escobar3@utp.ac.pa</legend> 
        </div>  
      </div>
    </ApplicationWrapper>
  );
};

export default Home;