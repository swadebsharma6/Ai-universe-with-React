import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Feature from './Feature';

const Features = () => {
    const [features, setFeatures] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    const [uniqueData, setUniqueData] = useState({});
    
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setUniqueData(data.data))
        
    }, [uniqueId])

    const handleShowAll =() =>{
        setShowAll(true)
    }
  
    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setFeatures(data.data.tools))
    },[])

    return (
        <div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5'>
        {
         features.slice(0, showAll ? 12: 6).map(feature => <Feature
            key={feature.id}
            feature={feature}
            setUniqueId={setUniqueId}
            ></Feature>)
        }
    </div>
    <div>
     {
        !showAll && (
            <span onClick={handleShowAll}><Button>See More </Button></span>
        )
     }
    </div>

    <Modal uniqueData={uniqueData}></Modal>
    </div>
    );
};

export default Features;