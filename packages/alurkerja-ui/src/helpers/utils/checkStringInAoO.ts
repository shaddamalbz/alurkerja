/**
 * AoO mean Array of Object, this function work for object that contain key child for now
 * @param obj
 * @param key
 * @param str
 * @returns boolean
 */
export default function checkStringInAoO(obj: { [x: string]: any }, key: string, str: string) {
  // Cek href pada level child
  for (let i = 0; i < obj.child.length; i++) {
    if (obj.child[i][key] === str) {
      return true
    }

    // Cek href pada level grandchild
    if (obj.child[i].child) {
      for (let j = 0; j < obj.child[i].child.length; j++) {
        if (obj.child[i].child[j][key] === str) {
          return true
        }
      }
    }
  }

  return false
}
