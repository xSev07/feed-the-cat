/**
 * Склоняет слова в зависимости от их количества
 * @param n {number} - количество
 * @param textForms {Array} - массив склонённых форм слова, например:
 * [`штука`, `штуки`, `штук`]
 * @returns {string} - элемент массива textForms
 */
export const declOfNum = (n, textForms) => {
  n = Math.abs(n) % 100; const n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 === 1) { return textForms[0]; }
  return textForms[2];
};

/**
 * Рассчитывает количество бонусов
 * @param currentCount (number) - текущее количество
 * @param multiplicity (number) - коэффициент начисления бонусов
 * @param minBonus (number) - если бонусов меньше этого числа,
 * то будет начислено столько бонусов
 * @returns {number} (number)
 */
export const calculateBonus = (currentCount, multiplicity = 1, minBonus = 1) => {
  const ratio = Math.floor(currentCount / multiplicity);
  return  ratio > minBonus ? ratio : minBonus;
};
