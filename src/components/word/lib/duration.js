export default $el => {
  let duration = $el.css('transition-duration');
  let {length} = duration;
  return duration.substr(0, length - 1) * 1000;
};
