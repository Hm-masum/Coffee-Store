import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-semibold">Update Coffee : {name}</h2>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              defaultValue={quantity}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier"
              defaultValue={supplier}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              defaultValue={taste}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              defaultValue={category}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Details"
              defaultValue={details}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-black text-white"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
