import React from "react";
import InputType from "../../components/shared/form/InputType";

function Login() {
  return (
    <div className="row">
      <div className="col-md-8 form-banner"></div>
      <div className="col-md-4 form-container">
        <form>
          <InputType labelText={'EMail'} labelFor={'EMail'} inputType={'email'} name={'email'} />

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
