module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }
    return word;
  },

  // active: (req: Request, res: Response, next: NextFunction) => {
  //  if (is loggedIn(req)) {
  //    const now = Date.now()
  //    const {createdAt} = req.session as Express.session

  //    if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT){}
  //  }
  // }
};
