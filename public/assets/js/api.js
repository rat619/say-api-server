/*chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security*/
$.get("http://localhost:8080/recherche/clients/9", function (reponse) {
    var clients = reponse; /*JSON.parse(reponse);*/
	var numero_client = document.getElementById("numero_client");
	var raison_sociale = document.getElementById("raison_sociale");
	var siret = document.getElementById("siret");
    numero_client.value=clients.numero_client;
	raison_sociale.value=clients.raison_sociale;
	siret.value=clients.siret;
    });
	
	
	$.post("http://localhost:8080/recherche/clients/", function (reponse) {
    var clients = reponse /* JSON.parse(reponse);*/
    clients.numero_client="102";
	clients.raison_sociale="SOPEMO";
	clients.siret="0123";
	clients.categorie="2";
	clients.etat="1";
	clients.cree_par="zao";
	clients.mail="mail@test.com";
	clients.modifie_par="zao";
	clients.cree_le="1529265515000";
	clients.modifie_le="1529265515000";
    });
	
	/*
	$.post("http://localhost:8080/recherche/clients/", function (reponse) {
    var clients = reponse 
	var numero_client = document.getElementById("numero_client");
	var raison_sociale = document.getElementById("raison_sociale");
	var siret = document.getElementById("siret");
    clients.numero_client=numero_client.value;
	clients.raison_sociale=raison_sociale.value;
	clients.siret=siret.value;
	clients.categorie=document.getElementById("categorie").value;
	clients.etat=document.getElementById("etat").value;
	clients.cree_par=document.getElementById("cree_par").value;
	clients.mail=document.getElementById("mail").value;
	clients.modifie_par=document.getElementById("modifie_par").value;
	clients.cree_le="1529265515000";
	clients.modifie_le="1529265515000";
    });
*/
	/*
	{"raison_sociale":"SOPEMO",
	"numero_client":"0101","
	categorie":"2",
	"etat":"1",
	"siret":"0123",
	"cree_par":"zao",
	"mail":"test@yahoo.fr",
	"modifie_par":"zao",
	"cree_le":"1529265515000",
	"modifie_le":"1529265515000"}
	*/
