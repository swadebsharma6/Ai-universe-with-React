import React from 'react';

const Modal = ({uniqueData}) => {
    console.log(uniqueData);
    const {image_link, tool_name, integrations,description,features, } = uniqueData;
    return (
        <div>

    <dialog id="my_modal_4" className="modal">
    <div className="modal-box w-11/12 max-w-5xl">
    <div className="card lg:card-side">
   
  <div className="card-body flex-1">
    <h2 className="card-title">{description ? description: "Not Found"}</h2>
     <div className='flex justify-between'> 
     <div>
    <h2 className=' text-xl font-bold'>Features:</h2>

    </div>

    <div>
    <h2 className='text-xl font-bold'>Integration:</h2>
    </div>
     </div>
    
  </div>
  <figure className='flex-1'><img className='w-full h-64' src="" alt="Album"/></figure>
</div>
        <div className="modal-action">

        <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
        </div>
    );
};

export default Modal;