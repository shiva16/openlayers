/**
 * @module ol/format/TextFeature
 */
import {inherits} from '../index.js';
import FeatureFormat from '../format/Feature.js';
import _ol_format_FormatType_ from '../format/FormatType.js';

/**
 * @classdesc
 * Abstract base class; normally only used for creating subclasses and not
 * instantiated in apps.
 * Base class for text feature formats.
 *
 * @constructor
 * @abstract
 * @extends {ol.format.Feature}
 */
var TextFeature = function() {
  FeatureFormat.call(this);
};

inherits(TextFeature, FeatureFormat);


/**
 * @param {Document|Node|Object|string} source Source.
 * @private
 * @return {string} Text.
 */
TextFeature.prototype.getText_ = function(source) {
  if (typeof source === 'string') {
    return source;
  } else {
    return '';
  }
};


/**
 * @inheritDoc
 */
TextFeature.prototype.getType = function() {
  return _ol_format_FormatType_.TEXT;
};


/**
 * @inheritDoc
 */
TextFeature.prototype.readFeature = function(source, opt_options) {
  return this.readFeatureFromText(
      this.getText_(source), this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {string} text Text.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @protected
 * @return {ol.Feature} Feature.
 */
TextFeature.prototype.readFeatureFromText = function(text, opt_options) {};


/**
 * @inheritDoc
 */
TextFeature.prototype.readFeatures = function(source, opt_options) {
  return this.readFeaturesFromText(
      this.getText_(source), this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {string} text Text.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @protected
 * @return {Array.<ol.Feature>} Features.
 */
TextFeature.prototype.readFeaturesFromText = function(text, opt_options) {};


/**
 * @inheritDoc
 */
TextFeature.prototype.readGeometry = function(source, opt_options) {
  return this.readGeometryFromText(
      this.getText_(source), this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {string} text Text.
 * @param {olx.format.ReadOptions=} opt_options Read options.
 * @protected
 * @return {ol.geom.Geometry} Geometry.
 */
TextFeature.prototype.readGeometryFromText = function(text, opt_options) {};


/**
 * @inheritDoc
 */
TextFeature.prototype.readProjection = function(source) {
  return this.readProjectionFromText(this.getText_(source));
};


/**
 * @param {string} text Text.
 * @protected
 * @return {ol.proj.Projection} Projection.
 */
TextFeature.prototype.readProjectionFromText = function(text) {
  return this.defaultDataProjection;
};


/**
 * @inheritDoc
 */
TextFeature.prototype.writeFeature = function(feature, opt_options) {
  return this.writeFeatureText(feature, this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {ol.Feature} feature Features.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @protected
 * @return {string} Text.
 */
TextFeature.prototype.writeFeatureText = function(feature, opt_options) {};


/**
 * @inheritDoc
 */
TextFeature.prototype.writeFeatures = function(
    features, opt_options) {
  return this.writeFeaturesText(features, this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {Array.<ol.Feature>} features Features.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @protected
 * @return {string} Text.
 */
TextFeature.prototype.writeFeaturesText = function(features, opt_options) {};


/**
 * @inheritDoc
 */
TextFeature.prototype.writeGeometry = function(
    geometry, opt_options) {
  return this.writeGeometryText(geometry, this.adaptOptions(opt_options));
};


/**
 * @abstract
 * @param {ol.geom.Geometry} geometry Geometry.
 * @param {olx.format.WriteOptions=} opt_options Write options.
 * @protected
 * @return {string} Text.
 */
TextFeature.prototype.writeGeometryText = function(geometry, opt_options) {};
export default TextFeature;