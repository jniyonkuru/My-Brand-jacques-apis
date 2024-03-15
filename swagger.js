export const swaggerJson = {
    "openapi": "3.0.0",
    "info": {
      "title": "My Brand Jacques",
      "version": "1.0.0",
      "description": "My brand API documentation serves as a comprehensive guide for developers, It offers clear, concise instructions on endpoints, authentication, and data formats"
    },
    "servers": [
      {
        "url": "http://localhost:3008",
        "description": "development server"
      },
      {
        "url": "https://mybrand-be-95he.onrender.com",
        "description": "production server"
      }
    ],
    "components": {
      "securitySchemes": {
        "token": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "name": "Authorization",
        }
      }
    },
    "paths": {
      "/api/users/": {
        "post": {
          "tags": ["users"],
          "summary": "Register user",
          "security": [
            {
              "token": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "required": true
                    },
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "password": {
                      "type": "string",
                      "required": true
                    },
                    "confirmPassword":{
                      "type":"string",
                      "required":true
                    },
                    "isAdmin":{
                      "type":"boolean",
                
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "string"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                 
                }
              }
            }
          }
        }
      },
      "/api/users/login": {
        "post": {
          "tags": ["users"],
          "summary": "Login user",
          "security": [
            {
              "token": []
            }
          ],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "password": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "string"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                   "status":"success",
                   "message":"logged in successfully"
                  }
                }
              }
            }
          }
        }
      },
      "/api/blogs": {
        "post": {
          "tags": ["blogs"],
          "summary": "Create a blog",
          "security": [
            {
              "token": []
            }
          ],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "blogTitle": {
                      "type": "string",
                      "required": true
                    },
                    "blogBody": {
                      "type": "string",
                      "required": true
                    },
                    "image": {
                      "type": "string",
                      "format": "binary",
                      "description": " Image of the blog"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Success",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                      "status": "success",
                      "data": {
                          "blogTitle": "this the blog title",
                          "image": {
                              "data": {
                                  "type": "Buffer",
                                  "data": [
                                      98,
                                      108,
                                      111,
                                      103,
                                      52,
                                      46,
                                      106,
                                      112,
                                      103,
                                      49,
                                      55,
                                      49,
                                      48,
                                      49,
                                      48,
                                      53,
                                      56,
                                      48,
                                      52,
                                      56,
                                      55,
                                      56,
                                      45,
                                      54,
                                      55,
                                      50,
                                      53,
                                      55,
                                      53,
                                      53,
                                      49,
                                      52
                                  ]
                              },
                              "contentType": "image/jpg"
                          },
                          "blogBody": "this the bogy of the blog",
                          "createdAt": "2024-03-10T21:18:04.029Z",
                          "updatedAt": "2024-03-10T21:18:04.029Z",
                          "likes": 0,
                          "likedBy": [],
                          "_id": "65ee24ccd77d6815212f5fd3",
                          "author": "65e5f54b55f5d6c1167ad9df",
                          "__v": 0
                      }
                  }
  
                }
              }
            }
          }
        },

        "get": {
          "tags": ["blogs"],
          "summary": "List all blogs",
          "security": [
            {
              "token": []
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
      
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example":
                    {
                      "status": "success",
                      "data": [
                          {
                              "image": {
                                  "data": {
                                      "type": "Buffer",
                                      "data": [
                                          98,
                                          108,
                                          111,
                                          103,
                                          51,
                                          46,
                                          106,
                                          112,
                                          103,
                                          49,
                                          55,
                                          48,
                                          57,
                                          57,
                                          57,
                                          50,
                                          57,
                                          52,
                                          52,
                                          48,
                                          49,
                                          55,
                                          45,
                                          51,
                                          48,
                                          56,
                                          54,
                                          55,
                                          51,
                                          55,
                                          53,
                                          52
                                      ]
                                  },
                                  "contentType": "image/jpg"
                              },
                              "_id": "65ec6bf099f8274d105481ef",
                              "blogTitle": "blog2",
                              "blogBody": "this is a body  of a blog  blog1",
                              "createdAt": "2024-03-09T14:02:13.312Z",
                              "updatedAt": "2024-03-09T14:02:13.312Z",
                              "likes": 0,
                              "likedBy": [],
                              "author": "65e5f54b55f5d6c1167ad9df",
                              "__v": 0
                          },
                          {
                              "image": {
                                  "data": {
                                      "type": "Buffer",
                                      "data": [
                                          98,
                                          108,
                                          111,
                                          103,
                                          52,
                                          46,
                                          106,
                                          112,
                                          103,
                                          49,
                                          55,
                                          49,
                                          48,
                                          49,
                                          48,
                                          53,
                                          56,
                                          48,
                                          52,
                                          56,
                                          55,
                                          56,
                                          45,
                                          54,
                                          55,
                                          50,
                                          53,
                                          55,
                                          53,
                                          53,
                                          49,
                                          52
                                      ]
                                  },
                                  "contentType": "image/jpg"
                              },
                              "_id": "65ee24ccd77d6815212f5fd3",
                              "blogTitle": "this the blog title",
                              "blogBody": "this the bogy of the blog",
                              "createdAt": "2024-03-10T21:18:04.029Z",
                              "updatedAt": "2024-03-10T21:18:04.029Z",
                              "likes": 0,
                              "likedBy": [],
                              "author": "65e5f54b55f5d6c1167ad9df",
                              "__v": 0
                          }
                      ]
                  }
                }
              }
            }
          }
        }
      },
      "/api/blogs/{id}": {
        "put": {
          "tags": ["blogs"],
          "summary": "Update a blog",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"id",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "blogTitle": {
                      "type": "string"
                    },
                    "blogBody": {
                      "type": "string"
                    },
                    "image": {
                      "type": "string",
                      "format": "binary",
                      "description": "the image of the blog"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
    "data": {
        "image": {
            "data": {
                "type": "Buffer",
                "data": [
                    98,
                    108,
                    111,
                    103,
                    51,
                    46,
                    106,
                    112,
                    103,
                    49,
                    55,
                    48,
                    57,
                    57,
                    57,
                    50,
                    57,
                    52,
                    52,
                    48,
                    49,
                    55,
                    45,
                    51,
                    48,
                    56,
                    54,
                    55,
                    51,
                    55,
                    53,
                    52
                ]
            },
            "contentType": "image/jpg"
        },
        "_id": "65ec6bf099f8274d105481ef",
        "blogTitle": "blog2",
        "blogBody": "this is a body  of a blog  blog1",
        "createdAt": "2024-03-09T14:02:13.312Z",
        "updatedAt": "2024-03-09T14:02:13.312Z",
        "likes": 0,
        "likedBy": [],
        "author": "65e5f54b55f5d6c1167ad9df",
        "__v": 0
    }
                  }
                }
              }
            }
          }
        },
        "get": {
          "tags": ["blogs"],
          "summary": "Get a blog",
          "parameters":[{
            "in":"path",
            "name":"id",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "security": [
            {
              "token": []
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "message"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
    "data": {
        "image": {
            "data": {
                "type": "Buffer",
                "data": [
                    98,
                    108,
                    111,
                    103,
                    51,
                    46,
                    106,
                    112,
                    103,
                    49,
                    55,
                    48,
                    57,
                    57,
                    57,
                    50,
                    57,
                    52,
                    52,
                    48,
                    49,
                    55,
                    45,
                    51,
                    48,
                    56,
                    54,
                    55,
                    51,
                    55,
                    53,
                    52
                ]
            },
            "contentType": "image/jpg"
        },
        "_id": "65ec6bf099f8274d105481ef",
        "blogTitle": "blog2",
        "blogBody": "this is a body  of a blog  blog1",
        "createdAt": "2024-03-09T14:02:13.312Z",
        "updatedAt": "2024-03-09T14:02:13.312Z",
        "likes": 0,
        "likedBy": [],
        "author": "65e5f54b55f5d6c1167ad9df",
        "__v": 0
    }
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": ["blogs"],
          "summary": "Delete a blog",
          "security": [
            {
              "token": []
            }
          ],
          "responses": {
            "204": {
              "description": "OK",
             
            }
          }
        }
  
      },
     "/api/blogs/{blogId}/like":{

      "post":{
        "tags":["blogs"],
        "summary":"like  a blog",
        "parameters":[{
          "in":"path",
          "name":"blogId",
          "schema":{
            "type":"string",
            "required":"true"
          },
        }],
        "security": [
          {
            "token": []
          }
        ],
        "parameters":[{
          "in":"path",
          "name":"blogId",
          "schema":{
            "type":"string",
            "required":"true"
          },
        }],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    },
                    "error": {
                      "type": "error"
                    }
                  }
                },
                "example": {
                 "status":"success",
                 "message":"you liked a blogPost"
                }
              }
            }
          }
        }
       }

     }
      ,
      "/api/blog/{blogId}/comments": {
        "post": {
          "tags": ["Comments"],
          "summary": "Create a comment",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"blogId",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "commentBody": {
                      "type": "string",
                      "required": true
                    }
              
                  }
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "success",
              
            }
          }
        },
        "delete": {
          "tags": ["Comments"],
          "summary": "Dele all comments of a blog",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"blogId",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  
                }
              }
            }
          }
        },
        "get": {
          "tags": ["Comments"],
          "summary": "List  all comments of a blog",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"blogId",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  
                }
              }
            }
          }
        }


  
      },
      "/api/blog/{blogId}/comments/{commentId}": {
        "put": {
          "tags": ["Comments"],
          "summary": "Update a comment ",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"blogId",
            "schema":{
              "type":"string",
              "required":"true"
            }},
            {
              "in":"path",
              "name":"commentId",
              "schema":{
                "type":"string",
                "required":"true"
              },
          }],
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "commentBody": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  
                }
              }
            }
          }
        },
        "delete": {
          "tags": ["Comments"],
          "summary": " delete a comment",
          "security": [
            {
              "token": []
            }
          ],
         "parameters":[{
            "in":"path",
            "name":"blogId",
            "schema":{
              "type":"string",
              "required":"true"
            }},
            {
              "in":"path",
              "name":"commentId",
              "schema":{
                "type":"string",
                "required":"true"
              },
          }],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "message"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  
                }
              }
            }
          }
        }
      },
      "/api/messages": {
        "get": {
          "tags": ["Messages"],
          "summary": "Get all messages",
          "security": [
            {
              "token": []
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
                    "data": [
                        {
                            "_id": "65e5fb9c55f5d6c1167ad9ec",
                            "name": "uwase",
                            "email": "uwasemariejose@gmail.com",
                            "messageBody": "hahshshshshhshshshsh this my message to you",
                            "date": "2024-03-04T16:18:10.602Z",
                            "__v": 0
                        },
                        {
                            "_id": "65e969a6402952d9bd583af3",
                            "name": "uwase",
                            "email": "uwasemariejose@gmail.com",
                            "messageBody": "hahshshshshhshshshsh this my message to you",
                            "date": "2024-03-07T07:15:14.868Z",
                            "__v": 0
                        },
                        {
                            "_id": "65eb00ea411285799fa32b40",
                            "name": "uwase",
                            "email": "uwasemariejose@gmail.com",
                            "messageBody": "hahshshshshhshshshsh this my message to you",
                            "date": "2024-03-08T12:10:36.825Z",
                            "__v": 0
                        },
                        {
                            "_id": "65eb086e9e1050240eafdcb5",
                            "name": "uwase",
                            "email": "uwase@gmail.com",
                            "messageBody": "here is my message",
                            "date": "2024-03-08T12:40:46.968Z",
                            "__v": 0
                        },
                        {
                            "_id": "65eb4196e248821bdf641b78",
                            "name": "uwase",
                            "email": "uwase33@gmail.com",
                            "messageBody": "this is my message",
                            "date": "2024-03-08T16:45:40.737Z",
                            "__v": 0
                        }
                    ]
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": ["Messages"],
          "summary": "Write message",
      
          "requestBody": {
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "required": true
                    },
                    "email": {
                      "type": "string",
                      "required": true
                    },
                    "messageBody": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    
                      "status": "success",
                      "message": "message sent successfully"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": ["Messages"],
          "summary": "Delete all messages",
          "security":[
            {
              token:[]
            }
          ],
      
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    
                      "status": "success",
                      "message": "messages deleted "
                  }
                }
              }
            }
          }
        }

      },
      "/api/messages/{messageId}": {
        "get": {
          "tags": ["Messages"],
          "summary": "get one message",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"messageId",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "requestBody": {
        
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "status": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
                    "data": {
                        "_id": "65e5fb9c55f5d6c1167ad9ec",
                        "name": "uwase",
                        "email": "uwasemariejose@gmail.com",
                        "messageBody": "hahshshshshhshshshsh this my message to you",
                        "date": "2024-03-04T16:18:10.602Z",
                        "__v": 0
                    }
                  }
                }
              }
            }
          }
        }, 
        "delete":{
          "tags": ["Messages"],
          "summary": " Delete a message",
          "security": [
            {
              "token": []
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"messageId",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
          "requestBody": {
        
          },
          "responses": {
            "204": {
              "description": "OK",
            }
          }
        }
      }
      ,



































      "/api/portfolio": {
        "get": {
          "tags": ["Portfolio"],
          "summary": "Get all portfolios",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "array"
                      },
                      "status": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
                    "data": [
                        {
                            "_id": "65f16520cba3ca90789d0e86",
                            "workUrl": "this the url of the work",
                            "image": "http://res.cloudinary.com/df12i4qqo/image/upload/v1710318897/zypxnpfl1uqzuxsabe7w.png",
                            "__v": 0
                        },
                        {
                            "_id": "65f1668acba3ca90789d0e88",
                            "workUrl": "this the url of the work",
                            "image": "http://res.cloudinary.com/df12i4qqo/image/upload/v1710319247/pw6kvxcer8eswwjg7kr0.png",
                            "__v": 0
                        }
                    ]
                  }
                }
              }
            }
          }
        },
        "post": {
          "tags": ["Portfolio"],
          "summary": "Write a portfolio",
          "security":[
            {
              "token":[]
            }
          ],
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "workUrl": {
                      "type": "string",
                      "required": true
                    },

                    "image": {
                      "type": "string",
                      "format":"binary"
                    },
  
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "data": {
                        "type": "object"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    "status": "success",
                   "message": "portfolio successfully posted"
                  }
                }
              }
            }
          }
        },
        "delete": {
          "tags": ["Portfolio"],
          "summary": "Delete a  portfolio",
          "security":[
            {
              token:[]
            }
          ],
          "parameters":[{
            "in":"path",
            "name":"id",
            "schema":{
              "type":"string",
              "required":"true"
            },
          }],
      
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "status": {
                        "type": "string"
                      },
                      "message": {
                        "type": "string"
                      },
                      "error": {
                        "type": "error"
                      }
                    }
                  },
                  "example": {
                    
                      "status": "success",
                      "message": "portfolio deleted "
                  }
                }
              }
            }
          }
        }
      }

      
    
    }
  }
  