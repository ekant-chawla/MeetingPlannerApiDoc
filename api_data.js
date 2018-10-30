define({ "api": [
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/event/create",
    "title": "Create meeting",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Schedule a meeting for the user with provided detail.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token of the admin creating the api.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the user for whom the meeting is to be scheduled</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A description or purpose of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Start of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the meeting</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "importance",
            "description": "<p>Importance level of the meeting, can be 0, 1 or 2. Color is based on this. Defaluts to 1 (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Meeting scheduled\",\n    \"status\": 200,\n    \"data\": {\n        \"color\": {\n            \"primary\": \"#ffe100\",\n            \"secondary\": \"#e2d88c\"\n        },\n        \"id\": \"d0f390\",\n        \"start\": \"2018-11-23T11:31:50.430Z\",\n        \"end\": \"2018-11-24T11:31:50.430Z\",\n        \"title\": \"Metting\",\n        \"description\": \"Event description\",\n        \"location\": \"Delhi\",\n        \"adminName\": \"testadmin\",\n        \"importance\": 1\n    },\n    \"timestamp\": 1540804839318\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/eventRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1EventCreate"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/user/signup",
    "title": "Signup",
    "version": "1.0.0",
    "group": "Create",
    "description": "<p>Signup new user with a valid email id and password. Passowrd must be at least 8 characters.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Last name of the user (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>Country code</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User registered successfully.\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535440227612\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Internal server error\",\n        \"status\": 500,\n        \"data\": null,\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Create",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1UserSignup"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/event/delete",
    "title": "Delete meeting",
    "version": "1.0.0",
    "group": "Delete",
    "description": "<p>Delete a scheduled meeting.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token of the admin.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>Id of the meeting to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Meeting deleted successfully\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1540806203262\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/eventRoutes.js",
    "groupTitle": "Delete",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1EventDelete"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/event/list",
    "title": "List meeting",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>Schedule a meeting for the user with provided detail.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token of the admin creating the api.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User id of the user for whom the meeting is to be listed. If not provided then it will return list for querying user (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "month",
            "description": "<p>Month for which the meetings should be listed. If not provided then it will return list for current month. Valid months 0 to 11 (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Meeting list\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"color\": {\n                \"primary\": \"#028c12\",\n                \"secondary\": \"#86ce8e\"\n            },\n            \"id\": \"fe3d9c\",\n            \"start\": \"2018-10-29T08:19:50.000Z\",\n            \"end\": \"2018-10-29T10:10:50.000Z\",\n            \"title\": \"Test color\",\n            \"description\": \"test\",\n            \"location\": \"Delhi\",\n            \"adminName\": \"testadmin\",\n            \"importance\": 2\n        }\n    ],\n    \"timestamp\": 1540805391176\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/eventRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1EventList"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/user/listUsers",
    "title": "List users",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>Lists the normal users on the server. Only admin users will get a success.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token of the admin user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User list\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bcdbe73e53eb60444c0ca6c\",\n            \"lastName\": \"Chawla\",\n            \"firstName\": \"Ekant\",\n            \"userId\": \"d42135\",\n            \"userName\": \"Ekant_Chawla\"\n        }\n    ],\n    \"timestamp\": 1540803260129\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1UserListusers"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/user/login",
    "title": "Login",
    "version": "1.0.0",
    "group": "Read",
    "description": "<p>The login api of the application. Used to obtain the authToken for all other api.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>E-mail id of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"User logged in\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Imxhc3ROYW1lIjoiIiwiZW1haWwiOiJla2FudC5jaGF3bGExQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkVrYW50IiwidXNlcklkIjoiZjVkNjk0In0sImV4cCI6MTUzNTUyMjQwOSwic3ViIjoiQXV0aFRva2VuIiwiaXNzIjoiQ2hhdEFwcCIsImlhdCI6MTUzNTQzNjAwOH0.q8TClbik4JhW1R75Q1wnNdCyznuGRUivHR1ZbI7B8Iw\",\n        \"userId\": \"f5d694\",\n        \"firstName\": \"Ekant\",\n        \"lastName\": \"\"\n    },\n    \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Internal server error\",\n        \"status\": 500,\n        \"data\": null,\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Read",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1UserLogin"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/event/edit",
    "title": "Edit meeting",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Edit an already scheduled meeting for the user with provided detail.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Auth token of the admin creating the api.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "eventId",
            "description": "<p>Id of the meeting to be edited</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the meeting (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>A description or purpose of the meeting (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "start",
            "description": "<p>Start of the meeting (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "end",
            "description": "<p>End of the meeting (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>Location of the meeting (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "importance",
            "description": "<p>Importance level of the meeting, can be 0, 1 or 2 (Optional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Meeting updated successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"color\": {\n            \"primary\": \"#ffe100\",\n            \"secondary\": \"#e2d88c\"\n        },\n        \"id\": \"d0f390\",\n        \"start\": \"2018-11-23T11:31:50.430Z\",\n        \"end\": \"2018-11-24T11:31:50.430Z\",\n        \"title\": \"updated Titile\",\n        \"description\": \"Event description\",\n        \"location\": \"Delhi\",\n        \"adminName\": \"testadmin\",\n        \"importance\": 1\n    },\n    \"timestamp\": 1540805795240\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/eventRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1EventEdit"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/user/forgotPass",
    "title": "Password reset",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Send password reset email to the user on the registered email id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Registered email of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"error\": false,\n \"message\": \"Password reset email sent.\",\n \"status\": 200,\n \"data\": null,\n \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n     \"error\": true,\n     \"message\": \"Internal server error\",\n     \"status\": 500,\n     \"data\": null,\n     \"timestamp\": 1535440227612\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1UserForgotpass"
  },
  {
    "type": "post",
    "url": "http://meetingapi.ekantchawla.me/api/v1/user/updatePass",
    "title": "Update password",
    "version": "1.0.0",
    "group": "Update",
    "description": "<p>Reset the password of the user using the password reset url.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>Password reset auth token provided at the end of the password reset url</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Password updated\",\n    \"status\": 200,\n    \"data\": null,\n    \"timestamp\": 1535436008861\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n        \"error\": true,\n        \"message\": \"Internal server error\",\n        \"status\": 500,\n        \"data\": null,\n        \"timestamp\": 1535440227612\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Update",
    "name": "PostHttpMeetingapiEkantchawlaMeApiV1UserUpdatepass"
  }
] });
