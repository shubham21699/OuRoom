
### Project Overview 

### Introduction:
There are numerous products available that allow for real-time “messaging” over the Internet. This project aims to implement a NodeJS based team collaboration messaging application that will control profanity and protect user data. At the same time, they connect users with an internet connection to engage in conversation securely and anonymously. The development of this project centered on the idea of a messaging platform that will allow the application user to properly log in, send messages during short interacting sessions like in customer support.

#### Problem Introduction:
1. There are many messaging applications present on the internet. Still, thy, which save and track our message history and then sell collected data to advertisers’ targe, ted ads which make some people insecure and uncomfortable in certain situations like Whatsapp, Lenskart, and policy bazaar which in turn bombard us with theirs. <br />
2. Some websites like Dominos, Facebook which save user data like phone no, email-ids, and passwords, are prone to a data breach in which the attackers steal precious data. <br />
3. Sometimes people face online bullying in terms of profane language or maybe because auto-correct/ mistyping leads to some undesirable words inclusion into the message that to be unsent, which may be uncalled for according to the situation. <br />
4. Existing video-calling solutions offer screen sharing but entail audio and video lags, or users may have to switch platforms if a user shares some video link.

#### Product Scope:
1. Broadcasting Messaging Application will be a text communication software, and it will be able to communicate between two computers using point-to-point existing user’s communication. <br />
2. The limitation of Live video calling is that it suffers from buffering while sharing a youtube video, and there is no in-app feature to play the video. To overcome this limitation, we are concurrently working on developing an in-app video streaming player. <br />
3. IT- Companies would like to have communication software to communicate instantly within their organization, providing them with a safety filter of profanity. <br />
4. The application will be available in PWA(progressive web app) format enabling people with basic phones to utilize online standard room messaging service.

#### Intended Audience and Reading Suggestions
This document is intended for software developers, testers, project managers, users, and the customer to understand the project’s purpose, operation, and requirements. The specific intentions for the various readers and the suggested reading sequences are the
following:
1. Product Manager - Understand the use and requirements of the product to help guide the development of the said product. <br />
2. Developers – Understand the requirement of the product and guidance to the implementation of the requirements. <br />
3. Testers - To understand the purpose, requirements and find bugs of the product to guarantee the proper functioning. <br />
4. Programmers who are interested in working on the project by further developing it or fixing existing bugs.
The Overall Description part of this SRS gives an outlook of the functionality of the Ourooms. It conveys the informal requirements and is used to establish a context for the technical requirements specification. Requirements Specification sections of this document are written primarily for the developers and describe in technical terms the details of the functionality of the product.
     
### Overall Description 
#### Project Perspective:
1. There is two-way communication between different clients and servers. Users can use this messaging application for group discussion via a group Room name. It allows users to find other logged-in users in that room. <br />
2. No need for an email address: Existing system requires a user to go through a login system which is overwhelming sometimes for short interactions or for those who are not so good with technology; whereas in the proposed system user only need a room name and a user name which will be displayed as its name in conversation. This system is helpful for those in schools, colleges, small companies, etc. <br />
3. Live location: Live location provided through Geolocation API defines a high-level interface to location information associated only with the device hosting the implementation. Familiar sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi, and Bluetooth MAC addresses, and GSM/CDMA cell IDs, as well as user input. <br />
4. Data transfer: Users can share a certain amount of data within the room as per the free tier with a feature of destroying data transfer after closing of messaging space. Moreover, not all messages are meant to live forever, or at least that's the idea behind Vanish Mode, which lets you send temporary, self-destructing messages. It's like Snapchat's self-erasing messages and only takes effect when you manually turn it on; otherwise, your messages are as permanent as ever. Vanish Mode is a relatively new feature that debuted for Instagram users in late 2020. <br />
5. PWA: Users can add it to the main screen of their smartphones. PWAs can send push notifications, access the hardware of the mobile device, and in an unstable connection. Gartner predicts that PWAs will replace 69% of mobile apps by 2025.

#### Constraints:
1. The application supports only limited data transfer. <br />
2. The profanity filter as of now works only on English text. <br />
3. The system needs to be permanently connected to the internet. <br />
4. Limited users are allowed on the free server as of now. <br />


#### Product Functions:
1. There is two-way communication between different clients and servers. <br />
2. This Messaging application can be used for group discussion with profanity filter, Real-time location sharing, Embedded Media player. <br />
3. It allows users to find other logged-in users. <br />

#### Assumption and dependencies:
1. There should be LAN or internet connection. <br />
2. Clients should know each other. <br />
3. There can be multiple clients. <br />
4. The user has accepted all the permissions required to use the app. <br />
5. Location services may be required. <br />
6. The system must provide a capacity for parallel operation, period accessible, and system design should not introduce scalability issues about the number of surface computers, tablets, or mobile displays connected at any one time. <br />
7. The central database server and backup database servers should be updated regularly. This updating and replication of data from the main database server to the backup database server can introduce additional latency in the working of the system.

### Analysis Phase :-
#### Use Case Diagram:
<p align="center"> 
<img align="center" width="718" alt="Screenshot 2021-12-25 at 1 20 33 PM" src="https://user-images.githubusercontent.com/71596140/147380294-bbf56a61-3105-4bb6-a564-4770e8991825.png"> 
</p>
<p align="center"> Figure 1. This use case model shows us how the client interacts with the server and starts communicating with other clients. </p>

#### Activity diagram and Swimlane Diagrams:
Activity Diagrams consist of activities, states, and transitions between activities and states which describe how activities are coordinated to provide a service, such as, a . how the events in a single-use case a that are related to one another, or how a collection of use cases coordinate to create a workflow for any organization.
<br />
<br />
<p align="center"> 
<img align="center" width="497" alt="Screenshot 2021-12-25 at 1 21 25 PM" src="https://user-images.githubusercontent.com/71596140/147380306-3f93cba3-9a21-4b7a-9278-b023fa7fff41.png"> 
</p>
<p align="center"> Figure 2. Activity diagram </p>

#### Data Flow Diagrams (DFDs):
The purpose of a DFD is to show the scope and boundaries of a system as a whole. It may be used as a communications tool between a systems analyst and any person who plays a part in the system that acts as the starting point for redesigning a system.

###### DFD Level 0
<p align="center"> 
<img width="635" alt="Screenshot 2021-12-25 at 1 22 10 PM" src="https://user-images.githubusercontent.com/71596140/147380317-92caf51c-009f-471a-9e1d-75dff8abddd5.png"> 
</p>
<p align="center"> Figure 3. DFD Level 0 </p>

###### DFD Level 1
<p align="center"> 
<img width="548" alt="Screenshot 2021-12-25 at 1 22 36 PM" src="https://user-images.githubusercontent.com/71596140/147380321-78b6b99a-212b-418e-8644-cde3b794e29c.png"> 
</p>
<p align="center"> Figure 4. DFD Level 1 </p>

###### DFD Level 2
<p align="center"> 
<img width="615" alt="Screenshot 2021-12-25 at 1 23 18 PM" src="https://user-images.githubusercontent.com/71596140/147380330-45e13bc3-d592-453d-9031-acb3e6e5f647.png"> 
</p>
<p align="center"> Figure 5. DFD Level 2 </p>

#### Gantt Chart:
<p align="center"> 
<img width="675" alt="Screenshot 2021-12-25 at 1 23 43 PM" src="https://user-images.githubusercontent.com/71596140/147380336-c3a4d350-2c45-4046-b2a5-8cd4dd71c3e0.png"> 
</p>
<p align="center"> Figure 6. Gantt chart showing the time period for the project </p>


#### Work Breakdown Structure:
<p align="center"> 
<img width="638" alt="Screenshot 2021-12-25 at 1 24 00 PM" src="https://user-images.githubusercontent.com/71596140/147380340-96a29487-6346-4d98-a6a3-c60c1b3a33bf.png"> 
</p>
<p align="center"> Figure 7. Work Breakdown structure showing team's work into manageable sections </p>
 
### Design Phase
#### Class Diagram:
The purpose of a class diagram is to model the static view of an application. Class diagrams are the only ones that can be directly mapped with object-oriented languages and thus are widely used in construction. The class diagram describes a class’s attributes and operations and the constraints imposed on the system. The class diagrams are commonly used in object-oriented systems because they are the only UML diagrams that can be mapped directly with object-oriented languages.
<br />
<br />
<p align="center"> 
 <img width="694" alt="Screenshot 2021-12-25 at 1 29 17 PM" src="https://user-images.githubusercontent.com/71596140/147380405-ce56e987-ddfb-4a66-90e6-9de29ce376ac.png"> 
</p>
 <p align="center"> Figure 8. Class Diagram </p>

#### Sequence Diagram:
Sequence Diagrams aims to capture the interaction that takes place in a collaboration that either realizes a use case or an operation (instance diagrams or generic diagrams) and high-level interactions between the user of the system and the system, between the system and other systems, or between subsystems (sometimes known as system sequence diagrams).
<br />
<br />
<p align="center"> 
<img width="697" alt="Screenshot 2021-12-25 at 1 29 37 PM" src="https://user-images.githubusercontent.com/71596140/147380408-13f8895a-beff-4d47-911f-ec762f90d364.png">
</p>
<p align="center"> Figure 9. Sequence Diagram of Messaging application using sockets. </p>


#### Collaboration Diagram:
A collaboration diagram shows the relationships among the objects. Sequence diagrams and collaboration diagrams express similar information but show it in different ways. They tend to be better suited to depict simpler interactions of smaller numbers of objects. However, if the number of objects and messages grows, the diagram becomes increasingly hard to read. In addition, it is difficult to show additional descriptive information such as timing, decision points, or other unstructured data that can be easily added to the notes in a sequence diagram.
<br />
<br />
<p align="center"> 
 <img width="664" alt="Screenshot 2021-12-25 at 1 30 00 PM" src="https://user-images.githubusercontent.com/71596140/147380416-88a56e98-a390-46f0-8ee7-e7008948649c.png"> 
</p>
<p align="center"> Figure 10. Collaboration Diagram </p>


#### E-R Diagram:
<p align="center"> 
<img width="670" alt="Screenshot 2021-12-25 at 1 30 20 PM" src="https://user-images.githubusercontent.com/71596140/147380424-988918cb-5951-4947-879f-d98610f9817c.png"> 
</p>
<p align="center"> Figure 11. ER diagram between Client and Server. </p>


#### State Chart Diagram:
Statechart diagram describes the flow of control from one state to another state. States are defined as a condition in which an object exists and it changes when some event is triggered. The most important purpose of the Statechart diagram is to model the lifetime of an object from creation to termination.
<br />
<br />
<p align="center"> 
 <img width="637" alt="Screenshot 2021-12-25 at 1 30 38 PM" src="https://user-images.githubusercontent.com/71596140/147380428-ce23c035-d99f-45b0-a3d0-2eab3d266811.png"> 
</p>
<p align="center"> Figure 12. State Chart Diagram </p>


### Implementation
#### Component Diagram:
A component diagram breaks down the actual system under development into various high levels of functionality. Each component is responsible for one clear aim within the entire system and only interacts with other essential elements on a need-to-know basis.
<br />
<br />
<p align="center"> 
<img width="666" alt="Screenshot 2021-12-25 at 1 31 12 PM" src="https://user-images.githubusercontent.com/71596140/147380432-bf17138c-b987-45ae-9046-f333431fc30e.png"> 
</p>
<p align="center"> Figure 13. Component Diagram </p>


#### Deployment Diagram:
A deployment diagram is a diagram that shows the configuration of run-time processing nodes and the components that live on them. Deployment diagrams are a kind of structure diagram used in modeling
the physical aspects of an object-oriented system. They are often be used to model the static deployment view of a system (topology of the hardware).
<br />
<br />
<p align="center"> 
<img width="637" alt="Screenshot 2021-12-25 at 1 31 51 PM" src="https://user-images.githubusercontent.com/71596140/147380437-550d246e-cee0-4cfc-9a7f-be86b5f85ae4.png"> 
</p>
<p align="center"> Figure 14. Deployment Diagram </p>

## WebApp View:

### Desktop View:

![WhatsApp Image 2021-12-06 at 8 27 27 PM](https://user-images.githubusercontent.com/71596140/147381377-f8f4249b-0f28-4c24-af0a-16f7bc59ec8e.jpeg)
<p align="center"> Figure 15. Login Page </p>
<br />

![WhatsApp Image 2021-12-06 at 8 50 45 PM](https://user-images.githubusercontent.com/71596140/147381354-095a8944-96d9-419b-9891-3488a5e2c1cb.jpeg)
<p align="center"> Figure 16. User 1(Shubham) has created the room as an admin and User 2 (Gautam) has joined it. </p>
<br />

![WhatsApp Image 2021-12-06 at 8 29 28 PM](https://user-images.githubusercontent.com/71596140/147381407-b6b0cf24-8da9-467f-b379-5bf9ee5147c2.jpeg)
<br />

![WhatsApp Image 2021-12-06 at 8 29 47 PM](https://user-images.githubusercontent.com/71596140/147381413-9c14418c-0bfe-480e-8596-27f95969c263.jpeg)
<p align="center"> Figure 17. User 1 sends messages and locations and while receiving messages simultaneously. </p>
<br />

<p align="center"> 
<img width="721" alt="Screenshot 2021-12-25 at 1 43 07 PM" src="https://user-images.githubusercontent.com/71596140/147380661-d4c48205-376a-4e84-94f8-fa6efc00fe89.png">
</p>
<p align="center"> Figure 18. Illustrating the working of Profanity API by censoring foul words. </p>
<br />

![WhatsApp Image 2021-12-06 at 8 33 07 PM](https://user-images.githubusercontent.com/71596140/147381447-dd10b24c-1af6-492d-afb6-e1f4437eed08.jpeg)
<br />

![WhatsApp Image 2021-12-06 at 8 33 39 PM](https://user-images.githubusercontent.com/71596140/147381452-50b22684-1a83-48ea-b045-6b035625833a.jpeg)
<p align="center"> Figure 19. Media playing. </p>
<br />

![WhatsApp Image 2021-12-06 at 8 52 47 PM](https://user-images.githubusercontent.com/71596140/147381468-81550fa2-3308-4b5d-bdde-ba57080772a6.jpeg)
<br />
![WhatsApp Image 2021-12-06 at 8 53 07 PM](https://user-images.githubusercontent.com/71596140/147381471-f35d362e-63a4-4626-ace9-f84e78a11bd2.jpeg)
<p align="center"> Figure 20. File Sharing Functionality. </p>

### Mobile View:
![WhatsApp Image 2021-12-06 at 8 35 14 PM](https://user-images.githubusercontent.com/71596140/147381286-c61ee024-097a-4b25-ae30-d8e811e91075.jpeg)
<br />
<br />
![WhatsApp Image 2021-12-06 at 8 36 29 PM](https://user-images.githubusercontent.com/71596140/147381307-01b76ca1-09b7-4764-99ee-f0f6f898327e.jpeg)
<br />
<br />
![WhatsApp Image 2021-12-06 at 8 35 54 PM](https://user-images.githubusercontent.com/71596140/147381310-6c5f6de4-19d6-458b-bf3c-68a25cb30006.jpeg)

 
