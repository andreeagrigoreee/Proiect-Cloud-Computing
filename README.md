# Proiect-Cloud-Computing

## Introducere 

Cloud computing reprezintă disponibilitatea la cerere a resurselor sistemului informatic, în special stocarea datelor și puterea de calcul, fără a fi gestionată direct de către utilizator. Termenul este utilizat în general pentru a descrie centre de date disponibile pentru mulți utilizatori de pe Internet. Cloud-urile mari, predominant astăzi, au adesea funcții distribuite pe mai multe locații de pe serverele centrale. Dacă conexiunea la utilizator este relativ strânsă, poate fi desemnată un server margine.
In cadrul acestui proiect se vor utiliza servicii de cloud computing, demonstrand utilitatea acestora in realizarea unei aplicatii web. 

## Descrierea problemei

Aplicatia dezvoltata are ca scop trimiterea de mesaje catre un destinar a carui adresa de mail trebuie introdusa. Aceste mesaje pot fi traduse in una sau mai multe limbi straine, sau chiar toate care ne sunt listate. In acelasi timp, mesajele sunt stocate pentru ca ulterior sa fie afisate. 
Pentru stocarea acestor mesaje am folosit o baza de date in cloud, utilizand serviciul Google Cloud Platform. De asemenea pentru traducerea mesajelor am folosit serviciul Cloud Translation API din suita Google Cloud Platform. Transmiterea de mailuri a fost realizabila folosind serviciul Sendgrid.

## Descriere API

API-ul folosit pentru acest proiect este cel de la Google, Cloud Translation API, care permite integrarea traducerii de text intr-o aplicatie web. In aplicatie am folosit 2 functii mentionate in documentatia API-ului, respectiv functia detect, care primeste ca parametru un string, prin care se poate detecta limba in care e scris stringul primit ca input, si functia translate, avand 2 parametrii, un string si limba in care vrem sa fie tradus textul primit ca input. 

## Flux de date 

Metode HTTP utilizate sunt urmatoarele:
## GET
Selectarea tuturor mesajelor din baza de date 
![image](https://user-images.githubusercontent.com/72661360/168489838-3e3c9bd9-8da5-4ba8-b5e9-1524614ab6cd.png)
![image](https://user-images.githubusercontent.com/72661360/168489845-099b2afc-826c-4596-8668-63d078c6989f.png)

Selectarea unui mesaj dupa id 
![image](https://user-images.githubusercontent.com/72661360/168489851-63a7d023-f609-4eef-a6d2-38747b9981dd.png)
![image](https://user-images.githubusercontent.com/72661360/168489855-b0a1029c-c793-4b21-b33d-8f6e4530c999.png)

## DELETE
Stergerea unui mesaj dupa id 
![image](https://user-images.githubusercontent.com/72661360/168489866-6f623835-54e5-417d-a6c1-c7127ce52055.png)
![image](https://user-images.githubusercontent.com/72661360/168489867-c0ebef2c-d582-4f7d-a0a1-3b098f103610.png)
Putem observa ca mesajul cu id-ul 19 a fost sters din baza de date 
![image](https://user-images.githubusercontent.com/72661360/168489870-d1fc18d0-703b-4803-87a3-44e08cbfddb9.png)

## PUT 
Metoda utilizata pentru a actualiza un mesaj dupa id. 
![image](https://user-images.githubusercontent.com/72661360/168489916-3719016d-43dc-4229-9258-e968b4e2c15a.png)
![image](https://user-images.githubusercontent.com/72661360/168489921-321af5b6-af76-4b77-9193-eeeed834d320.png)
<img width="515" alt="image" src="https://user-images.githubusercontent.com/72661360/168489943-2a47bfc6-46be-4bf4-b256-3392cf3839d4.png">
Observam ca mesajul cu id-ul 2 a fost actualizat:
![image](https://user-images.githubusercontent.com/72661360/168489960-511e0712-a1fc-42f9-899a-8242a05954c8.png)

## POST 
Am folosit aceasta metoda pentru a introduce noi mesaje in baza de date:
![image](https://user-images.githubusercontent.com/72661360/168489979-973f2946-8e8c-4890-9b4f-37584eaa3974.png)
Putem observa ca ultimul mesaj este cel cu id-ul 18, asadar vom mai introduce un mesaj 
![image](https://user-images.githubusercontent.com/72661360/168489995-d814c052-6890-4b0d-a8e1-e8a1ff8bf4e9.png)
![image](https://user-images.githubusercontent.com/72661360/168490001-d5d03740-9730-44af-930b-6c3a7fb5d588.png)
Un nou mesaj cu id-ul 20 a fost introdus, deoarece cel cu id-ul 19 a fost sters la demostrarea metodei DELETE. 
![image](https://user-images.githubusercontent.com/72661360/168490008-f7460457-b827-470a-bf3a-4a7574e4cfe9.png)
Front-endul aplicatiei, pagina de start 
![image](https://user-images.githubusercontent.com/72661360/168490017-d78e4be6-35bb-451a-9212-05e66490dd24.png)
Introducem numele expeditorului, adresa de email a destinatarului si mesajul pe care vrem sa-l traducem si sa-l trimitem
![image](https://user-images.githubusercontent.com/72661360/168490024-3c470876-af8a-4702-b7c8-daea2350127b.png)
Apasand butonul ALL, primim o alerta care ne transmite care a fost limba initiala a mesajului, cat si traducerile acestuia in toate limbile disponibile.
![image](https://user-images.githubusercontent.com/72661360/168490039-e6a8d8f9-3d0d-4fec-ac73-0181157a7f2c.png)
Dupa ce am dat refresh la aplicatie, putem observa ca baza de date a fost actualizata si ne este afisat ultimul mesaj transmis 
![image](https://user-images.githubusercontent.com/72661360/168490042-409ead70-f637-4e5b-a5c2-437643d45c09.png)
De asemenea, am primit pe mail mesajul trimis, tradus in toate limbile straine disponibile. 
![image](https://user-images.githubusercontent.com/72661360/168490052-9931a082-4399-4a4e-b13f-a4a2f479e190.png)

## Linkuri 
Github BackEnd: https://github.com/andreeagrigoreee/Proiect-Cloud-Computing-BackEnd
Github FrontEnd: https://github.com/andreeagrigoreee/Proiect-Cloud-Computing-FrontEnd
Deployment Heroku: https://salty-tundra-99023.herokuapp.com/
Youtube video: https://youtu.be/anjsxEUrVq0

