interface ItemCheckResult {
  isExist: boolean,
  itemIndex: number
}

export function checkItemInArray <T>(value: T, array: T[]): ItemCheckResult{
  const itemIndex = array.indexOf(value);
  const isExist = (itemIndex === -1) ? false : true;

  return {isExist, itemIndex};
}