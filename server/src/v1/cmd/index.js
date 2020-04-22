const readline = require('readline');
const log = console.log;
const standardInput = /^(([0-9]+)?\.?([0-9]+)?)$/;
const { ALL_UNIT_TYPES } = require('./../../../dist/v1/constants');
const { normalizeString, normalizeNumber, oneDecimalApproximate } = require('./../../../dist/v1/utils');
const { ConversionService } = require('./../../../dist/v1/modules/conversion/services/conversion/conversion.service');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

log(`
 Welcome To Conversion App. Enter 'exit' to exit the process.! \n\n
`);
let input, from, to, response;

const recursiveAsyncReadLine = function () {

  if (!input){

    rl.question('Input to convert : ', function (data) {
      let _data = normalizeString(data);

      if (_data == 'exit')
        return rl.close(); 
      if (_data && standardInput.test(_data)){
        input = _data;
      } else {
        log('\ninvalid\n');
      }
      return recursiveAsyncReadLine(); 
    });

  } else if (!from) {

    rl.question('\nConvert From : ', function (data) {
      let _data = normalizeString(data);

      if (_data == 'exit')
        return rl.close(); 
      if (_data && ALL_UNIT_TYPES.includes(_data.toLowerCase())){
        from = _data;
      } else {
        log(`\ninvalid \n It is has to be either of these : ${ALL_UNIT_TYPES.join(' , ')}\n`);
      }
      return recursiveAsyncReadLine(); 
    });

  } else if (!to){
    rl.question('\nConvert to : ', function (data) {
      let _data = normalizeString(data);

      if (_data == 'exit')
        return rl.close(); 
      if (_data && ALL_UNIT_TYPES.includes(_data.toLowerCase())){
        to = _data;
      } else {
        log(`\ninvalid \n It is has to be either of these : ${ALL_UNIT_TYPES.join(' , ')}\n`);
      }
      return recursiveAsyncReadLine(); 
    });

  } else if (!response){
    
    rl.question('\nStudent Response : ',function (data) {
      let _data = normalizeString(data);

      if (_data == 'exit')
        return rl.close(); 
      if (_data && standardInput.test(_data)){
        response = _data;
      } else {
        log('\ninvalid\n');
      }
      return recursiveAsyncReadLine(); 
    });

  } else if (input && from && to && response){
    (async () => {
      try {
        const converter = new ConversionService();
        const ans = await converter.convert({ input, from, to });
        
        if (oneDecimalApproximate(normalizeNumber(ans)) === oneDecimalApproximate(normalizeNumber(response))){
          log('\ncorrect\n');
          input = null; from = null; to = null; response = null;
          return recursiveAsyncReadLine(); 

        } else {
          log('\nincorrect\n');
          input = null; from = null; to = null; response = null;
          return recursiveAsyncReadLine(); 
        }
  
      } catch(e){
          log('\ninvalid\n')
      }
    })()
  }


};

recursiveAsyncReadLine();