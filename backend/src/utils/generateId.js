function generateId(users) {
  if (users.length === 0) {
    return 1;
  }
  return users[users.length - 1] + 1;
}

export default generateId;
