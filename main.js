const f = window.VGSCollect.create('tntv3bfscmb', 'SANDBOX', () => {});

const styles = {
  border: "none",
  background: "rgba(215, 224, 235, 0.18);",
  height: "40px",
  lineHeight: "normal",
  padding: "0 10px",
  color: "white",
  fontSize: "12px",
  boxSizing: "border-box",
  borderRadius: "4px",
  letterSpacing: ".7px",
  "&::placeholder": {
    color: "white",
    fontSize: "12px",
    opacity: ".5"
  }
};

f.field("#cc-holder .field-space", {
  type: "text",
  name: "card.name",
  placeholder: "Name on card",
  validations: ["required"],
  css: styles
});

f.field("#cc-number .field-space", {
  type: "card-number",
  name: "card.number",
  placeholder: "Card number",
  validations: ["required", "validCardNumber"],
  css: styles
});

f.field("#cc-cvc .field-space", {
  type: "card-security-code",
  name: "card.cvc",
  placeholder: "CVV",
  validations: ["required", "validCardSecurityCode"],
  css: styles
});

f.field("#cc-exp .field-space", {
  type: "card-expiration-date",
  name: "card.expirationDate",
  placeholder: "MM / YYYY",
  validations: ["required", "validCardExpirationDate"],
  css: styles
});

f.on('enterPress', (field) => {
  f.submit('/post', {}, (status, response) => {
    if (status === 200) {
      let elem = document.getElementsByClassName("card-success")[0];
      elem.classList.remove("hidden");
      console.log("success")
      console.log('response', response.data)
    }
  }, (error) => {
    console.log(error);
  })
  f.reset()
});

document.getElementById("cc-form-submit").addEventListener("click", function() {
  f.submit(
    "/post",
    {
      headers: {
        "x-custom-header": "Oh yes. I am a custom header"
      }
    },
    function(status, response) {
      let elem = document.getElementsByClassName("card-success")[0];
      elem.classList.remove("hidden");
      console.log('response', response)
      console.log("success")
      f.reset()
    },
    function(errors) {console.log(error)}
  );
});
