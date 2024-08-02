router.get("/verify/:token", async (req, res) => {
    const { token } = req.params;
  
    try {
      const userVerification = await UserVerification.findOne({ token });
      if (!userVerification) {
        return res.status(400).json({ message: "Invalid or expired token" });
      }
  
      const user = await User.findById(userVerification.userId);
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      user.isVerified = true;
      await user.save();
  
      await UserVerification.deleteOne({ token });
  
      res.status(200).json({ message: "Email verified successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  
  module.exports = router;