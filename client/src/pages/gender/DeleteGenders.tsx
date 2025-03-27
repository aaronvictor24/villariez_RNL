import DeleteGenderForm from "../../components/forms/deleteGenderForm";
import MainLayout from "../layout/MainLayout";

const DeleteGenders = () => {
  const content = (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-3">
          <DeleteGenderForm />
        </div>
      </div>
    </>
  );

  return <MainLayout content={content} />;
};

export default DeleteGenders;
