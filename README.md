# Winterfell-Form-Builder
A form builder using the JSON schema defined by the Winterfell library.

## Winterfell
Winterfell is a react library developed by [Andrew Hathaway](http://twitter.com/andrewhathaway) that "allows you to build up complex questions, validation and conditional page switching via a JSON schema".  Read about Winterfell [here](https://github.com/andrewhathaway/Winterfell).

## Objective
This project aims to create an interface that allows a non developer to create a form, preview it and then publish it.

For simplicity we are going to use a public api: jsonbin.io to store the form's schema json and the form data.  For enterprise implementations it is recommended to store these json in a secure area.

## Why Wintefell and not another JSON Form Schema
1. Multipage
1. Conditional dependencies

## The Winterfell JSON Schema
The wintefell JSON Schema can be summarised as below:

```
{
  "formPanels": [],     
  "questionPanels": [
    { 
      "questionSets": []
    }
  ],
  "questionSets": [
    {
      "questions": []
    }
  ]       
}
```

* Form Panels: This is the table of contents of the pages of questions.  It describes how many pages of questions there are and the default order they are displayed.
* Question Panels: A question panel determines what questions are displayed on a page; the header; and the actions to perform (e.g. continue, cancel, submit).
* Question Sets: details the question text; question type (e.g. text, radio;checkbox); and the validation that is to be performed on the input.
For more information refer to the [documentation](https://github.com/andrewhathaway/Winterfell).

## Functions
1. CreateForm(*formTitle*)

   Create an empty Winterfell schema with the formPanels key:
    ```
    { 
      "formPanels": []
    }
    ```

1. LoadForm(*schema*)

   Given a schema, this will be loaded in to the form builder.
   
1. AddPage(*panelId, panelHeader*)

   This button will add an entry to the formPanels array and the qustionPanels array.  Note the panelId in the formPanel and questionPanel are identical.

    ```
    {
      "formPanels": [{
        "index": 1,
        "panelId": "page-1"
      }],
      "questionPanels": [{}
        "panelId": "page-1",
        "panelHeader": "Survey Page 1",
        "panelText": "Let's grab some of your details"
    }]
    }
    ``` 

1. AddQuestion(**panelId, question, type**)
  
    Given a panelId (page), and a question object, and type add these to the questionPanels and questionSets.
    
    ```
    {
      "formPanels": [{
        "index": 1,
        "panelId": "page-1"
      }],
      "questionPanels": [{
        "panelId": "page-1",
        "panelHeader": "Survey Page 1",
        "panelText": "Let's grab some of your details",
        "questionSet": [{
          "index": 1,
          "questionSetId": "question-set-1"
        }]
      }],
      "questionSets": [{
        "questionSetId": "question-set-1",
        "questionSetHeader": "Survey Page 1",
        "questionSetText": "Let's grab some of your details",
        "questions": [{
          "questionId": "reg-first-name",
          "question": "First Name",
          "text": "Its nice to accompany a question with some extra text, is it not?",
          "input": {
            "type": "textInput",
            "placeholder": "First Name"
          },
          "validations": [
            {
              "type": "isLength",
              "params": [
                1
              ]
            }
          ]
        }]
      }]
    }
    ``` 

1. Edit Question

1. Add Dependency

## Test
For testing we're using Jest.  In the spirit of Test Driven Design, the tests will be written first.
