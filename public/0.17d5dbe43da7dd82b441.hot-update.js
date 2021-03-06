exports.id = 0;
exports.modules = {

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _folderPresentation = __webpack_require__(177);

	var _folderPresentation2 = _interopRequireDefault(_folderPresentation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FolderContainer = function FolderContainer(props) {
	  return _react2.default.createElement(
	    'div',
	    { className: 'easyui-draggable', 'data-options': 'onDrag:onDrag', onClick: function onClick() {
	        return props.loadFolder(props.folder);
	      } },
	    _react2.default.createElement(_folderPresentation2.default, { folder: props.folder })
	  );
	};

	exports.default = FolderContainer;

/***/ }

};