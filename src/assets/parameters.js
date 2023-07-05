export const parametersFields = [
    {
        name: 'height',
        title: 'Height',
        type: 'number',
        placeHolder: 'Your height in cm',
        obligatorio: true,
        requirements: {
            required: true,
            max: 250,
            min: 100
        }
    },
    {
        name: 'weight',
        title: 'Weight',
        type: 'number',
        placeHolder: 'Your weight in kg',
        obligatorio: true,
        requirements: {
            required: true,
            max: 200,
            min: 40
        }
    },
    {
        name: 'age',
        title: 'Age',
        type: 'number',
        placeHolder: 'Your age',
        obligatorio: true,
        requirements: {
            required: true,
            max: 100,
            min: 10
        }
    },
    {
        name: 'gender',
        title: 'Gender',
        type: 'options',
        placeHolder: 'Select gender',
        options:[
            {
                title: 'Male',
                value: 'male'
            },
            {
                title: 'Female',
                value: 'female'
            },
            {
                title: 'Not binary',
                value: null
            },
            {
                title: 'Prefer not to say',
                value: null
            }
        ],
        obligatorio: true,
        requirements: {
            required: true
        }
    },
    {
        name: 'exercise',
        title: 'Amount of exercise per week',
        type: 'options',
        placeHolder: 'Amount according to OSHA',
        options:[
            {
                title: 'Little',
                value: 'little'
            },
            {
                title: 'Light',
                value: 'light'
            },
            {
                title: 'Moderate',
                value: 'moderate'
            },
            {
                title: 'Heavy',
                value: 'heavy'
            },
            {
                title: 'Very heavy',
                value: 'veryheavy'
            }
        ],
        obligatorio: true,
        requirements: {
            required: true
        }
    },
    {
        name: 'neck',
        title: 'Neck circumference',
        type: 'number',
        placeHolder: 'Neck circumference in cm',
        obligatorio: false,
        requirements: {
            required: false,
            max: 100,
            min: 10
        }
    },
    {
        name: 'hip',
        title: 'Hip circumference',
        type: 'number',
        placeHolder: 'Hip circumference in cm',
        obligatorio: false,
        requirements: {
            required: false,
            max: 200,
            min: 60
        }
    },
    {
        name: 'waist',
        title: 'Waist circumference',
        type: 'number',
        placeHolder: 'Waist circumference in cm',
        obligatorio: false,
        requirements: {
            required: false,
            max: 200,
            min: 40
        }
    },
    {
        name: 'goal',
        title: 'Goal',
        type: 'options',
        placeHolder: 'Goal to evaluate the needed Kcal',
        options:[
            {
                title: 'Moderate fat loss',
                value: 'fatloss_moderate'
            },
            {
                title: 'Aggressive fat loss',
                value: 'fatloss_aggressive'
            },
            {
                title: 'Reckless fat loss',
                value: 'fatloss_reckless'
            },
            {
                title: 'Maintenance',
                value: 'maintenance'
            },
            {
                title: 'Slow bulking',
                value: 'bulking_slow'
            },
            {
                title: 'Normal bulking',
                value: 'bulking_normal'
            },
            {
                title: 'Aggressive bulking',
                value: 'bulking_aggressive'
            }
        ],
        obligatorio: true,
        requirements: {
            required: true
        }
    },
    {
        name: 'deficit',
        title: 'Deficit',
        type: 'number',
        placeHolder: 'Deficit',
        obligatorio: false,
        requirements: {
            required: false,
            max: 10000
        }
    },
    {
        name: 'goalWeight',
        title: 'Goal weight',
        type: 'number',
        placeHolder: 'Your goal weight in kg',
        obligatorio: false,
        requirements: {
            required: false,
            max: 200,
            min: 40
        }
    }
]