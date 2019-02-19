// ID's For Our Unsplash API
module.exports = {
  APPLICATION_ID:
    process.env.APPLICATION_ID ||
    "aec258207daf37a856571165e8da8ce25e15c5254e82488ea45c888ad333ab5d",
  SECRET:
    process.env.SECRET ||
    "b7f2f6a7b938a52151977dac5b2803388fe8ce78c39f941db489ede15ef9bd29",
  CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
};
