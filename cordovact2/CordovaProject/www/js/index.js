/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    CleverTap.initializeInbox();
}

document.getElementById("onuserlogin").addEventListener("click",Onuserlogin);
function Onuserlogin(){                          
    var stuff = ["bags", "shoes"];
    var profile = {
        'Name': 'Captain America',
        'Identity': '1000',
        'Email': 'captain@america.com',
        'Phone': '+9788445646',
        'stuff': stuff
    }
    
    CleverTap.onUserLogin(profile);
}
document.getElementById("EventData").addEventListener("click",EventData);
function EventData(){
    var eventData = {
        // Key:    Value
       'first': 'partridge',
       'second': 'turtledoves'
    }
    CleverTap.recordEventWithName('Cordova Event', eventData);
}
document.getElementById("ProfilePush").addEventListener("click",ProfilePush);
function ProfilePush(){
    var myStuff = ["bags", "shoes"];
    var props = {
        'Name': 'Captian America',                    // String
        'Identity': '1000',                    // String or number
        'Email': 'clevertap@gmail.com',                  // Email address of the user
        'Phone': '+9876543212',                   // Phone (with the country code, starting with +)
        'Gender': 'F',                             // Can be either M or F
        'DOB' : new Date('1992-12-22T06:35:31'),
        'MSG-email': false,                        // Disable email notifications
        'MSG-push': true,                          // Enable push notifications
        'MSG-sms': false,                          // Disable SMS notifications
        'MSG-whatsapp': true,                      // Enable WhatsApp notifications
        'Stuff': myStuff                           //Array of Strings for user properties
        
    }
    Clevertap.ProfilePush(props)
}
document.getElementById("charged").addEventListener("click",charged);
function charged(){
    var chargeDetails = { 'totalValue': 20, 
                      'category': 'books', 
                      'purchase_date': new Date()
                    }
    var items = [
    { 'title': 'book1', 'published_date': new Date('2010-12-12T06:35:31'), 'author': 'ABC' },
    { 'title': 'book2', 'published_date': new Date('2020-12-12T06:35:31'), 'author': 'DEF' },
    { 'title': 'book3', 'published_date': new Date('2000-12-12T06:35:31'), 'author': 'XYZ' }]

CleverTap.recordChargedEventWithDetailsAndItems(chargeDetails, items);
}
document.getElementById("inbox").addEventListener("click",onInboxCordova);
function onInboxCordova()
{
    CleverTap.showInbox({});
}
