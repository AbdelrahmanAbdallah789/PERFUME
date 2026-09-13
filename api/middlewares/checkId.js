import { isValidObjectId } from "mongoose";
function checkId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    return next(new Error(`Invalid ObjectId: ${req.params.id}`));
  }
  next();
}
export default checkId;