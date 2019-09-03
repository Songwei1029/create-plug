'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('@/utils');

var _antd = require('antd');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangePicker = _antd.DatePicker.RangePicker;


var CommomDatePicker = (0, _react.memo)(function (_ref) {
  var _ref$disabledInterval = _ref.disabledInterval,
      disabledInterval = _ref$disabledInterval === undefined ? [] : _ref$disabledInterval,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$num = _ref.num,
      num = _ref$num === undefined ? 10 : _ref$num,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === undefined ? function () {} : _ref$onChange,
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'YYYY-MM-DD' : _ref$format;

  var firstChooseTime = 0;

  var pickerHandleChange = function pickerHandleChange(datas, dateStrings) {
    console.log(dateStrings);
    console.log((0, _moment2.default)(dateStrings));
    if (dateStrings[0] !== 0) {
      if (num === 13) {
        return onChange([(0, _moment2.default)(dateStrings[0]).valueOf(), (0, _moment2.default)(dateStrings[1]).valueOf() + +86400000 - 1000]);
      } else {
        return onChange([new Date(new Date(dateStrings[0]).toLocaleDateString()).getTime() / 1000, (new Date(new Date(dateStrings[1]).toLocaleDateString()).getTime() + 86400000 - 1000) / 1000]);
      }
    } else {
      return onChange([]);
    }
  };

  var handlePanelChange = function handlePanelChange(dates, dateStrings) {
    // setTest(new Date(dates).getTime());
    firstChooseTime = new Date(dates).getTime();
  };

  var disabledDate = function disabledDate(current) {
    if (disabledInterval.length === 0) {
      return null;
    } else {
      return firstChooseTime ? current && current > (0, _moment2.default)(firstChooseTime - 86400000 * disabledInterval[0]) && current < (0, _moment2.default)(firstChooseTime + 86400000 * disabledInterval[0]) || current > (0, _moment2.default)(firstChooseTime + 86400000 * disabledInterval[1]) || current < (0, _moment2.default)(firstChooseTime - 86400000 * disabledInterval[1]) : current && current > (0, _moment2.default)().endOf('day');
    }
  };

  return _react2.default.createElement(RangePicker, {
    disabledDate: disabledDate,
    onChange: pickerHandleChange,
    onCalendarChange: handlePanelChange,
    format: format,
    style: style
  });
});

CommomDatePicker.propTypes = {
  disabledInterval: _propTypes2.default.array, // 禁用时间区间，根据选择的第一个时间点来划分区间禁用
  style: _propTypes2.default.object, // 自定义设置样式
  num: _propTypes2.default.number, // 时间戳位数，默认10位
  format: _propTypes2.default.string, // 返回的时间格式
  onChange: _propTypes2.default.func.isRequired // 选择值改变的回调函数，必传
};

exports.default = CommomDatePicker;