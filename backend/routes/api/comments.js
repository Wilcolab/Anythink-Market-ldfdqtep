const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

/**
 * Get all comments
 * @async
 * @route GET /api/comments
 * @param {Object} req - Express request object
 * @param {Object} req.query - Query parameters
 * @param {number} req.query.limit - Number of comments to return (default: 20)
 * @param {number} req.query.offset - Number of comments to skip (default: 0)
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {Object} JSON object with comments array and commentsCount
 * @returns {Array} res.comments - Array of comment objects
 * @returns {number} res.commentsCount - Total number of comments
 */
router.get("/", async (req, res, next) => {
  try {
    var query = {};
    var limit = 20;
    var offset = 0;

    if (typeof req.query.limit !== "undefined") {
      limit = req.query.limit;
    }

    if (typeof req.query.offset !== "undefined") {
      offset = req.query.offset;
    }

    const comments = await Comment.find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .populate("seller")
      .exec();

    const commentsCount = await Comment.countDocuments(query).exec();

    return res.json({
      comments: comments.map((comment) => {
        return comment.toJSONFor();
      }),
      commentsCount: commentsCount
    });
  } catch (error) {
    next(error);
  }
});

/**
 * Preload comment objects on routes with ':comment'
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @param {string} id - Comment ID to load
 * @returns {void}
 * @throws {Error} Returns 404 if comment not found
 */
router.param("comment", async (req, res, next, id) => {
  try {
    const comment = await Comment.findById(id);

    if (!comment) {
      return res.sendStatus(404);
    }

    req.comment = comment;
    return next();
  } catch (error) {
    next(error);
  }
});

/**
 * Delete a comment by id
 * @async
 * @route DELETE /api/comments/:comment
 * @param {Object} req - Express request object
 * @param {Object} req.comment - Comment object (preloaded by param middleware)
 * @param {Object} req.payload - Authenticated user payload
 * @param {string} req.payload.id - Authenticated user ID
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 * @returns {void}
 * @throws {Error} Returns 403 if user is not the comment seller
 * @throws {Error} Returns 204 on successful deletion
 */
router.delete("/:comment", async (req, res, next) => {
  try {
    if (req.comment.seller._id.toString() === req.payload.id.toString()) {
      await Comment.findByIdAndRemove(req.comment._id);
      res.sendStatus(204);
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
