import { Link } from "react-router-dom";
const deleteGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="gender">Delete Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            readOnly
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={"/"} className="btn btn-secondary mr-1">
            CANCEL
          </Link>
          <button type="submit" className="btn btn-danger">
            DELETE
          </button>
        </div>
      </div>
    </>
  );
};

export default deleteGenderForm;
