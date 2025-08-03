import { useState, useEffect } from 'react';

const YourComponent = () => {
  const [selectedSize, setSelectedSize] = useState<
    'Small' | 'Medium' | 'Large'
  >('Medium');

  useEffect(() => {
    // Handle side effects whenever selectedSize changes
    console.log('Selected size changed:', selectedSize);

    // You can also do more logic here, like an API call or validation
  }, [selectedSize]); // Dependency array — run only when selectedSize changes

  return (
    <div>
      <button onClick={() => setSelectedSize('Small')}>Small</button>
      <button onClick={() => setSelectedSize('Medium')}>Medium</button>
      <button onClick={() => setSelectedSize('Large')}>Large</button>
    </div>
  );
};
