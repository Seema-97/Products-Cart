import React, { Fragment } from 'react'

const Modal = ({receivedCartData}) => {
    if(receivedCartData) {
        console.log(receivedCartData) ;
    }
  return (
    <>
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
            {receivedCartData && (
                <>
                {receivedCartData.map(data => (
                <Fragment key={data.id}>
                <div className="card">
                <h3>{data.info.Shoes.name}</h3>
                <h5>Count :{data.info.Shoes.count}</h5>
                  <h5>Price :{data.info.Shoes.price}</h5>
                 
                </div>

                 <div className="card">
                 <h3>{data.info.Clothes.name}</h3>
                 <h5>Count :{data.info.Clothes.count}</h5>
                  <h5>Price :{data.info.Clothes.price}</h5>
              
                 </div>

                  <div className="card">
                  <h3>{data.info.Watches.name}</h3>
                  <h5>Count :{data.info.Watches.count}</h5>
                  <h5>Price :{data.info.Watches.price}</h5>
                  
                  </div>
                </Fragment>))}
                </>
            )}
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Modal