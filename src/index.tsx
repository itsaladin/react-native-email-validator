'use strict';

var checker:any = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

 const validate= (email:string) =>{
  if (!email) return false;

  var emailChecker = email.split('@');

  if (emailChecker.length !== 2) return false;

  var ac:any = emailChecker[0];
  var add:any = emailChecker[1];

  if (ac.length > 64) return false;

  else if (add.length > 255) return false;

  var mainTaster = add.split('.');
  
  if (mainTaster.some(function (part:any) {
    return part.length > 63;
  })) return false;

  return checker.test(email);
};
  
export default validate