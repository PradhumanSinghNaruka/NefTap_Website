// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { MdAttachEmail } from "react-icons/md";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import { FaSquareWhatsapp } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

// const PublicProfile = () => {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const { id } = useParams(); //get user ID from URL

//   useEffect(() => {
//     const fetchPublicProfile = async () => {
//       try {
//         const response = await axios.get(
//           `https://neftap-website-2.onrender.com/userdetail/profile/public/${id}`
//         );
//         setUserData(response.data.userdetail);
//       } catch (err) {
//         setError("Failed to load profile.  First Buy And Create Profile");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPublicProfile();
//   }, [id]);

//   if (loading) return <div>Loading profile...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!userData) return <div>No profile data found</div>;

//   return (
//     <>
//       <div
//         name="Home"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 text-black"
//       >
//         <div className="mt-12 text-center space-y-4 border border-black rounded-2xl shadow-2xl shadow-black mb-3 bg-gradient-to-tr from-yellow-300 via-pink-300 to-blue-300 text-black p-6">
//           {userData.photo?.url && (
//             <img
//               src={userData.photo.url}
//               alt={`${userData.name}'s profile`}
//               style={{ width: "150px", borderRadius: "50%" }}
//               className="border border-white mt-4 ml-20 md:ml-[480px]"
//             />
//           )}
//           <h2 className="font-bold text-2xl text-center">{userData.name}</h2>
//           <h1 className="text-xl font-semibold">{userData.company}</h1>
//           <div className="flex md:ml-[390px] space-x-16 md:space-x-24">
//             <p className="flex justify-center mt-2 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3">
//               <a href={`mailto:${userData.email}`} className="text-2xl">
//                 <MdAttachEmail />
//               </a>
//             </p>
//             <p className="flex justify-center mt-2 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3">
//               <a href={`tel:${userData.number}`} className="text-2xl">
//                 <FaPhoneAlt />
//               </a>
//             </p>

//             <p className="flex justify-center mt-2 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3">
//               <a
//                 href={`${userData.instagram}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl"
//               >
//                 <FaSquareInstagram />
//               </a>
//             </p>
//           </div>
//           <div className="flex md:ml-[390px] space-x-16 md:space-x-24">
//             <p className="flex justify-center mt-8 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3 mb-4">
//               <a
//                 href={`https://wa.me/${userData.whatsapp}`}
//                 className="text-2xl"
//               >
//                 <FaSquareWhatsapp />
//               </a>
//             </p>
//             <p className="flex justify-center mt-8 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3 mb-4">
//               <a href={`${userData.facebook}`} className="text-2xl">
//                 <FaFacebook />
//               </a>
//             </p>
//             <p className="flex justify-center mt-8 cursor-pointer border border-black hover:bg-black hover:text-blue-300 duration-300 rounded-full bg-white p-3 mb-4">
//               <a
//                 href={`${userData.youtube}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-2xl"
//               >
//                 <FaYoutube />
//               </a>
//             </p>
//           </div>
//           <div>
//             {/* <button className="border rounded-lg border-black p-2 w-[300px] md:w-[350px] font-semibold hover:bg-blue-200 duration-300 mb-3">
//               Save Contact
//             </button> */}
//             <button
//               className="border rounded-lg border-black p-2 w-[290px] md:w-[350px] font-semibold hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-blue-500 text-black duration-400 mb-3"
//               onClick={() => {
//                 const { name, phone, email } = userData;

//                 const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:${name}
// TEL;TYPE=CELL:${phone}
// EMAIL:${email}
// END:VCARD
//     `.trim();

//                 const blob = new Blob([vCardData], { type: "text/vcard" });
//                 const url = URL.createObjectURL(blob);

//                 const a = document.createElement("a");
//                 a.href = url;
//                 a.download = `${name.replace(/\s+/g, "_")}.vcf`;
//                 document.body.appendChild(a);
//                 a.click();
//                 document.body.removeChild(a);
//                 URL.revokeObjectURL(url);
//               }}
//             >
//               Save Contact
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PublicProfile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const PublicProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();
  const [visitCount, setVisitCount] = useState(0);
  useEffect(() => {
    if (!id) return;
    console.log("✅ Visit Tracking for User ID:", id);

    axios
      .post(`https://api.neftap.com/api/visit/${id}`)
      .then(() => console.log("✅ Visit recorded"))
      .catch((err) => console.error("❌ Track failed:", err));

    axios
      .get(`https://api.neftap.com/api/visit/${id}`)
      .then((res) => {
        console.log("✅ Visit Count:", res.data);
        setVisitCount(res.data.visitCount || 0);
      })
      .catch((err) => console.error("❌ Fetch failed:", err));
  }, [id]);

  useEffect(() => {
    const fetchPublicProfile = async () => {
      try {
        const response = await axios.get(
          `https://api.neftap.com/userdetail/profile/public/${id}`
        );
        const data = response.data.userdetail;
        setUserData(data);
      } catch (err) {
        setError("Failed to load profile or track visit.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicProfile();
  }, [id]);

  if (loading)
    return <div className="text-center mt-10">Loading profile...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-600">Error: {error}</div>;
  if (!userData)
    return <div className="text-center mt-10">No profile data found</div>;

  return (
    <div className="max-w-6xl mx-auto text-black w-full h-full">
      <div className="bg-white w-full h-full border-black text-center">
        {userData.photo1?.url && (
          <div className="relative w-full">
            <img
              src={userData.photo1.url}
              alt={`${userData.name}'s cover`}
              className="w-full h-[130px] md:h-[180px] object-cover border rounded-xl"
            />
            <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2">
              {userData.photo?.url && (
                <img
                  src={userData.photo.url}
                  alt={`${userData.name}'s profile`}
                  className="w-28 h-28 rounded-full border-4 border-white object-cover"
                />
              )}
            </div>
          </div>
        )}

        <div className="mt-14 px-4 sm:px-6 md:px-8">
          <h2 className="text-3xl font-bold mb-1">{userData.name}</h2>
          <h3 className="text-xl font-semibold mb-4">{userData.company}</h3>
          <h3 className="text-2xl font-semibold">
            <span style={{ color: "#d2a75b" }}>Nef</span>
            <span style={{ color: "black" }}>Tap</span>
          </h3>
          <button
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="mt-4 w-full md:w-96 mb-6 px-6 py-3 font-semibold rounded-full border text-white hover:bg-white hover:text-black duration-300"
            onClick={() => {
              const { name, number, email } = userData;

              const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${number}
EMAIL:${email}
END:VCARD
            `.trim();

              const blob = new Blob([vCardData], { type: "text/vcard" });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = `${name.replace(/\s+/g, "_")}.vcf`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            Save Contact
          </button>
        </div>
        <div className="flex justify-center space-x-12 md:space-x-20 mb-6 flex-wrap">
          <a
            href={`mailto:${userData.email}`}
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:text-black hover:border-black transition duration-300"
          >
            <MdAttachEmail />
          </a>
          <a
            href={`tel:${userData.number}`}
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:text-black hover:border-black transition duration-300"
          >
            <FaPhoneAlt />
          </a>
          <a
            href={userData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:text-black hover:border-black transition duration-300"
          >
            <FaSquareInstagram />
          </a>
        </div>

        <div className="flex justify-center space-x-12 md:space-x-20 flex-wrap">
          <a
            href={`https://wa.me/${userData.whatsapp}`}
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:text-black hover:border-black transition duration-300 mb-4"
          >
            <FaSquareWhatsapp />
          </a>
          <a
            href={userData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:border-black hover:text-black transition duration-300 mb-4"
          >
            <FaFacebook />
          </a>
          <a
            href={userData.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#d2a75b",
            }}
            className="p-3 text-white rounded-full border text-2xl hover:bg-white hover:text-black hover:border-black transition duration-300 mb-4"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PublicProfile;
