/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function () {
  'use strict';

  var ApiClient = require('../ApiClient'),
    JsonApiErrorLinks = require('./JsonApiErrorLinks');



  /**
   * The JsonApiErrorErrors model module.
   * @module model/JsonApiErrorErrors
   */

  /**
   * Constructs a <code>JsonApiErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiErrorErrors} obj Optional instance to populate.
   * @return {module:model/JsonApiErrorErrors} The populated <code>JsonApiErrorErrors</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj.id = ApiClient.convertToType(data.id, 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj.status = ApiClient.convertToType(data.status, 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj.code = ApiClient.convertToType(data.code, 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj.title = ApiClient.convertToType(data.title, 'String');
      }
      if (data.hasOwnProperty('detail')) {
        obj.detail = ApiClient.convertToType(data.detail, 'String');
      }
      if (data.hasOwnProperty('meta')) {
        obj.meta = ApiClient.convertToType(data.meta, Object);
      }
      if (data.hasOwnProperty('links')) {
        obj.links = JsonApiErrorLinks.constructFromObject(data.links);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JsonApiErrorErrors</code>.
   * @alias module:model/JsonApiErrorErrors
   * @class
   * @param id {String} a unique identifier for this particular occurrence of the problem
   * @param status {String} the HTTP status code applicable to this problem, expressed as a string value
   * @param detail {String} a human-readable explanation specific to this occurrence of the problem. Like title, this field's value can be localized
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiErrorErrors} obj Optional instance to populate.
   */
  var exports = function (id, status, detail, theData, obj) {
    var _this = this;

    _this.id = id;
    _this.status = status;
    _this.detail = detail;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>JsonApiErrorErrors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JsonApiErrorErrors} obj Optional instance to populate.
   * @return {module:model/JsonApiErrorErrors} The populated <code>JsonApiErrorErrors</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * a unique identifier for this particular occurrence of the problem
   * @member {String} id
   */
  exports.prototype.id = undefined;
  /**
   * the HTTP status code applicable to this problem, expressed as a string value
   * @member {String} status
   */
  exports.prototype.status = undefined;
  /**
   * an application-specific error code, expressed as a string value
   * @member {String} code
   */
  exports.prototype.code = undefined;
  /**
   * a short, human-readable summary of the problem that SHOULD NOT change from occurrence to occurrence of the problem, except for purposes of localization
   * @member {String} title
   */
  exports.prototype.title = undefined;
  /**
   * a human-readable explanation specific to this occurrence of the problem. Like title, this field's value can be localized
   * @member {String} detail
   */
  exports.prototype.detail = undefined;
  /**
   * a meta object containing non-standard meta-information about the error
   * @member {Object} meta
   */
  exports.prototype.meta = undefined;
  /**
   * @member {module:model/JsonApiErrorLinks} links
   */
  exports.prototype.links = undefined;



  return exports;
}());


