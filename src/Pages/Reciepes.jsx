import Categories from '../Components/categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Components/Card';
import { useEffect } from 'react';
import { setproducts } from '../redux/Productslice';
import { products } from '../Reciepelist';
import Box from '../Components/Box';

function Reciepes() {
  const { allproducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setproducts(products));
  }, [dispatch]);

  return (
    <Box className="w-full mt-[80px]">
      <Categories />
      <Box
        className="w-full mt-5 px-6 md:px-6 gap-10 grid md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Render recipes cards */}
        {allproducts?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </Box>
    </Box>
  );
}

export default Reciepes;
