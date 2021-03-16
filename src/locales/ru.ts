/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} недействителен.',
  required: '${path} - это обязательное поле',
  oneOf: '${path} должен быть одним из следующих значений: ${values}',
  notOneOf: '${path} не должно быть одним из следующих значений: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} должен быть типа \`${type}\`, ` +
      `Но окончательное значение было: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (отлиты от значения \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Если «нулевой» предназначен как пустое значение, обязательно отметьте схему как` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} должно быть точно ${length} символы',
  min: '${path} должны быть как минимум ${min} символы',
  max: '${path} Должен быть не более ${max} символы',
  matches: '${path} должен соответствовать следующему: «${regex}»',
  email: '${path} должен быть действительным письмом',
  url: '${path} должен быть действительным URL',
  trim: '${path} должен быть подстриженной струной',
  lowercase: '${path} Должен быть строчной буквы',
  uppercase: '${path} должен быть прописной строкой региона',
};

export const number: LocaleObject['number'] = {
  min: '${path} должно быть больше или равно ${min}',
  max: '${path} должно быть меньше или равно ${max}',
  lessThan: '${path} должно быть меньше, чем ${less}',
  moreThan: '${path} должно быть больше ${more}',
  positive: '${path} должен быть положительным числом',
  negative: '${path} должен быть отрицательным числом',
  integer: '${path} должен быть целым числом',
};

export const date: LocaleObject['date'] = {
  min: '${path} поле должно быть позже, чем ${min}',
  max: '${path} поле должно быть на раньше, чем ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} поле не может иметь ключи, не указанные в форме объекта',
};

export const array: LocaleObject['array'] = {
  min: '${path} поле должно иметь по крайней мере ${min} элементов',
  max: '${path} поле должно быть меньше или равно ${max} элементам',
};
