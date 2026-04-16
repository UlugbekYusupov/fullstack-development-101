function generateId(users) {
  if (users.length === 0) {
    return 1;
  }
  const last = users[users.length - 1];
  const lastId = typeof last === "number" ? last : last?.id;
  return Number(lastId || 0) + 1;
}


export default generateId
