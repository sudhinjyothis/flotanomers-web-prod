import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function Registration() {
  const [disabled, setDisabled] = React.useState(false);
  function loadScript(src: string) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay(order: any, resetForm: any) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order

    // Getting the order details back

    const options = {
      key: "rzp_test_iETuTIhZn6FzfF", // Enter the Key ID generated from the Dashboard
      amount: order.amount.toString(),
      currency: "INR",
      name: "Flotanomers R&D Pvt Ltd",
      description: " ",
      image:
        "https://static.wixstatic.com/media/b01c62_bc359f338bd24628bb3dc5dff12ecae9~mv2.png/v1/crop/x_0,y_653,w_3509,h_1197/fill/w_300,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/full%20logo%20png.png",
      order_id: order.id,
      handler: async function (response) {
        console.log(response);

        axios
          .post(`https://beta-flotanomers.vercel.app/api/payment/verify`, {
            ...response,
            ...order,
          })
          .then((result) => {
            if (result.data.signatureIsValid) {
              toast.success("Registration Successful");
              resetForm();
              setDisabled(false);
            }
          });
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const TextArea = (props) => <textarea type="text" {...props} />;
  const phoneRegex =
    /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
  const RegistrationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegex, "Phone number is not valid")
      .required("Required"),
    maximumQualification: Yup.string().required("Required"),
    aadharNumber: Yup.string().required("Required"),
    organizationName: Yup.string(),
    permanentAddress: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
  });
  return (
    <section
      style={{
        padding: "2rem",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            setDisabled(true);
            axios
              .post(
                `https://beta-flotanomers.vercel.app/api/payment/create-course-pay`,
                values
              )
              .then((result) => {
                if (result.data.message === "already registered") {
                  toast.error("Already Registered");
                } else {
                  displayRazorpay(result.data, resetForm);
                }
              });
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
                className="rpto-sub-btn"
                style={{
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
