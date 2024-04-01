function verifyRole(allowedRoles) {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      throw new Error(
        `You dont have the role to accses this...`
      );
    }
    next();
  };
}

export default verifyRole;
