// import Userdetail from "../modal/userdetail.modal.js";
// import cloudinary from "../Cloudinary.js";

// export const userdetail = async (req, res) => {
//   try {
//     const { name, number, whatsapp, instagram, facebook, youtube, email, company } = req.body;

//     let photoData = {};

//     if (req.files && req.files.photo) {
//       const file = req.files.photo;
//       const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
//       if (!allowedFormats.includes(file.mimetype)) {
//         return res.status(400).json({ message: "Invalid photo format. Only JPG and PNG allowed." });
//       }

//       const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath, {
//         folder: "user_photos",
//       });

//       photoData.public_id = cloudinaryResponse.public_id;
//       photoData.url = cloudinaryResponse.secure_url;
//     }

//     let user = await Userdetail.findOne({ email });

//     if (user) {
//   user = await Userdetail.findOneAndUpdate(
//     { email },
//     {
//       name,
//       number,
//       whatsapp,
//       instagram,
//       facebook,
//       youtube,
//       company,
//       ...(req.files?.photo && { photo: photoData }), // Only update if new photo uploaded
//     },
//     { new: true }
//   );
// } else {

//       user = new Userdetail({
//         name,
//         number,
//         whatsapp,
//         instagram,
//         facebook,
//         youtube,
//         email,
//         company,
//         photo: photoData,
//       });
//       await user.save();
//     }

//     res.status(200).json({
//       message: "Profile saved successfully",
//       userdetail: user,
//     });
//   } catch (error) {
//     console.log("Error: " + error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// export const updateUserDetail = async (req, res) => {
//   try {
//     const { profileId } = req.params;
//     const { name, number, whatsapp, instagram, facebook, youtube, email, company } = req.body;

//     const user = await Userdetail.findById(profileId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     let updatedPhoto = user.photo;

//     if (req.files && req.files.photo) {
//       const file = req.files.photo;
//       const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
//       if (!allowedFormats.includes(file.mimetype)) {
//         return res.status(400).json({ message: "Invalid photo format. Only JPG and PNG allowed." });
//       }

//       if (user.photo?.public_id) {
//         await cloudinary.uploader.destroy(user.photo.public_id);
//       }

//       const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath, {
//         folder: "user_photos",
//       });

//       updatedPhoto = {
//         public_id: cloudinaryResponse.public_id,
//         url: cloudinaryResponse.secure_url,
//       };
//     }

//     const updatedUser = await Userdetail.findByIdAndUpdate(
//       profileId,
//       {
//         name,
//         number,
//         whatsapp,
//         instagram,
//         facebook,
//         youtube,
//         email,
//         company,
//         photo: updatedPhoto,
//       },
//       { new: true }
//     );

//     res.status(200).json({
//       message: "Profile updated successfully",
//       userdetail: updatedUser,
//     });
//   } catch (err) {
//     console.error("Update error:", err);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // Fetch user profile by email
// export const getUserByEmail = async (req, res) => {
//   try {
//     const { email } = req.params;
//     const user = await Userdetail.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User Not Found" });
//     }
//     res.status(200).json({ userdetail: user });
//   } catch (error) {
//     console.error("Error fetching user:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// export const getPublicUserProfile = async (req, res) => {
//   try {
//     const userId = req.params.id; // id from URL param
//     const user = await Userdetail.findById(userId).select(
//       "_id name email company number whatsapp instagram facebook youtube photo"
//     );

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ userdetail: user });
//   } catch (error) {
//     console.error("Error fetching public profile:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

import cloudinary from "../Cloudinary.js";
import db from "../config/db.js";

//data save
export const userdetail = async (req, res) => {
  try {
    const {
      name,
      number,
      whatsapp,
      instagram,
      facebook,
      youtube,
      email,
      company,
    } = req.body;
    const [existingUserdetail] = await db.execute(
      "SELECT * FROM userprofile WHERE email = ?",
      [email]
    );

    let photoData = {}; 

    if (req.files && req.files.photo) {
      const file = req.files.photo;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res
          .status(400)
          .json({ message: "Invalid photo format. Only JPG and PNG allowed." });
      }

      const cloudinaryResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "user_photos",
        }
      );

      photoData.public_id = cloudinaryResponse.public_id;
      photoData.url = cloudinaryResponse.secure_url;
    }

    let photo1Data = {};

    if (req.files && req.files.photo1) {
      const file = req.files.photo1;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if(!allowedFormats.includes(file.minetype)){
        return res
          .status(400)
          .json({message: "Invalid photo format, Only JPG and PNG image are upload"});
      }
      const cloudinaryResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "user_photos1",
        }
      );
      photo1Data.public_id = cloudinaryResponse.public_id;
      photo1Data.url = cloudinaryResponse.secure_url;
    }

    if (existingUserdetail.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const [result] = await db.execute(
      "INSERT INTO userprofile (name, number, whatsapp, instagram, facebook, youtube, email, company) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [name, number, whatsapp, instagram, facebook, youtube, email, company]
    );
    res.status(201).json({
      message: "Details Saved Successfully",
      userdetail: {
        id: result.insertId,
        name,
        number,
        whatsapp,
        instagram,
        facebook,
        youtube,
        email,
        company,
      },
    });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//update userdetail
export const updateUserDetail = async (req, res) => {
  try {
    const { profileId } = req.params;
    const {
      name,
      number,
      whatsapp,
      instagram,
      facebook,
      youtube,
      email,
      company,
    } = req.body;

    const [userRows] = await db.execute(
      "SELECT * FROM userprofile WHERE id = ?",
      [profileId]
    );
    if (userRows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    let user = userRows[0];
    let updatedPhoto = user.photo ? JSON.parse(user.photo) : null;
    let updatePhoto1 = user.photo1 ? JSON.parse(user.photo1) : null;

    if (req.files && req.files.photo) {
      const file = req.files.photo;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res
          .status(400)
          .json({ message: "Invalid photo format. Only JPG and PNG allowed." });
      }

      if (updatedPhoto?.public_id) {
        await cloudinary.uploader.destroy(updatedPhoto.public_id);
      }

      const cloudinaryResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "user_photos",
        }
      );

      updatedPhoto = {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      };
    }

    if (req.files && req.files.photo1) {
      const file = req.files.photo1;
      const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
      if(!allowedFormats.includes(file.mimetype)) {
        return res
          .status(400)
          .json({message: "Invalid Photo format, Only JPG and PNG image are allowed"});
      }
      if(updatePhoto1?.public_id){
        await cloudinary.uploader.destroy(updatePhoto1.public_id);
      }
      const cloudinaryResponse = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          folder: "user_phoros1",
        }
      );
      updatePhoto1 = {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      };
    }

    const sql = `
      UPDATE userprofile
      SET name = ?, number = ?, whatsapp = ?, instagram = ?, facebook = ?, youtube = ?, email = ?, company = ?, photo = ?, photo1 = ?
      WHERE id = ?
    `;

    const params = [
      name || user.name,
      number || user.number,
      whatsapp || user.whatsapp,
      instagram || user.instagram,
      facebook || user.facebook,
      youtube || user.youtube,
      email || user.email,
      company || user.company,
      updatedPhoto ? JSON.stringify(updatedPhoto) : user.photo,
      updatePhoto1 ? JSON.stringify(updatePhoto1) : user.photo1,
      profileId,
    ];

    await db.execute(sql, params);

    const updatedUser = {
      ...user,
      name: params[0],
      number: params[1],
      whatsapp: params[2],
      instagram: params[3],
      facebook: params[4],
      youtube: params[5],
      email: params[6],
      company: params[7],
      photo: updatedPhoto || (user.photo ? JSON.parse(user.photo) : null),
      photo1: updatePhoto1 || (user.photo ? JSON.parse(user.photo1) : null),
    };

    res.json({ message: "User updated successfully", userdetail: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//get user detail from backend
export const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const [rows] = await db.execute(
      "SELECT * FROM userprofile WHERE email = ?",
      [email]
    );
    if (rows.length > 0) {
      const user = rows[0];

      if (user.photo) {
        try {
          user.photo = JSON.parse(user.photo);
        } catch (err) {
          console.error("Error parsing photo JSON:", err);
        }
      }

      if (user.photo1) {
        try {
          user.photo1 = JSON.parse(user.photo1);
        }catch (err) {
          console.error("Error parsing photo1 JSON:", err);
        }
      }

      res.status(200).json({ user });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//public profile
// export const getPublicUserProfile = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     const [rows] = await db.execute(
//       "SELECT id, name, email, company, number, whatsapp, instagram, facebook, youtube, photo FROM userprofile WHERE id = ?",
//       [userId]
//     );

//     if (rows.length === 0) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({ userdetail: rows[0] });
//   } catch (error) {
//     console.error("Error fetching public profile:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
export const getPublicUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    const [rows] = await db.execute(
      "SELECT id, name, email, company, number, whatsapp, instagram, facebook, youtube, photo, photo1 FROM userprofile WHERE id = ?",
      [userId]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    if (user.photo) {
      try {
        user.photo = JSON.parse(user.photo);
      } catch (err) {
        console.error("Failed to parse photo JSON:", err.message);
        user.photo = null; // fallback
      }
    }

    if (user.photo1) {
      try {
        user.photo1 = JSON.parse(user.photo1);
      } catch (err) {
        console.log("Failes to parse photo1 JSON:", err.message);
        user.photo1 = null;
      }
    }

    res.status(200).json({ userdetail: user });
  } catch (error) {
    console.error("Error fetching public profile:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

