import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import ImageModal from "../Modal/ImageModal";

const MyProfile = () => {
  const { user } = useAuth();
  const [editableName, setEditableName] = useState(false);
  const [editableEmail, setEditableEmail] = useState(false);
  const [editablePhone, setEditablePhone] = useState(false);
  //   defining the states for the editable values:
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [imageModal, setImageModal] = useState(false);
  //   updating values to the backend api:
  const handleUpdate = (e) => {
    e.preventDefault();

    const data = { name, email, password, confirmPass, phone };
  };
  const details = user?.data[0];
  return (
    <div className="my-profile-main" style={{ padding: 100, paddingLeft: 180 }}>
      <div className="my-profile-inner">
        <div
          className="profile"
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <div
            className="profile-image"
            style={{
              padding: 5,
              border: "2px solid black",
              borderRadius: "100%",
            }}
          >
            <img
              src={details?.pic && details?.pic}
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "100%",
                objectFit: "cover",
              }}
              onClick={() => setImageModal(!imageModal)}
              alt="pic"
            />
          </div>
          <div
            className="personal-details"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 100,
              width: "100%",
            }}
          >
            <h2
              style={{ borderBottom: "5px solid #e0e0e0", paddingBottom: 15 }}
            >
              Personal Details
            </h2>
            <div className="details-inner" style={{ marginTop: 30 }}>
              <form
                onSubmit={handleUpdate}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                }}
              >
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10rem",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Name
                  </label>
                  <input
                    value={!editableName ? details?.name : name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                    disabled={!editableName ? true : false}
                  />
                  <i
                    className="fas fa-pencil"
                    onClick={() => setEditableName(!editableName)}
                    style={{
                      position: "absolute",
                      top: 50,
                      right: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10rem",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Email
                  </label>
                  <input
                    value={!editableEmail ? details?.email : email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                    disabled={!editableEmail ? true : false}
                  />
                  <i
                    className="fas fa-pencil"
                    onClick={() => setEditableEmail(!editableEmail)}
                    style={{
                      position: "absolute",
                      top: 50,
                      right: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    value={!editablePhone ? details?.phone : phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                    disabled={!editablePhone ? true : false}
                  />
                  <i
                    className="fas fa-pencil"
                    onClick={() => setEditablePhone(!editablePhone)}
                    style={{
                      position: "absolute",
                      top: 50,
                      right: 20,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    marginTop: 30,
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Role
                  </label>
                  <input
                    value={details?.role}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                    disabled={true}
                  />
                </div>
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    marginTop: 30,
                    marginLeft: "10rem",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                  />
                </div>
                <div
                  className="detail"
                  style={{
                    display: "flex",
                    marginTop: 30,
                    marginLeft: "10rem",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label
                    style={{
                      marginBottom: 10,
                      textTransform: "uppercase",
                      fontWeight: 500,
                      color: "black",
                    }}
                  >
                    Confirm Password
                  </label>
                  <input
                    value={confirmPass}
                    onChange={(e) => setConfirmPass(e.target.value)}
                    style={{
                      padding: "10px",
                      backgroundColor: "#e0e0e0",
                      border: "1px solid #e0e0e0",
                      borderRadius: "3px",
                    }}
                  />
                </div>
                {/* Update button to update the values in the backend */}
                <div
                  className="submit-form-button"
                  style={{ width: "100%", marginTop: "3rem" }}
                >
                  <button
                    type="submit"
                    className="update-button"
                    style={{
                      width: "270px",
                      backgroundColor: "rgb(50, 205, 50)",
                      border: "1px solid rgb(50, 205, 50)",
                      borderRadius: "3px",
                      padding: 10,
                      color: "white",
                    }}
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ImageModal imageModal={imageModal} />
    </div>
  );
};

export default MyProfile;
