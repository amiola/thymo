import { nutritionCards, superiorCards, trainingCards } from "./cards";

export const pages = {
        training: {
            img: 'img/fitness1.jpg',
            title: 'WELCOME TO OUR TRAINING ROUTINE PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: trainingCards
        },
        parameters:{
            img: 'img/fitness2.jpg',
            title: 'WELCOME TO OUR PARAMETERS PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: []
        },
        globalNews:{
            img: 'img/fitness3.jpg',
            title: 'WELCOME TO OUR GLOBAL NEWS PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: []
        },
        knowledgeHub:{
            img: 'img/fitness4.jpg',
            title: 'WELCOME TO OUR KNOWLEDGE HUB PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: []
        },
        nutrition:{
            img: 'img/health7.jpg',
            title: 'WELCOME TO OUR NUTRITION PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: nutritionCards
        },
        wellness:{
            img: 'img/fitness1.jpg',
            title: 'WELCOME TO OUR WELLNESS PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: []
        },
        peopleDirectory: {
            img: 'img/fitness1.jpg',
            title: 'WELCOME TO OUR TRAINING ROUTINE PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: []
        }
}

export const trainingPages = {
    superior:{
        title: 'Superior training',
        cards: superiorCards
    },
    inferior:{
        title: 'Inferior training',
        cards: []
    },
    core:{
        title: 'Core training',
        cards: []
    }
}