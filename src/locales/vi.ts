/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} không hợp lệ.',
  required: '${path} là một trường bắt buộc',
  oneOf: '${path} Phải là một trong các giá trị sau: ${values}',
  notOneOf: '${path} không được là một trong những giá trị sau: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} phải là \`${type}\` gõ, ` +
      `Nhưng giá trị cuối cùng là: \`${printValue(value, true)}\`` +
      (isCast
        ? ` (truyền từ giá trị \`${printValue(originalValue, true)}\`).`
        : '.');

    if (value === null) {
      msg +=
        `\n Nếu "null" được dự định là một giá trị trống, hãy chắc chắn đánh dấu lược đồ như` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} phải chính xác ${length} ký tự',
  min: '${path} Phải có ít nhất ${min} ký tự',
  max: '${path} Phải có nhiều nhất là ${max}',
  matches: '${path} Phải khớp với những điều sau đây: "${regex}"',
  email: '${path} Phải là một email hợp lệ',
  url: '${path} Phải là một URL hợp lệ',
  trim: '${path} Phải là một chuỗi được cắt tỉa',
  lowercase: '${path} Phải là một chuỗi chữ thường',
  uppercase: '${path} Phải là một chuỗi chữ hoa',
};

export const number: LocaleObject['number'] = {
  min: '${path} phải lớn hơn hoặc bằng ${min}',
  max: '${path} phải nhỏ hơn hoặc bằng ${max}',
  lessThan: '${path} phải nhỏ hơn ${less}',
  moreThan: '${path} phải lớn hơn ${more}',
  positive: '${path} phải là một số dương',
  negative: '${path} phải là một số âm',
  integer: '${path} phải là một số nguyên',
};

export const date: LocaleObject['date'] = {
  min: 'Trường ${path} phải muộn hơn ${min}',
  max: 'Trường ${path} phải sớm hơn ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown:
    'Trường ${path} không thể có các phím không được chỉ định trong hình đối tượng',
};

export const array: LocaleObject['array'] = {
  min: 'Trường ${path} phải có ít nhất ${min}',
  max: 'Trường ${path} phải có ít hơn hoặc bằng các mục ${max}',
};
