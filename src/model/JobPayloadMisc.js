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

  var ApiClient = require('../ApiClient');

  /**
   * The JobPayloadMisc model module.
   * @module model/JobPayloadMisc
   */

  /**
   * Constructs a <code>JobPayloadMisc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadMisc} obj Optional instance to populate.
   * @return {module:model/JobPayloadMisc} The populated <code>JobPayloadMisc</code> instance.
   */
  var constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('workflow'))
        obj.workflow = ApiClient.convertToType(data.workflow, 'String');
      if (data.hasOwnProperty('workflowAttribute'))
        obj.workflowAttribute = ApiClient.convertToType(data.workflowAttribute, 'Object');

    }
    return obj;
  };

  /**
   * Constructs a new <code>JobPayloadMisc</code>.
   * @alias module:model/JobPayloadMisc
   * @class
   * @param workflow {String} The workflow id created for a webhook, used to listen to Model Derivative events. It needs to be no more than 36 chars, and only ASCII, decimal and hyphen are accepted.
   * @param workflowAttribute {Object} A user-defined JSON object, which you can use to set some custom workflow information. It needs to be less than 1KB and will be ignored if misc.workflow parameter is not set.
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadMisc} obj Optional instance to populate.
   */
  var exports = function (workflow, workflowAttribute, theData, obj) {
    var _this = this;

    _this.workflow = workflow;
    _this.workflowAttribute = workflowAttribute;

    return constructFromObject(theData, obj || _this);
  };

  /**
   * Constructs a <code>JobPayloadMisc</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayloadMisc} obj Optional instance to populate.
   * @return {module:model/JobPayloadMisc} The populated <code>JobPayloadMisc</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The workflow id created for a webhook, used to listen to Model Derivative events. It needs to be no more than 36 chars, and only ASCII, decimal and hyphen are accepted.
   * @member {String} workflow
   */
  exports.prototype.workflow = undefined;

  /**
   * A user-defined JSON object, which you can use to set some custom workflow information. It needs to be less than 1KB and will be ignored if misc.workflow parameter is not set.
   * @member {Object} workflowAttribute
   */
  exports.prototype.workflowAttribute = undefined;

  return exports;
}());


