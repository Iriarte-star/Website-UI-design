import  { useState } from 'react';
import { AiFillInstagram, AiFillFacebook,} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";

const products = [
  {
    id: 1,
    description: 'Mochila-viajera negra ',
    image: '/1.png',
    price: '$99.99',
  },
  {
    id: 2,
    description: 'Mochila-viajera azul',
    image: '/2.png',
    price: '$79.99',
  },
  {
    id: 3,
    description: 'Mochila-viajera Blanca',
    image: '/3.png',
    price: '$129.99',
  },
  // Agrega más productos según sea necesario
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="grid  justify-center items-center h-screen ">
      <div className="   bg-green-900 bg-opacity-50  rounded-md backdrop-blur-sm ml-12 mr-12 ">
      {/*navegacion */}
      <div className='text-white grid grid-cols-3 justify-between ml-6 mt-6 mr-6'>
        <div className='text-white text-left'>
          <h1 className='font-bold text-lg  font-mono'>FACH</h1>
        </div>
        <div className='col-span-1 flex  justify-center '>
          <ul className='flex gap-24   font-mons   tracking-2 text-orange-500 font-bold'>
            <li>contacto</li>
            <li>tienda</li>
            <li>About</li>
          </ul>
        </div>
      </div>
        {/* Contenido del slider */}
        <div className='grid grid-cols-3 items-center p-8'>
        {/* titulo y precio */}
        <div className='text-left  '>
          <h1 className='text-white font-mons text-4xl '>{products[currentIndex].description}</h1>
          <p className=' text-8xl font-mons text-white'> {products[currentIndex].price}</p>
          <button className=' bg-orange-700  font-mono rounded-full text-white p-2 mt-4'> comprar ahora</button>
        </div>
        {/* Imagen con efecto 3D */}
        <div key={products[currentIndex].id} className=" col-span-1 ">
          <div className="flex items-center justify-center relative">
            <img
              src={products[currentIndex].image}
              alt={products[currentIndex].description}
              className="w-full h-full transform scale-125" // Aumento del 20%
            />
          </div>
        </div>
        {/* detalles */}
        <div className='flex  gap-6 items-center justify-between  p-4 '>
          <div className='flex flex-col gap-6 text-sky-400'>
            <div className='flex flex-col text-left'>
              <p className=''>Material</p>
              <p className=' text-white '>100% poliester</p>
            </div>
            <div className='flex flex-col text-left' >
              <p className=''>color</p>
              <p className='text-white'> rojo rosa</p>
            </div>
            <div className=' flex flex-col text-left '>
              <p className=''>tamaño</p>
              <p className='text-white'>193 cm</p>
            </div>
          </div>
          <div className='text-white  flex flex-col gap-6 text-2xl'>
            <AiFillInstagram />
            <AiFillFacebook />
            <BiLogoTiktok/>
          </div>
        </div>

      </div>
    </div>
      {/* Botones de navegación */}
      <div className="slider-buttons mt-4 flex justify-between ml-12 mr-12 mb-4">
        <button onClick={prevSlide} className="prev-button bg-blue-500 text-white px-4 py-2 rounded-full mr-2">
          &lt; Anterior
        </button>
        <button onClick={nextSlide} className="next-button bg-blue-500 text-white px-4 py-2 rounded-full">
          Siguiente &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
