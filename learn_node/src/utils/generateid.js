import { v4 as uuidv4 } from 'uuid';

function generateId() {
  return uuidv4();
}

export default generateId;