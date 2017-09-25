function number(overrides = {}) {
  const defaultParams = {
    lessThan: undefined,
    greaterThan: undefined
  };
  this.props = Object.assign(defaultParams, overrides);
}

number.prototype.lt = (number.prototype.lessThan = function(num) {
  if (num <= this.props.greaterThan) return false;
  if (this.props.lessThan) {
    if (num === this.props.lessThan) return true;
    if (this.props.lessThan < num) return true;
  }
  return undefined;
});

number.prototype.gt = (number.prototype.greaterThan = function(num) {
  if (num >= this.props.lessThan) return false;
  if (this.props.greaterThan) {
    if (num === this.props.greaterThan) return true;
    if (this.props.greaterThan > num) return true;
  }
  return undefined;
});

module.exports = {
  number
};
