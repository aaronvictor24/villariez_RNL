const EditGenderForm = () => {
  return (
    <>
      <div className="form-group">
        <div className="mb-3">
          <label htmlFor="gender">Edit Gender</label>
          <input
            type="text"
            className="form-control"
            id="gender"
            name="gender"
          />
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-secondary">
            NO
          </button>
          <button type="submit" className="btn btn-primary">
            SAVE EDIT
          </button>
        </div>
      </div>
    </>
  );
};

export default EditGenderForm;
