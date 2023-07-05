
import { calculationsCards, coreCards, inferiorCards, liftingGroupsCards, nutritionCards, superiorCards, trainingCards } from "./cards";


export const pages = {
        training: {
            img: '/img/fitness1.jpg',
            title: 'WELCOME TO OUR TRAINING ROUTINE PLACE',
            text: 'Please, choose the training way you like the most:',
            cards: trainingCards
        },
        parameters:{
            img: '/img/fitness2.jpg',
            title: 'COMMING SOON...',
            text: 'Parameters calculator tool under construction.',
            cards: calculationsCards
        },
        globalNews:{
            img: '/img/fitness3.jpg',
            title: 'COMMING SOON...',
            text: 'Global news under construction.',
            cards: []
        },
        knowledgeHub:{
            img: '/img/fitness4.jpg',
            title: 'COMMING SOON...',
            text: 'Knowledge hub under construction.',
            cards: []
        },
        nutrition:{
            img: '/img/health7.jpg',
            title: 'WELCOME TO OUR NUTRITION PLACE',
            text: 'Please, choose a card to learn more:',
            cards: nutritionCards
        },
        wellness:{
            img: '/img/fitness1.jpg',
            title: 'COMMING SOON...',
            text: 'Welness site under construction.',
            cards: []
        },
        peopleDirectory: {
            img: '/img/fitness1.jpg',
            title: 'COMMING SOON...',
            text: 'People directory site under construction.',
            cards: []
        }
}

export const liftingCategories = {
    superior:{
        title: 'Superior training',
        cards: superiorCards
    },
    inferior:{
        title: 'Inferior training',
        cards: inferiorCards
    },
    core:{
        title: 'Core training',
        cards: coreCards
    }
}

export const cards = {
    weightLifting:{
        title: 'Weight Lifting',
        text: 'Please, choose the training way you like the most:',
        img: '/img/fitness3.jpg',
        categories: liftingGroupsCards
    },
    yoga:{
        title: 'Yoga',
        text: 'Please, choose the yoga category you like the most:',
        img: '/img/yoga2.jpg',
    },
    funcional:{
        title: 'Funcional',
        text: 'Comming soon. Site under construction',
        img: '/img/yoga2.jpg',
    },
    cardio:{
        title: 'Cardio',
        text: 'Comming soon. Site under construction',
        img: '/img/yoga2.jpg',
    },
    balancedRecipes:{
        title: 'Balanced Recipes',
        text: 'Comming soon. Site under construction',
        img: '/img/yoga2.jpg',
    },
    nutrition:{
        title: 'Nutrition',
        text: 'Comming soon. Site under construction',
        img: '/img/yoga2.jpg',
    },
    healthyHabits:{
        title: 'Healthy Habits',
        text: 'Comming soon. Site under construction',
        img: '/img/yoga2.jpg',
    },
    calculation:{
        title: 'Calculation',
        text: 'Insert the requested values to compute many things as your Body Mass Index (BMI), your Body Fat Percetage (BFP), food energy and the list is growing!',
        img: '/img/balanza.jpg',
    }
}