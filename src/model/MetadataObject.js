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
    MetadataObject = require('./MetadataObject');



  /**
   * The MetadataObject model module.
   * @module model/MetadataObject
   */

  /**
   * Constructs a <code>MetadataObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataObject} obj Optional instance to populate.
   * @return {module:model/MetadataObject} The populated <code>MetadataObject</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('objectid'))
        obj.objectid = ApiClient.convertToType(data.objectid, 'Integer');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data.name, 'String');
      if (data.hasOwnProperty('objects'))
        obj.objects = ApiClient.convertToType(data.objects, [MetadataObject]);
    }
    return obj;
  };

  /**
   * Constructs a new <code>MetadataObject</code>.
   * metadata object definition
   * @alias module:model/MetadataObject
   * @class
   * @param objectid {Integer} Unique ID for the object
   * @param name {String} Name of the object
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataObject} obj Optional instance to populate.
   */
  var exports = function (objectid, name, theData, obj) {
    var _this = this;

    _this.objectid = objectid;
    _this.name = name;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>MetadataObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetadataObject} obj Optional instance to populate.
   * @return {module:model/MetadataObject} The populated <code>MetadataObject</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * Unique ID for the object
   * @member {Integer} objectid
   */
  exports.prototype.objectid = undefined;

  /**
   * Name of the object
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Optional collection of “children” objects within the hierarchy
   * @member {Array.<module:model/MetadataObject>} objects
   */
  exports.prototype.objects = undefined;

  return exports;
}());


