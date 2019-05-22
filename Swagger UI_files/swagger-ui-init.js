window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "swagger": "2.0",
    "info": {
      "description": "This is a sample API Doc for Example Blog",
      "version": "1.0.0",
      "title": "Example Blog",
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "email": "apiteam@swagger.io"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "blog.swagger.io",
    "basePath": "/v2",
    "tags": [
      {
        "name": "blogs",
        "description": "Every details about blog",
        "externalDocs": {
          "description": "Find out more",
          "url": "http://swagger.io"
        }
      },
      {
        "name": "comments",
        "description": "Access to blog comments"
      },
      {
        "name": "user",
        "description": "Operations about user",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      }
    ],
    "schemes": [
      "https",
      "http"
    ],
    "paths": {
      "/blogs": {
        "get": {
          "tags": [
            "blogs"
          ],
          "summary": "Find all blogs",
          "description": "Returns blogs",
          "operationId": "getBlogs",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Blog"
              }
            },
            "404": {
              "description": "Blog not found"
            }
          },
          "security": [
            {
              "api_key": []
            }
          ]
        },
        "post": {
          "tags": [
            "blogs"
          ],
          "summary": "Add a new blog",
          "description": "API Endpoint to add a blog",
          "operationId": "addBlog",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Blog object that needs to be added",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Blog"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created Successfully"
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        },
        "put": {
          "tags": [
            "blogs"
          ],
          "summary": "Update an existing blog",
          "description": "API Endpoint to update a blog",
          "operationId": "updateBlog",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Blog object that needs to be updated",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Blog"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Ok"
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Blog not found"
            },
            "405": {
              "description": "Validation exception"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        }
      },
      "/blogs/{blogId}": {
        "get": {
          "tags": [
            "blogs"
          ],
          "summary": "Find blog by ID",
          "description": "Returns a single blog",
          "operationId": "getBlogById",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "blogId",
              "in": "path",
              "description": "ID of blog to return",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Blog"
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Blog not found"
            }
          },
          "security": [
            {
              "api_key": []
            }
          ]
        },
        "delete": {
          "tags": [
            "blogs"
          ],
          "summary": "Deletes a blog",
          "description": "",
          "operationId": "deleteBlog",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "required": false,
              "type": "string"
            },
            {
              "name": "blogId",
              "in": "path",
              "description": "Blog id to delete",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "responses": {
            "200": {
              "description": "Operation Successful"
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Blog not found"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        }
      },
      "/comments": {
        "get": {
          "tags": [
            "comments"
          ],
          "summary": "Find all comments",
          "description": "Returns comments",
          "operationId": "getComments",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Comment"
              }
            },
            "404": {
              "description": "Comment not found"
            }
          },
          "security": [
            {
              "api_key": []
            }
          ]
        },
        "post": {
          "tags": [
            "comments"
          ],
          "summary": "Add a new comment",
          "description": "API Endpoint to add a comment",
          "operationId": "addComment",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Comment object that needs to be added",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Comment"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "Created Successfully"
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        },
        "put": {
          "tags": [
            "comments"
          ],
          "summary": "Update an existing comment",
          "description": "API Endpoint to update a comment",
          "operationId": "updateComment",
          "consumes": [
            "application/json",
            "application/xml"
          ],
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Comment object that needs to be updated",
              "required": true,
              "schema": {
                "$ref": "#/definitions/Comment"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Ok"
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Comment not found"
            },
            "405": {
              "description": "Validation exception"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        },
        "delete": {
          "tags": [
            "comments"
          ],
          "summary": "Deletes all comments",
          "description": "",
          "operationId": "deleteComments",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "Operation Successful"
            },
            "404": {
              "description": "Comments not found"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        }
      },
      "/comments/{commentId}": {
        "get": {
          "tags": [
            "comments"
          ],
          "summary": "Find comment by ID",
          "description": "Returns a single comment",
          "operationId": "getCommentById",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "commentId",
              "in": "path",
              "description": "ID of comment to return",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/Comment"
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Comment not found"
            }
          },
          "security": [
            {
              "api_key": []
            }
          ]
        },
        "delete": {
          "tags": [
            "comments"
          ],
          "summary": "Deletes a comment",
          "description": "",
          "operationId": "deleteComment",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "api_key",
              "in": "header",
              "required": false,
              "type": "string"
            },
            {
              "name": "commentId",
              "in": "path",
              "description": "Comment id to delete",
              "required": true,
              "type": "integer",
              "format": "int64"
            }
          ],
          "responses": {
            "200": {
              "description": "Operation Successful"
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Comment not found"
            }
          },
          "security": [
            {
              "blog_auth": [
                "write:blogs",
                "read:blogs"
              ]
            }
          ]
        }
      },
      "/user/register": {
        "post": {
          "tags": [
            "user"
          ],
          "summary": "Create user",
          "description": "",
          "operationId": "registerUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "in": "body",
              "name": "body",
              "description": "Created user object",
              "required": true,
              "schema": {
                "$ref": "#/definitions/User"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "successful Creation"
            }
          }
        }
      },
      "/user/login": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Logs user into the system",
          "description": "",
          "operationId": "loginUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "username",
              "in": "query",
              "description": "The user name for login",
              "required": true,
              "type": "string"
            },
            {
              "name": "password",
              "in": "query",
              "description": "The password for login in clear text",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "type": "string"
              },
              "headers": {
                "X-Rate-Limit": {
                  "type": "integer",
                  "format": "int32",
                  "description": "calls per hour allowed by the user"
                },
                "X-Expires-After": {
                  "type": "string",
                  "format": "date-time",
                  "description": "date in UTC when token expires"
                }
              }
            },
            "400": {
              "description": "Invalid username/password supplied"
            }
          }
        }
      },
      "/user/logout": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Logs out current logged in user session",
          "description": "",
          "operationId": "logoutUser",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [],
          "responses": {
            "default": {
              "description": "successful operation"
            }
          }
        }
      },
      "/user/{userId}": {
        "get": {
          "tags": [
            "user"
          ],
          "summary": "Get user by user ID",
          "description": "",
          "operationId": "getUserById",
          "produces": [
            "application/xml",
            "application/json"
          ],
          "parameters": [
            {
              "name": "userId",
              "in": "path",
              "description": "The Id that needs to be fetched. Use 1 for testing. ",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "successful operation",
              "schema": {
                "$ref": "#/definitions/User"
              }
            },
            "400": {
              "description": "Invalid userId supplied"
            },
            "404": {
              "description": "User not found"
            }
          }
        }
      }
    },
    "securityDefinitions": {
      "blog_auth": {
        "type": "oauth2",
        "authorizationUrl": "http://blog.swagger.io/oauth/dialog",
        "flow": "implicit",
        "scopes": {
          "write:blogs": "modify blogs in your account",
          "read:blogs": "read your blogs"
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    },
    "definitions": {
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "username": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "userStatus": {
            "type": "integer",
            "format": "int32",
            "description": "User Status"
          }
        },
        "xml": {
          "name": "User"
        }
      },
      "Blog": {
        "type": "object",
        "required": [
          "body",
          "id"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "body": {
            "type": "string"
          },
          "likes": {
            "type": "integer"
          },
          "comments": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/Comment"
            }
          }
        },
        "xml": {
          "name": "Blog"
        }
      },
      "Comment": {
        "type": "object",
        "required": [
          "body",
          "id"
        ],
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "body": {
            "type": "string"
          },
          "likes": {
            "type": "integer"
          }
        },
        "xml": {
          "name": "Comment"
        }
      }
    },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}