var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "Select Language..."
      },
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

for(let i = 0; i < formData.length; ++i){
  var formNode = document.querySelector('.fields');
  if(formData[i].type === 'text'){
    var formInput = document.createElement('input');
    formInput.type = formData[i].type;
    formInput.placeholder = formData[i].label;
    formInput.id = formData[i].id;
    formInput.icon = formData[i].icon;
    formNode.appendChild(formInput);
  } else if (formData[i].type === 'email'){
    formInput = document.createElement('input');
    formInput.type = formData[i].type;
    formInput.placeholder = formData[i].label;
    formInput.id = formData[i].id;
    formInput.icon = formData[i].icon;
    formNode.appendChild(formInput).setAttribute('type', formData[i].type);
  } else if (formData[i].type === 'select'){
    formSelect = document.createElement('select');
    formInput.type = formData[i].type;
    formInput.placeholder = formData[i].label;
    formInput.id = formData[i].id;
    formInput.icon = formData[i].icon;
    formNode.appendChild(formSelect);
    var selectNode = document.querySelector('select');
    console.log(formData[i].options.length);
    for(let p = 0; p < formData[i].options.length; ++p){
      var selectOptionInput = document.createElement('option');
      selectOptionInput.label = formData[i].options[p].label;
      selectOptionInput.value = formData[i].options[p].value;
      selectNode.appendChild(selectOptionInput);
    }
  } else if (formData[i].type === 'textarea'){
    formInput = document.createElement('input');
    formInput.type = formData[i].type;
    formInput.placeholder = formData[i].label;
    formInput.id = formData[i].id;
    formInput.icon = formData[i].icon;
    formNode.appendChild(formInput).setAttribute('type', formData[i].type);
  } else if (formData[i].type === 'tel'){
    formInput = document.createElement('input');
    formInput.type = formData[i].type;
    formInput.placeholder = formData[i].label;
    formInput.id = formData[i].id;
    formInput.icon = formData[i].icon;
    formNode.appendChild(formInput).setAttribute('type', formData[i].type);
  }
  // var textNode = document.createTextNode(formData[i].type);
}
