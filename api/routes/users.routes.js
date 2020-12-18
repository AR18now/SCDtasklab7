const { Router } = require('express');
const { profilePrefix, instructorPrefix } = require('../../configs');
const {
  renderUserProfileController,
  renderBeInstructorController,
} = require('../controllers');
const { isLoggedInUser } = require('../middleware');

const router = Router();

router.get(profilePrefix, isLoggedInUser, renderUserProfileController);
router.get(instructorPrefix, isLoggedInUser, renderBeInstructorController);
router.post(instructorPrefix, isLoggedInUser, (req, res) => {
  const { role } = req.user;
  console.log(role);
});

module.exports = router;
