// // $(document).ready(function() {
//     $('#regForm').bootstrapValidator({
//         framework: 'bootstrap',
//         icon: {
//             valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
//         },
//         submitButtons: 'button[name="signUp"]',
//
//         fields: {
//             email: {
//                 validators: {
//                     emailAddress: {
//                         message: 'The value is not a valid email address'
//                     },
//                     notEmpty:{
//                         message: 'This field should be completed'
//                     }
//
//                    // remote: {
//                    //      message: 'The username is not available',
//                    //      url: '/path/to/backend/',
//                    //      type: 'POST'
//                    //  }
//                 }
//             },
//             password:{
//
//                 validators:{
//                     regexp: {
//                         regexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/i,
//                         message: 'Your password should contain at least 6 characters and maximum 12,' +
//                                   'one number and one special character'
//                     },
//
//                     notEmpty:{
//                          message: 'This field should be completed'
//                     }
//                 }
//             },
//             confirmPassword: {
//                 validators: {
//                     identical: {
//                         field: 'password',
//                         message: 'The password and its confirm are not the same'
//                     },
//                     notEmpty:{
//                          message: 'This field should be completed'
//                         },
//                      regexp: {
//                         regexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/i,
//                         message: ""
//                      },
//                 }
//             },
//             birthday: {
//                 validators:
//                     {
//                         notEmpty: {
//                             message: 'This field should be completed'
//                         },
//
//                         date: {
//                             format: 'MM/DD/YYYY',
//                             message: 'The date is not a valid'
//                         },
//
//                         callback: {
//                             message: 'You are too young or you are just messing with the dates, which also means that young are too young :)',
//                             callback: function(value, validator) {
//
//                                 var m = new moment(value, 'YYYY/MM/DD');
//                                 console.log(m);
//                                 if (!m.isValid()) {
//                                     return false;
//                                 }
//
//                                 return m.isAfter('1940/01/01') && m.isBefore('2005/01/01');
//                             }
//                         }
//                     }
//             }
//         }
//     }).on('error.field.bv', function(e, data) {
//             data.bv.disableSubmitButtons(true); // disable submit buttons on errors
//     )}
//     }).on('status.field.bv', function(e, data) {
//             data.bv.disableSubmitButtons(false); // enable submit buttons on valid
//         }
//     });
// });
//

data = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Myanmar/Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guadeloupe", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel and the Occupied Territories", "Italy", "Ivory Coast (Cote d'Ivoire)", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyz Republic (Kyrgyzstan)", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Republic of Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Moldova, Republic of", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Korea, Democratic Republic of (North Korea)", "Norway", "Oman", "Pacific Islands", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent's & Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic (Slovakia)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Korea, Republic of (South Korea)", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", "United States of America (USA)", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (UK)", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"]

$(document).ready( function(){
    $.each(data, function (value) {
    $('#countries_select').append(
        $("<option></option>")
          .attr("value", data[value])
          .text(data[value])
            .attr("name",'country')
    );
    });
});


$(document).ready(function() {
    $('#regForm')
        .bootstrapValidator({
        framework: 'bootstrap',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    notEmpty: {
                        message: 'This field should be completed'
                    }

                    // remote: {
                    //      message: 'The username is not available',
                    //      url: '/path/to/backend/',
                    //      type: 'POST'
                    //  }
                }
            },

            first_name: {
               validators:{ notEmpty: {
                        message: 'This field should be completed'
                    },
                  regexp: {
                        regexp: /^[a-zA-Z]+.{3,24}$/i,
                        message: "Please enter a real name"
                    }
                }
            },
            last_name: {
               validators:{ notEmpty: {
                        message: 'This field should be completed'
                    },
                  regexp: {
                         regexp: /^[a-zA-Z]+.{3,24}$/i,
                         message: "Please enter a real name"
                    }
                }
            },
            password: {

                validators: {
                    regexp: {
                        regexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/i,
                        message: 'Your password should contain at least 6 characters and maximum 12,' +
                        'one number and one special character'
                    },

                    notEmpty: {
                        message: 'This field should be completed'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        field: 'password',
                        message: 'The password and its confirm are not the same'
                    },
                    notEmpty: {
                        message: 'This field should be completed'
                    },
                    regexp: {
                        regexp: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@!%?&]).{6,12}$/i,
                        message: ""
                    },
                }
            },
            birthday: {
                validators:
                    {
                        notEmpty: {
                            message: 'This field should be completed'
                        },

                        date: {
                            format: 'MM/DD/YYYY',
                            message: 'The date is not a valid'
                        },

                        callback: {
                            message: 'You are too young or you are just messing with the dates, which also means that young are too young :)',
                            callback: function (value, validator) {

                                var m = new moment(value, 'YYYY/MM/DD');

                                if (!m.isValid()) {
                                    return false;
                                }

                                return m.isAfter('1940/01/01') && m.isBefore('2005/01/01');
                            }
                        }
                    }
            }
        }
    })
        .on('success.field.fv', function(e, data) {
            console.log("keplm");
            if (data.fv.getInvalidFields().length > 0) {    // There is invalid field
                data.fv.disableSubmitButtons(true);
            }
        });
});