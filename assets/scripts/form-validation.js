var FormValidation = function () {

    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#form_sample_1');
            var error1 = $('.alert-error', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    url: {
                        required: true,
                        url: true
                    },
                    number: {
                        required: true,
                        number: true
                    },
                    digits: {
                        required: true,
                        digits: true
                    },
                    creditcard: {
                        required: true,
                        creditcard: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    category: {
                        required: true
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
                }
            });
    }

    var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation


            var form2 = $('#form_sample_2');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form2.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    title: {
                        minlength: 2,
                        required: true
                    },
                    content: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    title: {
                        required: "Please enter a page title"
                    },
                    content: {
                        required: "Please enter page content",
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "education") { // for chosen elements, need to insert the error after the chosen container
                        error.insertAfter("#form_2_education_chzn");
                    } else if (element.attr("name") == "membership") { // for uniform radio buttons, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_2_membership_error");
                    } else if (element.attr("name") == "editor1" || element.attr("name") == "editor2") { // for wysiwyg editors
                        error.insertAfter($(element.attr('data-error-container'))); 
                    } else if (element.attr("name") == "service") { // for uniform checkboxes, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_2_service_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                        .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    /*success2.show();
                    error2.hide();*/
					form.submit();
                }

            });

            $('#form_2_select2').select2({
                placeholder: "Select an Option",
                allowClear: true
            });

            //apply validation on wysiwyg editors change, this only needed for chosen dropdown integration.
            $('.wysihtml5, .ckeditor', form2).change(function () {
                alert(1);
                form2.validate().element($(this)); //revalidate the wysiwyg editors and show error or success message for the input
            });

            //apply validation on chosen dropdown value change, this only needed for chosen dropdown integration.
            $('.chosen, .chosen-with-diselect', form2).change(function () {
                form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2', form2).change(function () {
                form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
    }
	
	var handleNewsvalidation = function () {
		
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_news');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form2.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
					news_date: {
						required: true
					},
                    news: {
                        required: true
                    }
                },
                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                        .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    /*success2.show();
                    error2.hide();*/
					form.submit();
                }

            });
    
	}
	
	var handleMembersvalidation = function () {
		
		
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

            var form2 = $('#form_mbr');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form2.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
					name: {
						required: true
					},
					mem_no: {
						required: true
					},
                    desig: {
                        required: true
                    },
					phone: {
						required: true
					},
					blood: {
						required: true
					},
					adrs: {
						required: true
					},
					dob: {
						required: true
					},
					doj: {
						required: true
					}
                },
                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                        .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    /*success2.show();
                    error2.hide();*/
					form.submit();
                }

            });
    
	
	}

	var handleAdvvalidation = function () {


	    // for more info visit the official plugin documentation: 
	    // http://docs.jquery.com/Plugins/Validation

	    var form2 = $('#form_adv');
	    var error2 = $('.alert-error', form2);
	    var success2 = $('.alert-success', form2);

	    //IMPORTANT: update CKEDITOR textarea with actual content before submit
	    form2.on('submit', function () {
	        for (var instanceName in CKEDITOR.instances) {
	            CKEDITOR.instances[instanceName].updateElement();
	        }
	    })

	    form2.validate({
	        errorElement: 'span', //default input error message container
	        errorClass: 'help-inline', // default input error message class
	        focusInvalid: false, // do not focus the last invalid input
	        ignore: "",
	        rules: {
	            page: {
	                required: true
	            },
	            pic: {
	                required: true
	            }
	        },
	        invalidHandler: function (event, validator) { //display error alert on form submit   
	            success2.hide();
	            error2.show();
	            App.scrollTo(error2, -200);
	        },

	        highlight: function (element) { // hightlight error inputs
	            $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
	            $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
	        },

	        unhighlight: function (element) { // revert the change done by hightlight
	            $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
	        },

	        success: function (label) {
	            if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
	                label
                        .closest('.control-group').removeClass('error').addClass('success');
	                label.remove(); // remove error label here
	            } else { // display success icon for other inputs
	                label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
	            }
	        },

	        submitHandler: function (form) {
	            /*success2.show();
                error2.hide();*/
	            form.submit();
	        }

	    });


	}


	var handleGlryvalidation = function () {


	    // for more info visit the official plugin documentation: 
	    // http://docs.jquery.com/Plugins/Validation

	    var form2 = $('#form_glry');
	    var error2 = $('.alert-error', form2);
	    var success2 = $('.alert-success', form2);

	    //IMPORTANT: update CKEDITOR textarea with actual content before submit
	    form2.on('submit', function () {
	        for (var instanceName in CKEDITOR.instances) {
	            CKEDITOR.instances[instanceName].updateElement();
	        }
	    })

	    form2.validate({
	        errorElement: 'span', //default input error message container
	        errorClass: 'help-inline', // default input error message class
	        focusInvalid: false, // do not focus the last invalid input
	        ignore: "",
	        rules: {
	            title: {
	                required: true
	            }

	        },
	        invalidHandler: function (event, validator) { //display error alert on form submit   
	            success2.hide();
	            error2.show();
	            App.scrollTo(error2, -200);
	        },

	        highlight: function (element) { // hightlight error inputs
	            $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
	            $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
	        },

	        unhighlight: function (element) { // revert the change done by hightlight
	            $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
	        },

	        success: function (label) {
	            if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
	                label
                        .closest('.control-group').removeClass('error').addClass('success');
	                label.remove(); // remove error label here
	            } else { // display success icon for other inputs
	                label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
	            }
	        },

	        submitHandler: function (form) {
	            /*success2.show();
                error2.hide();*/
	            form.submit();
	        }

	    });


	}

	var handleStgvalidation = function () {


	    // for more info visit the official plugin documentation: 
	    // http://docs.jquery.com/Plugins/Validation

	    var form2 = $('#form_cpswd');
	    var error2 = $('.alert-error', form2);
	    var success2 = $('.alert-success', form2);

	    //IMPORTANT: update CKEDITOR textarea with actual content before submit
	    form2.on('submit', function () {
	        for (var instanceName in CKEDITOR.instances) {
	            CKEDITOR.instances[instanceName].updateElement();
	        }
	    })

	    form2.validate({
	        errorElement: 'span', //default input error message container
	        errorClass: 'help-inline', // default input error message class
	        focusInvalid: false, // do not focus the last invalid input
	        ignore: "",
	        rules: {
	            username: {
	                required: true
	            },
	            password: {
	                required: true
	            },
	            c_password: {
	                required: true,
	                equalTo: "#password"
	            },
	        },
	        invalidHandler: function (event, validator) { //display error alert on form submit   
	            success2.hide();
	            error2.show();
	            App.scrollTo(error2, -200);
	        },

	        highlight: function (element) { // hightlight error inputs
	            $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
	            $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
	        },

	        unhighlight: function (element) { // revert the change done by hightlight
	            $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
	        },

	        success: function (label) {
	            if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
	                label
                        .closest('.control-group').removeClass('error').addClass('success');
	                label.remove(); // remove error label here
	            } else { // display success icon for other inputs
	                label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
	            }
	        },

	        submitHandler: function (form) {
	            /*success2.show();
                error2.hide();*/
	            form.submit();
	        }

	    });


	}


	var handleVideovalidation = function () {

	    // for more info visit the official plugin documentation: 
	    // http://docs.jquery.com/Plugins/Validation

	    var form2 = $('#form_video');
	    var error2 = $('.alert-error', form2);
	    var success2 = $('.alert-success', form2);

	    //IMPORTANT: update CKEDITOR textarea with actual content before submit
	    form2.on('submit', function () {
	        for (var instanceName in CKEDITOR.instances) {
	            CKEDITOR.instances[instanceName].updateElement();
	        }
	    })

	    form2.validate({
	        errorElement: 'span', //default input error message container
	        errorClass: 'help-inline', // default input error message class
	        focusInvalid: false, // do not focus the last invalid input
	        ignore: "",
	        rules: {
	            title: {
	                required: true
	            },
	            embed_code: {
	                required: true
	            }
	        },
	        invalidHandler: function (event, validator) { //display error alert on form submit   
	            success2.hide();
	            error2.show();
	            App.scrollTo(error2, -200);
	        },

	        highlight: function (element) { // hightlight error inputs
	            $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
	            $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
	        },

	        unhighlight: function (element) { // revert the change done by hightlight
	            $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
	        },

	        success: function (label) {
	            if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
	                label
                        .closest('.control-group').removeClass('error').addClass('success');
	                label.remove(); // remove error label here
	            } else { // display success icon for other inputs
	                label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
	            }
	        },

	        submitHandler: function (form) {
	            /*success2.show();
                error2.hide();*/
	            form.submit();
	        }

	    });

	}

	var handleBannervalidation = function () {

	    // for more info visit the official plugin documentation: 
	    // http://docs.jquery.com/Plugins/Validation

	    var form2 = $('#form_banner');
	    var error2 = $('.alert-error', form2);
	    var success2 = $('.alert-success', form2);

	    //IMPORTANT: update CKEDITOR textarea with actual content before submit
	    form2.on('submit', function () {
	        for (var instanceName in CKEDITOR.instances) {
	            CKEDITOR.instances[instanceName].updateElement();
	        }
	    })

	    form2.validate({
	        errorElement: 'span', //default input error message container
	        errorClass: 'help-inline', // default input error message class
	        focusInvalid: false, // do not focus the last invalid input
	        ignore: "",
	        rules: {
	            title1: {
	                required: true
	            },
	            title2: {
	                required: true
	            },
	            pic: {
	                required: true
	            }
	        },
	        invalidHandler: function (event, validator) { //display error alert on form submit   
	            success2.hide();
	            error2.show();
	            App.scrollTo(error2, -200);
	        },

	        highlight: function (element) { // hightlight error inputs
	            $(element)
                    .closest('.help-inline').removeClass('ok'); // display OK icon
	            $(element)
                    .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
	        },

	        unhighlight: function (element) { // revert the change done by hightlight
	            $(element)
                    .closest('.control-group').removeClass('error'); // set error class to the control group
	        },

	        success: function (label) {
	            if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
	                label
                        .closest('.control-group').removeClass('error').addClass('success');
	                label.remove(); // remove error label here
	            } else { // display success icon for other inputs
	                label
                        .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                    .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
	            }
	        },

	        submitHandler: function (form) {
	            /*success2.show();
                error2.hide();*/
	            form.submit();
	        }

	    });

	}

	

    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {
            
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["assets/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation2();
			handleNewsvalidation();
			handleMembersvalidation();
			handleAdvvalidation();
			handleGlryvalidation();
			handleStgvalidation();
			handleVideovalidation();
            handleBannervalidation();

        }

    };

}();