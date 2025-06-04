import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [profile, setProfile] = useState({
    name: "",
    number: "",
    whatsapp: "",
    instagram: "",
    facebook: "",
    youtube: "",
    email: "",
    company: "",
    photo: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: profile,
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) =>
        formData.append(key, value)
      );
      if (photoFile) formData.append("photo", photoFile);

      let res;
      if (profileId) {
        // Update existing profile
        res = await axios.put(
          `https://neftap-website-2.onrender.com/userdetail/userdetail/${profileId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        // Create new profile
        res = await axios.post(
          "https://neftap-website-2.onrender.com/userdetail/userdetail",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      if (res.data) {
        const returnedUser = res.data.userdetail || res.data;
        const updatedProfile = {
          ...returnedUser,
          photo: returnedUser.photo?.url || profile.photo,
        };
        setProfile(updatedProfile);
        setProfileId(returnedUser._id); // Save for future updates
        localStorage.setItem("Contactus", JSON.stringify(updatedProfile));
        alert("Details Saved Successfully");
        window.location.reload();
        setEditMode(false);
      }
    } catch (err) {
      console.error(err);
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => {
      const updated = { ...prev, [name]: value };
      localStorage.setItem("Contactus", JSON.stringify(updated));
      return updated;
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => {
          const updated = { ...prev, photo: reader.result };
          localStorage.setItem("Contactus", JSON.stringify(updated));
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem("Contactus");
    if (!userData) {
      navigate("/login");
      return;
    }

    try {
      const user = JSON.parse(userData);
      setEmail(user.email || "");

      // Fetch latest profile by email
      axios
        .get(`https://neftap-website-2.onrender.com/userdetail/userdetail/${user.email}`)
        .then((res) => {
          if (res.data.userdetail) {
            const userDetail = res.data.userdetail;
            setProfile(userDetail);
            setProfileId(userDetail._id);
            localStorage.setItem("Contactus", JSON.stringify(userDetail));
          }
        })
        .catch((err) => {
          console.error("Error fetching profile:", err.message);
        });
    } catch (error) {
      console.error("Invalid JSON in localStorage", error);
      navigate("/dashboard");
    }
  }, [navigate]);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-100 mt-24 block md:flex w-[375px] md:w-full">
      <div className="w-[375px] md:w-72 bg-white shadow-md flex flex-col items-center p-6 space-y-6">
        <label className="relative w-32 h-32 mb-4 cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
          <img
            src={
              photoFile
                ? profile.photo
                : profile?.photo?.url
                ? profile.photo.url
                : typeof profile.photo === "string"
                ? profile.photo
                : "https://via.placeholder.com/150?text=Upload+Photo"
            }
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4"
          />
        </label>
        <h1 className="text-xl">Welcome, 👋</h1>
        <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
        <h1>{email}</h1>
        <p className="text-sm text-gray-500">{profile.company}</p>
        <button
          onClick={() => {
            localStorage.removeItem("Contactus");
            alert("Logged Out Successfully");
            navigate("/");
          }}
          className="bg-red-600 text-white px-6 py-2 rounded border hover:bg-red-800 duration-300 w-[200px] mt-12"
        >
          Logout
        </button>
      </div>

      <div className="flex-1 p-4 md:p-8">
        <div className="block justify-between items-center mb-6 w-[350px] md:w-full">
          <h1 className="text-xl md:text-2xl font-bold">Add Your Details</h1>
          {profile && (
            <p className="text-sm md:text-lg font-thin w-[350px] md:w-full">
              Public Profile URL: https://neftap-website-2.onrender.com/profile/{profile._id}
            </p>
          )}
        </div>

        <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[355px] md:w-full">
            {[
              { label: "Full Name", name: "name" },
              { label: "Phone Number", name: "number" },
              { label: "WhatsApp Number", name: "whatsapp" },
              { label: "Instagram", name: "instagram" },
              { label: "Facebook", name: "facebook" },
              { label: "YouTube", name: "youtube" },
              { label: "Email ID", name: "email" },
              { label: "Company Name", name: "company" },
            ].map((field) => (
              <div
                key={field.name}
                className="bg-white p-4 rounded-xl shadow border"
              >
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  {field.label}
                </label>
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={profile[field.name] || ""}
                      {...register(field.name, { required: true })}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      name={field.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">
                        This field is Required
                      </span>
                    )}
                  </>
                ) : (
                  <p className="text-gray-800">{profile[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          {/* ✅ Save and Cancel buttons moved inside the form */}
          <div className="flex justify-end mt-6">
            {editMode ? (
              <>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold mr-2"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-bold"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => setEditMode(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// export default function UserProfile() {
//   const [editMode, setEditMode] = useState(false);
//   const [photoFile, setPhotoFile] = useState(null);
//   const [profileId, setProfileId] = useState(null);
//   const [profile, setProfile] = useState({
//     name: "",
//     number: "",
//     whatsapp: "",
//     instagram: "",
//     facebook: "",
//     youtube: "",
//     email: "",
//     company: "",
//     photo: "",
//   });

//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     defaultValues: profile,
//   });

//   // When profile changes, reset the form values
//   useEffect(() => {
//     reset(profile);
//   }, [profile, reset]);

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) => {
//         formData.append(key, value);
//       });
//       if (photoFile) formData.append("photo", photoFile);

//       let res;
//       if (profileId) {
//         // Update existing profile
//         res = await axios.put(
//           `http://localhost:4001/userdetail/userdetail/${profileId}`,
//           formData,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//       } else {
//         // Create new profile
//         res = await axios.post(
//           "http://localhost:4001/userdetail/userdetail",
//           formData,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//       }

//       if (res.data) {
//         const returnedUser = res.data.userdetail || res.data;
//         setProfile({
//           ...returnedUser,
//           photo: returnedUser.photo?.url || "",
//         });
//         setProfileId(returnedUser._id);
//         localStorage.setItem("Contactus", JSON.stringify(returnedUser));
//         alert("Details Saved Successfully");
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error: " + (err.response?.data?.message || "Something went wrong"));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => {
//       const updated = { ...prev, [name]: value };
//       localStorage.setItem("Contactus", JSON.stringify(updated));
//       return updated;
//     });
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhotoFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfile((prev) => {
//           const updated = { ...prev, photo: reader.result };
//           localStorage.setItem("Contactus", JSON.stringify(updated));
//           return updated;
//         });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Load user data on mount
//   useEffect(() => {
//     const userData = localStorage.getItem("Contactus");
//     if (!userData) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const user = JSON.parse(userData);
//       if (user.email) {
//         axios
//           .get(`http://localhost:4001/userdetail/userdetail/${user.email}`)
//           .then((res) => {
//             if (res.data.userdetail) {
//               setProfile({
//                 ...res.data.userdetail,
//                 photo: res.data.userdetail.photo?.url || "",
//               });
//               setProfileId(res.data.userdetail._id);
//               localStorage.setItem("Contactus", JSON.stringify(res.data.userdetail));
//             } else {
//               setProfile(user);
//             }
//           })
//           .catch((err) => {
//             console.error("Error fetching profile:", err.message);
//             setProfile(user);
//           });
//       } else {
//         setProfile(user);
//       }
//     } catch (error) {
//       console.error("Invalid JSON in localStorage", error);
//       navigate("/login");
//     }
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 mt-24 block md:flex w-[375px] md:w-full">
//       <div className="w-[375px] md:w-72 bg-white shadow-md flex flex-col items-center p-6 space-y-6">
//         <label className="relative w-32 h-32 mb-4 cursor-pointer">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoChange}
//             className="hidden"
//           />
//           <img
//             src={
//               photoFile
//                 ? profile.photo
//                 : profile?.photo
//                 ? profile.photo
//                 : "https://via.placeholder.com/150?text=Upload+Photo"
//             }
//             alt="Profile"
//             className="w-32 h-32 object-cover rounded-full border-4"
//           />
//         </label>
//         <h1 className="text-xl">Welcome, 👋</h1>
//         <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>
//         <h1>{profile.email}</h1>
//         <p className="text-sm text-gray-500">{profile.company}</p>
//         <button
//           onClick={() => {
//             localStorage.removeItem("Contactus");
//             alert("Logged Out Successfully");
//             navigate("/");
//           }}
//           className="bg-red-600 text-white px-6 py-2 rounded border hover:bg-red-800 duration-300 w-[200px] mt-12"
//         >
//           Logout
//         </button>
//       </div>

//       <div className="flex-1 p-4 md:p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-xl md:text-2xl font-bold">Add Your Details</h1>
//         </div>

//         <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[355px] md:w-full">
//             {[
//               { label: "Full Name", name: "name" },
//               { label: "Phone Number", name: "number" },
//               { label: "WhatsApp Number", name: "whatsapp" },
//               { label: "Instagram", name: "instagram" },
//               { label: "Facebook", name: "facebook" },
//               { label: "YouTube", name: "youtube" },
//               { label: "Email ID", name: "email" },
//               { label: "Company Name", name: "company" },
//             ].map((field) => (
//               <div key={field.name} className="bg-white p-4 rounded-xl shadow border">
//                 <label className="text-sm font-medium text-gray-600 block mb-1">
//                   {field.label}
//                 </label>
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       {...register(field.name, { required: true })}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                       name={field.name}
//                       value={profile[field.name] || ""}
//                       onChange={handleInputChange}
//                     />
//                     {errors[field.name] && (
//                       <span className="text-sm text-red-500">This field is required</span>
//                     )}
//                   </>
//                 ) : (
//                   <p className="text-gray-800">{profile[field.name]}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-end mt-6">
//             {editMode ? (
//               <>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold mr-2"
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setEditMode(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 font-bold"
//                 >
//                   Cancel
//                 </button>
//               </>
//             ) : (
//               <button
//                 type="button"
//                 onClick={() => setEditMode(true)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
//               >
//                 Edit
//               </button>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
