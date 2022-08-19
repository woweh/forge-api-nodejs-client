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
    JsonApiCollection = require('./JsonApiCollection'),
    JsonApiVersionJsonapi = require('./JsonApiVersionJsonapi'),
    RelRef = require('./RelRef');



  /**
   * The Refs model module.
   * @module model/Refs
   */

  /**
   * Constructs a <code>Refs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Refs} obj Optional instance to populate.
   * @return {module:model/Refs} The populated <code>Refs</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      JsonApiCollection.constructFromObject(data, obj);
      if (data.hasOwnProperty('jsonapi')) {
        obj.jsonapi = JsonApiVersionJsonapi.constructFromObject(data.jsonapi);
      }
      if (data.hasOwnProperty('data')) {
        obj.data = ApiClient.convertToType(data.data, [RelRef]);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Refs</code>.
   * @alias module:model/Refs
   * @class
   * @implements module:model/JsonApiCollection
   * @param data {Array.<module:model/RelRef>} 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Refs} obj Optional instance to populate.
   */
  var exports = function (data, theData, obj) {
    var _this = this;

    JsonApiCollection.call(_this, data);
    _this.data = data;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>Refs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Refs} obj Optional instance to populate.
   * @return {module:model/Refs} The populated <code>Refs</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JsonApiVersionJsonapi} jsonapi
   */
  exports.prototype.jsonapi = undefined;
  /**
   * @member {Array.<module:model/RelRef>} data
   */
  exports.prototype.data = undefined;

  return exports;
}());


