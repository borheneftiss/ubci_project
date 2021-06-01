export interface User {
    User_Id: number;
    User_Name: string;
    User_LastName: string;
    User_Fonction: string;
    User_Email: string;
    Logo: string;
    DateNaissance: Date;
    Genre: string;
    Role: string;
    Etablissement: string;
    diplome: string;
    User_Telephone: string;
    Adresse: string;
    Ville: string;
    niveau: string;
    Specialite: string;
    disponibilite: string;
    langues: string; 
    experiences: string;
    Q1: string;
    Q2: string;
    Q3: string;
    Q4: string;
}

export interface Theme {
    rang: number;
    Theme_Id: number;
    Theme_Name: number;
}
export interface Questionnaire {
    Questionnaire_ID: number;
    Name: string;

}
export interface UserQuestionnairesForms {
    Questionnaire_ID: number;
    Description: string;
}
