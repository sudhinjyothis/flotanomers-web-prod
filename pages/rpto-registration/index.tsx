import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function Registration() {
  const TextArea = (props) => <textarea type="text" {...props} />;
  const phoneRegex =
    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
  const RegistrationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().matches(phoneRegex, "Phone number is not valid").required("Required"),
    maximumQualification: Yup.string().required("Required"),
    aadharNumber: Yup.string().required("Required"),
    organizationName: Yup.string(),
    permanentAddress: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
  });
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <img
          src="assets/images/logos/flot-logo-black.png"
          alt="Logo"
          title="Logo"
          style={{
            width: "15rem",
            height: "auto",
          }}
        />
      </div>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "#000",
            fontSize: "2rem",
            padding: "2rem",
            textDecoration: "underline",
          }}
        >
          RPTO Registration
        </h1>
      </div>
      <div>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            phoneNumber: "",
            maximumQualification: "",
            aadharNumber: "",
            organizationName: "",
            permanentAddress: "",
            course: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="registration-form">
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    FullName
                  </label>
                  <Field
                    name="fullName"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.fullName
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.fullName && touched.fullName ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.fullName}
                      </p>
                    </div>
                  ) : null}
                </div>

                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.email
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.email && touched.email ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.email}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Phone Number
                  </label>
                  <Field
                    name="phoneNumber"
                    type="number"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.phoneNumber
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.phoneNumber}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Maximum Qualification
                  </label>
                  <Field
                    name="maximumQualification"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.maximumQualification
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.maximumQualification &&
                  touched.maximumQualification ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.maximumQualification}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Aadhar Number
                  </label>
                  <Field
                    name="aadharNumber"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.aadharNumber
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.aadharNumber && touched.aadharNumber ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.aadharNumber}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Organization Name/Individual
                  </label>
                  <Field
                    name="organizationName"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.organizationName
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  />
                  {errors.organizationName && touched.organizationName ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.organizationName}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Permanent Address
                  </label>
                  <Field
                    name="permanentAddress"
                    type="text"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.permanentAddress
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                    as={TextArea}
                  />
                  {errors.permanentAddress && touched.permanentAddress ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.permanentAddress}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="input-form">
                  <label
                    style={{
                      color: "#000",
                      fontSize: "0.8rem",
                    }}
                  >
                    Course
                  </label>
                  <Field
                    name="course"
                    as="select"
                    style={{
                      fontSize: "0.75rem",
                      paddingLeft: "1rem",
                      border: errors.course
                        ? "1px solid red"
                        : "1px solid #FFC614",
                    }}
                  >
                    <option>Select Course</option>
                    <option value="Rotorcraft in VLOS">
                      Rotorcraft in VLOS
                    </option>
                  </Field>
                  {errors.course && touched.course ? (
                    <div>
                      <p
                        style={{
                          color: "red",
                        }}
                      >
                        {errors.course}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              <button
                style={{
                  backgroundColor: "#FFC614",
                  color: "#000",
                  border: "none",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  marginTop: "2rem",
                }}
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Registration;
