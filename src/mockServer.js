export function askCall(req) {
    const query = req.query;
    const entityName = req.sobject;
    const offset = req.offset
    const pageSize = req.pageSize;

    return new Promise((resolve, reject) => {

        const answer = JSON.parse(JSON.stringify(serverResponse));

        if (entityName) {
            answer.keywordBasedAnswer.searchObjects = answer.keywordBasedAnswer.searchObjects.filter(e => e.objectApiName === entityName);
        }
        if (entityName && offset && pageSize) {
            answer.keywordBasedAnswer.searchObjects = answer.keywordBasedAnswer.searchObjects.map(
                e => e.searchResults = e.searchResults.slice(offset, offset + pageSize)
            );
        }
        setTimeout(() => {  
          resolve(answer);  
        }, 500);
        
    });
}

export function entityScope(req) {
    const query = req.query;
    const offset = req.offset
    const pageSize = req.pageSize;

    return new Promise((resolve, reject) => {
        const answer = [
            "Account",
            "Contact",
            "Case",
            "Another",
            "Lead",
            "Opportunity"
        ];

        resolve(answer.slice(offset, offset + pageSize));
    });
}

const serverResponse = {
  "keywordBasedAnswer": {
    "recommendedResult": null,
    "searchObjects": [
      {
        "displayFields": [
          {
            "fieldApiName": "Name",
            "label": "Account Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Site",
            "label": "Account Site",
            "type": "Text"
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          }
        ],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Account",
        "labelPlural": "Accounts",
        "objectApiName": "Account",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "offset": 0,
          "pageSize": 3
        },
        "searchResults": [],
        "themeInfo": {
          "color": "7F8DE1",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/account_60.png"
        }
      },
      {
        "displayFields": [
          {
            "fieldApiName": "Name",
            "label": "Name",
            "type": "Name"
          },
          {
            "fieldApiName": "Account.Name",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Account.Site",
            "label": null,
            "type": null
          },
          {
            "fieldApiName": "Phone",
            "label": "Phone",
            "type": "Phone"
          },
          {
            "fieldApiName": "Email",
            "label": "Email",
            "type": "Email"
          },
          {
            "fieldApiName": "Owner.Alias",
            "label": null,
            "type": null
          }
        ],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Contact",
        "labelPlural": "Contacts",
        "objectApiName": "Contact",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "offset": 0,
          "pageSize": 3
        },
        "searchResults": [],
        "themeInfo": {
          "color": "A094ED",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/contact_60.png"
        }
      },
      {
        "displayFields": [
           {
            "fieldApiName": "CaseNumber",
            "label": "Case Number",
            "type": "string"
          },
          {
            "fieldApiName": "Subject",
            "label": "Subject",
            "type": "string"
          },
          {
            "fieldApiName": "Status",
            "label": "Status",
            "type": "picklist"
          },
          {
            "fieldApiName": "CreatedDate",
            "label": "Date/Time Opened",
            "type": "datetime"
          },
          {
            "fieldApiName": "Owner.NameOrAlias",
            "label": "Case Owner Alias",
            "type": "string"
          }
        ],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Case",
        "labelPlural": "Cases",
        "objectApiName": "Case",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": true,
          "offset": 0,
          "pageSize": 3
        },
        "searchResults": [
          {
            "highlightInfo": {
              "fields": {},
              "snippet": "VPN <mark>Issue</mark> in Madrid"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "500xx000000bnLbAAI"
                },
                "CaseNumber": {
                  "displayValue": null,
                  "value": "00001028"
                },
                "Subject": {
                  "displayValue": null,
                  "value": "VPN Issue in Madrid"
                },
                "Status": {
                  "displayValue": "New",
                  "value": "New"
                },
                "CreatedDate": {
                  "displayValue": "6/28/2022, 2:55 AM",
                  "value": "2022-06-28T09:55:50.000+0000"
                },
                "OwnerId": {
                  "displayValue": null,
                  "value": "005xx000001X7a1AAC"
                },
                "Owner": {
                  "displayValue": "User User",
                  "value": {
                    "attributes": {
                      "type": "Name",
                      "url": "/services/data/v55.0/sobjects/User/005xx000001X7a1AAC"
                    },
                    "NameOrAlias": {
                      "displayValue": null,
                      "value": "UUser"
                    },
                    "Name": {
                      "displayValue": null,
                      "value": "User User"
                    }
                  }
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {},
              "snippet": "VPN <mark>Issue</mark>"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "500xx000000bnLZAAY"
                },
                "CaseNumber": {
                  "displayValue": null,
                  "value": "00001026"
                },
                "Subject": {
                  "displayValue": null,
                  "value": "VPN Issue"
                },
                "Status": {
                  "displayValue": "New",
                  "value": "New"
                },
                "CreatedDate": {
                  "displayValue": "6/28/2022, 2:55 AM",
                  "value": "2022-06-28T09:55:50.000+0000"
                },
                "OwnerId": {
                  "displayValue": null,
                  "value": "005xx000001X7a1AAC"
                },
                "Owner": {
                  "displayValue": "User User",
                  "value": {
                    "attributes": {
                      "type": "Name",
                      "url": "/services/data/v55.0/sobjects/User/005xx000001X7a1AAC"
                    },
                    "NameOrAlias": {
                      "displayValue": null,
                      "value": "UUser"
                    },
                    "Name": {
                      "displayValue": null,
                      "value": "User User"
                    }
                  }
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {},
              "snippet": "Design <mark>issue</mark> with mechanical rotor"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "500xx000000bnHBAAY"
                },
                "CaseNumber": {
                  "displayValue": null,
                  "value": "00001024"
                },
                "Subject": {
                  "displayValue": null,
                  "value": "Design issue with mechanical rotor"
                },
                "Status": {
                  "displayValue": "New",
                  "value": "New"
                },
                "CreatedDate": {
                  "displayValue": "6/28/2022, 2:51 AM",
                  "value": "2022-06-28T09:51:02.000+0000"
                },
                "OwnerId": {
                  "displayValue": null,
                  "value": "005xx000001X7a1AAC"
                },
                "Owner": {
                  "displayValue": "User User",
                  "value": {
                    "attributes": {
                      "type": "Name",
                      "url": "/services/data/v55.0/sobjects/User/005xx000001X7a1AAC"
                    },
                    "NameOrAlias": {
                      "displayValue": null,
                      "value": "UUser"
                    },
                    "Name": {
                      "displayValue": null,
                      "value": "User User"
                    }
                  }
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          }
        ],
        "themeInfo": {
          "color": "F2CF5B",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/case_60.png"
        }
      },
      {
        "displayFields": [
          {
            "fieldApiName": "Name",
            "label": "Report Name",
            "type": "Text"
          },
          {
            "fieldApiName": "Description",
            "label": "Description",
            "type": "Text"
          }
        ],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Report",
        "labelPlural": "Reports",
        "objectApiName": "Report",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "offset": 0,
          "pageSize": 3
        },
        "searchResults": [],
        "themeInfo": {
          "color": "2ECBBE",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/report_60.png"
        }
      },
      {
        "displayFields": [],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Dashboard",
        "labelPlural": "Dashboards",
        "objectApiName": "Dashboard",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": false,
          "offset": 0,
          "pageSize": 3
        },
        "searchResults": [],
        "themeInfo": {
          "color": "EF6E64",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/standard/dashboard_60.png"
        }
      },
      {
        "displayFields": [
          {
            "fieldApiName": "Title",
            "label": "Title",
            "type": "Text"
          },
          {
            "fieldApiName": "PublishStatus",
            "label": "Publication Status",
            "type": "Picklist"
          },
          {
            "fieldApiName": "Language",
            "label": "Language",
            "type": "Picklist"
          },
          {
            "fieldApiName": "UrlName",
            "label": "URL Name",
            "type": "Text"
          },
          {
            "fieldApiName": "Body__c",
            "label": "Body",
            "type": "Rich Text Area"
          }
        ],
        "error": null,
        "filters": {
          "operands": [],
          "operator": ""
        },
        "label": "Knowledge",
        "labelPlural": "Knowledge",
        "objectApiName": "Knowledge__kav",
        "orderBy": [],
        "pageInfo": {
          "hasNextPage": true,
          "offset": 0,
          "pageSize": 20
        },
        "searchResults": [
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Connectivity on Laptop"
              },
              "snippet": "Overview\nInstructions for connecting your laptop to the <mark>VPN</mark>"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx0000000005AAA"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Connectivity on Laptop"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "help-desk-test-data-5"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "<b>Overview</b><br>Instructions for connecting your laptop to the VPN<br><br><b>Prerequisites</b> <ul><li>Be sure you are not wired in to the SFDC network.</li><li>A registered <a href=\"https://concierge.it.salesforce.com/search/aloha%20yubikey/results/detail/a02o000000CiiENAAZ\" target=\"_blank\">Aloha YubiKey</a> or <a href=\"https://concierge.it.salesforce.com/search/salesforce%20authenticator/results/detail/a02o000000CiiE4AAJ\" target=\"_blank\">Salesforce Authenticator</a> installed and registered. </li></ul> <b>Steps</b> <ol><li>Open the <b>Cisco Anyconnect</b> application. If you have trouble finding the application, use the <b>Spotlight</b> search (magnifying glass on the top right) on a Mac and the <b>Start Menu</b> for Windows to search for the application. The best connection for your region should be automatically selected. If it is not then from the dropdown menu, look for the <b>aloha-</b> connection for your region. <ul><li><b>AMER EAST</b> - https://vpn-east-1.corp.salesforce.com/iamvpn</li><li><b>AMER WEST</b> - https://vpn-amer1.corp.salesforce.com/iamvpn</li><li><b>EMEA</b> - ​https://vpn-emea1.corp.salesforce.com/iamvpn</li><li><b>APAC</b> - ​https://vpn-apj.corp.salesforce.com/iamvpn</li><li><b>APAC-IND </b>- https://vpn-apj1.corp.salesforce.com/iamvpn</li></ul> </li><li>Enter your <b>Salesforce username (not email address) </b>and <b>SSO </b><b>password</b></li></ol>​<br><b>If using Aloha YubiKey:</b> <ol start=\"4\"><li>Insert your <b>Aloha YubiKey</b> into an empty USB slot and ensure the <b>green light</b> is lit. (if you have a new USB-C yubikey it will work either way and two green lights on the key will light up when connected properly)</li><li>Make sure your cursor is in the <b>Answer </b>field of the <b>Anyconnect</b> application. Place your thumb or finger on the <b>gold disc of the YuibKey</b> for about <b>a second,</b> and release (the contact points will now be along the sides of the new USB-C Yubikey). </li><li>The field should auto-populate with an 8 digit masked password. If it doesn&#39;t, remove the <b>YubiKey</b> and repeat <b>steps 4 and 5. </b></li><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <br><b>Or Salesforce Authenticator:  <br>*Please click <a href=\"https://concierge.it.salesforce.com/answers/3/How-to-Register-Salesforce-Authenticator\" target=\"_blank\">here </a>if you need to register your Salesforce Authenticator first</b> <ol start=\"4\"><li>Open your Salesforce Authenticator app on your Mobile phone. </li><li>Enter the <b>six-digit </b>passcode displayed on the Authenticator app in the <b>Answer </b>field of the <b>Anyconnect</b> application OR approve the push notification on your phone.</li></ol> <b>NOTE:</b> Please make sure there is enough time left on the Authenticator timer (the green circle) <ol start=\"6\"><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <b>If you are in an environment with a slow or poor connection speed (plane WiFi for example) and the 2FA push is slow/timing out, try the following.</b> <ol><li>Open Cisco AnyConnect</li><li>Select the most appropriate <b>Aloha</b> VPN connection and hit connect</li><li>Enter your <b>Salesforce username</b> and <b>SSO password</b> but right at the end of your password type /otp then hit enter</li><li>This will skip the 2FA push to your phone and immediately prompt you for the verification code, which you&#39;ll then enter manually from the mobile application.</li></ol> <br><br>You should now be connected to the VPN! <br><br>If you are having trouble connecting after following these steps, please log a ticket."
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "Setup <mark>VPN</mark> on Your Laptop"
              },
              "snippet": "Overview\nInstructions for connecting your laptop to the <mark>VPN</mark>"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx0000000006AAA"
                },
                "Title": {
                  "displayValue": null,
                  "value": "Setup VPN on Your Laptop"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "help-desk-test-data-6"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "<b>Overview</b><br>Instructions for connecting your laptop to the VPN<br><br><b>Prerequisites</b> <ul><li>Be sure you are not wired in to the SFDC network.</li><li>A registered <a href=\"https://concierge.it.salesforce.com/search/aloha%20yubikey/results/detail/a02o000000CiiENAAZ\" target=\"_blank\">Aloha YubiKey</a> or <a href=\"https://concierge.it.salesforce.com/search/salesforce%20authenticator/results/detail/a02o000000CiiE4AAJ\" target=\"_blank\">Salesforce Authenticator</a> installed and registered. </li></ul> <b>Steps</b> <ol><li>Open the <b>Cisco Anyconnect</b> application. If you have trouble finding the application, use the <b>Spotlight</b> search (magnifying glass on the top right) on a Mac and the <b>Start Menu</b> for Windows to search for the application. The best connection for your region should be automatically selected. If it is not then from the dropdown menu, look for the <b>aloha-</b> connection for your region. <ul><li><b>AMER EAST</b> - https://vpn-east-1.corp.salesforce.com/iamvpn</li><li><b>AMER WEST</b> - https://vpn-amer1.corp.salesforce.com/iamvpn</li><li><b>EMEA</b> - ​https://vpn-emea1.corp.salesforce.com/iamvpn</li><li><b>APAC</b> - ​https://vpn-apj.corp.salesforce.com/iamvpn</li><li><b>APAC-IND </b>- https://vpn-apj1.corp.salesforce.com/iamvpn</li></ul> </li><li>Enter your <b>Salesforce username (not email address) </b>and <b>SSO </b><b>password</b></li></ol>​<br><b>If using Aloha YubiKey:</b> <ol start=\"4\"><li>Insert your <b>Aloha YubiKey</b> into an empty USB slot and ensure the <b>green light</b> is lit. (if you have a new USB-C yubikey it will work either way and two green lights on the key will light up when connected properly)</li><li>Make sure your cursor is in the <b>Answer </b>field of the <b>Anyconnect</b> application. Place your thumb or finger on the <b>gold disc of the YuibKey</b> for about <b>a second,</b> and release (the contact points will now be along the sides of the new USB-C Yubikey). </li><li>The field should auto-populate with an 8 digit masked password. If it doesn&#39;t, remove the <b>YubiKey</b> and repeat <b>steps 4 and 5. </b></li><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <br><b>Or Salesforce Authenticator:  <br>*Please click <a href=\"https://concierge.it.salesforce.com/answers/3/How-to-Register-Salesforce-Authenticator\" target=\"_blank\">here </a>if you need to register your Salesforce Authenticator first</b> <ol start=\"4\"><li>Open your Salesforce Authenticator app on your Mobile phone. </li><li>Enter the <b>six-digit </b>passcode displayed on the Authenticator app in the <b>Answer </b>field of the <b>Anyconnect</b> application OR approve the push notification on your phone.</li></ol> <b>NOTE:</b> Please make sure there is enough time left on the Authenticator timer (the green circle) <ol start=\"6\"><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <b>If you are in an environment with a slow or poor connection speed (plane WiFi for example) and the 2FA push is slow/timing out, try the following.</b> <ol><li>Open Cisco AnyConnect</li><li>Select the most appropriate <b>Aloha</b> VPN connection and hit connect</li><li>Enter your <b>Salesforce username</b> and <b>SSO password</b> but right at the end of your password type /otp then hit enter</li><li>This will skip the 2FA push to your phone and immediately prompt you for the verification code, which you&#39;ll then enter manually from the mobile application.</li></ol> <br><br>You should now be connected to the VPN! <br><br>If you are having trouble connecting after following these steps, please log a ticket."
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "Connect to the <mark>VPN</mark> on Your Laptop"
              },
              "snippet": "Overview\nInstructions for connecting your laptop to the <mark>VPN</mark>"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx0000000004AAA"
                },
                "Title": {
                  "displayValue": null,
                  "value": "Connect to the VPN on Your Laptop"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "help-desk-test-data-4"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "<b>Overview</b><br>Instructions for connecting your laptop to the VPN<br><br><b>Prerequisites</b> <ul><li>Be sure you are not wired in to the SFDC network.</li><li>A registered <a href=\"https://concierge.it.salesforce.com/search/aloha%20yubikey/results/detail/a02o000000CiiENAAZ\" target=\"_blank\">Aloha YubiKey</a> or <a href=\"https://concierge.it.salesforce.com/search/salesforce%20authenticator/results/detail/a02o000000CiiE4AAJ\" target=\"_blank\">Salesforce Authenticator</a> installed and registered. </li></ul> <b>Steps</b> <ol><li>Open the <b>Cisco Anyconnect</b> application. If you have trouble finding the application, use the <b>Spotlight</b> search (magnifying glass on the top right) on a Mac and the <b>Start Menu</b> for Windows to search for the application. The best connection for your region should be automatically selected. If it is not then from the dropdown menu, look for the <b>aloha-</b> connection for your region. <ul><li><b>AMER EAST</b> - https://vpn-east-1.corp.salesforce.com/iamvpn</li><li><b>AMER WEST</b> - https://vpn-amer1.corp.salesforce.com/iamvpn</li><li><b>EMEA</b> - ​https://vpn-emea1.corp.salesforce.com/iamvpn</li><li><b>APAC</b> - ​https://vpn-apj.corp.salesforce.com/iamvpn</li><li><b>APAC-IND </b>- https://vpn-apj1.corp.salesforce.com/iamvpn</li></ul> </li><li>Enter your <b>Salesforce username (not email address) </b>and <b>SSO </b><b>password</b></li></ol>​<br><b>If using Aloha YubiKey:</b> <ol start=\"4\"><li>Insert your <b>Aloha YubiKey</b> into an empty USB slot and ensure the <b>green light</b> is lit. (if you have a new USB-C yubikey it will work either way and two green lights on the key will light up when connected properly)</li><li>Make sure your cursor is in the <b>Answer </b>field of the <b>Anyconnect</b> application. Place your thumb or finger on the <b>gold disc of the YuibKey</b> for about <b>a second,</b> and release (the contact points will now be along the sides of the new USB-C Yubikey). </li><li>The field should auto-populate with an 8 digit masked password. If it doesn&#39;t, remove the <b>YubiKey</b> and repeat <b>steps 4 and 5. </b></li><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <br><b>Or Salesforce Authenticator:  <br>*Please click <a href=\"https://concierge.it.salesforce.com/answers/3/How-to-Register-Salesforce-Authenticator\" target=\"_blank\">here </a>if you need to register your Salesforce Authenticator first</b> <ol start=\"4\"><li>Open your Salesforce Authenticator app on your Mobile phone. </li><li>Enter the <b>six-digit </b>passcode displayed on the Authenticator app in the <b>Answer </b>field of the <b>Anyconnect</b> application OR approve the push notification on your phone.</li></ol> <b>NOTE:</b> Please make sure there is enough time left on the Authenticator timer (the green circle) <ol start=\"6\"><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <b>If you are in an environment with a slow or poor connection speed (plane WiFi for example) and the 2FA push is slow/timing out, try the following.</b> <ol><li>Open Cisco AnyConnect</li><li>Select the most appropriate <b>Aloha</b> VPN connection and hit connect</li><li>Enter your <b>Salesforce username</b> and <b>SSO password</b> but right at the end of your password type /otp then hit enter</li><li>This will skip the 2FA push to your phone and immediately prompt you for the verification code, which you&#39;ll then enter manually from the mobile application.</li></ol> <br><br>You should now be connected to the VPN! <br><br>If you are having trouble connecting after following these steps, please log a ticket."
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "How to Connect to the <mark>VPN</mark> on Your Laptop"
              },
              "snippet": "Overview\nInstructions for connecting your laptop to the <mark>VPN</mark>"
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx0000000003AAA"
                },
                "Title": {
                  "displayValue": null,
                  "value": "How to Connect to the VPN on Your Laptop"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "help-desk-test-data-3"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "<b>Overview</b><br>Instructions for connecting your laptop to the VPN<br><br><b>Prerequisites</b> <ul><li>Be sure you are not wired in to the SFDC network.</li><li>A registered <a href=\"https://concierge.it.salesforce.com/search/aloha%20yubikey/results/detail/a02o000000CiiENAAZ\" target=\"_blank\">Aloha YubiKey</a> or <a href=\"https://concierge.it.salesforce.com/search/salesforce%20authenticator/results/detail/a02o000000CiiE4AAJ\" target=\"_blank\">Salesforce Authenticator</a> installed and registered. </li></ul> <b>Steps</b> <ol><li>Open the <b>Cisco Anyconnect</b> application. If you have trouble finding the application, use the <b>Spotlight</b> search (magnifying glass on the top right) on a Mac and the <b>Start Menu</b> for Windows to search for the application. The best connection for your region should be automatically selected. If it is not then from the dropdown menu, look for the <b>aloha-</b> connection for your region. <ul><li><b>AMER EAST</b> - https://vpn-east-1.corp.salesforce.com/iamvpn</li><li><b>AMER WEST</b> - https://vpn-amer1.corp.salesforce.com/iamvpn</li><li><b>EMEA</b> - ​https://vpn-emea1.corp.salesforce.com/iamvpn</li><li><b>APAC</b> - ​https://vpn-apj.corp.salesforce.com/iamvpn</li><li><b>APAC-IND </b>- https://vpn-apj1.corp.salesforce.com/iamvpn</li></ul> </li><li>Enter your <b>Salesforce username (not email address) </b>and <b>SSO </b><b>password</b></li></ol>​<br><b>If using Aloha YubiKey:</b> <ol start=\"4\"><li>Insert your <b>Aloha YubiKey</b> into an empty USB slot and ensure the <b>green light</b> is lit. (if you have a new USB-C yubikey it will work either way and two green lights on the key will light up when connected properly)</li><li>Make sure your cursor is in the <b>Answer </b>field of the <b>Anyconnect</b> application. Place your thumb or finger on the <b>gold disc of the YuibKey</b> for about <b>a second,</b> and release (the contact points will now be along the sides of the new USB-C Yubikey). </li><li>The field should auto-populate with an 8 digit masked password. If it doesn&#39;t, remove the <b>YubiKey</b> and repeat <b>steps 4 and 5. </b></li><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <br><b>Or Salesforce Authenticator:  <br>*Please click <a href=\"https://concierge.it.salesforce.com/answers/3/How-to-Register-Salesforce-Authenticator\" target=\"_blank\">here </a>if you need to register your Salesforce Authenticator first</b> <ol start=\"4\"><li>Open your Salesforce Authenticator app on your Mobile phone. </li><li>Enter the <b>six-digit </b>passcode displayed on the Authenticator app in the <b>Answer </b>field of the <b>Anyconnect</b> application OR approve the push notification on your phone.</li></ol> <b>NOTE:</b> Please make sure there is enough time left on the Authenticator timer (the green circle) <ol start=\"6\"><li>Click <b>Continue</b>.</li><li>Accept the pop-up <b>banner</b>.</li></ol> <b>If you are in an environment with a slow or poor connection speed (plane WiFi for example) and the 2FA push is slow/timing out, try the following.</b> <ol><li>Open Cisco AnyConnect</li><li>Select the most appropriate <b>Aloha</b> VPN connection and hit connect</li><li>Enter your <b>Salesforce username</b> and <b>SSO password</b> but right at the end of your password type /otp then hit enter</li><li>This will skip the 2FA push to your phone and immediately prompt you for the verification code, which you&#39;ll then enter manually from the mobile application.</li></ol> <br><br>You should now be connected to the VPN! <br><br>If you are having trouble connecting after following these steps, please log a ticket."
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 991"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G8AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 991"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-991"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 990"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G7AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 990"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-990"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 989"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G6AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 989"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-989"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 988"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G5AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 988"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-988"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 987"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G4AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 987"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-987"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 986"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G3AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 986"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-986"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 985"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G2AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 985"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-985"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 984"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G1AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 984"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-984"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 983"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000G0AAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 983"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-983"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 982"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FzAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 982"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-982"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 981"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FyAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 981"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-981"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 980"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FxAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 980"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-980"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 979"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FwAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 979"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-979"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 978"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FvAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 978"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-978"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 977"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FuAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 977"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-977"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          },
          {
            "highlightInfo": {
              "fields": {
                "Title": "<mark>VPN</mark> Test 976"
              },
              "snippet": null
            },
            "record": {
              "fields": {
                "Id": {
                  "displayValue": null,
                  "value": "ka0xx00000000FtAAI"
                },
                "Title": {
                  "displayValue": null,
                  "value": "VPN Test 976"
                },
                "PublishStatus": {
                  "displayValue": "Published",
                  "value": "Online"
                },
                "Language": {
                  "displayValue": "English",
                  "value": "en_US"
                },
                "UrlName": {
                  "displayValue": null,
                  "value": "vpn-related-article-976"
                },
                "Body__c": {
                  "displayValue": null,
                  "value": "Must associate a topic later on"
                }
              }
            },
            "searchInfo": {
              "promoted": false,
              "spellCorrected": false
            }
          }
        ],
        "themeInfo": {
          "color": "F2CF5B",
          "iconUrl": "https://coffee-beans-5045-dev-ed.my.localhost.sfdcdev.salesforce.com:6101/img/icon/t4v35/custom/custom55_60.png"
        }
      }
    ]
  },
  "naturalLanguageAnswer": null,
  "qnaAnswer": null,
  "query": "issue",
  "queryId": "-1ss12c5grancx"
};