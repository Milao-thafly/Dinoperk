CREATE USER user_bdd WITH PASSWORD '1234';

CREATE DATABASE "Dinoperkiz"
    WITH
    OWNER = user_bdd
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


SHOW DATABASES;

SELECT datname
FROM pg_database
WHERE datname = 'dinoperkiz';



CREATE TABLE Dinosaures(
    id_dinosaures INT,
    Nom_commun VARCHAR(50) NOT NULL,
    Description VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_Dinosaures),
    UNIQUE(Nom_commun),
    UNIQUE(Description)
);

CREATE TABLE Type_de_billet(
    id_Type_de_billet INT,
    intitulé VARCHAR(50) NOT NULL,
    Tarif_unitaire DECIMAL(6,2)NOT NULL,
    Nbr_billet INT,
    PRIMARY KEY(id_Type_de_billet)
);

CREATE TABLE User_(
    id_User INT,
    User_name VARCHAR(100)NOT NULL,
    Email VARCHAR(100)NOT NULL,
    User_password VARCHAR(150)NOT NULL,
    Age DATE NOT NULL,
    Reservation INT,
    PRIMARY KEY(id_User),
    UNIQUE(User_name),
    UNIQUE(Email)
)

CREATE TABLE Admin(
   Id_Admin INT,
   Admin_password VARCHAR(255) NOT NULL,
   Admin_username VARCHAR(50) NOT NULL,
   PRIMARY KEY(Id_Admin),
   UNIQUE(Admin_username)
);

CREATE TABLE Reservation(
    id_reservation INT,
    Date_ DATE NOT NULL,
    Nbr_user INT,
    Nbr_billet INT,
    Prix DECIMAL(7,2) NOT NULL,
    id_User INT NOT NULL,
    PRIMARY KEY(id_Reservation),
    FOREIGN KEY(id_User) REFERENCES User_(id_User)
)

CREATE TABLE Asso_1(
   Id_Reservation INT,
   Id_Type_de_billet INT,
   Nbr_billet INT,
   PRIMARY KEY(Id_Reservation, Id_Type_de_billet),
   FOREIGN KEY(Id_Reservation) REFERENCES Reservation(Id_Reservation),
   FOREIGN KEY(Id_Type_de_billet) REFERENCES Type_de_billet(Id_Type_de_billet)
);

CREATE TABLE Asso_3(
   Id_Dinosaures INT,
   Id_Type_de_billet INT,
   PRIMARY KEY(Id_Dinosaures, Id_Type_de_billet),
   FOREIGN KEY(Id_Dinosaures) REFERENCES Dinosaures(Id_Dinosaures),
   FOREIGN KEY(Id_Type_de_billet) REFERENCES Type_de_billet(Id_Type_de_billet)
);

