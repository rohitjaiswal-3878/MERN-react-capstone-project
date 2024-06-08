import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import backgroundImg from "../assets/background-1.svg";
function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    let newErrors = { ...errors };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      newErrors.name = "Field is required!";
    } else {
      newErrors.name = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      newErrors.username = "Field is required!";
    } else {
      newErrors.username = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      newErrors.email = "Field is required!";
    } else {
      newErrors.email = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      newErrors.mobile = "Field is required!";
    } else {
      newErrors.mobile = "";
    }
    if (!formData.checkbox) {
      newErrors.checkbox = "Check this box if you want to proceed!";
    } else {
      newErrors.checkbox = "";
    }

    setErrors({ ...newErrors });

    if (
      newErrors.name === "" &&
      newErrors.username === "" &&
      newErrors.email === "" &&
      newErrors.mobile === "" &&
      newErrors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genra");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
      }}
    >
      {/* This shows the banner */}
      <div
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "50vw",
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            bottom: "80px",
            left: "50px",
            color: "white",
            fontSize: "3rem",
            whiteSpace: "pre-wrap",
            wordWrap: "breal-word",
            fontWeight: "650",
          }}
        >
          Discover new things on Superapp
        </p>
      </div>
      {/* This shows the form.  */}
      <form
        style={{
          display: "flex",
          gap: "1rem",
          width: "50vw",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          <h3
            style={{
              fontFamily: "Single Day",
              fontSize: "2.8rem",
              fontWeight: "400",
              color: "#72DB73",
            }}
          >
            Super app
          </h3>
          <span
            style={{
              fontFamily: "DM Sans",
              fontWeight: "400",
            }}
          >
            Create your new account
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "40vw",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
              style={{
                border: `1px solid ${errors.name.length > 0 ? "red" : "black"}`,
                padding: "10px 7px",
                borderRadius: "2px",
                width: "280px",
                backgroundColor: "#292929",
                color: "white",
                outline: "none",
              }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
          </div>

          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Username"
              style={{
                border: `1px solid ${
                  errors.username.length > 0 ? "red" : "black"
                }`,
                padding: "10px 7px",
                borderRadius: "2px",
                width: "280px",
                backgroundColor: "#292929",
                color: "white",
                outline: "none",
              }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              style={{
                border: `1px solid ${
                  errors.email.length > 0 ? "red" : "black"
                }`,
                padding: "10px 7px",
                borderRadius: "2px",
                width: "280px",
                backgroundColor: "#292929",
                color: "white",
                outline: "none",
              }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
          </div>

          <div>
            <input
              type="number"
              name="mobile"
              id="mobile"
              onChange={handleChange}
              placeholder="Mobile"
              style={{
                border: `1px solid ${
                  errors.mobile.length > 0 ? "red" : "black"
                }`,
                padding: "10px 7px",
                borderRadius: "2px",
                width: "280px",
                backgroundColor: "#292929",
                color: "white",
                outline: "none",
              }}
            />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.mobile}</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                style={{
                  border: `1px solid ${
                    errors.checkbox.length > 0 ? "red" : "green"
                  }`,
                  borderRadius: "2px",
                  padding: "2px 5px",
                }}
                onChange={handleCheckbox}
              />
              <label
                htmlFor="checkbox"
                style={{ marginLeft: "7px", fontSize: "12px" }}
              >
                {" "}
                Share my registration data with Superapp
              </label>
            </div>
            <p style={{ color: "red", fontSize: "12px" }}>{errors.checkbox}</p>
          </div>

          <input
            type="submit"
            value="Sign up"
            style={{
              padding: "5px 10px",
              borderRadius: "18px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              cursor: "pointer",
              width: "300px",
              marginTop: "25px",
              textTransform: "uppercase",
              fontSize: "18px",
              fontWeight: "600",
            }}
          />
          <div
            style={{
              width: "300px",
              fontSize: "11px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              By clicking on Sign up. you agree to Superapp{" "}
              <span
                style={{
                  color: "#72DB73",
                }}
              >
                Terms and Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span
                style={{
                  color: "#72DB73",
                }}
              >
                Privacy Policy
              </span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
