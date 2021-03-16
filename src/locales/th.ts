/*eslint-disable no-template-curly-in-string*/

import printValue from '../util/printValue';
import { LocaleObject, FormatErrorParams } from 'yup';

// Based on https://github.com/jquense/yup/blob/2973d0a/src/locale.js
export const mixed: LocaleObject['mixed'] = {
  default: '${path} ไม่ถูกต้อง',
  required: '${path} เป็นฟิลด์ที่จำเป็น',
  oneOf: '${path} ต้องเป็นหนึ่งในค่าต่อไปนี้: ${values}',
  notOneOf: '${path} ต้องไม่เป็นหนึ่งในค่าต่อไปนี้: ${values}',
  notType: ({ path, type, value, originalValue }: FormatErrorParams) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg =
      `${path} ต้องเป็น \`${type}\` ประเภท, ` +
      `แต่ค่าสุดท้ายคือ: \`${printValue(value, true)}\`` +
      (isCast ? ` (โยนจากค่า \`${printValue(originalValue, true)}\`).` : '.');

    if (value === null) {
      msg +=
        `\n หาก "null" มีไว้เป็นค่าว่างให้แน่ใจว่าได้ทำเครื่องหมายสคีมาเป็น` +
        ' `.nullable()`';
    }

    return msg;
  },
};

export const string: LocaleObject['string'] = {
  length: '${path} ต้องเป็น ${length} อักขระ',
  min: '${path} ต้องมีอักขระอย่างน้อย ${min}',
  max: '${path} ต้องอยู่ที่อักขระส่วนใหญ่ ${max}',
  matches: '${path} ต้องตรงกับสิ่งต่อไปนี้: "${regex}"',
  email: '${path} ต้องเป็นอีเมลที่ถูกต้อง',
  url: '${path} ต้องเป็น URL ที่ถูกต้อง',
  trim: '${path} ต้องเป็นสตริงที่ถูกตัดแต่ง',
  lowercase: '${path} ต้องเป็นสตริงตัวพิมพ์เล็ก',
  uppercase: '${path} ต้องเป็นสตริงตัวพิมพ์ใหญ่',
};

export const number: LocaleObject['number'] = {
  min: '${path} ต้องมากกว่าหรือเท่ากับ ${min}',
  max: '${path} ต้องน้อยกว่าหรือเท่ากับ ${max}',
  lessThan: '${path} ต้องน้อยกว่า ${less}',
  moreThan: '${path} จะต้องมากกว่า ${more}',
  positive: '${path} ต้องเป็นจำนวนบวก',
  negative: '${path} ต้องเป็นจำนวนลบ',
  integer: '${path} ต้องเป็นจำนวนเต็ม',
};

export const date: LocaleObject['date'] = {
  min: '${path} ฟิลด์ต้องช้ากว่า ${min}',
  max: 'ฟิลด์ ${path} จะต้องเร็วกว่า ${max}',
};

export const boolean: LocaleObject['boolean'] = {};

export const object: LocaleObject['object'] = {
  noUnknown: '${path} ฟิลด์ไม่สามารถมีคีย์ไม่ได้ระบุในรูปแบบวัตถุ',
};

export const array: LocaleObject['array'] = {
  min: '${path} ฟิลด์ต้องมีอย่างน้อย ${min} รายการ',
  max: '${path} ฟิลด์ต้องมีน้อยกว่าหรือเท่ากับ ${max} รายการ',
};
