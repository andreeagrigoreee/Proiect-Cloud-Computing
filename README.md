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





