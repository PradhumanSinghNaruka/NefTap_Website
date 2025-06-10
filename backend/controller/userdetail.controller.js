import Userdetail from "../modal/userdetail.modal.js";
import cloudinary from "../Cloudinary.js";

export const userdetail = async (req, res) => {
  try {
    const { name, number, whatsapp, instagram, facebook, youtube, email, company } = req.body;

    let photoData = {};

  
    if (req.files && req.files.photo) {
      const file = req.files.photo;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({ message: "Invalid photo format. Only JPG and PNG allowed." });
      }

      const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "user_photos",
      });

      photoData.public_id = cloudinaryResponse.public_id;
      photoData.url = cloudinaryResponse.secure_url;
    }

    
    let user = await Userdetail.findOne({ email });

    if (user) {
  user = await Userdetail.findOneAndUpdate(
    { email },
    {
      name,
      number,
      whatsapp,
      instagram,
      facebook,
      youtube,
      company,
      ...(req.files?.photo && { photo: photoData }), // Only update if new photo uploaded
    },
    { new: true }
  );
} else {
      
      user = new Userdetail({
        name,
        number,
        whatsapp,
        instagram,
        facebook,
        youtube,
        email,
        company,
        photo: photoData,
      });
      await user.save();
    }

    res.status(200).json({
      message: "Profile saved successfully",
      userdetail: user,
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUserDetail = async (req, res) => {
  try {
    const { profileId } = req.params;
    const { name, number, whatsapp, instagram, facebook, youtube, email, company } = req.body;

    const user = await Userdetail.findById(profileId);
    if (!user) return res.status(404).json({ message: "User not found" });

    let updatedPhoto = user.photo;

    if (req.files && req.files.photo) {
      const file = req.files.photo;
      const allowedFormats = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedFormats.includes(file.mimetype)) {
        return res.status(400).json({ message: "Invalid photo format. Only JPG and PNG allowed." });
      }

      
      if (user.photo?.public_id) {
        await cloudinary.uploader.destroy(user.photo.public_id);
      }

      
      const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: "user_photos",
      });

      updatedPhoto = {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.secure_url,
      };
    }

    const updatedUser = await Userdetail.findByIdAndUpdate(
      profileId,
      {
        name,
        number,
        whatsapp,
        instagram,
        facebook,
        youtube,
        email,
        company,
        photo: updatedPhoto,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Profile updated successfully",
      userdetail: updatedUser,
    });
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Fetch user profile by email
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await Userdetail.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ userdetail: user });
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getPublicUserProfile = async (req, res) => {
  try {
    const userId = req.params.id; // id from URL param
    const user = await Userdetail.findById(userId).select(
      "_id name email company number whatsapp instagram facebook youtube photo"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ userdetail: user });
  } catch (error) {
    console.error("Error fetching public profile:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
