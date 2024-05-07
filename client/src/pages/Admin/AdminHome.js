import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            <strong>Donor List:</strong> <br />View and manage a list of blood donors,
            including their contact information and blood type.
            <br />
            <strong>Hospital List:</strong><br />
            View and manage a list of hospitals registered with the blood bank.
            <br />
            <strong>Organisation List:</strong><br /> View and manage a list of
            organizations that partner with the blood bank.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
