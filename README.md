
### Project Overview 

### Introduction:
There are numerous products available that allow for real-time “messaging” over the Internet. This project aims to implement a NodeJS based team collaboration messaging application that will control profanity and protect user data. At the same time, they connect users with an internet connection to engage in conversation securely and anonymously. The development of this project centered on the idea of a messaging platform that will allow the application user to properly log in, send messages during short interacting sessions like in customer support.

#### Problem Introduction:
● There are many messaging applications present on the internet. Still, thy, which save and track our message history and then sell collected data to advertisers’ targe, ted ads which make some people insecure and uncomfortable in certain situations like Whatsapp, Lenskart, and policy bazaar which in turn bombard us with theirs.
● Some websites like Dominos, Facebook which save user data like phone no, email-ids, and passwords, are prone to a data breach in which the attackers steal precious data.
● Sometimes people face online bullying in terms of profane language or maybe because auto-correct/ mistyping leads to some undesirable words inclusion into the message that to be unsent, which may be uncalled for according to the situation.
● Existing video-calling solutions offer screen sharing but entail audio and video lags, or users may have to switch platforms if a user shares some video link.

#### Product Scope:
● Broadcasting Messaging Application will be a text communication software, and it will be able to communicate between two computers using point-to-point Existing user’s communication.
● The limitation of Live video calling is that it suffers from buffering while sharing a youtube video, and there is no in-app feature to play the video. To overcome this limitation, we are concurrently working on developing an in-app video streaming player.
● IT- Companies would like to have communication software to communicate instantly within their organization, providing them with a safety filter of profanity.
● The application will be available in PWA(progressive web app) format enabling people with basic phones to utilize online standard room messaging service.
#### Intended Audience and Reading Suggestions
This document is intended for software developers, testers, project managers, users, and the customer to understand the project’s purpose, operation, and requirements. The specific intentions for the various readers and the suggested reading sequences are the
following:
● Product Manager - Understand the use and requirements of the product to help guide the development of the said product.
● Developers – Understand the requirement of the product and guidance to the implementation of the requirements.
● Testers - To understand the purpose, requirements and find bugs of the product to guarantee the proper functioning.
● Programmers who are interested in working on the project by further developing it or fixing existing bugs.
The Overall Description part of this SRS gives an outlook of the functionality of the Ourooms. It conveys the informal requirements and is used to establish a context for the technical requirements specification. Requirements Specification sections of this document are written primarily for the developers and describe in technical terms the details of the functionality of the product.

#### References:
● https://www.whoson.com/customer-service/when-chatters-attack-dealing-with-abusive-customers/
● https://www.manchestereveningnews.co.uk/news/greater-manchester-news/wigan-athletic-players-
abused-social-21436674
● https://www.entrepreneur.com/article/372681
● https://www.digitalinformationworld.com/2021/08/personalized-ads-are-irritating.html
     

### Overall Description 
#### Project Perspective:
● There is two-way communication between different clients and servers. Users can use this messaging application for group discussion via a group Room name. It allows users to find other logged-in users in that room.
● No need for an email address: Existing system requires a user to go through a login system which is overwhelming sometimes for short interactions or for those who are not so good with technology; whereas in the proposed system user only need a room name and a user name which will be displayed as its name in conversation. This system is helpful for those in schools, colleges, small companies, etc.
● Live location: Live location provided through Geolocation API defines a high-level interface to location information associated only with the device hosting the implementation. Familiar sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi, and Bluetooth MAC addresses, and GSM/CDMA cell IDs, as well as user input.
● Data transfer: Users can share a certain amount of data within the room as per the free tier with a feature of destroying data transfer after closing of messaging space. Moreover, not all messages are meant to live forever, or at least that's the idea behind Vanish Mode, which lets you send temporary, self-destructing messages. It's like Snapchat's self-erasing messages and only takes effect when you manually turn it on; otherwise, your messages are as permanent as ever. Vanish Mode is a relatively new feature that debuted for Instagram users in late 2020.
● PWA: Users can add it to the main screen of their smartphones. PWAs can send push notifications, access the hardware of the mobile device, and in an unstable connection. Gartner predicts that PWAs will replace 69% of mobile apps by 2025.

#### Constraints:
● The application supports only limited data transfer.
● The profanity filter as of now works only on English text.
● The system needs to be permanently connected to the internet.
● Limited users are allowed on the free server as of now.


#### Product Functions:
● There is two-way communication between different clients and servers.
● This Messaging application can be used for group discussion with profanity filter, Real-time
location sharing, Embedded Media player.
● It allows users to find other logged-in users.
1.3.4 Assumption and dependencies:
● There should be LAN or internet connection.
● Clients should know each other.
● There can be multiple clients.
● The user has accepted all the permissions required to use the app.
● Location services may be required.
● The system must provide a capacity for parallel operation, period accessible, and system design should not introduce scalability issues about the number of surface computers, tablets, or mobile displays
connected at any one time.
● The central database server and backup database servers should be updated regularly. This updating and replication of data from the main database server to the backup database server can introduce additional latency in the working of the system.

### Analysis Phase :-
#### Use Case Diagram:
<img width="718" alt="Screenshot 2021-12-25 at 1 20 33 PM" src="https://user-images.githubusercontent.com/71596140/147380294-bbf56a61-3105-4bb6-a564-4770e8991825.png">
Figure 1: This use case model shows us how the client interacts with the server and starts communicating with other clients.

#### Activity diagram and Swimlane Diagrams:
Activity Diagrams consist of activities, states, and transitions between activities and states which describe how activities are coordinated to provide a service, such as, a . how the events in a single-use case a that are related to one another, or how a collection of use cases coordinate to create a workflow for any organization.
<img width="497" alt="Screenshot 2021-12-25 at 1 21 25 PM" src="https://user-images.githubusercontent.com/71596140/147380306-3f93cba3-9a21-4b7a-9278-b023fa7fff41.png">
Figure 2: Activity diagram.

#### Data Flow Diagrams (DFDs):
The purpose of a DFD is to show the scope and boundaries of a system as a whole. It may be used as a communications tool between a systems analyst and any person who plays a part in the system that acts as the starting point for redesigning a system.

###### DFD Level 0
<img width="635" alt="Screenshot 2021-12-25 at 1 22 10 PM" src="https://user-images.githubusercontent.com/71596140/147380317-92caf51c-009f-471a-9e1d-75dff8abddd5.png">
Figure 3. DFD Level 0

###### DFD Level 1
<img width="548" alt="Screenshot 2021-12-25 at 1 22 36 PM" src="https://user-images.githubusercontent.com/71596140/147380321-78b6b99a-212b-418e-8644-cde3b794e29c.png">
Figure 4. DFD Level 1

###### DFD Level 2
<img width="615" alt="Screenshot 2021-12-25 at 1 23 18 PM" src="https://user-images.githubusercontent.com/71596140/147380330-45e13bc3-d592-453d-9031-acb3e6e5f647.png">
 Figure 5. DFD Level 2

#### Gantt Chart:
 Figure 6: Gantt chart showing the time period for the project.
<img width="675" alt="Screenshot 2021-12-25 at 1 23 43 PM" src="https://user-images.githubusercontent.com/71596140/147380336-c3a4d350-2c45-4046-b2a5-8cd4dd71c3e0.png">


#### Work Breakdown Structure:
<img width="638" alt="Screenshot 2021-12-25 at 1 24 00 PM" src="https://user-images.githubusercontent.com/71596140/147380340-96a29487-6346-4d98-a6a3-c60c1b3a33bf.png">
 Figure 7: Work Breakdown structure showing team's work into manageable sections
 
 
 
