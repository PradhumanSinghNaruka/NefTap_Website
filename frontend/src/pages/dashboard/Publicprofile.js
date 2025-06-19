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
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const trackVisit = async () => {
    if (!id) {
      console.warn("❌ ID missing from URL");
      return;
    }

    try {
      const res = await axios.post(
        "https://neftap-website-2.onrender.com/api/visit",
        {
          userid: id,
          source: "publicURL",
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log("📌 ID from URL:", id);
      console.log("✅ Visit Tracked:", res.data);
    } catch (err) {
      console.error("❌ Visit Track Failed:", err.response?.data || err.message);
    }
  };

  trackVisit();
}, [id]);

  useEffect(() => {
    const fetchPublicProfile = async () => {
      try {
        const response = await axios.get(
          `https://neftap-website-2.onrender.com/userdetail/profile/public/${id}`
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-12 text-black">
      <div className="bg-gradient-to-tr from-[hsl(176,92%,65%)] via-[rgb(100,89,214)] to-[rgb(85,161,255)] rounded-2xl shadow-2xl shadow-black p-6 border border-black text-center">
        {/* Profile Photo */}
        {userData.photo?.url && (
          <img
            src={userData.photo.url}
            alt={`${userData.name}'s profile`}
            className="mx-auto w-36 h-36 rounded-full border-4 border-white mb-4 object-cover"
          />
        )}

        {/* Name and Company */}
        <h2 className="text-3xl font-bold mb-1">{userData.name}</h2>
        <h3 className="text-xl font-semibold mb-6">{userData.company}</h3>

        {/* Contact Icons Group 1 */}
        <div className="flex justify-center space-x-8 md:space-x-20 mb-6 flex-wrap">
          <a
            href={`mailto:${userData.email}`}
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300"
          >
            <MdAttachEmail />
          </a>
          <a
            href={`tel:${userData.number}`}
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300"
          >
            <FaPhoneAlt />
          </a>
          <a
            href={userData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300"
          >
            <FaSquareInstagram />
          </a>
        </div>

        {/* Contact Icons Group 2 */}
        <div className="flex justify-center space-x-8 md:space-x-20 flex-wrap">
          <a
            href={`https://wa.me/${userData.whatsapp}`}
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300 mb-4"
          >
            <FaSquareWhatsapp />
          </a>
          <a
            href={userData.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300 mb-4"
          >
            <FaFacebook />
          </a>
          <a
            href={userData.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full border border-black text-2xl hover:bg-black hover:text-blue-300 transition duration-300 mb-4"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Save Contact Button */}
        <button
          className="mt-6 w-full sm:w-auto px-6 py-3 font-semibold rounded-lg border border-black bg-white hover:bg-gradient-to-tr from-[hsl(176,92%,65%)] via-[rgb(100,89,214)] to-[rgb(85,161,255)] hover:text-black transition duration-400"
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
    </div>
  );
};

export default PublicProfile;
