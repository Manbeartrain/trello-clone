const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage', pills: [{pillName: 'Pill One', pillColor: 'tomato'}, {pillName: 'Pill Two', pillColor: 'lightgreen'}] },
        'task-2': { id: 'task-2', content: 'Watch my favorite show', pills: [{pillName: 'Pill Two', pillColor: 'lightgreen'}]  },
        'task-3': { id: 'task-3', content: 'Charge my phone', pills: [{pillName: 'Pill Three', pillColor: 'magenta'}] },
        'task-4': { id: 'task-4', content: 'Feed the dawgs', pills: [{pillName: 'Pill Four', pillColor: 'indigo'}] },
        'task-5': { id: 'task-5', content: 'Cook dinner', pills: [{pillName: 'Pill Five', pillColor: 'dodgerblue'}] }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do', 
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress', 
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done', 
            taskIds: [],
        }
    },

    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;