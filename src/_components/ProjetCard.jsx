export function ProjetCard({image, titre}) {
return (
  <>
  {/* You can open the modal using document.getElementById('ID').showModal() method */}
  <button className="btn btn-active btn-link h-auto" onClick={()=>document.getElementById('my_modal_3').showModal()}>
    <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Projet" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {titre}
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
      </div>
  </button>

  <dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
  </dialog>
</>
)
}

