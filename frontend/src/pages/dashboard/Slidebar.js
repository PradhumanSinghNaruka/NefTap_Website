// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import { userdetail } from "../../../../backend/controller/userdetail.controller";

// export default function UserProfile() {
//   const [editMode, setEditMode] = useState(false);
//   const [email, setEmail] = useState("");
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
//   const location = useLocation();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: profile,
//   });

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) =>
//         formData.append(key, value)
//       );
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
//         const updatedProfile = {
//           ...returnedUser,
//           photo: returnedUser.photo?.url || profile.photo,
//         };
//         setProfile(updatedProfile);
//         setProfileId(returnedUser._id); // Save for future updates
//         localStorage.setItem("Contactus", JSON.stringify(updatedProfile));
//         alert("Details Saved Successfully");
//         window.location.reload();
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error: " + err.response?.data?.message || "Something went wrong");
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

//   useEffect(() => {
//     const userData = localStorage.getItem("Contactus");
//     if (!userData) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const userdetail = JSON.parse(userData);
//       setEmail(userdetail.email || "");

//       // Fetch latest profile by email
//       axios
//         .get(
//           `http://localhost:4001/userdetail/userdetail/${userdetail.email}`
//         )
//         .then((res) => {
//           if (res.data.userdetail) {
//             const userDetail = res.data.userdetail;
//             setProfile(userDetail);
//             setProfileId(userDetail._id);
//             localStorage.setItem("Contactus", JSON.stringify(userDetail));
//           }
//         })
//         .catch((err) => {
//           console.error("Error fetching profile:", err.message);
//         });
//     } catch (error) {
//       console.error("Invalid JSON in localStorage", error);
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   return (
//     <div className="min-h-screen bg-gray-100 mt-24 flex flex-col md:flex-row w-full max-w-screen-2xl mx-auto px-4">
//       {/* Sidebar */}
//       <div className="w-full md:w-72 bg-white shadow-md flex flex-col items-center p-6 space-y-6 mb-8 md:mb-0">
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
//                 : profile?.photo?.url
//                 ? profile.photo.url
//                 : typeof profile.photo === "string"
//                 ? profile.photo
//                 : "https://via.placeholder.com/150?text=Upload+Photo"
//             }
//             alt="Profile"
//             className="w-32 h-32 object-cover rounded-full border-4"
//           />
//         </label>
//         <h1 className="text-xl text-center">Welcome, 👋</h1>
//         <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
//         <h1 className="text-center">{email}</h1>
//         <p className="text-sm text-gray-500 text-center">{profile.company}</p>
//         <button
//           onClick={() => {
//             localStorage.removeItem("Contactus");
//             alert("Logged Out Successfully");
//             navigate("/");
//           }}
//           className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 duration-300 w-full max-w-[200px] mt-8"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-8">
//         <div className="mb-6">
//           <h1 className="text-xl md:text-2xl font-bold">Add Your Details</h1>
//           {profile && (
//             <p className="text-sm md:text-lg font-thin break-words">
//               Public Profile URL:
//               https://nef-tap-website.vercel.app/userdetail/profile/public/
//               {profile._id}
//             </p>
//           )}
//         </div>

//         <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
//               <div
//                 key={field.name}
//                 className="bg-white p-4 rounded-xl shadow border"
//               >
//                 <label className="text-sm font-medium text-gray-600 block mb-1">
//                   {field.label}
//                 </label>
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       value={profile[field.name] || ""}
//                       {...register(field.name, { required: true })}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                       name={field.name}
//                       onChange={handleInputChange}
//                     />
//                     {errors[field.name] && (
//                       <span className="text-sm text-red-500">
//                         This field is required
//                       </span>
//                     )}
//                   </>
//                 ) : (
//                   <p className="text-gray-800">{profile[field.name]}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end mt-6 flex-wrap gap-2">
//             {editMode ? (
//               <>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
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

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import QRCode from "react-qr-code";
// import { useParams } from "react-router-dom";

// export default function UserProfile() {
//   const [editMode, setEditMode] = useState(false);
//   const [email, setEmail] = useState("");
//   const [photoFile, setPhotoFile] = useState(null);
//   const [profileId, setProfileId] = useState(null);
//   const [visitCount, setVisitCount] = useState(null);
//   const { id } = useParams();
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
//   const location = useLocation();

//   const [showQR, setShowQR] = useState(false);

//   const profileLink = `https://neftap.com/userdetail/profile/public/${profile.id}`;

//   const toggleQR = () => {
//     setShowQR(!showQR);
//   };

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     defaultValues: profile,
//   });

//   const onSubmit = async (data) => {
//     try {
//       const formData = new FormData();
//       Object.entries(data).forEach(([key, value]) =>
//         formData.append(key, value)
//       );
//       if (photoFile) formData.append("photo", photoFile);

//       let res;
//       if (profileId) {
//         // Update profile
//         res = await axios.put(
//           `https://neftap-website-2.onrender.com/userdetail/userdetail/${profileId}`,
//           formData,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//       } else {
//         // Create new profile
//         res = await axios.post(
//           "https://neftap-website-2.onrender.com/userdetail/userdetail",
//           formData,
//           { headers: { "Content-Type": "multipart/form-data" } }
//         );
//       }

//       if (res.data) {
//         const returnedUser = res.data.userdetail || res.data;
//         const updatedProfile = {
//           ...returnedUser,
//           photo:
//             returnedUser.photo?.url ||
//             (typeof returnedUser.photo === "string"
//               ? returnedUser.photo
//               : profile.photo),
//         };
//         setProfile(updatedProfile);
//         setProfileId(returnedUser.id); // ✅ FIXED: use id not _id
//         localStorage.setItem("Contactus", JSON.stringify(updatedProfile));
//         alert("Details Saved Successfully");
//         window.location.reload();
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.error(err);
//       alert(
//         "Error: " + (err.response?.data?.message || "Something went wrong")
//       );
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

//   useEffect(() => {
//     const userData = localStorage.getItem("Contactus");
//     if (!userData) {
//       navigate("/login");
//       return;
//     }

//     try {
//       const userdetail = JSON.parse(userData);
//       setEmail(userdetail.email || "");

//       // Fetch latest profile by email
//       axios
//         .get(
//           `https://neftap-website-2.onrender.com/userdetail/userdetail/${userdetail.email}`
//         )
//         .then((res) => {
//           if (res.data.user) {
//             const userDetail = res.data.user;
//             setProfile(userDetail);
//             setProfileId(userDetail.id); // ✅ FIXED
//             localStorage.setItem("Contactus", JSON.stringify(userDetail));
//           }
//         })
//         .catch((err) => {
//           console.error("Error fetching profile:", err.message);
//         });
//     } catch (error) {
//       console.error("Invalid JSON in localStorage", error);
//       navigate("/dashboard");
//     }
//   }, [navigate]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location.pathname]);

//   useEffect(() => {
//     const fetchVisitCount = async () => {
//       try {
//         const userData = JSON.parse(localStorage.getItem("Contactus"));
//         const profileId = userData?.id;

//         if (!profileId) {
//           console.warn("No profile ID found in localStorage.");
//           return;
//         }

//         const response = await axios.get(
//           `https://neftap-website-2.onrender.com/api/visit/count/${profileId}`
//         );

//         console.log("✅ Visit Count Response:", response.data);

//         const count = Number(response.data);
//         if (!isNaN(count)) {
//           setVisitCount(count);
//         } else {
//           console.warn("Response is not a number:", response.data);
//           setVisitCount(0);
//         }
//       } catch (err) {
//         console.error("Failed to fetch visit count", err);
//         alert("Failed to fetch visit count");
//       }
//     };

//     fetchVisitCount();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 mt-24 flex flex-col md:flex-row w-full max-w-screen-2xl mx-auto px-4">
//       {/* Sidebar */}
//       <div className="w-full md:w-72 bg-white shadow-md flex flex-col items-center p-6 space-y-6 mb-8 md:mb-0">
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
//                 : profile?.photo?.url
//                 ? profile.photo.url
//                 : typeof profile.photo === "string"
//                 ? profile.photo
//                 : "https://via.placeholder.com/150?text=Upload+Photo"
//             }
//             alt="Profile"
//             className="w-32 h-32 object-cover rounded-full border-4"
//           />
//         </label>
//         <h1 className="text-xl text-center">Welcome, 👋</h1>
//         <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
//         <h1 className="text-center">{email}</h1>
//         <p className="text-sm text-gray-500 text-center">{profile.company}</p>
//         {visitCount !== null && (
//           <p className="text-gray-600 font-medium">
//             👀 Your Public Profile Views:{" "}
//             <span className="text-blue-500 font-bold">{visitCount}</span>
//           </p>
//         )}
//         <button
//           onClick={() => {
//             localStorage.removeItem("Contactus");
//             alert("Logged Out Successfully");
//             navigate("/");
//           }}
//           className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 duration-300 w-full max-w-[200px] mt-8"
//         >
//           Logout
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-8">
//         <div className="mb-6">
//           <h1 className="text-xl md:text-2xl font-bold">Add Your Details</h1>
//           {profile && profile.id && (
//             <p className="text-sm md:text-lg font-thin break-words">
//               Public Profile URL:{" "}
//               <a
//                 href={`https://neftap.com/userdetail/profile/public/${profile.id}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-transparent bg-clip-text bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec] underline"
//               >
//                 https://neftap.com/userdetail/profile/public/
//                 {profile.id}
//               </a>
//             </p>
//           )}
//           <div className="mt-6">
//             <button
//               onClick={toggleQR}
//               className="px-4 py-2 bg-gradient-to-tr from-[hsl(176,100%,69%)] via-[hsl(245,100%,76%)] to-[rgb(76,153,247)] transition border rounded-lg text-white font-semibold"
//             >
//               {showQR ? "Hide QR Code" : "Generate QR"}
//             </button>
//           </div>
//           {showQR && (
//             <div className="mt-4 flex flex-col items-center space-y-4">
//               <QRCode value={profileLink} size={180} />
//               <a
//                 href={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
//                   profileLink
//                 )}&size=200x200`}
//                 download="profile-qr.png"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-sm text-[#2ba098] underline"
//               >
//                 Download QR Code
//               </a>
//             </div>
//           )}
//         </div>

//         <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
//               <div
//                 key={field.name}
//                 className="bg-white p-4 rounded-xl shadow border"
//               >
//                 <label className="text-sm font-medium text-gray-600 block mb-1">
//                   {field.label}
//                 </label>
//                 {editMode ? (
//                   <>
//                     <input
//                       type="text"
//                       value={profile[field.name] || ""}
//                       {...register(field.name, { required: true })}
//                       className="w-full border border-gray-300 rounded px-3 py-2"
//                       name={field.name}
//                       onChange={handleInputChange}
//                     />
//                     {errors[field.name] && (
//                       <span className="text-sm text-red-500">
//                         This field is required
//                       </span>
//                     )}
//                   </>
//                 ) : (
//                   <p className="text-gray-800">{profile[field.name]}</p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end mt-6 flex-wrap gap-2">
//             {editMode ? (
//               <>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
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


import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

export default function UserProfile() {
  const [editMode, setEditMode] = useState(false);
  const [email, setEmail] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  const [photo1File, setPhoto1File] = useState(null);
  const [profileId, setProfileId] = useState(null);
  const [visitCount, setVisitCount] = useState(null);
  const { id } = useParams();
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
    photo1: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [showQR, setShowQR] = useState(false);

  const profileLink = `https://neftap.com/userdetail/profile/public/${profile.id}`;

  const toggleQR = () => {
    setShowQR(!showQR);
  };

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
      if (photo1File) formData.append("photo1", photo1File);

      let res;
      if (profileId) {
        res = await axios.put(
          `https://api.neftap.com/userdetail/userdetail/${profileId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      } else {
        res = await axios.post(
          "https://api.neftap.com/userdetail/userdetail",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
      }

      if (res.data) {
        const returnedUser = res.data.userdetail || res.data;
        const updatedProfile = {
          ...returnedUser,
          photo:
            returnedUser.photo?.url ||
            (typeof returnedUser.photo === "string"
              ? returnedUser.photo
              : profile.photo),
          photo1:
            returnedUser.photo1?.url ||
            (typeof returnedUser.photo1 === "string"
              ? returnedUser.photo1
              : profile.photo1
            ),
        };
        setProfile(updatedProfile);
        setProfileId(returnedUser.id);
        localStorage.setItem("Contactus", JSON.stringify(updatedProfile));
        alert("Details Saved Successfully");
        window.location.reload();
        setEditMode(false);
      }
    } catch (err) {
      console.error(err);
      alert(
        "Error: " + (err.response?.data?.message || "Something went wrong")
      );
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

  const handlePhoto1Change = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto1File(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => {
          const updated = { ...prev, photo1: reader.result};
          localStorage.setItem("Contactus", JSON.stringify(updated));
          return updated;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const fetchVisitCount = async (profileId) => {
  try {
    if (!profileId) {
      console.warn("No profile ID for visit count.");
      return;
    }

    const response = await axios.get(
      `https://api.neftap.com/api/visit/${profileId}` // 👈 MATCH THIS WITH BACKEND
    );

    const count = Number(response.data.visitCount); // 👈 FIX: access via `response.data.visitCount`
    setVisitCount(!isNaN(count) ? count : 0);
  } catch (err) {
    console.error("Failed to fetch visit count", err);
  }
};


  useEffect(() => {
    const userData = localStorage.getItem("Contactus");
    if (!userData) {
      navigate("/login");
      return;
    }

    try {
      const userdetail = JSON.parse(userData);
      setEmail(userdetail.email || "");

      axios
        .get(`https://api.neftap.com/userdetail/userdetail/${userdetail.email}`)
        .then((res) => {
          if (res.data.user) {
            const userDetail = res.data.user;
            setProfile(userDetail);
            setProfileId(userDetail.id);
            localStorage.setItem("Contactus", JSON.stringify(userDetail));
            fetchVisitCount(userDetail.id);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-100 mt-24 flex flex-col md:flex-row w-full max-w-screen-2xl mx-auto px-4">
      {/* Sidebar */}
      <div className="w-full md:w-72 bg-white shadow-md flex flex-col items-center p-6 space-y-6 mb-8 md:mb-0">
        <label className="relative w-32 h-32 cursor-pointer">
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
        <h1 className="text-xl text-center">Welcome, 👋</h1>
        <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
        <h1 className="text-center">{email}</h1>
        <p className="text-sm text-gray-500 text-center">{profile.company}</p>
          <p className="text-gray-600 font-medium">
            👀 Your Public Profile Views:{" "}
            <span className="text-blue-500 font-bold">{visitCount}</span>
          </p>        
        <button
          onClick={() => {
            localStorage.removeItem("Contactus");
            alert("Logged Out Successfully");
            navigate("/");
          }}
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-800 duration-300 w-full max-w-[200px] mt-8"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="mb-6">
          <h1>Upload at least 1000 x 150 pixels for better result</h1>
          <label className="relative w-full h-[150px] cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto1Change}
            className="hidden"
          />
          <img
            src={
              photo1File
                ? profile.photo1
                : profile?.photo1?.url
                ? profile.photo1.url
                : typeof profile.photo1 === "string"
                ? profile.photo1
                : "https://via.placeholder.com/150?text=Upload+Photo"
            }
            alt="Upload Cover Photo"
            className="w-full h-[150px] object-cover rounded-b-lg"
          />
        </label>
          <h1 className="text-xl md:text-2xl font-bold">Add Your Details</h1>
          {profile && profile.id && (
            <p className="text-sm md:text-lg font-thin break-words">
              Public Profile URL:{" "}
              <a
                href={`https://neftap.com/userdetail/profile/public/${profile.id}`}
                target="_blank"
                rel="noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-tr from-[rgb(43,160,152)] via-[#554db1] to-[#3788ec] underline"
              >
                https://neftap.com/userdetail/profile/public/
                {profile.id}
              </a>
            </p>
          )}
          <div className="mt-6">
            <button
              onClick={toggleQR}
              className="px-4 py-2 bg-gradient-to-tr from-[hsl(176,100%,69%)] via-[hsl(245,100%,76%)] to-[rgb(76,153,247)] transition border rounded-lg text-white font-semibold"
            >
              {showQR ? "Hide QR Code" : "Generate QR"}
            </button>
          </div>
          {showQR && (
            <div className="mt-4 flex flex-col items-center space-y-4">
              <QRCode value={profileLink} size={180} />
              <a
                href={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
                  profileLink
                )}&size=200x200`}
                download="profile-qr.png"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#2ba098] underline"
              >
                Download QR Code
              </a>
            </div>
          )}
        </div>

        <form id="user-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {/* {errors[field.name] && (
                      <span className="text-sm text-red-500">
                        This field is required
                      </span>
                    )} */}
                  </>
                ) : (
                  <p className="text-gray-800">{profile[field.name]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 flex-wrap gap-2">
            {editMode ? (
              <>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-bold"
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
