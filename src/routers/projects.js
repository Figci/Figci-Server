const express = require("express");

const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/:projectId/versions", projectController.getAllVersions);
router.get("/:projectId/pages", projectController.getCommonPages);
router.get("/:projectId/pages/:pageId/", projectController.getDiffingResult);

module.exports = router;
