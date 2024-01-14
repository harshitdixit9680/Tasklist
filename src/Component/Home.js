import React, { useState, lazy, Suspense } from 'react'
import Tasklist from './Tasklist';
import Item from './Item';
const NewComponent = lazy(() => import('./Item'));
const Home = (props) => {
  const [components, setComponents] = useState([]);

  

  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    const newComponent = <Tasklist  />;
    setComponents([...components, newComponent]);
    setShowNewComponent(true);
  };

  return (
    <>
    
    <button onClick={handleButtonClick}type="button" class="btn btn-light button1">Create List</button>
    {/* {showComponent && <Tasklist />} */}
    {components.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
{/* {items} */}

{showNewComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <Tasklist />
        </Suspense>
      )}
    </>
  )
}

export default Home
