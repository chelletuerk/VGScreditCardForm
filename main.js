const vgsForm = window.VGSCollect.create('tntv3bfscmb', 'SANDBOX', () => {});

const css = {
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
};

vgsForm.field('#cc-holder', {
  type: 'text',
  name: 'card_holder',
  placeholder: 'Card holder',
  validations: ['required'],
  css: css,
});

vgsForm.field('#cc-number', {
  type: 'card-number',
  name: 'card_number',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'Card number',
  showCardIcon: true,
  validations: ['required', 'validCardNumber'],
  css: css,
});

vgsForm.field('#cc-cvc', {
  type: 'card-security-code',
  name: 'card_cvc',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'CVC',
  maxLength: 3,
  validations: ['required', 'validCardSecurityCode'],
  css: css,
});

vgsForm.field('#cc-expiration-date', {
  type: 'card-expiration-date',
  name: 'card_exp',
  successColor: '#4F8A10',
  errorColor: '#D8000C',
  placeholder: 'MM / YY',
  validations: ['required', 'validCardExpirationDate'],
  css: css,
});

document.getElementById("collect-form").addEventListener('submit', (e) => {
  e.preventDefault();
    vgsForm.submit('/post', {}, (status, response) => {
    if (status === 200) {
      console.log("success")
      console.log('response', response.data)
    }
  }, (error) => {
    console.log(error);
  });
});


vgsForm.on('enterPress', (field) => {
  vgsForm.submit('/post', {}, (status, response) => {
    if (status === 200) {
      console.log("success")
      console.log('response', response.data)
      vgsForm.reset()
    }
  }, (error) => {
    console.log(error);
    vgsForm.reset()
  })
});



// const form = VGSCollect.create("tntv3bfscmb", "sandbox", function(state) {
// })
//
// $('#button').click((e) => {
//   let value = $('#input').val()
//   if (value == '') {
//     e.stopPropagation()
//   }
//   // $('li').remove()
//   // console.log($('#input').val(form))
//   // console.log(value)
//   $('#ul').append(`<li>${value}</li>`)
//   $('#input').val('')
//   form.field('#cc-number', {
//   type: 'card-number',
//   name: 'card_number',
//   placeholder: 'Card number',
//   showCardIcon: true,
//   validations: ['required', 'validCardNumber'],
//   css: { border: '1px solid gray' }
//   })
// })
//
// console.log('form', form)
//
//
//
// form.submit('/post', {}, (status, response) => {
//     console.log(response);
// })
